import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../../i18n/LanguageContext';
import { homeData } from '../home.data';
import { DataText, MissingTranslation } from './sectionUtils';
import styles from './ArchitectureSection.module.css';

export default function ArchitectureSection() {
  const { language, t } = useLanguage();
  const data = homeData.architecture;
  return <section id="architecture" className={styles.section}><ScrollReveal><div className={styles.grid}><div><h2>{t('home.architecture.title')}</h2>{data.paragraphs.map((text, index) => <p key={index}>{language === 'en' ? <DataText value={text} /> : <MissingTranslation>Architecture paragraph</MissingTranslation>}</p>)}</div><div className={styles.facts}><h3>{t('home.quickFacts')}</h3>{data.facts.map((fact, index) => <div className={styles.fact} key={index}><span>{language === 'en' ? <DataText value={fact.label} /> : <MissingTranslation>Fact label</MissingTranslation>}</span><strong>{language === 'en' ? <DataText value={fact.value} /> : <MissingTranslation>Fact value</MissingTranslation>}</strong></div>)}</div></div></ScrollReveal></section>;
}
