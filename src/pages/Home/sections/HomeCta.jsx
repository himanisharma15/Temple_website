import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './HomeCta.module.css';
export default function HomeCta() { const { t } = useLanguage(); return <section className={styles.band}><div><h2>{t('home.cta')}</h2><div className={styles.actions}><Link className={styles.primary} to="/darshan-seva">{t('hero.seva')}</Link><Link className={styles.outline} to="/visit">{t('hero.visit')}</Link></div></div></section>; }
