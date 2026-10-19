import styles from './FestivalCard.module.css';
/** Shared FestivalCard component. Props are intentionally minimal for page-owner extension. */
export default function FestivalCard({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
