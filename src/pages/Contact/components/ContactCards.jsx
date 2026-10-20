import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock3, Copy, Mail, Phone } from 'lucide-react';
import Placeholder from '../../../components/Placeholder/Placeholder';
import useReducedMotion from '../../../hooks/useReducedMotion';
import { isPlaceholder } from '../contact.data';
import styles from '../Contact.module.css';

const cardItems = [
	{ key: 'phone', icon: Phone, actionKey: 'contact.callNow', helperKey: 'contact.phoneHelper' },
	{ key: 'email', icon: Mail, actionKey: 'contact.emailUs', helperKey: 'contact.emailHelper' },
	{ key: 'hours', icon: Clock3, helperKey: 'contact.hoursHelper' }
];

function CopyValueButton({ value, getText }) {
	const [copied, setCopied] = useState(false);
	const copyValue = async () => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			setCopied(false);
		}
	};

	return (
		<>
			<button className={styles.copyButton} type="button" onClick={copyValue} aria-label={`${getText('contact.copy')} ${value}`} title={getText('contact.copy')}>
				{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
			</button>
			<span className={styles.srOnly} aria-live="polite">{copied ? getText('contact.copied') : ''}</span>
		</>
	);
}

export function HelpdeskStatus({ status, getText, compact = false }) {
	const text = status.isOpen
		? getText('status.open')
		: getText('status.closed', { time: status.opensAt });
	return <span className={`${styles.statusPill} ${status.isOpen ? styles.statusOpen : styles.statusClosed} ${compact ? styles.statusCompact : ''}`}><span className={styles.statusDot} aria-hidden="true" />{text}</span>;
}

export default function ContactCards({ data, status, getText, renderData }) {
	const reducedMotion = useReducedMotion();
	return (
		<div className={styles.contactCards}>
			{cardItems.map(({ key, icon: Icon, actionKey, helperKey }, index) => {
				const value = data.hotlines[key];
				const unavailable = isPlaceholder(value);
				return (
					<motion.article className={styles.contactCard} key={key} initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : index * 0.06 }}>
						<div className={styles.contactIcon} aria-hidden="true"><Icon size={22} /></div>
						<h3>{getText(`contact.${key}`)}</h3>
						<p className={styles.contactHelper}>{getText(helperKey)}</p>
						<div className={styles.contactValueRow}>
							<div className={styles.contactValue}>{unavailable ? <Placeholder kind={String(value || '').startsWith('[VERIFY]') ? 'verify' : 'add'}>{getText(`contact.${key}`)}</Placeholder> : renderData(value)}</div>
							{!unavailable && key !== 'hours' && <CopyValueButton value={value} getText={getText} />}
						</div>
						{key === 'hours' ? (
							<div className={styles.cardAction}><span className={styles.hoursAction}>{getText('contact.hours')}</span><HelpdeskStatus status={status} getText={getText} compact /></div>
						) : unavailable ? null : (
							<a className={styles.cardActionButton} href={key === 'phone' ? `tel:${value.replace(/[^+\d]/g, '')}` : `mailto:${value}`}>{getText(actionKey)}</a>
						)}
					</motion.article>
				);
			})}
		</div>
	);
}
