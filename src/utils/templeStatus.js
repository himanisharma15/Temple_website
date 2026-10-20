const PLACEHOLDER = /^\[(?:ADD FROM TEMPLE|VERIFY|TRANSLATE)\]/;

function toMinutes(value) {
  if (typeof value !== 'string' || PLACEHOLDER.test(value)) return null;
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
  return match ? Number(match[1]) * 60 + Number(match[2]) : null;
}

function istMinutes(now) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(now);
  return Number(parts.find((part) => part.type === 'hour')?.value) * 60
    + Number(parts.find((part) => part.type === 'minute')?.value);
}

export function getTempleStatus(timings = [], now = new Date()) {
  const parsed = timings.map((ritual) => ({
    ritual, start: toMinutes(ritual.start), end: toMinutes(ritual.end),
  })).filter(({ start, end }) => start !== null && end !== null);
  const current = istMinutes(now);
  const contains = ({ start, end }) => start <= end
    ? current >= start && current < end
    : current >= start || current < end;
  const currentSlot = parsed.find(contains);
  const future = parsed.map((item) => ({
    ...item, minutes: (item.start - current + 1440) % 1440,
  })).filter((item) => item.minutes > 0).sort((a, b) => a.minutes - b.minutes)[0];
  const nextRitual = future?.ritual || null;
  const base = { currentRitual: currentSlot?.ritual || null, nextRitual, minutesToNext: future?.minutes ?? null };
  if (currentSlot?.ritual.access === 'closed') return { ...base, status: 'closed', label: 'Temple closed (Pahada)' };
  if (currentSlot) return { ...base, status: 'ritual', label: `Now: ${currentSlot.ritual.name}` };
  return { ...base, status: 'unknown', label: 'Between rituals, timings to be confirmed' };
}
