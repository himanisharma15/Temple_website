import { ArrowRight, Heart, Home, Users, Flower2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './SitalasastiDetail.module.css';

const weddingTraditions = [
	{
		title: 'The Adoptive Parents',
		icon: Users,
		text: 'Families from the community volunteer to act as the parents of the bride, Goddess Parvati, and the groom, Lord Shiva.'
	},
	{
		title: "The Groom's Procession",
		icon: Flower2,
		text: "The family hosting Lord Shiva carries his heavy brass Chala Pratima in a grand midnight Barat procession toward the bride's house."
	},
	{
		title: 'The Kanyadan',
		icon: Heart,
		text: 'The family hosting Goddess Parvati welcomes the groom with Vedic rituals, performs Kanyadan, bears the wedding expenses, and distributes prasada as in a real family wedding.'
	}
];

export default function SitalasastiDetail() {
	return (
		<main className={styles.page}>
			<Helmet>
				<title>Sitalasasti | Dhabaleswara Mandir</title>
				<meta name="description" content="Learn about Sitalasasti, the Odia celebration of the divine marriage of Lord Shiva and Goddess Parvati." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Sitalasasti</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Sitalasasti</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Flower2 size={19} /><span /></div>
							<p className={styles.subtitle}>Divine Marriage Festival</p>
							<p className={styles.heroIntro}>A grand Odia celebration of the divine marriage of Lord Shiva and Goddess Parvati.</p>
							<a className={styles.heroLink} href="#about-sitalasasti">Discover the festival <ArrowRight size={17} aria-hidden="true" /></a>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Sitalasasti.jpg" alt="Dhabaleswara shrine adorned with colorful flowers and garlands" fetchpriority="high" />
							<figcaption>A flower-adorned shrine at Dhabaleswara Mandir</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="about-sitalasasti" className={styles.seasonSection}>
				<div className={`${styles.container} ${styles.seasonGrid}`}>
					<div>
						<p className={styles.sectionKicker}>SEASON &amp; MEANING</p>
						<h2>A Joyous Carnival of Cosmic Union</h2>
					</div>
					<p className={styles.seasonText}>Held on the Sasthi, the sixth day of Sukla Paksha in the month of Jyestha, the festival welcomes the monsoon and celebrates the union that sustains cosmic life.</p>
				</div>
			</section>

			<section className={styles.mythSection} aria-labelledby="myth-heading">
				<div className={`${styles.container} ${styles.mythGrid}`}>
					<div className={styles.mythImageWrap}>
						<img className={styles.mythImage} src="/Sitalasasti.jpg" alt="Flower decorations surrounding the sacred shrine" loading="lazy" />
						<p className={styles.imageCaption}>The shrine dressed in flowers for worship</p>
					</div>
					<div className={styles.mythCopy}>
						<p className={styles.sectionKicker}>THE MYTHOLOGICAL SIGNIFICANCE</p>
						<h2 id="myth-heading">The Union of Shiva and Parvati</h2>
						<p>According to Hindu mythology, the demon Tarakasura terrorized the universe, and prophecy declared he could only be defeated by a son born to Lord Shiva. After Sati's death, Shiva had withdrawn into deep meditation, detached from the material world.</p>
						<p>Goddess Shakti reincarnated as Parvati and performed rigorous penance to win Shiva's heart. Sitalasasti celebrates the day Shiva agreed to marry her, bringing his fiery energy into balance with her cooling, nurturing essence.</p>
						<p>The name Sitala means cooling, symbolizing how this divine union cools the scorching heat of Jyestha and invites life-giving monsoon rains.</p>
					</div>
				</div>
			</section>

			<section className={styles.traditionSection} aria-labelledby="tradition-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>A COMMUNITY WEDDING</p>
						<h2 id="tradition-heading">Unique Rituals: The Kanyadan Tradition</h2>
						<p>The beauty of Sitalasasti in Odisha lies in how the community turns the divine wedding into a realistic human ceremony, complete with families, processions, hospitality, wedding expenses, and prasada for the town.</p>
					</div>
					<div className={styles.traditionGrid}>
						{weddingTraditions.map(({ title, icon: Icon, text }) => (
							<article className={styles.traditionCard} key={title}>
								<span className={styles.traditionIcon} aria-hidden="true"><Icon size={21} /></span>
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
					<h2>Celebrate the Divine Union</h2>
					<p>Explore the devotion and community traditions of Sitalasasti at Dhabaleswara Mandir.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>
		</main>
	);
}