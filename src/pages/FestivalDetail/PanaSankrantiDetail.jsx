import { ArrowRight, Droplets, Flower2, Heart, Sun, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './PanaSankrantiDetail.module.css';

const seasonTraditions = [
	{
		title: 'Odia New Year',
		icon: Sun,
		text: 'Pana Sankranti marks Maha Bishuba Sankranti, the beginning of the Odia calendar year and a day of renewal, gratitude, and auspicious worship.'
	},
	{
		title: 'Cooling Pana Offering',
		icon: Droplets,
		text: 'Devotees prepare Bela Pana, a cooling drink made with bael fruit, water, jaggery, curd, coconut, and seasonal spices, and offer it with devotion.'
	},
	{
		title: 'Temple Blessings',
		icon: Flower2,
		text: 'Families visit the shrine to seek blessings from Lord Shiva for health, prosperity, protection, and balance through the coming year.'
	}
];

const rituals = [
	'Morning snan and Shiva darshan at the temple',
	'Offering of Bela Pana, fruits, flowers, and sacred water',
	'Charity of water, cooling drinks, and food during the summer heat'
];

export default function PanaSankrantiDetail() {
	return (
		<main className={styles.page}>
			<Helmet>
				<title>Pana Sankranti | Dhabaleswara Mandir</title>
				<meta name="description" content="Discover Pana Sankranti, the Odia New Year celebration of worship, cooling offerings, and charity at Dhabaleswara Mandir." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Pana Sankranti</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Pana Sankranti</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Sun size={19} /><span /></div>
							<p className={styles.subtitle}>Odia New Year</p>
							<p className={styles.heroIntro}>Pana Sankranti celebrates the Odia New Year with sacred worship, cooling offerings, charity, and prayers for a peaceful beginning.</p>
							<a className={styles.heroLink} href="#season-meaning">Discover the festival <ArrowRight size={17} aria-hidden="true" /></a>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Pana Sankranti .png" alt="Devotees gathering at Dhabaleswar Temple for Pana Sankranti" fetchpriority="high" />
							<figcaption>Devotees gather at Dhabaleswar Temple</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="season-meaning" className={styles.seasonSection}>
				<div className={`${styles.container} ${styles.seasonGrid}`}>
					<div>
						<p className={styles.sectionKicker}>SEASON &amp; MEANING</p>
						<h2>Auspicious Beginning of the Year</h2>
					</div>
					<p className={styles.seasonText}>The festival arrives during the intense summer season, making offerings of water, Pana, and shade especially meaningful acts of devotion and compassion.</p>
				</div>
			</section>

			<section className={styles.traditionSection} aria-labelledby="tradition-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>NEW YEAR TRADITIONS</p>
						<h2 id="tradition-heading">A Day of Renewal and Worship</h2>
					</div>
					<div className={styles.traditionGrid}>
						{seasonTraditions.map(({ title, icon: Icon, text }) => (
							<article className={styles.traditionCard} key={title}>
								<span className={styles.cardIcon} aria-hidden="true"><Icon size={21} /></span>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.ritualSection} aria-labelledby="ritual-heading">
				<div className={`${styles.container} ${styles.ritualGrid}`}>
					<div className={styles.ritualCopy}>
						<p className={styles.sectionKicker}>DEVOTIONAL PRACTICE</p>
						<h2 id="ritual-heading">Common Rituals</h2>
					</div>
					<ul className={styles.ritualList}>
						{rituals.map((ritual) => <li key={ritual}>{ritual}</li>)}
					</ul>
				</div>
			</section>

			<section className={styles.belaSection}>
				<div className={`${styles.container} ${styles.belaInner}`}>
					<span className={styles.belaIcon} aria-hidden="true"><Droplets size={25} /></span>
					<div>
						<p className={styles.sectionKicker}>SACRED OFFERING</p>
						<h2>Bela Pana</h2>
						<p>The cooling drink symbolizes relief, sweetness, and balance. It is offered to the deity and shared among devotees as sacred prasad.</p>
					</div>
				</div>
			</section>

			<section className={styles.charitySection}>
				<div className={styles.container}>
					<span className={styles.charityIcon} aria-hidden="true"><Users size={24} /></span>
					<p className={styles.sectionKicker}>CARE FOR THE COMMUNITY</p>
					<h2>Charity in Summer</h2>
					<p>Giving water and food on this day reflects the temple tradition of caring for pilgrims, travelers, and the wider community.</p>
					<p className={styles.charityClosing}>May the Odia New Year bring health, prosperity, protection, and peace.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>
		</main>
	);
}