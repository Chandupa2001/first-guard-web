import { Link } from 'react-router-dom'
import { Seo, ServiceCard, Cta, Placeholder, Shield } from '../components/ui.jsx'
import { SERVICES } from '../data.js'
import { Stats, Credentials, Sectors, Testimonials, Clients } from '../components/sections.jsx'

const WHY = [
  ['Licensed and government approved', 'A registered private security company operating in Sri Lanka.'],
  ['Disciplined personnel', 'Security officers who are professional, vigilant and responsible.'],
  ['Tailored arrangements', 'Security plans shaped around each client’s premises and requirements.'],
  ['Client-focused service', 'Reliable security that frees you to concentrate on your business.'],
  ['Trusted across sectors', 'Serving commercial, financial, residential and healthcare clients.'],
  ['Accountable management', 'Ongoing supervision and clear communication throughout service.'],
]

export default function Home() {
  return (
    <>
      <Seo title="First Guard Security Services (Pvt) Ltd | Professional Security Services in Sri Lanka" description="Licensed, government approved private security company in Sri Lanka protecting businesses, residences and healthcare facilities." />
      <div className="hero">
        <div className="wrap">
          <h1>Your Safety. Our Priority.</h1>
          <p>Professional security solutions designed to protect people, properties and businesses with confidence.</p>
          <div className="btns"><Link className="btn light" to="/services">Explore Our Services</Link><Link className="btn outline" to="/contact">Get in Touch</Link></div>
        </div>
      </div>
      <Credentials />
      <section><div className="wrap split">
        <div>
          <h2>First Guard Security Services (Pvt) Ltd</h2>
          <p>First Guard is a licensed, government approved, privately owned security firm. Our clients include businesses, financial institutions, private residences, residential complexes, healthcare establishments and well-known development projects in Sri Lanka.</p>
          <p>Our aim is to relieve clients of the cumbersome details of security, through effective and reliable service, so they can devote their time and energy to their own endeavours.</p>
          <Link className="btn dark about" to="/about">About First Guard</Link>
        </div>
        <Placeholder label="Company photograph" />
      </div></section>
      <Stats />
      <section className="alt"><div className="wrap">
        <h2>Our services</h2><p className="lead">Security arrangements matched to the place, the people and the risk.</p>
        <div className="grid g3">{SERVICES.slice(0, 6).map(s => <ServiceCard key={s.title} {...s} />)}</div>
        <p style={{ marginTop: 24 }}><Link to="/services"><b>View all services</b></Link></p>
      </div></section>
      <Sectors />
      <section className="alt"><div className="wrap">
        <h2>Why choose First Guard</h2>
        <div className="grid g3">{WHY.map(([t, p]) => <div className="card" key={t}><div className="ico"><Shield /></div><h3>{t}</h3><p>{p}</p></div>)}</div>
      </div></section>
      <Testimonials />
      <Clients />
      <Cta title="Looking for a reliable security partner?" text="Let us help you find the right security solution for your requirements." label="Request a Consultation" />
    </>
  )
}
