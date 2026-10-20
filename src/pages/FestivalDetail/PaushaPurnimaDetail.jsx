import { ArrowRight, Heart, Moon, Sun, Wheat } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './PaushaPurnimaDetail.module.css';

const rituals = [
	{
		title: 'The Sunrise Mahanadi Snan',
		icon: Moon,
		text: 'At dawn, pilgrims cross the bridge or take boats to bathe in the Mahanadi, a purification rite believed to cleanse lifelong impurities.'
	},
	{
		title: 'Surya Arghya & Shiva Abhishekam',
		icon: Sun,
		text: 'Devotees offer water oblations to the rising winter sun, then worship the Shiva Lingam with water, milk, curd, and honey.'
	},
	{
		title: 'The Winter Fasting',
		icon: Heart,
		text: 'Many observe a strict sattvic or waterless fast, spending the day in meditation, japa, and listening to holy scriptures.'
	}
];

const charityOfferings = [
	'Thick woolen blankets and warm clothing',
	'Winter grains, millets, jaggery, and sesame sweets',
	'Hot community meals such as Khichdi served near temple exits'
];

export default function PaushaPurnimaDetail() {
	return (
		<main className={styles.page}>
			<Helmet>
				<title>Pausha Purnima | Dhabaleswara Mandir</title>
				<meta name="description" content="Discover Pausha Purnima, its winter full-moon devotion, rituals, harvest gratitude, and charity at Dhabaleswar Temple." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Pausha Purnima</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Pausha Purnima</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Moon size={19} /><span /></div>
							<p className={styles.subtitle}>Winter Full Moon</p>
							<p className={styles.heroIntro}>Pausha Purnima is a festival of inner cleansing, spiritual discipline, gratitude, charity, and full-moon devotion at Dhabaleswar Temple.</p>
							<a className={styles.heroLink} href="#cosmic-energy">Discover the festival <ArrowRight size={17} aria-hidden="true" /></a>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Pausha Purnima .jpg" alt="Winter harvest grains, fruit, flowers, and ritual offerings at a shrine" fetchpriority="high" />
							<figcaption>Harvest grains and offerings prepared for worship</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="cosmic-energy" className={styles.cosmicSection}>
				<div className={`${styles.container} ${styles.cosmicGrid}`}>
					<div>
						<p className={styles.sectionKicker}>COSMIC ENERGY</p>
						<h2>The Dynamic Dual Cosmic Energy</h2>
						<p>Pausha is dedicated to Surya, the Sun God, while Purnima belongs to Chandra, the Moon God. Their alignment blends solar motivation with the calm brilliance of the winter full moon.</p>
					</div>
					<div className={styles.devotionNote}>
						<p className={styles.sectionKicker}>SHAIVITE DEVOTION AT DHABALESWAR</p>
						<p>Devotees worship the Swayambhu Lingam to channel this celestial balance, praying for mental clarity, spiritual awakening, and the destruction of negative karma.</p>
					</div>
				</div>
			</section>

			<section className={styles.ritualSection} aria-labelledby="ritual-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>CORE RITUALS</p>
						<h2 id="ritual-heading">Core Rituals at the Shrine</h2>
					</div>
					<div className={styles.ritualGrid}>
						{rituals.map(({ title, icon: Icon, text }) => (
							<article className={styles.ritualCard} key={title}>
								<span className={styles.cardIcon} aria-hidden="true"><Icon size={21} /></span>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.harvestSection}>
				<div className={`${styles.container} ${styles.harvestGrid}`}>
					<div className={styles.harvestImageWrap}>
						<img src="/Pausha Purnima .jpg" alt="Fresh grains, fruit, and flowers arranged as a sacred offering" loading="lazy" />
						<p>Winter harvest offered with devotion</p>
					</div>
					<div className={styles.harvestCopy}>
						<p className={styles.sectionKicker}>PUSPUNI &amp; BOUNTY OF NATURE</p>
						<h2>Harvest Gratitude</h2>
						<p>Pausha Purnima intersects with Odisha's Puspuni harvest tradition, marking the end of the winter paddy season. Farmers bring fresh grains and offer rice puddings with ghee and jaggery as Bhoga to Lord Shiva.</p>
					</div>
				</div>
			</section>

			<section className={styles.charitySection} aria-labelledby="charity-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>DAAN-PUNYA</p>
						<h2 id="charity-heading">The Mandate of Winter Charity</h2>
						<p>Because the festival arrives in deep winter, Daan-Punya becomes a central act of devotion. Charity in winter is regarded as especially meritorious because physical suffering is highly visible.</p>
					</div>
					<ul className={styles.charityList}>
						{charityOfferings.map((offering) => <li key={offering}>{offering}</li>)}
					</ul>
				</div>
			</section>

			<section className={styles.visitSection}>
				<div className={styles.container}>
					<p className={styles.sectionKicker}>DHABALESWARA MANDIR</p>
					<h2>Welcome the Winter Full Moon</h2>
					<p>Explore the rituals, harvest gratitude, and charitable traditions of Pausha Purnima.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>
		</main>
	);
}