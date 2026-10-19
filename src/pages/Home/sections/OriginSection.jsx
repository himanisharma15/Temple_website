import { useState } from 'react';
import AppImage from '../../../components/AppImage/AppImage';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../../i18n/LanguageContext';
import { homeData } from '../home.data';
import { DataText, MissingTranslation } from './sectionUtils';
import styles from './OriginSection.module.css';

export default function OriginSection() {
  const [expanded, setExpanded] = useState(false);
  const { language, t } = useLanguage();
  const data = homeData.origin;
  return (
    <section id="origin" className={styles.section}>
      <ScrollReveal>
        <div className={styles.grid}>
          <AppImage src={data.image} fileName="origin.jpg" alt={data.imageAlt} />
          <div>
            <h2>{t('home.origin.title')}</h2>
            <p>{language === 'en' ? <DataText value={data.intro} /> : <MissingTranslation>Origin introduction</MissingTranslation>}</p>
            <div className={`${styles.story} ${expanded ? styles.open : ''}`}>
              {data.paragraphs.map((paragraph, index) => <p key={index}>{language === 'en' ? <DataText value={paragraph} /> : <MissingTranslation>Origin story</MissingTranslation>}</p>)}
            </div>
            <button className={styles.toggle} type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>
              {expanded ? t('home.hideStory') : t('home.readStory')}
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
