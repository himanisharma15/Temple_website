import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../../i18n/LanguageContext';
import { homeData } from '../home.data';
import { DataText, icons, MissingTranslation } from './sectionUtils';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const { language, t } = useLanguage();
  const data = homeData.about;
  const translated = data.translations?.[language];
  return (
    <section id="about" className={styles.section}>
      <ScrollReveal>
        <div className={styles.grid}>
          <div>
            <h2>{translated?.title || t('home.about.title')}</h2>
            <p className={styles.lead}>{language === 'en' ? <DataText value={data.lead} /> : <MissingTranslation>About lead</MissingTranslation>}</p>
            <div className={styles.highlights}>
              {data.highlights.map(({ label, icon }) => {
                const Icon = icons[icon] || icons.Circle;
                return <span className={styles.chip} key={label}><Icon size={18} aria-hidden="true" />{language === 'en' ? <DataText value={label} /> : <MissingTranslation>About highlight</MissingTranslation>}</span>;
              })}
            </div>
          </div>
          <div>{data.paragraphs.map((paragraph, index) => <p key={index}>{language === 'en' ? <DataText value={paragraph} /> : <MissingTranslation>About paragraph</MissingTranslation>}</p>)}</div>
        </div>
      </ScrollReveal>
    </section>
  );
}
