import { useEffect, useState } from 'react';
import { ArrowRight, Droplets, Flower2, Moon, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from './ShivaratriDetail.module.css';

const rituals = [
	{
		title: 'Abhishekam',
		text: 'Devotees offer sacred water and other traditional offerings to Lord Shiva.',
		image: '/Shivaratri.jpg',
		alt: 'Shiva lingam adorned with flowers and offerings at the shrine',
		icon: Droplets
	},
	{
		title: 'Night-long prayers',
		text: 'Devotees chant prayers and remain engaged in worship during the sacred night.',
		image: '/Dola Purnima.jpg',
		alt: 'A flower-adorned deity in a warmly lit temple shrine',
		icon: Moon
	},
	{
		title: 'Fasting and devotion',
		text: 'Many devotees observe a fast and spend the day in prayer and spiritual reflection.',
		image: '/Pausha Purnima .jpg',
		alt: 'Temple offerings arranged before a decorated shrine',
		icon: Flower2
	}
];

const gallery = [
	{ src: '/Shivaratri.jpg', alt: 'Shiva lingam decorated with flowers for worship' },
	{ src: '/Bada-osha.jpeg', alt: 'Temple shrine decorated with garlands and flowers' },
	{ src: '/Sitalasasti.jpg', alt: 'A flower-covered shrine beneath a colorful canopy' },
	{ src: '/Dola Purnima.jpg', alt: 'A deity surrounded by flowers inside a temple shrine' },
	{ src: '/Naga Chaturthi.jpg', alt: 'A garlanded sacred figure at an outdoor shrine' },
	{ src: '/Makar Sankranti.jpg', alt: 'The white temple tower rising beneath a blue sky' }
];

export default function ShivaratriDetail() {
	const [activeImage, setActiveImage] = useState(null);

	useEffect(() => {
		if (!activeImage) return undefined;
		const closeOnEscape = (event) => {
			if (event.key === 'Escape') setActiveImage(null);
		};
		window.addEventListener('keydown', closeOnEscape);
		return () => window.removeEventListener('keydown', closeOnEscape);
	}, [activeImage]);

	return (
		<main className={styles.page}>
			<Helmet>
				<title>Maha Shivaratri | Dhabaleswara Mandir</title>
				<meta name="description" content="Discover Maha Shivaratri at Dhabaleswara Mandir, a sacred night of devotion, prayer, and worship of Lord Shiva." />
			</Helmet>

			<section className={styles.hero}>
				<div className={styles.container}>
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/festivals">Festivals</Link><span aria-hidden="true">/</span><span aria-current="page">Shivaratri</span>
					</nav>
					<div className={styles.heroGrid}>
						<div className={styles.heroCopy}>
							<p className={styles.eyebrow}>DHABALESWARA MANDIR</p>
							<h1>Maha Shivaratri</h1>
							<div className={styles.divider} aria-hidden="true"><span /><Flower2 size={19} /><span /></div>
							<p className={styles.subtitle}>A sacred night of devotion to Lord Shiva</p>
							<p className={styles.heroIntro}>The Great Night of Shiva, celebrated with night-long prayers and rituals.</p>
							<Link className={styles.heroLink} to="#about-shivaratri">Discover the festival <ArrowRight size={17} aria-hidden="true" /></Link>
						</div>
						<figure className={styles.heroFigure}>
							<img src="/Shivaratri.jpg" alt="Shiva lingam adorned with flowers and offerings at Dhabaleswara Mandir" fetchpriority="high" />
							<figcaption>Prayer and offerings to Baba Dhabaleswara</figcaption>
						</figure>
					</div>
				</div>
			</section>

			<section id="about-shivaratri" className={styles.aboutSection}>
				<div className={`${styles.container} ${styles.aboutInner}`}>
					<p className={styles.sectionKicker}>A NIGHT OF REVERENCE</p>
					<h2>About Maha Shivaratri</h2>
					<p className={styles.aboutText}>Maha Shivaratri is one of the most sacred festivals dedicated to Lord Shiva. Devotees observe the occasion with deep faith, prayers, fasting, and special worship. At Dhabaleswara Mandir, the festival brings devotees together in a spiritual atmosphere filled with devotion and reverence for Baba Dhabaleswara.</p>
				</div>
			</section>

			<section className={styles.ritualSection} aria-labelledby="ritual-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>OBSERVANCE</p>
						<h2 id="ritual-heading">Rituals and traditions</h2>
					</div>
					<div className={styles.ritualGrid}>
						{rituals.map(({ title, text, image, alt, icon: Icon }) => (
							<article className={styles.ritualCard} key={title}>
								<div className={styles.ritualImage}><img src={image} alt={alt} loading="lazy" /></div>
								<div className={styles.ritualBody}>
									<span className={styles.ritualIcon} aria-hidden="true"><Icon size={20} /></span>
									<h3>{title}</h3>
									<p>{text}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.significanceSection}>
				<div className={`${styles.container} ${styles.significanceGrid}`}>
					<img className={styles.significanceImage} src="/Makar Sankranti.jpg" alt="Dhabaleswara Mandir's white temple tower and flag beneath the sky" loading="lazy" />
					<div className={styles.significanceCopy}>
						<p className={styles.sectionKicker}>FAITH & REFLECTION</p>
						<h2>The Spiritual Significance</h2>
						<p>Maha Shivaratri is a time for prayer, self-discipline, and spiritual reflection. Devotees worship Lord Shiva and seek blessings for peace, strength, and well-being. The festival reminds people of the importance of faith, devotion, and inner awareness.</p>
					</div>
				</div>
			</section>

			<section className={styles.gallerySection} aria-labelledby="gallery-heading">
				<div className={styles.container}>
					<div className={styles.sectionHeading}>
						<p className={styles.sectionKicker}>AT THE TEMPLE</p>
						<h2 id="gallery-heading">Moments of Devotion</h2>
					</div>
					<div className={styles.galleryGrid}>
						{gallery.map((image, index) => (
							<button className={styles.galleryButton} key={image.src} type="button" onClick={() => setActiveImage(image)} aria-label={`View image ${index + 1}: ${image.alt}`}>
								<img src={image.src} alt={image.alt} loading="lazy" />
							</button>
						))}
					</div>
				</div>
			</section>

			<section className={styles.visitSection}>
				<div className={styles.container}>
					<p className={styles.sectionKicker}>DHABALESWARA MANDIR</p>
					<h2>Experience the Divine</h2>
					<p>Visit Dhabaleswara Mandir and experience the sacred atmosphere of devotion to Lord Shiva.</p>
					<Link className={styles.visitButton} to="/festivals">Explore All Festivals <ArrowRight size={17} aria-hidden="true" /></Link>
				</div>
			</section>

			{activeImage && (
				<div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Enlarged festival photograph" onClick={() => setActiveImage(null)}>
					<button className={styles.lightboxClose} type="button" onClick={() => setActiveImage(null)} aria-label="Close image"><X size={22} /></button>
					<img src={activeImage.src} alt={activeImage.alt} onClick={(event) => event.stopPropagation()} />
				</div>
			)}
		</main>
	);
}