import { Seo, Banner, Cta, ServiceCard } from '../components/ui.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <>
      <Seo title="Security Services | First Guard Security Services" description="Commercial, residential, embassy and school security, surveillance, consultancy and monitoring from First Guard in Sri Lanka." />
      <Banner title="Security solutions for every environment" text="Professional security services tailored to your operational requirements." />
      <section><div className="wrap">
        <p className="note">This service list is based on First Guard’s current website. Please confirm it is complete before launch.</p>
        <div className="grid g3">{SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}</div>
      </div></section>
      <section className="alt"><div className="wrap"><h2>How we work</h2>
        <div className="steps"><div><h3>Understand</h3>We listen to your security requirements.</div><div><h3>Recommend</h3>We propose a suitable security arrangement.</div><div><h3>Deliver</h3>We coordinate service delivery and keep communication open.</div></div>
      </div></section>
      <Cta title="Need a security solution for your business?" text="Tell us about your premises and we will respond with a suitable approach." label="Discuss Your Requirements" />
    </>
  )
}
