import { Facebook, Instagram, Mail, MapPin, Phone, X, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/site.data';
import Button from '../../components/Button/Button';
import styles from './Footer.module.css';

const socials = [['youtube', Youtube, 'YouTube'], ['instagram', Instagram, 'Instagram'], ['x', X, 'X'], ['facebook', Facebook, 'Facebook']];

export default function Footer() {
  const contactDetails = [
    [siteData.address?.length, <><MapPin size={16} />{siteData.address?.map((line) => <span key={line}>{line}</span>)}</>],
    [siteData.phone && !siteData.phone.includes('['), <><Phone size={16} />{siteData.phone}</>],
    [siteData.email, <><Mail size={16} />{siteData.email}</>],
  ];
  return <footer className={styles.footer}>
    <div className={styles.glow} aria-hidden="true" />
    <div className={`container ${styles.content}`}>
      <div className={styles.cta}><strong>Offer a seva today</strong><div><Button to="/donate">Donate</Button><Link className={styles.ctaOutline} to="/visit">Plan your visit</Link></div></div>
      <div className={styles.grid}>
        <div className={styles.brand}><img src="/images/logo.png" alt="" /><strong>Dhabaleswara</strong> <span>Mandir</span><p>{siteData.odiaName}</p><p>{siteData.tagline}</p></div>
        <FooterLinks title="Explore" links={[['/about', 'About'], ['/festivals', 'Festivals'], ['/gallery', 'Gallery'], ['/visit', 'Visit Us']]} />
        <FooterLinks title="Support" links={[['/darshan-seva', 'Darshan & Seva'], ['/donate', 'Donate'], ['/notices', 'Notices']]} />
        <div className={styles.contact}><h3>Contact</h3>{contactDetails.some(([hasValue]) => hasValue) ? contactDetails.filter(([hasValue]) => hasValue).map(([, content], index) => <div className={styles.contactLine} key={index}>{content}</div>) : <p>Contact details coming soon</p>}<div className={styles.socials}>{socials.filter(([key]) => siteData.socials[key] && !siteData.socials[key].includes('[')).map(([key, Icon, label]) => <a key={key} href={siteData.socials[key]} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={18} /></a>)}</div></div>
      </div>
    </div>
    <div className={styles.bottom}><div className="container"><span>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</span><span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></span></div></div>
  </footer>;
}

function FooterLinks({ title, links }) { return <div className={styles.links}><h3>{title}</h3>{links.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}</div>; }
