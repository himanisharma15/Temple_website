import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import AppImage from '../../components/AppImage/AppImage';
import { useLanguage } from '../../i18n/LanguageContext';
import useReducedMotion from '../../hooks/useReducedMotion';
import { aboutData } from './about.data';
import { aboutI18n } from './about.i18n';
import styles from './About.module.css';

function MissingTranslation({ children }) {
  return <span style={{ opacity: 0.7, fontStyle: 'italic' }}>{children}</span>;
}

export default function About() {
  const { language, t } = useLanguage();
  const reducedMotion = useReducedMotion();

  const renderLabel = (key) => {
    const text = aboutI18n.en[key] || key;
    return language === 'en' ? text : <MissingTranslation>{text}</MissingTranslation>;
  };

  const reveal = (content, delay = 0) => (reducedMotion ? <>{content}</> : <ScrollReveal delay={delay}>{content}</ScrollReveal>);

  return (
    <>
      <Helmet>
        <title>About Dhabaleswara Mandira</title>
        <meta name="description" content="Learn about the heritage, deity, timeline and festivals of Baba Dhabaleswara Mandir." />
      </Helmet>

      <main className={styles.page}>
        <header className={styles.heroBanner}>
          <div className="container">
            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <nav aria-label="Breadcrumb" className={styles.crumb}>
                  <Link to="/">Home</Link>
                  <span aria-hidden="true">/</span>
                  <span>About Dhabaleswara Mandira</span>
                </nav>
                <div className={styles.eyebrow}>THE TEMPLE</div>
                <h1>About Dhabaleswara Mandira</h1>
                <p>{aboutData.heroIntro}</p>
                <div className={styles.quickFacts} aria-label="Temple facts">
                  <span>Lord Shiva</span>
                  <span>On the Mahanadi</span>
                </div>
              </div>
              <div className={styles.heroImageWrap}>
                <img
                  src={aboutData.images[0].src}
                  alt={aboutData.images[0].alt}
                  width="960"
                  height="720"
                />
              </div>
            </div>
          </div>
        </header>

        {reveal(
          <section id="overview" className={`${styles.section} ${styles.cream}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2>{renderLabel('overview')}</h2>
              </div>
              <div className={styles.overviewGrid}>
                <div className={styles.imageStack}>
                  <div className={styles.imageCard}>
                    <AppImage src={aboutData.images[0].src} alt={aboutData.images[0].alt} className={styles.imageZoom} />
                  </div>
                  <div className={styles.secondaryImageCard}>
                    <AppImage src={aboutData.images[1].src} alt={aboutData.images[1].alt} className={styles.imageZoom} />
                  </div>
                </div>

                <div className={styles.textBlock}>
                  {aboutData.intro.map((paragraph) => <p className={styles.lead} key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>,
          0
        )}

        {reveal(
          <section id="deity" className={`${styles.section} ${styles.sand}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2>Mythical Origin</h2>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureBody}>
                  <img className={styles.originImage} src={aboutData.origin.image} alt={aboutData.origin.alt} loading="lazy" />
                  {aboutData.origin.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>,
          0.06
        )}

        {reveal(
          <section id="timeline" className={`${styles.section} ${styles.cream}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2>Timeline</h2>
              </div>
              <div className={styles.timeline}>
                <div className={styles.timelineLine} aria-hidden="true" />
                {aboutData.timeline.map((item, index) => (
                  <article
                    key={item.period}
                    className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    <span className={styles.timelineDot} aria-hidden="true" />
                    <div className={styles.timelineContent}>
                      <p className={styles.timelinePeriod}>{item.period}</p>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>,
          0.12
        )}

        {reveal(
          <section id="architecture" className={`${styles.section} ${styles.cream}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2>Architecture</h2>
              </div>
              <div className={styles.architectureCopy}>
                {aboutData.architecture.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </section>,
          0.16
        )}

        {reveal(
          <section id="facts" className={`${styles.section} ${styles.sand}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2>Location</h2>
              </div>
              <p className={styles.architectureCopy}>{aboutData.locationSummary}</p>
              <div className={styles.factsCard}>
                {aboutData.facts.map(([label, value]) => (
                  <div key={label} className={styles.factRow}>
                    <span className={styles.factLabel}>{label}</span>
                    <span className={styles.factValue}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>,
          0.18
        )}

        {reveal(
          <section id="attractions" className={`${styles.section} ${styles.cream}`}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2>Attractions</h2>
              </div>
              <div className={styles.attractionsGrid}>
                {aboutData.attractions.map(([title, description]) => (
                  <article className={styles.attraction} key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>,
          0.3
        )}

      </main>
    </>
  );
}

