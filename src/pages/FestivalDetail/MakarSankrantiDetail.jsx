import { ArrowRight, Handshake, Sun, Waves, Wheat } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './MakarSankrantiDetail.module.css';

const melaTraditions = [
	{
		title: 'The Holy Bath',
		icon: Waves,
		text: 'Devotees begin before dawn with a ritual dip in the cold waters of the Mahanadi surrounding the island before entering the shrine.'
	},
	{
		title: 'Sun and Shiva Worship',
		icon: Sun,
		text: 'The solar worship of Makar Sankranti merges with Shaivite devotion as pilgrims pray to Lord Shiva for harvest prosperity, health, and a fruitful year.'
	},
	{
		title: 'Makara Mela',
		icon: Wheat,
		text: 'The island temple becomes the center of a vibrant fair drawing devotees from Cuttack, Bhubaneswar, and nearby districts.'
	}
];

const ingredients = [
	'Newly harvested uncooked Arua Chaula, lightly washed and air-dried',
	'Jaggery, grated coconut, ripe bananas, Rasgulla or Chhena',
	'Sesame seeds, chopped ginger, black pepper, and puffed rice'
];

export default function MakarSankrantiDetail() {
	return (
		<main className={styles.page}>
			<Helmet>
				<title>Makar Sankranti | Dhabaleswara Mandir</title>
				<meta name="description" content="Discover Makar Sankranti, Uttarayan, and the Makara Mela traditions at Dhabaleswar Temple." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Makar Sankranti</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Makar Sankranti</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Sun size={19} /><span /></div>
							<p className={styles.subtitle}>Harvest &amp; Uttarayan</p>
							<p className={styles.heroIntro}>Makar Sankranti marks the Sun's transit into Capricorn, signaling Uttarayan, warmer days, sacred harvest gratitude, and public celebration at Dhabaleswar Temple.</p>
							<a className={styles.heroLink} href="#makara-mela">Discover the festival <ArrowRight size={17} aria-hidden="true" /></a>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Makar Sankranti.jpg" alt="White temple tower at Dhabaleswar beneath a bright sky" fetchpriority="high" />
							<figcaption>Dhabaleswar Temple during the harvest season</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="makara-mela" className={styles.melaSection}>
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>MAKARA MELA</p>
						<h2>The Makara Mela of Dhabaleswar</h2>
						<p>On this day, the riverine shrine becomes a massive religious fair with holy bathing, Sun worship, Shiva worship, and sacred food offerings.</p>
					</div>
					<div className={styles.melaGrid}>
						{melaTraditions.map(({ title, icon: Icon, text }) => (
							<article className={styles.melaCard} key={title}>
								<span className={styles.melaIcon} aria-hidden="true"><Icon size={21} /></span>
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
						<p className={styles.sectionKicker}>SACRED OFFERING</p>
						<h2 id="offering-heading">Makar Chaula</h2>
						<p>The most unique offering of the festival is Makar Chaula, an uncooked harvest bhoga prepared from newly harvested winter paddy and offered to the Swayambhu Shiva Lingam.</p>
					</div>
					<ul className={styles.ingredientList}>
						{ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
					</ul>
				</div>
			</section>

			<section className={styles.friendshipSection}>
				<div className={`${styles.container} ${styles.friendshipInner}`}>
					<span className={styles.friendshipIcon} aria-hidden="true"><Handshake size={25} /></span>
					<div>
						<p className={styles.sectionKicker}>A TRADITION OF FRIENDSHIP</p>
						<h2>Makar Basma: A Traditional Friendship Day</h2>
						<p>In Odisha, two people may seal a lifetime friendship by feeding each other Makar Chaula prasad. From then on, men address their bound friend as Maharshad or Marsad, while women address their friend as Makara.</p>
						<p className={styles.closingText}>This blend of bridge crossing, winter harvest, fresh prasada, and social bonding makes Makar Sankranti one of the most cheerful days on Dhabaleswar island.</p>
					</div>
				</div>
			</section>

			<section className={styles.visitSection}>
				<div className={styles.container}>
					<p className={styles.sectionKicker}>DHABALESWARA MANDIR</p>
					<h2>Welcome the Harvest Season</h2>
					<p>Explore the Makar Sankranti traditions and festivals celebrated at Dhabaleswar Temple.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>
		</main>
	);
}