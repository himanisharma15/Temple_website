import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell, ChevronDown, Droplets, Flame, Footprints, Heart, Info, Lock, Mail, Moon, Phone, Shirt, Sparkles, Sunrise, Utensils, Users } from 'lucide-react';
import PageHero from '../../components/PageHero/PageHero';
import Button from '../../components/Button/Button';
import Placeholder from '../../components/Placeholder/Placeholder';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../i18n/LanguageContext';
import useReducedMotion from '../../hooks/useReducedMotion';
import { siteData } from '../../data/site.data';
import { getTempleStatus } from '../../utils/templeStatus';
import { accessLabels, darshanSevaData } from './darshanSeva.data';
import { darshanSevaI18n } from './darshanSeva.i18n';
import styles from './DarshanSeva.module.css';

const icons = { Bell, Droplets, Flame, Footprints, Heart, Lock, Moon, Shirt, Sparkles, Sunrise, Utensils, Users };
const marker = /^\[(?:ADD FROM TEMPLE|VERIFY|TRANSLATE)\]/;

function Value({ value, kind = 'add' }) {
  if (typeof value === 'string' && marker.test(value)) {
    const verify = value.startsWith('[VERIFY]');
    return <Placeholder kind={verify ? 'verify' : kind}>{value.replace(marker, '').trim()}</Placeholder>;
  }
  return value;
}

function CompactValue({ value, label, kind = 'add' }) {
  if (typeof value === 'string' && marker.test(value)) {
    return <Placeholder kind={value.startsWith('[VERIFY]') ? 'verify' : kind}>{label}</Placeholder>;
  }

  function Description({ value }) {
    return typeof value === 'string' && marker.test(value) ? <span className={styles.detailsChip}>Details coming soon</span> : value || <span className={styles.detailsChip}>Details coming soon</span>;
  }
  return value;
}

function LocalText({ language, value, label }) {
  return language === 'en' ? <Value value={value} /> : <Placeholder kind="translate">{label}</Placeholder>;
}

function Label({ language, name }) {
  const value = darshanSevaI18n[language]?.[name];
  return language === 'en' && value ? value : <Placeholder kind="translate">{darshanSevaI18n.en[name] || name}</Placeholder>;
}

function useLiveStatus(timings) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timer);
  }, []);
  return useMemo(() => getTempleStatus(timings, now), [timings, now]);
}

function countdown(minutes) {
  if (minutes === null || minutes === undefined) return null;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return hours ? `in ${hours} h ${remainder} min` : `in ${remainder} min`;
}

function StatusPill({ access, label }) {
  return <span className={`${styles.statusPill} ${styles[access]}`}><i />{label}</span>;
}

function Action({ ritual, expanded, onDetails }) {
  if (ritual.action === 'details') return <button className={styles.outlineButton} type="button" aria-expanded={expanded} aria-controls={`details-${ritual.id}`} onClick={onDetails}>View Details <ChevronDown className={expanded ? styles.rotate : ''} size={16} aria-hidden="true" /></button>;
  if (ritual.action === 'prasadam') return <Link className={styles.outlineButton} to="/seva-booking?seva=balabhoga-prasadam">Book Prasadam</Link>;
  if (ritual.action === 'book') return <Link className={styles.bookButton} to={`/seva-booking?seva=${encodeURIComponent(ritual.id)}`}>Book Slot</Link>;
  return <button className={styles.internalButton} type="button" disabled>Internal</button>;
}

function Schedule({ language, status }) {
  const [open, setOpen] = useState(null);
  return <div className={styles.schedule} role="table" aria-label="Daily rituals"><div className={styles.scheduleHeader} role="row"><span role="columnheader">Time Slot</span><span role="columnheader">Ritual Name</span><span role="columnheader">Status</span><span role="columnheader">Action</span></div>
    {darshanSevaData.timings.map((ritual) => {
      const Icon = icons[ritual.icon] || Bell;
      const expanded = open === ritual.id;
      const now = status.currentRitual?.id === ritual.id;
      const next = !now && status.nextRitual?.id === ritual.id;
      return <div className={`${styles.scheduleRow} ${ritual.featured ? styles.featured : ''}`} role="row" key={ritual.id}>
        <div className={styles.time} role="cell">{ritual.label}</div>
        <div className={styles.ritualName} role="cell"><Icon size={20} aria-hidden="true" /><h3>{ritual.name}</h3>{now && <b className={styles.nowChip}>Now</b>}{next && <b className={styles.nextChip}>Next</b>}</div>
        <div role="cell"><StatusPill access={ritual.access} label={accessLabels[ritual.access]} /></div>
        <div className={styles.action} role="cell"><Action ritual={ritual} expanded={expanded} onDetails={() => setOpen(expanded ? null : ritual.id)} /></div>
        {expanded && <div className={styles.details} id={`details-${ritual.id}`} role="cell"><Description value={ritual.description} /></div>}
      </div>;
    })}
  </div>;
}

function Sevas({ language, reducedMotion }) {
  return <div className={styles.sevaGrid}>{darshanSevaData.sevas.map((seva, index) => { const Icon = icons[seva.icon] || Heart; return <article className={styles.sevaCard} style={reducedMotion ? undefined : { '--delay': `${index * 60}ms` }} key={seva.slug}><span className={styles.iconCircle}><Icon size={22} aria-hidden="true" /></span><h3><CompactValue value={seva.name} label="Seva name" /></h3><p className={styles.sevaMeta}><CompactValue value={seva.slot} label="Slot" /> · <CompactValue value={seva.price} label="Price" /></p><p><CompactValue value={seva.description} label="Seva description" /></p><Link className={styles.bookButton} to={`/seva-booking?seva=${seva.slug}`}>Book seva</Link></article>; })}</div>;
}

function HelpCard() {
  const contacts = [
    { value: siteData.phone, icon: Phone, label: 'Call', href: `tel:${siteData.phone}` },
    { value: siteData.whatsapp, icon: Phone, label: 'WhatsApp', href: `https://wa.me/${siteData.whatsapp?.replace(/\D/g, '')}` },
    { value: siteData.email, icon: Mail, label: 'Email', href: `mailto:${siteData.email}` },
  ].filter(({ value }) => value && !value.startsWith('['));
  return <aside className={styles.helpCard}><Phone size={24} aria-hidden="true" /><h3>Need help?</h3>{contacts.length ? contacts.map(({ value, icon: Icon, label, href }) => <a href={href} key={label}><Icon size={18} aria-hidden="true" />{label}: {value}</a>) : <p>Contact details coming soon</p>}</aside>;
}

function TodayCard({ status, language }) {
  const label = status.status === 'unknown' ? 'Timings to be confirmed' : status.label;
  return <aside className={styles.todayCard}><h2><Label language={language} name="today" /></h2><div className={styles.statusLine}><span className={`${styles.statusDot} ${styles[status.status]}`} /><span aria-live="polite">{label}</span></div>{status.nextRitual && <p className={styles.nextLine}><strong>Next:</strong> <LocalText language={language} value={status.nextRitual.name} label="Next ritual" /> <span>{countdown(status.minutesToNext)}</span></p>}<Button to="/seva-booking"><Label language={language} name="book" /></Button></aside>;
}

function BookingSteps({ language }) {
  return <div className={styles.steps}>{(darshanSevaData.steps || []).map((step, index) => <div className={styles.step} key={step.title}><span>{index + 1}</span><h3><LocalText language={language} value={step.title} label="Booking step" /></h3><p><LocalText language={language} value={step.description} label="Booking step description" /></p></div>)}</div>;
}

function Tips({ language }) {
  return <div className={styles.tips}>{(darshanSevaData.tips || []).map((tip) => { const Icon = icons[tip.icon] || Shirt; return <div className={styles.tip} key={tip.label}><Icon size={21} aria-hidden="true" /><div><h3><LocalText language={language} value={tip.label} label="Visitor tip" /></h3><p><LocalText language={language} value={tip.text} label="Visitor tip guidance" /></p></div></div>; })}</div>;
}

export default function DarshanSeva() {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const status = useLiveStatus(darshanSevaData.timings);
  return <>
    <Helmet><title>Darshan &amp; Seva</title><meta name="description" content="Darshan timings and seva at Dhabaleswar Mandira." /></Helmet>
    <PageHero image="/images/image 3.png" imagePosition="center 40%" eyebrow={<Label language={language} name="eyebrow" />} title={<Label language={language} name="title" />} description={language === 'en' ? darshanSevaData.intro : <Placeholder kind="translate">Darshan introduction</Placeholder>}><Button to="/seva-booking"><Label language={language} name="book" /></Button></PageHero>
    <main className={styles.page}><div className={styles.layout}><div className={styles.mainColumn}>
      <ScrollReveal><section><h2>Daily Rituals</h2><Schedule language={language} status={status} /></section></ScrollReveal>
      <ScrollReveal><section><h2>Devotee Services</h2><Sevas language={language} reducedMotion={reducedMotion} /></section></ScrollReveal>
      {darshanSevaData.steps?.length > 0 && <ScrollReveal><section><h2>How booking works</h2><BookingSteps language={language} /></section></ScrollReveal>}
      {darshanSevaData.tips?.length > 0 && <ScrollReveal><section><h2>Visitor tips</h2><Tips language={language} /></section></ScrollReveal>}
    </div></div></main>
    <div className={styles.mobileBook}><Button to="/seva-booking"><Label language={language} name="book" /></Button></div>
  </>;
}
