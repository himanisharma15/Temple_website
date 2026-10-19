import styles from './AppImage.module.css';
/** Props: src, alt, fileName. */
export default function AppImage({ src, alt, fileName='temple-image.jpg', ...props }) { return src ? <img className={styles.image} src={src} alt={alt} {...props} /> : <div className={styles.placeholder} role="img" aria-label={alt}>{fileName}<small>Replace with real photo</small></div>; }
