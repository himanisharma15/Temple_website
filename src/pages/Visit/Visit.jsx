import { useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, CalendarDays, Camera, Circle, Copy, ExternalLink, Flower2, Footprints, MapPin, Phone, Share2, ShieldCheck, Shirt, Smartphone, TrainFront, Car, Plane, Utensils, Accessibility, Info, Waves, Users } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import useReducedMotion from '../../hooks/useReducedMotion';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Placeholder from '../../components/Placeholder/Placeholder';
import { getTempleStatus } from '../../utils/templeStatus';
import { darshanSevaData } from '../DarshanSeva/darshanSeva.data';
import { festivals as festivalPages } from '../Festivals/festivals.data';
import { siteData } from '../../data/site.data';
import { intro, address, reach, access, coordinates, rules, festivals, festivalNote, plan, nearby, facilities, stay, safety, accessibility } from './visit.data';
import { visitI18n } from './visit.i18n';
import styles from './Visit.module.css';

const placeholderPattern = /\[(VERIFY|ADD FROM TEMPLE|TRANSLATE)(?:[^\]]*)\]/g;
const purePlaceholderPattern = /^\[(VERIFY|ADD FROM TEMPLE|TRANSLATE)(?:[^\]]*)\]$/;
const icons = { Shirt, Footprints, Camera, Smartphone, Flower2, ShieldCheck, Waves, Users, Phone, Circle, road: Car, train: TrainFront, air: Plane };
const tabs = [['getting-here', 'visit.gettingHere'], ['before-you-go', 'visit.beforeYouGo'], ['nearby', 'visit.nearby']];
const missing = (value) => typeof value === 'string' && /^\[(ADD FROM TEMPLE|VERIFY|TRANSLATE)/.test(value);
const hasPlaceholder = (value) => typeof value === 'string' && /\[(VERIFY|ADD FROM TEMPLE|TRANSLATE)/.test(value);

function renderValue(value) {
  if (typeof value !== 'string' || !hasPlaceholder(value)) return value;
  if (purePlaceholderPattern.test(value)) {
    const match = value.match(purePlaceholderPattern);
    return <Placeholder kind={match[1] === 'ADD FROM TEMPLE' ? 'add' : match[1].toLowerCase()} />;
  }
  const leadingMatch = value.match(/^\[(VERIFY|ADD FROM TEMPLE|TRANSLATE)(?:[^\]]*)\]\s*/);
  if (leadingMatch) {
    const kind = leadingMatch[1];
    const detail = leadingMatch[0].slice(kind.length + 1, -1).trim();
    return <>{value.slice(leadingMatch[0].length)} <Placeholder kind={kind === 'ADD FROM TEMPLE' ? 'add' : kind.toLowerCase()}>{detail}</Placeholder></>;
  }
  const output = [];
  let lastIndex = 0;
  value.replace(placeholderPattern, (match, kind, offset) => {
    if (offset > lastIndex) output.push(value.slice(lastIndex, offset));
    const detail = match.slice(kind.length + 1, -1).trim();
    output.push(<Placeholder key={`${kind}-${offset}`} kind={kind === 'ADD FROM TEMPLE' ? 'add' : kind.toLowerCase()}>{detail}</Placeholder>);
    lastIndex = offset + match.length;
    return match;
  });
  if (lastIndex < value.length) output.push(value.slice(lastIndex));
  return output;
}

function festivalSlug(name) {
  const match = festivalPages.find((festival) => festival.titleKey?.toLowerCase().includes(name.toLowerCase().replace(/[\s-]/g, '')));
  return match?.slug;
}

export default function Visit() {
  const { language, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();
  const festivalScroller = useRef(null);
  const [activeTab, setActiveTab] = useState(new URLSearchParams(location.search).get('tab') || 'getting-here');
  const [copied, setCopied] = useState(false);
  const [shareMessage, setShareMessage] = useState('');
  const text = (key) => visitI18n[language]?.[key] || (language === 'en' ? visitI18n.en[key] || t(key) : '[TRANSLATE]');
  const status = useMemo(() => getTempleStatus(darshanSevaData.timings), []);
  const mapQuery = siteData.mapQuery;
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const locationNeedsVerification = JSON.stringify({ coordinates, reach, access }).includes('[VERIFY]');
  const hasSafety = safety.some((item) => !missing(item.text));

  useEffect(() => {
    const onScroll = () => {
      const found = tabs.map(([id]) => [id, document.getElementById(id)]).find(([, element]) => element && element.getBoundingClientRect().top <= 180 && element.getBoundingClientRect().bottom > 180);
      if (found && found[0] !== activeTab) setActiveTab(found[0]);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [activeTab]);

  useEffect(() => {
    const tab = new URLSearchParams(location.search).get('tab');
    if (tab && document.getElementById(tab)) setTimeout(() => document.getElementById(tab)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }), 0);
  }, [location.search, reducedMotion]);

  const goTab = (id) => {
    setActiveTab(id);
    navigate(`/visit?tab=${id}`, { replace: true });
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  };
  const copyAddress = async () => { await navigator.clipboard?.writeText(address.lines.join(', ')); setCopied(true); setTimeout(() => setCopied(false), 2500); };
  const share = async () => {
    if (navigator.share) await navigator.share({ title: siteData.name, url: mapUrl });
    else { await navigator.clipboard?.writeText(mapUrl); setShareMessage('Link copied'); setTimeout(() => setShareMessage(''), 2500); }
  };
  const scrollFestivals = (direction) => festivalScroller.current?.scrollBy({ left: direction * 320, behavior: reducedMotion ? 'auto' : 'smooth' });
  const statusText = status.label || text('visit.statusUnknown');
  const external = (href, label) => <a className={styles.outlineButton} href={href} target="_blank" rel="noopener noreferrer">{label} <ExternalLink size={15} /></a>;

  return <main className={styles.page}>
    <Helmet><title>Visit Us | Dhabaleswara Mandir</title><meta name="description" content={intro} /></Helmet>
    <h1 className={styles.visuallyHidden}>{text('visit.title')}</h1>
    <nav className={styles.tabs} aria-label="Visit sections"><div className={styles.tabInner}>{tabs.map(([id, key]) => <button key={id} type="button" aria-current={activeTab === id ? 'page' : undefined} onClick={() => goTab(id)}>{text(key)}</button>)}</div></nav>

    <section id="getting-here" className={`${styles.section} ${styles.cream}`}><div className={styles.container}><ScrollReveal><h2>{text('visit.gettingHere')}</h2><div className={styles.twoColumn}><div><div className={styles.mapWrap}><iframe className={styles.map} title="Google map showing the temple location" loading="lazy" src={mapEmbed} />{locationNeedsVerification && <span className={styles.locationChip}><MapPin size={14} />{text('visit.locationConfirm')}</span>}</div><SectionHeading>{text('visit.reach')}</SectionHeading><div className={styles.reachGrid}>{reach.map((item) => { const Icon = icons[item.mode]; return <article className={styles.card} key={item.mode}><Icon className={styles.goldIcon} /><h3>{item.title}</h3><p>{renderValue(item.nearest)}</p><small>{renderValue(item.distance)}</small><p>{renderValue(item.tips)}</p></article>; })}</div></div><aside className={styles.sidebar}><article className={styles.card}><MapPin className={styles.goldIcon} /><h3>{text('visit.address')}</h3><address>{address.lines.map((line) => <span key={line}>{line}</span>)}</address><div className={styles.inlineButtons}><button onClick={copyAddress}><Copy size={15} />{text('visit.copy')}</button><button onClick={share}><Share2 size={15} />{text('visit.share')}</button></div><p className={styles.live} aria-live="polite">{copied ? text('visit.copied') : shareMessage}</p><strong>{text('visit.openIn')}</strong><div className={styles.inlineButtons}>{external(mapUrl, text('visit.google'))}{external(`https://maps.apple.com/?q=${encodeURIComponent(mapQuery)}`, text('visit.apple'))}{siteData.phone !== '[ADD FROM TEMPLE]' && <a className={styles.outlineButton} href={`tel:${siteData.phone}`}><Phone size={15} />{text('visit.helpdesk')}</a>}</div></article><article className={styles.card}><h3>{text('visit.today')}</h3><span className={`${styles.status} ${styles[status.status]}`}><i />{statusText}</span><p>{status.nextRitual?.name || text('visit.statusUnknown')}</p><Link to="/darshan-seva">{text('visit.schedule')}</Link></article></aside></div></ScrollReveal></div></section>
    {access.enabled && <section className={styles.section}><div className={styles.container}><div className={styles.notice}><Info /><div><h2>{access.title}</h2><p>{renderValue(access.details)}</p><p>{renderValue(access.note)}</p></div></div></div></section>}

    <section id="before-you-go" className={`${styles.section} ${styles.sand}`}><div className={styles.container}><ScrollReveal><h2>{text('visit.beforeYouGo')}</h2><SectionHeading>{text('visit.rules')}</SectionHeading><div className={styles.ruleGrid}>{rules.map((rule) => { const Icon = icons[rule.icon] || Circle; return <article className={styles.card} key={rule.title}><Icon className={styles.goldIcon} /><h3>{rule.title}</h3><p>{renderValue(rule.text)}</p></article>; })}</div><SectionHeading>{text('visit.bestTime')}</SectionHeading><div className={styles.stripControls}><button type="button" className={styles.roundButton} aria-label={text('visit.previousFestivals')} onClick={() => scrollFestivals(-1)}>‹</button><button type="button" className={styles.roundButton} aria-label={text('visit.nextFestivals')} onClick={() => scrollFestivals(1)}>›</button></div><div className={styles.festivalStrip} ref={festivalScroller} tabIndex="0">{festivals.map((festival) => <article className={styles.festivalCard} key={festival.name}><CalendarDays className={styles.goldIcon} /><h3>{festival.name}</h3><small>{renderValue(festival.when)}</small><span className={`${styles.crowd} ${festival.crowd === 'Very busy' ? styles.busy : ''}`}>{renderValue(festival.crowd)}</span><p>{festival.text}</p><Link to={festivalSlug(festival.name) ? `/festivals/${festivalSlug(festival.name)}` : '/festivals'}>{text('visit.festivalDetails')} <ArrowRight size={15} /></Link></article>)}</div><p className={styles.note}>{festivalNote} <Link to="/notices">{text('visit.notices')} <ArrowRight size={15} /></Link></p><SectionHeading>{text('visit.plan')}</SectionHeading><div className={styles.timeline}>{plan.map((step, index) => <article key={step.title}><b>{index + 1}</b><h3>{step.title}</h3><p>{renderValue(step.text)}</p></article>)}</div><div className={styles.split}><div><SectionHeading>{text('visit.safety')}</SectionHeading>{hasSafety ? safety.map((item) => { const Icon = icons[item.icon] || Circle; return <p className={styles.safetyItem} key={item.text}><Icon size={18} className={styles.goldIcon} />{renderValue(item.text)}</p>; }) : <Placeholder>Safety information coming soon</Placeholder>}</div><div><SectionHeading>{text('visit.facilities')}</SectionHeading>{facilities.some((item) => item.available === true) ? facilities.filter((item) => item.available).map((item) => <span className={styles.chip} key={item.label}>{item.label}</span>) : <Placeholder>Information coming soon</Placeholder>}</div></div><article className={styles.card}><Accessibility className={styles.goldIcon} /><SectionHeading>{text('visit.accessibility')}</SectionHeading><p>{renderValue(accessibility.text)}</p></article></ScrollReveal></div></section>

    <section id="nearby" className={`${styles.section} ${styles.cream}`}><div className={styles.container}><h2>{text('visit.nearby')}</h2>{nearby.length ? nearby.map((place) => <article key={place.name}>{place.name}</article>) : <article className={styles.empty}>{text('visit.nearbySoon')}</article>}<article className={styles.card}><Utensils className={styles.goldIcon} /><h3>{text('visit.stay')}</h3><p>{renderValue(stay.text)}</p></article><Link className={styles.primaryButton} to="/contact">{text('visit.ask')}</Link></div></section>
    <section className={styles.cta}><div className={styles.container}><h2>{text('visit.seva')}</h2><Link className={styles.primaryButton} to="/seva-booking">{text('visit.book')}</Link><Link className={styles.outlineButton} to="/contact">{text('visit.helpdesk')}</Link></div></section>
  </main>;
}

function SectionHeading({ children }) {
  return <h3 className={styles.subsectionHeading}>{children}</h3>;
}
