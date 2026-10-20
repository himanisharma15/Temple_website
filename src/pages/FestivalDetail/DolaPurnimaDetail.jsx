import { ArrowRight, Flame, Flower2, Heart, Music2, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './DolaPurnimaDetail.module.css';

const themes = [
	{
		title: 'The Swing of Eternal Love',
		icon: Heart,
		text: 'Dola means swing, recalling Radha and Krishna on a decorated swing welcoming spring.'
	},
	{
		title: 'Triumph of Good Over Evil',
		icon: Flame,
		text: 'The festival is linked to the destruction of Holika, symbolizing the victory of righteous forces over darkness.'
	},
	{
		title: 'Birth of a Saint',
		icon: Flower2,
		text: 'For Gaudiya Vaishnavas, the day also marks the birth anniversary of Chaitanya Mahaprabhu.'
	}
];

const ritualCycle = [
	{
		title: 'Fagu Dashami',
		text: 'Six days before the full moon, deities are smeared with red Abira inside temples and offered seasonal delicacies.'
	},
	{
		title: 'The Dola Biman Journey',
		text: 'Mobile idols of Radha and Krishna are placed in decorated wooden Vimanas and carried house to house for offerings of fruits, sweets, and Abira.'
	},
	{
		title: 'The Grand Melana',
		text: 'On the eve of Purnima, Vimanas gather at Melana Padia amid lamps, palanquins, gongs, kirtans, conch shells, and fireworks.'
	}
];

export default function DolaPurnimaDetail() {
	return (
		<main className={styles.page}>
			<Helmet>
				<title>Dola Purnima | Dhabaleswara Mandir</title>
				<meta name="description" content="Discover Dola Purnima, Odisha's spring celebration of Radha and Krishna, its rituals, festive foods, and community traditions." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Dola Purnima</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Dola Purnima</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Flower2 size={19} /><span /></div>
							<p className={styles.subtitle}>Spring Festival</p>
							<p className={styles.heroIntro}>Dola Purnima, also known as Dola Yatra or Dol Jatra, is Odisha's devotional, color-drenched spring celebration of Radha and Krishna.</p>
							<a className={styles.heroLink} href="#mythic-themes">Discover the festival <ArrowRight size={17} aria-hidden="true" /></a>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Dola Purnima.jpg" alt="Radha and Krishna shrine richly decorated with flowers and festive lights" fetchpriority="high" />
							<figcaption>A decorated shrine during the spring festival</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="mythic-themes" className={styles.themeSection} aria-labelledby="theme-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>MYTHIC THEMES</p>
						<h2 id="theme-heading">The Core Mythological Themes</h2>
					</div>
					<div className={styles.themeGrid}>
						{themes.map(({ title, icon: Icon, text }) => (
							<article className={styles.themeCard} key={title}>
								<span className={styles.cardIcon} aria-hidden="true"><Icon size={21} /></span>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.cycleSection} aria-labelledby="cycle-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>RITUAL CYCLE</p>
						<h2 id="cycle-heading">The Multi-Day Ritual Cycle</h2>
						<p>Unlike a single-day color festival, Dola Purnima in Odisha often unfolds across five to six days in rural areas and ancient temple towns.</p>
					</div>
					<div className={styles.cycleList}>
						{ritualCycle.map(({ title, text }, index) => (
							<article className={styles.cycleItem} key={title}>
								<span className={styles.cycleNumber}>{String(index + 1).padStart(2, '0')}</span>
								<div><h3>{title}</h3><p>{text}</p></div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.delicacySection}>
				<div className={`${styles.container} ${styles.delicacyGrid}`}>
					<div className={styles.delicacyIcon} aria-hidden="true"><Flower2 size={24} /></div>
					<div>
						<p className={styles.sectionKicker}>SPRINGTIME HOSPITALITY</p>
						<h2>Traditional Festive Delicacies</h2>
						<p>Households offer crunchy sweets such as Ukhuda, Muan, Khai, Khaja, and Feni. Cooling drinks like Thandai and Ghola Dahi are shared as spring heat begins to rise.</p>
					</div>
				</div>
			</section>

			<section className={styles.communitySection}>
				<div className={`${styles.container} ${styles.communityGrid}`}>
					<div className={styles.communityMark} aria-hidden="true"><Users size={24} /></div>
					<div>
						<p className={styles.sectionKicker}>COMMUNITY &amp; CULTURE</p>
						<h2>Unique Socio-Cultural Impact</h2>
						<p>The Gwala community plays a major role in organizing processions. Cattle are bathed, garlanded, and fed fresh crops. The new Odia Panji is also traditionally read before village deities.</p>
						<p className={styles.communityClosing}><Music2 size={18} aria-hidden="true" /> A spring celebration shared through devotion, music, and community life.</p>
					</div>
				</div>
			</section>

			<section className={styles.visitSection}>
				<div className={styles.container}>
					<p className={styles.sectionKicker}>DHABALESWARA MANDIR</p>
					<h2>Welcome the Colors of Spring</h2>
					<p>Explore the festivals and devotional traditions celebrated at Dhabaleswara Mandir.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>
		</main>
	);
}