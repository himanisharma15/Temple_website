import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../../i18n/LanguageContext';
import { homeData } from '../home.data';
import { DataText, icons, MissingTranslation } from './sectionUtils';
import styles from './FestivalsSection.module.css';

export default function FestivalsSection() {
  const { language, t } = useLanguage();
  const data = homeData.festivals;
  return (
    <section id="festivals" className={styles.section}>
      <ScrollReveal>
        <div className={styles.container}>
          <h2>{t('home.festivals.title')}</h2>
          <p className={styles.subtitle}>{language === 'en' ? <DataText value={data.subtitle} /> : <MissingTranslation>Festivals subtitle</MissingTranslation>}</p>
          <div className={styles.grid}>
            {data.items.map((item) => {
              const Icon = icons[item.icon] || Sparkles;
              return <article className={styles.card} key={item.name}><span className={styles.icon}><Icon size={22} aria-hidden="true" /></span><h3>{language === 'en' ? <DataText value={item.name} /> : <MissingTranslation>Festival name</MissingTranslation>}</h3><p>{language === 'en' ? <DataText value={item.text} /> : <MissingTranslation>Festival description</MissingTranslation>}</p></article>;
            })}
          </div>
          <Link className={styles.link} to="/festivals">{t('home.viewFestivals')}</Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
