import { ArrowLeft, ArrowRight, Flame, Flower2, Moon, Ship, Sparkles, Sun, Waves, Wine } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { festivals } from '../Festivals/festivals.data';
import { getFestivalText } from '../Festivals/festivals.i18n';
import styles from './FestivalDetail.module.css';
import ShivaratriDetail from './ShivaratriDetail';
import BadaOshaDetail from './BadaOshaDetail';
import SitalasastiDetail from './SitalasastiDetail';
import MakarSankrantiDetail from './MakarSankrantiDetail';
import NagaChaturthiDetail from './NagaChaturthiDetail';
import PanaSankrantiDetail from './PanaSankrantiDetail';
import PaushaPurnimaDetail from './PaushaPurnimaDetail';
import DolaPurnimaDetail from './DolaPurnimaDetail';
import KartikaPurnimaDetail from './KartikaPurnimaDetail';

const fallbackIcons = { flame: Flame, lamp: Sparkles, flower: Flower2, sun: Sun, serpent: Waves, drink: Wine, moon: Moon, colors: Sparkles, boat: Ship };

export default function FestivalDetail() {
	const { slug } = useParams();
	const { language } = useLanguage();
	const text = (key) => getFestivalText(language, key);
	const index = festivals.findIndex((festival) => festival.slug === slug);
	const festival = festivals[index];

	if (!festival) {
		return <main className={styles.notFound}><div className="container"><h1>{text('detail.notFound')}</h1><Link to="/festivals">{text('detail.back')}</Link></div></main>;
	}
	if (slug === 'shivaratri') return <ShivaratriDetail />;
	if (slug === 'bada-osha') return <BadaOshaDetail />;
	if (slug === 'sitalasasti') return <SitalasastiDetail />;
	if (slug === 'makar-sankranti') return <MakarSankrantiDetail />;
	if (slug === 'naga-chaturthi') return <NagaChaturthiDetail />;
	if (slug === 'pana-sankranti') return <PanaSankrantiDetail />;
	if (slug === 'pausha-purnima') return <PaushaPurnimaDetail />;
	if (slug === 'dola-purnima') return <DolaPurnimaDetail />;
	if (slug === 'kartika-purnima') return <KartikaPurnimaDetail />;

	const Icon = fallbackIcons[festival.icon] || Sparkles;
	const previous = festivals[(index - 1 + festivals.length) % festivals.length];
	const next = festivals[(index + 1) % festivals.length];
	const title = text(festival.titleKey);

	return (
		<main className={styles.page}>
			<Helmet><title>{title} | Dhabaleswara Mandir</title><meta name="description" content={text(festival.textKey)} /></Helmet>
			<section className={styles.detail}>
				<div className="container">
					<nav className={styles.breadcrumb} aria-label="Breadcrumb">
						<Link to="/">{text('breadcrumb.home')}</Link><span aria-hidden="true">/</span><Link to="/festivals">{text('page.title')}</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span>
					</nav>
					<div className={styles.layout}>
						<div className={styles.copy}>
							<p className={styles.eyebrow}>{text('hero.eyebrow')}</p>
							<h1>{title}</h1>
							<p className={styles.summary}>{text(festival.textKey)}</p>
							<div className={styles.actions}>
								<Link className={styles.primaryButton} to="/festivals"><ArrowLeft size={17} />{text('detail.back')}</Link>
								<Link className={styles.secondaryButton} to="/visit">{text('detail.visit')}</Link>
							</div>
						</div>
						{festival.image ? (
							<img className={styles.image} src={festival.image} alt={festival.imageAlt} width="960" height="600" fetchpriority="high" />
						) : (
							<div className={`${styles.image} ${styles.fallback} ${styles[`art-${festival.icon}`]}`} role="img" aria-label={title}><Icon size={68} strokeWidth={1.25} aria-hidden="true" /></div>
						)}
					</div>
					<section className={styles.placeholder} aria-labelledby="details-heading">
						<h2 id="details-heading">{text('detail.placeholder')}</h2>
					</section>
					<nav className={styles.adjacent} aria-label="Other festivals">
						<Link to={`/${previous.slug}`}><ArrowLeft size={17} /><span><small>{text('detail.previous')}</small>{text(previous.titleKey)}</span></Link>
						<Link to={`/${next.slug}`}><span><small>{text('detail.next')}</small>{text(next.titleKey)}</span><ArrowRight size={17} /></Link>
					</nav>
				</div>
			</section>
		</main>
	);
}
