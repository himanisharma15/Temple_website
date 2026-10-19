import styles from './Tabs.module.css';
/** Shared Tabs component. Props are intentionally minimal for page-owner extension. */
export default function Tabs({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
