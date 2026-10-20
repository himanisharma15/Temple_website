import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './PageHero.module.css';
/** Props: eyebrow, title, description, children, image, imagePosition, overlayStrength. */
export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
  imagePosition = 'center',
  overlayStrength = 1,
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageClassName = `${styles.hero} ${styles.heroWithImage}${imageFailed ? ` ${styles.imageFailed}` : ''}`;

  return (
    <section
      className={image ? imageClassName : styles.hero}
      style={image ? { '--hero-overlay-strength': overlayStrength } : undefined}
    >
      {image && !imageFailed && (
        <img
          className={styles.heroImage}
          src={encodeURI(image)}
          alt=""
          aria-hidden="true"
          style={{ objectPosition: imagePosition }}
          width="1376"
          height="768"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      )}
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children && <div className={styles.actions}>{children}</div>}
          <nav aria-label="Breadcrumb" className={styles.crumb}><Link to="/">Home</Link><span>/</span><span>{title}</span></nav>
        </div>
      </div>
    </section>
  );
}
