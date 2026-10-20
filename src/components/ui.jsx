import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  }, [title, description])
  return null
}

export const Shield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.2 14.6-3.4-3.4 1.4-1.4 2 2 4.6-4.6 1.4 1.4-6 6z" /></svg>
)

export const Banner = ({ title, text }) => (
  <div className="banner"><div className="wrap"><h1>{title}</h1><p>{text}</p></div></div>
)

export const ServiceCard = ({ title, text }) => (
  <article className="card">
    <div className="ico"><Shield /></div>
    <h3>{title}</h3><p>{text}</p>
    <Link to="/contact" state={{ service: title }}>Enquire now</Link>
  </article>
)

export const Cta = ({ title, text, label, to = '/contact' }) => (
  <div className="cta"><div className="wrap"><h2>{title}</h2>{text && <p>{text}</p>}{to.startsWith('tel:') ? <a className="btn light" href={to}>{label}</a> : <Link className="btn light" to={to}>{label}</Link>}</div></div>
)

export const Placeholder = ({ label, className = 'photo' }) => (
  <div className={className} role="img" aria-label={`Placeholder for a First Guard photograph: ${label}`}>
    <div><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z" /></svg>{label}<br />Replace with an authentic photo</div>
  </div>
)
