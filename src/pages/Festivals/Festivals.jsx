import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import useReducedMotion from '../../hooks/useReducedMotion';
import { festivals } from './festivals.data';
import { getFestivalText } from './festivals.i18n';
import FestivalsHero from './FestivalsHero';
import styles from './Festivals.module.css';

function FestivalCard({ festival, text }) {
	return (
		<Link to={`/${festival.slug}`} className={styles.card}>
			<div className={styles.imageFrame}>
				{festival.image ? (
					<img src={festival.image} alt={festival.imageAlt} width="960" height="720" loading="lazy" />
				) : (
					<div className={styles.photoPlaceholder}>
						<strong>{text(festival.titleKey)}</strong>
						<small>{text('festival.photoComingSoon')}</small>
					</div>
				)}
				{festival.month && <span className={styles.month}>{festival.month}</span>}
			</div>
			<div className={styles.cardBody}>
				<h3>{text(festival.titleKey)}</h3>
				<p>{text(festival.textKey)}</p>
				<span className={styles.readMore}>{text('festival.readMore')} <ArrowRight size={17} aria-hidden="true" /></span>
			</div>
		</Link>
	);
}

function PageDecor() {
	return <div className={styles.progressTrack} aria-hidden="true"><span id="festival-progress" /></div>;
}

export default function Festivals() {
	const { language } = useLanguage();
	const reducedMotion = useReducedMotion();
	const text = (key) => getFestivalText(language, key);

	useEffect(() => {
		const progress = document.getElementById('festival-progress');
		let frame = 0;
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
				if (progress) progress.style.transform = `scaleX(${maxScroll > 0 ? window.scrollY / maxScroll : 0})`;
			});
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		const revealItems = document.querySelectorAll(`.${styles.reveal}`);
		if (reducedMotion || !('IntersectionObserver' in window)) revealItems.forEach((item) => item.classList.add(styles.visible));
		else {
			const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add(styles.visible);
				observer.unobserve(entry.target);
			}), { threshold: 0.15 });
			revealItems.forEach((item) => observer.observe(item));
			return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); };
		}
		return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); };
	}, [reducedMotion]);

	return (
		<main className={styles.page}>
			<Helmet><title>{text('page.title')} | Dhabaleswara Mandir</title><meta name="description" content={text('hero.intro')} /></Helmet>
			<PageDecor />
			<FestivalsHero text={text} />

			<section id="festival-grid" className={styles.gridSection} aria-labelledby="festivals-grid-title">
				<div className={styles.gridContainer}>
					<div className={styles.gridHeading}>
						<p className={styles.gridLabel}>{text('featured.eyebrow')}</p>
						<h2 id="festivals-grid-title">{text('page.title')}</h2>
					</div>
					<div className={styles.festivalGrid}>
						{festivals.map((festival, index) => (
							<div className={`${styles.cardReveal} ${styles.reveal}`} key={festival.slug} style={{ '--delay': `${index * 60}ms` }}>
								<FestivalCard festival={festival} text={text} />
							</div>
						))}
					</div>
				</div>
			</section>

			<section className={styles.ctaBand}><div className={`container ${styles.ctaInner}`}><h2>{text('cta.title')}</h2><div className={styles.ctaActions}><Link className={styles.directionsButton} to="/visit">{text('cta.directions')}</Link><Link className={styles.sevaButton} to="/darshan-seva">{text('cta.seva')}</Link></div></div></section>
		</main>
	);
}
