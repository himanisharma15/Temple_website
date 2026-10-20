import { ArrowRight, Droplets, Heart, Leaf, Shield, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './NagaChaturthiDetail.module.css';

const symbolism = [
	{
		title: 'Naga Puja',
		icon: Droplets,
		text: 'Devotees worship the serpent deities with milk, flowers, turmeric, sandal paste, and prayers for protection from harm.'
	},
	{
		title: 'Family Welfare',
		icon: Heart,
		text: 'The observance is connected with blessings for children, family peace, fertility, and the removal of fear and obstacles.'
	},
	{
		title: 'Respect for Nature',
		icon: Leaf,
		text: 'Naga worship reminds devotees to honor the unseen guardians of land, water, soil, and the natural world.'
	}
];

const offerings = [
	'Milk, water, turmeric, sandal paste, flowers, and bel leaves',
	'Fasting or simple sattvic food according to family tradition',
	'Prayers to Lord Shiva, who is closely associated with Vasuki and serpent symbolism'
];

export default function NagaChaturthiDetail() {
	return (
		<main className={styles.page}>
			<Helmet>
				<title>Naga Chaturthi | Dhabaleswara Mandir</title>
				<meta name="description" content="Learn about Naga Chaturthi, serpent worship, and prayers for protection at Dhabaleswara Mandir." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Naga Chaturthi</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Naga Chaturthi</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Sparkles size={19} /><span /></div>
							<p className={styles.subtitle}>Serpent Worship</p>
							<p className={styles.heroIntro}>Naga Chaturthi is observed with reverence for the serpent deities, seeking protection, prosperity, fertility, and harmony with nature.</p>
							<a className={styles.heroLink} href="#sacred-symbolism">Discover the festival <ArrowRight size={17} aria-hidden="true" /></a>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Naga Chaturthi.jpg" alt="Serpent deity shrine adorned with flowers and offerings" fetchpriority="high" />
							<figcaption>Flowers and offerings at a serpent deity shrine</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="sacred-symbolism" className={styles.symbolismSection} aria-labelledby="symbolism-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>SACRED SYMBOLISM</p>
						<h2 id="symbolism-heading">The Protective Power of the Nagas</h2>
						<p>In Shaivite tradition, serpents are deeply connected with Lord Shiva. Their worship represents protection, spiritual energy, restraint, and respect for life around the devotee.</p>
					</div>
					<div className={styles.symbolismGrid}>
						{symbolism.map(({ title, icon: Icon, text }) => (
							<article className={styles.symbolismCard} key={title}>
								<span className={styles.cardIcon} aria-hidden="true"><Icon size={21} /></span>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.offeringSection} aria-labelledby="offering-heading">
				<div className={`${styles.container} ${styles.offeringGrid}`}>
					<div className={styles.offeringCopy}>
						<p className={styles.sectionKicker}>OFFERINGS</p>
						<h2 id="offering-heading">Devotional Observances</h2>
						<p>Offerings and prayers are made with reverence, according to each family's tradition.</p>
					</div>
					<ul className={styles.offeringList}>
						{offerings.map((offering) => <li key={offering}>{offering}</li>)}
					</ul>
				</div>
			</section>

			<section className={styles.shivaSection}>
				<div className={`${styles.container} ${styles.shivaInner}`}>
					<span className={styles.shivaIcon} aria-hidden="true"><Shield size={25} /></span>
					<div>
						<p className={styles.sectionKicker}>SHAIVITE TRADITION</p>
						<h2>Connection to Lord Shiva</h2>
						<p>Lord Shiva is often shown with a serpent around his neck, symbolizing mastery over fear, time, ego, and destructive forces.</p>
						<p className={styles.prayerText}><strong>Prayer for Protection</strong> Devotees pray for household safety, good health, and the removal of dosha, fear, and obstacles from family life.</p>
					</div>
				</div>
			</section>

			<section className={styles.visitSection}>
				<div className={styles.container}>
					<p className={styles.sectionKicker}>DHABALESWARA MANDIR</p>
					<h2>Pray for Protection and Harmony</h2>
					<p>Explore the festivals and devotional traditions observed at Dhabaleswara Mandir.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>
		</main>
	);
}