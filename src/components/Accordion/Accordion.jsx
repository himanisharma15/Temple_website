import styles from './Accordion.module.css';
/** Shared Accordion component. Props are intentionally minimal for page-owner extension. */
export default function Accordion({ children, title }) { return <div className={styles.root}>{title && <h3>{title}</h3>}{children}</div>; }
