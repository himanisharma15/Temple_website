import styles from './SectionTitle.module.css';
/** Props: eyebrow, title, description, align. */
export default function SectionTitle({ eyebrow, title, description, align='left' }) { return <div className={`${styles.title} ${styles[align]}`}><span>{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
