import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Button from '../../components/Button/Button';
import PageHero from '../../components/PageHero/PageHero';
import Placeholder from '../../components/Placeholder/Placeholder';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import useReducedMotion from '../../hooks/useReducedMotion';
import { useLanguage } from '../../i18n/LanguageContext';
import { contactData, getKolkataHelpdeskState, isPlaceholder } from './contact.data';
import { ContactI18n } from './contact.i18n';
import ContactCards, { HelpdeskStatus } from './components/ContactCards';
import ContactForm from './components/ContactForm';
import { FindCard, FollowCard, QuickFaq } from './components/ContactSidebar';
import styles from './Contact.module.css';

const faqKeys = [
	{ questionKey: 'faq.hours.question', answerKey: 'faq.hours.answer' },
	{ questionKey: 'faq.seva.question', answerKey: 'faq.seva.answer' },
	{ questionKey: 'faq.reach.question', answerKey: 'faq.reach.answer' }
];

function MissingTranslation({ children }) {
	return <span className={styles.missingTranslation}>[TRANSLATE] {children}</span>;
}

function MobileContactBar({ phone, getText, onMessage }) {
	const phoneUnavailable = isPlaceholder(phone);
	return (
		<nav className={styles.mobileBar} aria-label={getText('mobile.label')}>
			{!phoneUnavailable && <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}><Phone size={17} aria-hidden="true" />{getText('mobile.call')}</a>}
			<button type="button" onClick={onMessage}><ArrowRight size={17} aria-hidden="true" />{getText('mobile.message')}</button>
		</nav>
	);
}

export default function Contact() {
	const { language } = useLanguage();
	const reducedMotion = useReducedMotion();
	const [status, setStatus] = useState(() => getKolkataHelpdeskState());
	const formRef = useRef(null);
	const translations = ContactI18n[language] || {};
	const getText = (key, params = {}) => {
		const template = language === 'en' ? (translations[key] || '[TRANSLATE]') : (translations[key] || '[TRANSLATE]');
		return Object.entries(params).reduce((value, [name, replacement]) => value.replaceAll(`{${name}}`, replacement), template);
	};
	const renderData = (value) => {
		if (value === '' || value == null) return <Placeholder kind="verify">{getText('verify.address')}</Placeholder>;
		const string = String(value);
		if (string.startsWith('[VERIFY]')) return <Placeholder kind="verify">{string.slice('[VERIFY]'.length).trim() || getText('verify.address')}</Placeholder>;
		if (string.startsWith('[ADD FROM TEMPLE]')) return <Placeholder kind="add">{string.slice('[ADD FROM TEMPLE]'.length).trim() || getText('social.linkComingSoon')}</Placeholder>;
		return language === 'en' ? string : <MissingTranslation>{string}</MissingTranslation>;
	};
	const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });

	useEffect(() => {
		const updateStatus = () => setStatus(getKolkataHelpdeskState());
		updateStatus();
		const timer = window.setInterval(updateStatus, 60000);
		return () => window.clearInterval(timer);
	}, []);

	const phoneUnavailable = isPlaceholder(contactData.hotlines.phone);

	return (
		<main className={styles.page}>
			<Helmet><title>{getText('document.title')}</title><meta name="description" content={getText('document.description')} /></Helmet>
			<div className={styles.heroShell}>
			<PageHero eyebrow={language === 'en' ? contactData.eyebrow : getText('hero.eyebrow')} title={language === 'en' ? contactData.title : getText('hero.title')} description={language === 'en' ? contactData.intro : getText('hero.intro')}>
				<Button href="#contact-form" onClick={(event) => { event.preventDefault(); scrollToForm(); }}>{getText('hero.sendMessage')}</Button>
				{!phoneUnavailable && <Button variant="outline" href={`tel:${contactData.hotlines.phone.replace(/[^+\d]/g, '')}`}>{getText('hero.callNow')}</Button>}
				<HelpdeskStatus status={status} getText={getText} />
			</PageHero>
			</div>

			<section className={`${styles.section} ${styles.creamSection}`} aria-label="Contact information">
				<div className={styles.container}>
					<ScrollReveal>
						<ContactCards data={contactData} status={status} getText={getText} renderData={renderData} />
					</ScrollReveal>
				</div>
			</section>

			<section className={`${styles.section} ${styles.sandSection}`} aria-label="Message and contact options">
				<div className={`${styles.container} ${styles.mainGrid}`}>
					<div ref={formRef}><ScrollReveal><ContactForm topics={contactData.topics} getText={getText} renderData={renderData} /></ScrollReveal></div>
					<aside className={styles.sidebar}>
						<ScrollReveal delay={reducedMotion ? 0 : 0.06}><FollowCard data={contactData} getText={getText} renderData={renderData} /></ScrollReveal>
						<ScrollReveal delay={reducedMotion ? 0 : 0.12}><FindCard data={contactData} getText={getText} renderData={renderData} /></ScrollReveal>
					</aside>
				</div>
			</section>

			<section className={`${styles.section} ${styles.creamSection}`} aria-labelledby="quick-faq-heading">
				<div className={`${styles.container} ${styles.faqLayout}`}>
					<div><h2 className={styles.sectionTitle} id="quick-faq-heading">{getText('faq.title')}</h2><QuickFaq items={contactData.quickFaqs.map((item, index) => ({ ...item, ...faqKeys[index] }))} getText={getText} renderData={renderData} /></div>
					<Button variant="outline" to="/visit?tab=faq">{getText('faq.seeAll')}</Button>
				</div>
			</section>

			<MobileContactBar phone={contactData.hotlines.phone} getText={getText} onMessage={scrollToForm} />
		</main>
	);
}
