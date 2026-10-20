import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { SERVICES, CONTACT } from '../data.js'

const NAV = [['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/contact', 'Contact Us']]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      {/* <div className="topbar"><div className="wrap"><a href={`tel:${CONTACT.phones[0][1]}`}>{CONTACT.phones[0][0]}</a><a href={`mailto:${CONTACT.emails[0]}`}>{CONTACT.emails[0]}</a><span>{CONTACT.hours}</span></div></div> */}
      <header className="top">
        <div className="wrap bar">
          <Link to="/" className="brand" aria-label="First Guard Security Services home">
            <img src="/logo-full.png" alt="" />
            <span>First Guard<small>Security Services (Pvt) Ltd</small></span>
          </Link>
          <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
          <nav id="nav" className={open ? 'open' : ''} aria-label="Main">
            <ul>
              {NAV.map(([to, label]) => <li key={to}><NavLink to={to} end={to === '/'}>{label}</NavLink></li>)}
              <li><Link className="btn dark sm" to="/contact">Request a Quote</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main"><Outlet /></main>
      <footer>
        <div className="wrap grid g3" style={{ gap: 32 }}>
          <div>
            <img src="/logo-full.png" alt="First Guard Security – Protect and Secure" style={{ height: 90, marginBottom: 12 }} />
            <p>Licensed, government approved private security protecting people, properties and businesses in Sri Lanka.</p>
          </div>
          <div>
            <h3>Quick links</h3>
            <ul>{NAV.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
            <h3 style={{ marginTop: 20 }}>Services</h3>
            <ul>{SERVICES.slice(0, 5).map(s => <li key={s.title}><Link to="/services">{s.title}</Link></li>)}</ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>{CONTACT.address}</li>
              {CONTACT.phones.map(([l, h]) => <li key={h}><a href={`tel:${h}`}>{l}</a></li>)}
              {CONTACT.emails.map(e => <li key={e}><a href={`mailto:${e}`}>{e}</a></li>)}
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>
        <div className="wrap copy">© {new Date().getFullYear()} First Guard Security Services (Pvt) Ltd. All rights reserved.</div>
      </footer>
    </>
  )
}
