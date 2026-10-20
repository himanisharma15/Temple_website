import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Facebook, Instagram, MapPin, Twitter, Youtube } from 'lucide-react';
import Button from '../../../components/Button/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';
import Placeholder from '../../../components/Placeholder/Placeholder';
import { isPlaceholder } from '../contact.data';
import styles from '../Contact.module.css';

const socialIcons = { Youtube, Instagram, Twitter, Facebook };

export function FollowCard({ data, getText, renderData }) {
	return (
		<section className={styles.sidebarCard} aria-labelledby="follow-heading">
			<h2 className={styles.sectionTitle} id="follow-heading">{getText('follow.title')}</h2>
			<p>{renderData(data.follow.text)}</p>
			<div className={styles.socialList}>
				{data.socials.map(({ name, icon, url }) => {
					const Icon = socialIcons[icon];
					const disabled = isPlaceholder(url);
					return disabled ? (
						<span className={`${styles.socialButton} ${styles.socialDisabled}`} key={name} title={getText('social.linkComingSoon')} aria-label={`${name}: ${getText('social.linkComingSoon')}`}>
							<Icon size={19} aria-hidden="true" /><span className={styles.socialLabel}>{name}</span>
						</span>
					) : (
						<a className={styles.socialButton} href={url} aria-label={getText('follow.openSocial', { name })} key={name}>
							<Icon size={19} aria-hidden="true" /><span className={styles.socialLabel}>{name}</span>
						</a>
					);
				})}
			</div>
		</section>
	);
}

export function FindCard({ data, getText, renderData }) {
	return (
		<section className={styles.sidebarCard} aria-labelledby="find-heading">
			<h2 className={styles.sectionTitle} id="find-heading">{getText('find.title')}</h2>
			<address className={styles.address}>
				<MapPin size={20} aria-hidden="true" />
				<span>{data.address.map((line, index) => <span key={`${line}-${index}`}>{renderData(line)}</span>)}</span>
			</address>
			<Button href={data.mapUrl} target="_blank" rel="noopener noreferrer">{getText('find.directions')}</Button>
			<div className={styles.mapFrame}>
				<iframe title={getText('find.title')} src={`https://maps.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
			</div>
			<div className={styles.verifyChip}><Placeholder kind="verify">{getText('verify.address')}</Placeholder></div>
		</section>
	);
}

export function QuickFaq({ items, getText, renderData }) {
	const [openIndex, setOpenIndex] = useState(-1);
	const reducedMotion = useReducedMotion();
	return (
		<div className={styles.faqList}>
			{items.map((item, index) => {
				const open = openIndex === index;
				const question = getText(item.questionKey);
				const answer = getText(item.answerKey);
				return (
					<article className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`} key={item.questionKey}>
						<h3 className={styles.faqHeading}>
							<button className={styles.faqButton} type="button" aria-expanded={open} aria-controls={`contact-faq-${index}`} onClick={() => setOpenIndex(open ? -1 : index)}>
								<span>{question}</span><ChevronDown size={20} aria-hidden="true" />
							</button>
						</h3>
						<div className={styles.faqPanel} id={`contact-faq-${index}`} aria-hidden={!open}>
							<AnimatePresence initial={false}>
								{open && <motion.div className={styles.faqAnswer} initial={reducedMotion ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reducedMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.25 }}>
									<p>{renderData(answer)}{item.href && <> <a href={item.href}>{item.href === '/darshan-seva' ? 'Darshan & Seva' : 'Visit Us'}</a></>}</p>
								</motion.div>}
							</AnimatePresence>
						</div>
					</article>
				);
			})}
		</div>
	);
}
