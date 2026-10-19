import styles from './Chip.module.css';
/** Shared Chip component. Props are intentionally minimal for page-owner extension. */
export default function Chip({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
