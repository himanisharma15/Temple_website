import { Link } from 'react-router-dom';
import styles from './PageHero.module.css';
/** Props: eyebrow, title, description, children. */
export default function PageHero({ eyebrow, title, description, children }) { return <section className={styles.hero}><div className="container"><div className={styles.eyebrow}>{eyebrow}</div><h1>{title}</h1>{description && <p>{description}</p>}{children && <div className={styles.actions}>{children}</div>}<nav aria-label="Breadcrumb" className={styles.crumb}><Link to="/">Home</Link><span>/</span><span>{title}</span></nav></div></section>; }
