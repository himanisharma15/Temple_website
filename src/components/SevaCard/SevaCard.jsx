import styles from './SevaCard.module.css';
/** Shared SevaCard component. Props are intentionally minimal for page-owner extension. */
export default function SevaCard({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
