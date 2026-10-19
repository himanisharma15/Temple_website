import styles from './Placeholder.module.css';
/** Props: children, kind (verify|add|translate). */
export default function Placeholder({ children, kind='verify' }) { return <span className={styles.placeholder}>[{kind === 'add' ? 'ADD FROM TEMPLE' : kind === 'translate' ? 'TRANSLATE' : 'VERIFY'}] {children}</span>; }
