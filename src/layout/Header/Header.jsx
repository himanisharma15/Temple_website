import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useScrolled from '../../hooks/useScrolled';
import { useLanguage } from '../../i18n/LanguageContext';
import LanguageToggle from '../../components/LanguageToggle/LanguageToggle';
import styles from './Header.module.css';

const items = [['/', 'nav.home'], ['/about', 'nav.about'], ['/darshan-seva', 'nav.darshan'], ['/festivals', 'nav.festivals'], ['/gallery', 'nav.gallery'], ['/visit', 'nav.visit'], ['/contact', 'nav.contact']];

export default function Header({ variant }) {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	const scrolled = useScrolled(60);
	const { t } = useLanguage();
	const pageVariant = variant || (pathname === '/' ? 'overlay' : 'light');
	const visualVariant = pageVariant === 'overlay' && !scrolled ? 'overlay' : 'light';
	const languageVariant = visualVariant;

	useEffect(() => {
		if (!open) return undefined;
		const closeOnEscape = (event) => {
			if (event.key === 'Escape') setOpen(false);
		};
		window.addEventListener('keydown', closeOnEscape);
		return () => window.removeEventListener('keydown', closeOnEscape);
	}, [open]);

	const closeMenu = () => setOpen(false);

	return (
		<header className={`${styles.header} ${styles[pageVariant]} ${scrolled ? styles.scrolled : ''}`}>
			<div className="container">
				<div className={styles.inner}>
					<Link to="/" className={styles.logo} aria-label="Dhabaleswar Mandira home" onClick={closeMenu}>
						<img src="/images/logo.png" alt="" />
						<span>Dhabaleswar<br />Mandira</span>
					</Link>
					<nav className={styles.nav} aria-label="Main navigation">
						{items.map(([to, key]) => (
							<NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? styles.active : ''}>
								{t(key)}
							</NavLink>
						))}
					</nav>
					<div className={styles.tools}>
						<LanguageToggle variant={languageVariant} />
						<Link to="/donate" className={styles.donate}>{t('nav.donate')}</Link>
					</div>
					<button
						className={styles.menuButton}
						type="button"
						aria-label={open ? 'Close menu' : 'Open menu'}
						aria-expanded={open}
						aria-controls="site-mobile-menu"
						onClick={() => setOpen((isOpen) => !isOpen)}
					>
						{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
					</button>
				</div>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						id="site-mobile-menu"
						className={styles.mobileMenu}
						initial={{ opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.18 }}
					>
						<nav aria-label="Mobile navigation">
							{items.map(([to, key]) => (
								<NavLink key={to} to={to} end={to === '/'} onClick={closeMenu} className={({ isActive }) => isActive ? styles.mobileActive : ''}>
									{t(key)}
								</NavLink>
							))}
						</nav>
						<div className={styles.mobileTools}>
							<LanguageToggle variant="light" />
							<Link to="/donate" className={styles.donate} onClick={closeMenu}>{t('nav.donate')}</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
