import styles from './Breadcrumb.module.css';
/** Shared Breadcrumb component. Props are intentionally minimal for page-owner extension. */
export default function Breadcrumb({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
