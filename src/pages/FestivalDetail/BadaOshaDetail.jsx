import { ArrowRight, Flower2, HeartPulse, Landmark, Moon, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './BadaOshaDetail.module.css';

const significance = [
	{
		title: 'The Healing of King Krutu',
		icon: HeartPulse,
		text: 'According to the Shiva Purana, King Krutu of Utkal fell victim to a severe skin disease and lost his kingdom. On the advice of a sage, he and his queen came to Dhabaleswar island to perform the strict Bada Osha ritual. Lord Shiva, pleased by his devotion, cured him and restored his kingdom.'
	},
	{
		title: 'The Liberation of Lord Indra',
		icon: Sparkles,
		text: 'Another local legend says Lord Indra, the king of gods, prayed and fasted on this riverine island during Bada Osha to free himself from a heavy curse placed upon him by Lord Brahma.'
	},
	{
		title: 'A Festival of Universal Well-being',
		icon: Flower2,
		text: 'Unlike many local oshas in Odisha that are observed mainly by women for their families, Bada Osha at Dhabaleswar is observed by both men and women seeking spiritual purification, good health, and peace.'
	}
];

const prasadas = [
	{
		title: 'Gaja Bhoga',
		label: 'Also known as Gaja Pitha',
		text: 'The most famous offering of the festival is a large white sweet dumpling prepared uniquely for this night from Arua Anna, or raw white rice flour. It is stuffed with grated coconut, jaggery, cardamom, and camphor, then steamed and offered to Lord Shiva during the quiet late-night transition from Trayodashi to Chaturdashi.',
		note: 'Thousands of devotees stay awake in Jagrata to receive even a small portion of this sacred prasada before breaking their day-long waterless fast.'
	},
	{
		title: 'Tarana Prasad',
		label: 'A cooling white liquid offering',
		text: 'Tarana is prepared by mixing rice water, curd, milk, black pepper, and sugar. It is considered soothing and spiritually purifying for devotees who have completed a long fast.',
		note: 'It is served alongside Gaja Bhoga as part of the distinctive Bada Osha prasada tradition.'
	},
	{
		title: 'White Fruits, Flowers, and Clothes',
		label: 'Offerings for the White Lord',
		text: 'During the apex of the festival, the Shiva Lingam is bathed with 108 pitchers of holy water during Mangala Alati. Later, the deity is dressed in the magnificent Bada Singhar Besha.',
		note: 'To maintain the purity of Dhabaleswar, devotees offer white flowers such as lotus and jasmine, white clothes, and white-fleshed fruits throughout the night.'
	}
];

export default function BadaOshaDetail() {
	return (
		<main className={styles.page}>
			<Helmet>
				<title>Bada Osha | Dhabaleswara Mandir</title>
				<meta name="description" content="Discover Bada Osha, the great sacred fast observed at Baba Dhabaleswar Temple during Kartika Panchuka." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Bada Osha</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Bada Osha</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Flower2 size={19} /><span /></div>
							<p className={styles.subtitle}>The Great Fasting</p>
							<p className={styles.heroIntro}>A sacred fast and the most significant ritualistic festival dedicated to Lord Shiva at Dhabaleswar Pitha.</p>
							<a className={styles.heroLink} href="#about-bada-osha">Discover the festival <ArrowRight size={17} aria-hidden="true" /></a>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Bada-osha.jpeg" alt="Baba Dhabaleswar shrine decorated with flowers and garlands" fetchpriority="high" />
							<figcaption>The flower-adorned shrine of Baba Dhabaleswar</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="about-bada-osha" className={styles.aboutSection}>
				<div className={`${styles.container} ${styles.aboutInner}`}>
					<p className={styles.sectionKicker}>KARTIKA PANCHUKA</p>
					<h2>About Bada Osha</h2>
					<p className={styles.aboutText}>Bada Osha takes place on Sukla Paksha Chaturdashi, the 14th day of the waxing moon in the holy month of Kartika, and forms the climax of the five-day sacred period known as Panchuka. Bada Osha is the largest and most significant ritualistic fasting festival celebrated across Odisha, primarily dedicated to the worship of Lord Shiva. The word Bada translates to “big” or “great”, and Osha means “sacred fast”. It is observed with immense devotion during the holy month of Kartika, specifically on the Kartika Sukla Trayodashi and extends into Chaturdashi.</p>
				</div>
			</section>

			<section className={styles.pithaSection}>
				<div className={`${styles.container} ${styles.pithaInner}`}>
					<span className={styles.pithaIcon} aria-hidden="true"><Landmark size={24} /></span>
					<div>
						<p className={styles.sectionKicker}>THE CORE HUB</p>
						<h2>Dhabaleswar Pitha</h2>
						<p>While celebrated throughout Odia households, the absolute epicenter of this festival is the Baba Dhabaleswar Temple.</p>
					</div>
				</div>
			</section>

			<section className={styles.significanceSection} aria-labelledby="significance-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>HEALING, LIBERATION & WELL-BEING</p>
						<h2 id="significance-heading">The Significance of Bada Osha</h2>
						<p>The festival carries deep mythological and cultural meaning, centered on healing, liberation, fasting, and universal well-being.</p>
					</div>
					<div className={styles.storyGrid}>
						{significance.map(({ title, icon: Icon, text }) => (
							<article className={styles.storyCard} key={title}>
								<span className={styles.storyIcon} aria-hidden="true"><Icon size={21} /></span>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.prasadaSection} aria-labelledby="prasada-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>SACRED PRASADA</p>
						<h2 id="prasada-heading">The Unique White Offerings &amp; Prasadas</h2>
						<p>Because the deity is worshiped as Dhabaleswar, the White Lord, the theme of white carries into the offerings, rituals, and attire of Bada Osha.</p>
					</div>
					<div className={styles.prasadaGrid}>
						{prasadas.map(({ title, label, text, note }, index) => (
							<article className={styles.prasadaCard} key={title}>
								<span className={styles.prasadaNumber}>{String(index + 1).padStart(2, '0')}</span>
								<p className={styles.prasadaLabel}>{label}</p>
								<h3>{title}</h3>
								<p>{text}</p>
								<p className={styles.prasadaNote}>{note}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.visitSection}>
				<div className={styles.container}>
					<p className={styles.sectionKicker}>DHABALESWARA MANDIR</p>
					<h2>Experience Bada Osha at Dhabaleswar</h2>
					<p>Discover the devotion, sacred fasting, and distinctive prasada traditions of this great festival.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>
		</main>
	);
}