import { useLanguage } from '../../i18n/LanguageContext';
import styles from './LanguageToggle.module.css';
export default function LanguageToggle({ variant = 'light' }) {
	const { language, setLanguage } = useLanguage();
	return (
		<div className={`${styles.toggle} ${styles[variant]}`} role="group" aria-label="Select language">
			{[['en', 'EN'], ['od', 'ଓଡ଼ିଆ'], ['hi', 'हि']].map(([code, label]) => (
				<button key={code} type="button" className={language === code ? styles.active : ''} aria-pressed={language === code} onClick={() => setLanguage(code)}>
					{label}
				</button>
			))}
		</div>
	);
}
