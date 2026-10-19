import { Link } from 'react-router-dom';
import styles from './Button.module.css';
/** Props: children, to, href, variant, type, disabled. */
export default function Button({ children, to, href, variant='primary', ...props }) {
  const className = `${styles.button} ${styles[variant] || ''}`;
  if (to) return <Link className={className} to={to} {...props}>{children}</Link>;
  if (href) return <a className={className} href={href} {...props}>{children}</a>;
  return <button className={className} {...props}>{children}</button>;
}
