import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import useReducedMotion from '../../../hooks/useReducedMotion';
import styles from '../Contact.module.css';

const initialValues = { name: '', contact: '', topic: '', message: '', website: '' };

function validPhoneOrEmail(value) {
	const trimmed = value.trim();
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phoneDigits = trimmed.replace(/\D/g, '');
	return emailPattern.test(trimmed) || (/^[+\d\s().-]+$/.test(trimmed) && phoneDigits.length >= 7);
}

export default function ContactForm({ topics, getText, renderData }) {
	const reducedMotion = useReducedMotion();
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState('idle');
	const [success, setSuccess] = useState(false);
	const [validationRun, setValidationRun] = useState(0);

	const update = (event) => {
		const { name, value } = event.target;
		setValues((current) => ({ ...current, [name]: value }));
		if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }));
	};

	const submit = (event) => {
		event.preventDefault();
		if (values.website) return;
		const nextErrors = {};
		if (!values.name.trim()) nextErrors.name = getText('form.error.name');
		if (!validPhoneOrEmail(values.contact)) nextErrors.contact = getText('form.error.contact');
		if (values.message.trim().length < 10) nextErrors.message = getText('form.error.message');
		setErrors(nextErrors);
		setValidationRun((count) => count + 1);
		if (Object.keys(nextErrors).length) return;

		setStatus('loading');
		setSuccess(false);
		window.setTimeout(() => {
			setStatus('idle');
			setSuccess(true);
		}, 800);
	};

	const reset = (event) => {
		event.preventDefault();
		setValues(initialValues);
		setErrors({});
		setSuccess(false);
		setStatus('idle');
	};

	const describedBy = (field) => errors[field] ? `${field}-error` : undefined;
	const revealMotion = reducedMotion ? { initial: false } : { initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.25 } };

	return (
		<section className={styles.formCard} id="contact-form" aria-labelledby="contact-form-title">
			<h2 className={styles.sectionTitle} id="contact-form-title">{getText('form.title')}</h2>
			<AnimatePresence initial={false}>
				{success && <motion.div className={styles.successBanner} role="status" aria-live="polite" key="success" {...revealMotion}>
					<CheckCircle2 size={22} aria-hidden="true" />
					<div><strong>{getText('form.success')}</strong><span>{getText('form.demoNote')}</span></div>
					<a href="#contact-form" onClick={reset}>{getText('form.another')}</a>
				</motion.div>}
			</AnimatePresence>
			<form className={success ? styles.formSuccess : ''} onSubmit={submit} noValidate>
				<div className={styles.honeypot} aria-hidden="true">
					<label htmlFor="contact-website">Website</label>
					<input id="contact-website" name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" />
				</div>
				<div className={styles.formField}>
					<label htmlFor="contact-name">{getText('form.name')} <span aria-hidden="true">*</span></label>
					<input id="contact-name" name="name" type="text" autoComplete="name" required value={values.name} onChange={update} placeholder={getText('form.namePlaceholder')} aria-invalid={Boolean(errors.name)} aria-describedby={describedBy('name')} key={`name-${validationRun}`} className={errors.name ? styles.invalidField : ''} />
					{errors.name && <p className={styles.fieldError} id="name-error" role="alert">{errors.name}</p>}
				</div>
				<div className={styles.formField}>
					<label htmlFor="contact-reply">{getText('form.contact')} <span aria-hidden="true">*</span></label>
					<input id="contact-reply" name="contact" type="text" autoComplete="email" required value={values.contact} onChange={update} placeholder={getText('form.contactPlaceholder')} aria-invalid={Boolean(errors.contact)} aria-describedby={describedBy('contact')} key={`contact-${validationRun}`} className={errors.contact ? styles.invalidField : ''} />
					{errors.contact && <p className={styles.fieldError} id="contact-error" role="alert">{errors.contact}</p>}
				</div>
				<div className={styles.formField}>
					<label htmlFor="contact-topic">{getText('form.topic')}</label>
					<select id="contact-topic" name="topic" value={values.topic} onChange={update}>
						<option value="">{getText('form.topicPlaceholder')}</option>
						{topics.map((topic) => <option value={topic} key={topic}>{renderData(topic)}</option>)}
					</select>
				</div>
				<div className={styles.formField}>
					<div className={styles.labelRow}><label htmlFor="contact-message">{getText('form.message')} <span aria-hidden="true">*</span></label><span className={styles.characterCount}>{getText('form.characters', { count: values.message.length })}</span></div>
					<textarea id="contact-message" name="message" rows="5" maxLength="1000" required value={values.message} onChange={update} placeholder={getText('form.messagePlaceholder')} aria-invalid={Boolean(errors.message)} aria-describedby={describedBy('message')} key={`message-${validationRun}`} className={errors.message ? styles.invalidField : ''} />
					{errors.message && <p className={styles.fieldError} id="message-error" role="alert">{errors.message}</p>}
				</div>
				<button className={styles.submitButton} type="submit" disabled={status === 'loading'}>
					{status === 'loading' ? getText('form.sending') : getText('form.submit')} <ArrowRight size={17} aria-hidden="true" />
				</button>
				<p className={styles.formLive} aria-live="polite">{status === 'loading' ? getText('form.sending') : ''}</p>
			</form>
		</section>
	);
}
