import { useLanguage } from '../../i18n/LanguageContext';
import styles from './LanguageToggle.module.css';
export default function LanguageToggle(){const {language,setLanguage}=useLanguage();return <div className={styles.toggle} aria-label="Select language">{[['en','EN'],['od','ଓଡ଼ିଆ'],['hi','हिं']].map(([code,label])=><button key={code} className={language===code?styles.active:''} onClick={()=>setLanguage(code)}>{label}</button>)}</div>}
