import { ArrowRight, Flame, Heart, Moon, Ship, Sun, Waves, Wheat } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './KartikaPurnimaDetail.module.css';

const schedule = [
	{
		time: 'Pre-Dawn',
		title: 'Mahanadi Snan & Boita Bandana',
		text: "Cleansing sins and celebrating Kalinga's maritime glory."
	},
	{
		time: 'Morning',
		title: 'Darshan in Final Besha',
		text: 'Attaining the fruit of month-long prayers.'
	},
	{
		time: 'Afternoon',
		title: 'Habisa Dalma Feast',
		text: 'Returning to regular life with purified body, mind, and soul.'
	}
];

const ingredients = [
	'Mung dal',
	'Raw banana, sweet potato, colocasia, and elephant apple',
	'Ghee, coconut, cumin, and ginger'
];

export default function KartikaPurnimaDetail() {
	return (
		<main className={styles.page}>
			<Helmet>
				<title>Kartika Purnima | Dhabaleswara Mandir</title>
				<meta name="description" content="Discover Kartika Purnima, Boita Bandana, and the close of Kartika Vrata at Dhabaleswar Temple." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Kartika Purnima</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Kartika Purnima</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Moon size={19} /><span /></div>
							<p className={styles.subtitle}>Holy Kartika Full Moon</p>
							<p className={styles.heroIntro}>Kartika Purnima is considered the most sacred full moon of Odisha's Hindu calendar, closing the Kartika Vrata and the five-day Panchuka period.</p>
							<a className={styles.heroLink} href="#boita-bandana">Discover the festival <ArrowRight size={17} aria-hidden="true" /></a>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Kartika Purnima.jpg" alt="Miniature boats with lit diyas floating during Kartika Purnima" fetchpriority="high" />
							<figcaption>Boita Bandana boats illuminated with diyas</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="boita-bandana" className={styles.boitaSection} aria-labelledby="boita-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>DAWN RITUAL</p>
						<h2 id="boita-heading">Boita Bandana</h2>
						<p>The defining image of the day is the floating of miniature boats, a ritual joining religious devotion with Odisha's maritime pride.</p>
					</div>
					<div className={styles.boitaGrid}>
						<article className={styles.boitaCard}>
							<span className={styles.cardIcon} aria-hidden="true"><Ship size={21} /></span>
							<h3>The Historic Connection</h3>
							<p>Ancient Kalinga merchants, called Sadhabas, sailed in Boitas toward Bali, Java, Sumatra, Ceylon, and Borneo when favorable winds began.</p>
						</article>
						<article className={styles.boitaCard}>
							<span className={styles.cardIcon} aria-hidden="true"><Waves size={21} /></span>
							<h3>The Modern River Ritual</h3>
							<p>Before sunrise, devotees bathe in the Mahanadi and float miniature boats made of paper, cork, or banana stem.</p>
						</article>
						<article className={styles.boitaCard}>
							<span className={styles.cardIcon} aria-hidden="true"><Flame size={21} /></span>
							<h3>Lamps on the Water</h3>
							<p>The boats are decorated with diyas, incense, flowers, and betel leaves, turning the dark water around the island into a field of drifting flames.</p>
						</article>
					</div>
					<blockquote className={styles.boitaVerse}>Aa Ka Ma Boi, Pana Gua Thoi, Masaka Dharama Deu, Mahadipaku Chahi Thau.</blockquote>
				</div>
			</section>

			<section className={styles.conclusionSection}>
				<div className={`${styles.container} ${styles.conclusionGrid}`}>
					<div className={styles.conclusionIcon} aria-hidden="true"><Sun size={24} /></div>
					<div>
						<p className={styles.sectionKicker}>GRAND CONCLUDING RITUALS</p>
						<h2>The Final Besha of the Season</h2>
						<p>After Bada Osha and the offering of Gaja Bhoga, Lord Shiva is adorned in the final majestic Besha of the season with sandalwood paste, white lotuses, and sacred threads.</p>
						<p className={styles.habisaNote}>The day also marks the end of Habisa, the strict month-long sattvic fast observed by Habisialas.</p>
					</div>
				</div>
			</section>

			<section className={styles.feastSection} aria-labelledby="feast-heading">
				<div className={`${styles.container} ${styles.feastGrid}`}>
					<div>
						<p className={styles.sectionKicker}>TRADITIONAL FEAST</p>
						<h2 id="feast-heading">Habisa Dalma</h2>
						<p>Habisa Dalma is made with mung dal, raw banana, sweet potato, colocasia, and elephant apple. It avoids turmeric, tomato, potato, green chili, and mustard seeds, using ghee, coconut, cumin, and ginger for pure flavor.</p>
					</div>
					<ul className={styles.ingredientList} aria-label="Habisa Dalma ingredients">
						{ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
					</ul>
				</div>
			</section>

			<section className={styles.scheduleSection} aria-labelledby="schedule-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>HOLY MONTH'S END</p>
						<h2 id="schedule-heading">Summary of the Day</h2>
					</div>
					<div className={styles.scheduleGrid}>
						{schedule.map(({ time, title, text }) => (
							<article className={styles.scheduleCard} key={time}>
								<span className={styles.scheduleTime}>{time}</span>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.visitSection}>
				<div className={styles.container}>
					<p className={styles.sectionKicker}>DHABALESWARA MANDIR</p>
					<h2>Mark the Holy Kartika Full Moon</h2>
					<p>Explore the sacred rituals and traditions celebrated at Dhabaleswara Mandir.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>
		</main>
	);
}