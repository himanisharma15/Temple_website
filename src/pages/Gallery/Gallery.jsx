import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import useReducedMotion from '../../hooks/useReducedMotion';
import { useLanguage } from '../../i18n/LanguageContext';
import { galleryImages } from './gallery.data';
import { GalleryI18n } from './gallery.i18n';
import styles from './Gallery.module.css';

const imageSize = { width: 1376, height: 768 };
function textFor(language, key, t) {
  return GalleryI18n[language]?.[key] || (language === 'en' ? t(key) : '[TRANSLATE]');
}

function GalleryTile({ image, index, onOpen, onError, reducedMotion, text }) {
  const [loaded, setLoaded] = useState(false);
  const tileRef = useRef(null);
  const animation = reducedMotion
    ? { initial: false, animate: { opacity: 1, scale: 1, y: 0 } }
    : {
        initial: { opacity: 0, scale: 0.88, y: 40 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        viewport: { once: true, margin: '0px 0px -80px 0px' },
        transition: {
          opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 },
          y: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.08 },
          scale: { type: 'spring', stiffness: 120, damping: 16, delay: (index % 4) * 0.08 },
        },
      };

  return (
    <motion.div className={`${styles.tileWrapper} ${image.id === 'shree-dhabaleshwar-shiva-mandir' ? styles.lastGalleryImage : ''}`} layout {...animation}>
      <button
        ref={tileRef}
        className={styles.tile}
        type="button"
        onClick={() => onOpen(image, tileRef)}
        aria-label={`${image.alt}, ${text('gallery.open')}`}
      >
        {!loaded && <span className={styles.shimmer} aria-hidden="true" />}
        <img
          className={`${styles.tileImage} ${loaded ? styles.loaded : ''}`}
          src={encodeURI(image.src)}
          alt={image.alt}
          width={imageSize.width}
          height={imageSize.height}
          loading={index < 6 ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => onError(image.id)}
        />
        <span className={styles.tileOverlay} aria-hidden="true"><Maximize2 size={20} /></span>
      </button>
    </motion.div>
  );
}

function Lightbox({ image, images, index, onClose, onChange, text, reducedMotion, opener }) {
  const closeRef = useRef(null);
  const touchStart = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange(-1);
      if (event.key === 'ArrowRight') onChange(1);
      if (event.key !== 'Tab') return;
      const focusable = closeRef.current?.closest('[role="dialog"]')?.querySelectorAll('button');
      if (!focusable?.length) return;
      if (event.shiftKey && document.activeElement === focusable[0]) {
        event.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if (!event.shiftKey && document.activeElement === focusable[focusable.length - 1]) {
        event.preventDefault();
        focusable[0].focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      opener?.current?.focus();
    };
  }, [onChange, onClose, opener]);

  useEffect(() => {
    [images[(index + 1) % images.length], images[(index - 1 + images.length) % images.length]].forEach((next) => {
      if (next) {
        const preload = new Image();
        preload.src = encodeURI(next.src);
      }
    });
  }, [images, index]);

  return (
    <motion.div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={text('gallery.viewerLabel')}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button ref={closeRef} className={styles.close} type="button" onClick={onClose} aria-label={text('gallery.close')}><X /></button>
      <button className={`${styles.navButton} ${styles.previous}`} type="button" onClick={() => onChange(-1)} aria-label={text('gallery.previous')}><ChevronLeft /></button>
      <motion.div
        className={styles.lightboxContent}
        key={image.id}
        initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, x: 24 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        onTouchStart={(event) => { touchStart.current = event.changedTouches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) >= 50) onChange(distance < 0 ? 1 : -1);
          touchStart.current = null;
        }}
      >
        <img src={encodeURI(image.src)} alt={image.alt} width={imageSize.width} height={imageSize.height} />
        <div className={styles.caption}><span>{image.alt}</span><span>{index + 1} / {images.length}</span></div>
      </motion.div>
      <button className={`${styles.navButton} ${styles.next}`} type="button" onClick={() => onChange(1)} aria-label={text('gallery.next')}><ChevronRight /></button>
    </motion.div>
  );
}

export default function Gallery() {
  const { language, t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [failedImages, setFailedImages] = useState([]);
  const [lightbox, setLightbox] = useState(null);
  const [opener, setOpener] = useState(null);
  const text = (key) => textFor(language, key, t);
  const availableImages = useMemo(() => galleryImages.filter((image) => !failedImages.includes(image.id)), [failedImages]);
  const filteredImages = availableImages;
  const openLightbox = (image, tileRef) => {
    setOpener(tileRef);
    setLightbox({ image, index: filteredImages.findIndex((item) => item.id === image.id) });
  };
  const changeLightbox = (direction) => {
    setLightbox((current) => {
      if (!current) return current;
      const nextIndex = (current.index + direction + filteredImages.length) % filteredImages.length;
      return { image: filteredImages[nextIndex], index: nextIndex };
    });
  };

  return (
    <main className={styles.page}>
      <Helmet><title>Gallery | Dhabaleswara Mandir</title><meta name="description" content="Photo gallery of Dhabaleswara Mandir." /></Helmet>
      <section className={styles.gallerySection} aria-labelledby="gallery-grid-title">
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.heading}>
              <h1 id="gallery-grid-title" className="sr-only">{text('gallery.title')}</h1>
            </div>
          </ScrollReveal>
          <div className={styles.grid}>
            <AnimatePresence initial={false}>
              {filteredImages.map((image, index) => <GalleryTile key={image.id} image={image} index={index} onOpen={openLightbox} onError={(id) => setFailedImages((current) => [...new Set([...current, id])])} reducedMotion={reducedMotion} text={text} />)}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {lightbox && <Lightbox image={lightbox.image} images={filteredImages} index={lightbox.index} onClose={() => setLightbox(null)} onChange={changeLightbox} text={text} reducedMotion={reducedMotion} opener={opener} />}
      </AnimatePresence>
    </main>
  );
}
