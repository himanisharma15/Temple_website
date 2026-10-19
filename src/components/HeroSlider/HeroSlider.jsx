import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import useScrolled from '../../hooks/useScrolled';
import styles from './HeroSlider.module.css';

const SLIDE_INTERVAL = 4000;
const BASE_URL = import.meta.env.BASE_URL;

export const SLIDES = [
  { src: `${BASE_URL}images/Dhabaleswar temple 2.png`, alt: 'Dhabaleswar temple island surrounded by the Mahanadi River', position: 'center' },
  { src: `${BASE_URL}images/Dhabaleswar temple.png`, alt: 'Dhabaleswar temple spires glowing in the sunset', position: 'center' },
  { src: `${BASE_URL}images/Dhabaleaswar temple 1.png`, alt: 'Decorated Shiva shrine inside the temple', position: 'center' },
  { src: `${BASE_URL}images/image 3.png`, alt: 'Flower-adorned Shiva lingam with tridents and lamps', position: 'center' },
];

function getText(language, key) {
  const strings = {
    en: {
      eyebrow: 'SACRED SHIVA DHAM ON THE MAHANADI',
      title: 'Where the River Meets Devotion',
      subtitle: 'An ancient island shrine of Lord Shiva, reached across the Mahanadi.',
      visit: 'Plan Your Visit',
      seva: 'Offer Seva',
    },
    od: {
      eyebrow: 'ମହାନଦୀରେ ପବିତ୍ର ଶିବଧାମ',
      title: 'ଯେଉଁଠି ନଦୀ ଭକ୍ତିକୁ ମିଳେ',
      subtitle: 'ମହାନଦୀ ପାର ହୋଇ ପହଞ୍ଚିବା ଭଗବାନ ଶିବଙ୍କ ପ୍ରାଚୀନ ଦ୍ୱୀପ ମନ୍ଦିର।',
      visit: 'ଯାତ୍ରା ଯୋଜନା କରନ୍ତୁ',
      seva: 'ସେବା ଅର୍ପଣ କରନ୍ତୁ',
    },
    hi: {
      eyebrow: 'महानदी पर पवित्र शिव धाम',
      title: 'जहाँ नदी भक्ति से मिलती है',
      subtitle: 'महानदी पार करके पहुँचा जाने वाला भगवान शिव का प्राचीन द्वीप मंदिर।',
      visit: 'यात्रा की योजना बनाएँ',
      seva: 'सेवा अर्पित करें',
    },
  };
  return strings[language]?.[key] || strings.en[key];
}

export default function HeroSlider({
  eyebrow,
  title,
  subtitle,
  slides = SLIDES,
}) {
  const { language, t } = useLanguage();
  const scrolled = useScrolled(60);
  const touchStartX = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  const goToSlide = useCallback((index) => {
    setActiveIndex((index + slides.length) % slides.length);
  }, [slides.length]);

  const nextSlide = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);

  useEffect(() => {
    if (!hasMultipleSlides) return undefined;
    const timer = window.setInterval(nextSlide, SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, [hasMultipleSlides, nextSlide]);

  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const image = new Image();
    image.src = slides[nextIndex]?.src;
  }, [activeIndex, slides]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      nextSlide();
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) >= 50 && distance < 0) nextSlide();
    touchStartX.current = null;
  };

  const resolvedEyebrow = eyebrow || t('hero.eyebrow') || getText(language, 'eyebrow');
  const resolvedTitle = title || t('hero.title') || getText(language, 'title');
  const resolvedSubtitle = subtitle || t('hero.subtitle') || getText(language, 'subtitle');

  return (
    <section
      className={styles.hero}
      aria-label="Dhabaleswar Mandira image carousel"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slides} aria-live="polite">
        {slides.map((slide, index) => (
          <div
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
            key={slide.src}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={index !== activeIndex}
          >
            <img
              src={slide.src}
              alt={index === activeIndex ? slide.alt : ''}
              loading={index === 0 ? 'eager' : 'lazy'}
              ref={(image) => {
                if (image && index === 0) image.fetchPriority = 'high';
              }}
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}
      </div>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <p className={`${styles.eyebrow} ${scrolled ? styles.eyebrowVisible : ''}`}>{resolvedEyebrow}</p>
        <h1>{resolvedTitle}</h1>
        <p className={styles.subtitle}>{resolvedSubtitle}</p>
        <div className={styles.actions}>
          <Link className={styles.visitButton} to="/visit">
            {t('hero.visit') || getText(language, 'visit')} <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className={styles.sevaButton} to="/darshan-seva">
            {t('hero.seva') || getText(language, 'seva')} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
      {hasMultipleSlides && (
        <div className={`container ${styles.controls}`}>
          <div className={styles.dots} role="tablist" aria-label="Choose hero slide">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                className={`${styles.dot} ${index === activeIndex ? styles.selectedDot : ''}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              >
                <span className={index === activeIndex ? styles.progress : ''} />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
