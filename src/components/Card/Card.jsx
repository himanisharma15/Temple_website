import styles from './Card.module.css';
/** Shared Card component. Props are intentionally minimal for page-owner extension. */
export default function Card({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
