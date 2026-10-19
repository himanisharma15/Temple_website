import { Link } from 'react-router-dom';
import AppImage from '../../../components/AppImage/AppImage';
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './GallerySection.module.css';

const galleryImages = [
  {
    src: '/images/Dhabaleswar temple 2.png',
    alt: 'Dhabaleswar temple island surrounded by the Mahanadi River',
  },
  {
    src: '/images/Dhabaleswar temple.png',
    alt: 'Dhabaleswar temple spires',
  },
  {
    src: '/images/Dhabaleaswar temple 1.png',
    alt: 'Decorated Shiva shrine inside Dhabaleswar temple',
  },
  {
    src: '/images/image 3.png',
    alt: 'Flower-adorned Shiva lingam with tridents and lamps',
  },
];

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className={styles.section}>
      <ScrollReveal>
        <div className={styles.container}>
          <h2>{t('home.gallery.title')}</h2>
          <div className={styles.grid}>
            {galleryImages.map((image) => (
              <Link className={styles.imageFrame} to="/gallery" key={image.src}>
                <AppImage src={image.src} alt={image.alt} />
              </Link>
            ))}
          </div>
          <Link className={styles.button} to="/gallery">{t('home.gallery.view')}</Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
