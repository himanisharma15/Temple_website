import styles from './Skeleton.module.css';
export default function Skeleton({ variant='card' }) { return <div className={`${styles.skeleton} ${styles[variant]}`} aria-label="Loading" />; }
