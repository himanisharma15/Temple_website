import { siteData } from '../../data/site.data';

export const contactData = {
	eyebrow: 'Support desk',
	title: 'Contact & Helpdesk',
	intro: 'Need assistance? Visit our FAQ section or connect with us on our social media platforms.',
	mapQuery: siteData.location,
	hotlines: {
		phone: '+91 6755 123456',
		email: 'support@dhabaleswaramandir.in',
		hours: '6:00 AM - 9:00 PM (IST)',
		opens: '06:00',
		closes: '21:00'
	},
	follow: {
		text: 'Stay updated with daily rituals, events, festivals, and live webcasts.'
	},
	socials: [
		{ name: 'YouTube', icon: 'Youtube', url: siteData.socials.youtube },
		{ name: 'Instagram', icon: 'Instagram', url: siteData.socials.instagram },
		{ name: 'X', icon: 'Twitter', url: siteData.socials.x },
		{ name: 'Facebook', icon: 'Facebook', url: siteData.socials.facebook }
	],
	address: siteData.address,
	mapUrl: siteData.mapUrl,
	topics: ['Darshan & rituals', 'Seva booking', 'Donation', 'Festivals', 'Visit & directions', 'Other'],
	quickFaqs: [
		{ question: 'What are the helpdesk hours?', answer: '6:00 AM - 9:00 PM (IST)' },
		{ question: 'How do I book a seva?', answer: 'Choose a seva on the Darshan & Seva page and fill in your details.', href: '/darshan-seva' },
		{ question: 'How do I reach the temple?', answer: 'Visit the Visit Us page for directions.', href: '/visit' }
	]
};

export function isPlaceholder(value) {
	return !value || /^\[(?:ADD FROM TEMPLE|VERIFY)\]/i.test(String(value).trim());
}

export function getKolkataHelpdeskState(now = new Date()) {
	const parts = new Intl.DateTimeFormat('en-GB', {
		timeZone: 'Asia/Kolkata',
		hour: '2-digit',
		minute: '2-digit',
		hourCycle: 'h23'
	}).formatToParts(now);
	const hour = Number(parts.find((part) => part.type === 'hour')?.value);
	const minute = Number(parts.find((part) => part.type === 'minute')?.value);
	const currentMinutes = hour * 60 + minute;
	const openMinutes = clockMinutes(contactData.hotlines.opens);
	const closeMinutes = clockMinutes(contactData.hotlines.closes);
	const isOpen = openMinutes <= closeMinutes
		? currentMinutes >= openMinutes && currentMinutes < closeMinutes
		: currentMinutes >= openMinutes || currentMinutes < closeMinutes;

	return { isOpen, opensAt: formatClock(contactData.hotlines.opens) };
}

function clockMinutes(value) {
	const [hour, minute] = value.split(':').map(Number);
	return hour * 60 + minute;
}

function formatClock(value) {
	const [hour, minute] = value.split(':').map(Number);
	const suffix = hour >= 12 ? 'PM' : 'AM';
	const displayHour = hour % 12 || 12;
	return `${displayHour}:${String(minute).padStart(2, '0')} ${suffix}`;
}
