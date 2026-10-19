import { MapPin, ArrowRight } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../../i18n/LanguageContext';
import { homeData } from '../home.data';
import { DataText, MissingTranslation } from './sectionUtils';
import styles from './LocationSection.module.css';

export default function LocationSection() {
  const { language, t } = useLanguage();
  const data = homeData.location;
  const mapSrc = data.mapQuery ? `https://www.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed` : '';
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.mapQuery)}`;
  return <section id="location" className={styles.section}><ScrollReveal><div className={styles.grid}><div><h2>{t('home.location.title')}</h2><p>{language === 'en' ? <DataText value={data.text} /> : <MissingTranslation>Location description</MissingTranslation>}</p><address><MapPin size={22} aria-hidden="true" /><span>{data.address.map((line, index) => <span key={index}>{language === 'en' ? <DataText value={line} /> : <MissingTranslation>Address line</MissingTranslation>}<br /></span>)}</span></address><a className={styles.button} href={directionsUrl} target="_blank" rel="noopener noreferrer">{t('home.directions')} <ArrowRight size={18} aria-hidden="true" /></a></div>{mapSrc ? <iframe className={styles.map} title="Map showing the temple location" loading="lazy" src={mapSrc} /> : <div className={styles.mapPlaceholder}><DataText value="[ADD FROM TEMPLE] Map location" /></div>}</div></ScrollReveal></section>;
}
