import styles from './ArchImage.module.css';
/** Shared ArchImage component. Props are intentionally minimal for page-owner extension. */
export default function ArchImage({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
