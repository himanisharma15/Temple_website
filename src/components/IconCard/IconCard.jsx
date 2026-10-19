import styles from './IconCard.module.css';
/** Shared IconCard component. Props are intentionally minimal for page-owner extension. */
export default function IconCard({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
