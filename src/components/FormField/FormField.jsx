import styles from './FormField.module.css';
/** Shared FormField component. Props are intentionally minimal for page-owner extension. */
export default function FormField({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
