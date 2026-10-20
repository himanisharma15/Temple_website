import { ArrowDown, ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { festivalHero, festivals } from './festivals.data';
import styles from './FestivalsHero.module.css';

export default function FestivalsHero({ text }) {
	return (
		<section className={styles.hero} aria-labelledby="festivals-title">
			<div className={styles.heroInner}>
				<div className={styles.particles} aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <span key={index} />)}</div>
				<div className={styles.copy}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">{text('breadcrumb.home')}</Link><span aria-hidden="true">/</span><span>{text('page.title')}</span>
					</nav>
					<p className={styles.eyebrow}>{text('hero.eyebrow')}</p>
					<h1 id="festivals-title" className={styles.title}>{text('page.title')}</h1>
					<p className={styles.intro}>{text('hero.intro')}</p>
					<div className={styles.actions}>
						<a className={styles.explore} href="#festival-grid">{text('hero.explore')} <ArrowDown size={17} aria-hidden="true" /></a>
						<Link className={styles.visit} to="/visit">{text('hero.visit')} <ArrowRight size={17} aria-hidden="true" /></Link>
					</div>
				</div>
				<div className={styles.arch}>
					<img src={festivalHero.image} alt={festivalHero.imageAlt} width="960" height="720" fetchpriority="high" />
					<div className={styles.festivalBadge}>Festivals all year</div>
				</div>
			</div>
			<div className={styles.marquee} aria-label={text('page.title')}>
				<div className={styles.marqueeTrack}>
					{[0, 1].map((copy) => <div className={styles.marqueeGroup} aria-hidden={copy === 1 ? 'true' : undefined} key={copy}>
						{festivals.map((festival) => <span className={styles.marqueeItem} key={festival.slug}>{text(festival.titleKey)}<Flame size={12} fill="currentColor" aria-hidden="true" /></span>)}
					</div>)}
				</div>
			</div>
		</section>
	);
}