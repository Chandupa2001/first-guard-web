import { Stats } from '../components/sections.jsx'
import { Seo, Banner, Cta, Placeholder } from '../components/ui.jsx'

const VALUES = [['Integrity', 'Honest, ethical conduct in everything we do.'], ['Vigilance', 'Constant awareness and readiness at every post.'], ['Professionalism', 'Discipline, courtesy and expertise on duty.'], ['Reliability', 'Dependable cover our clients can count on.'], ['Accountability', 'Clear responsibility for the service we deliver.'], ['Client commitment', 'Putting our clients’ safety and peace of mind first.']]

export default function About() {
  return (
    <>
      <Seo title="About Us | First Guard Security Services" description="Learn about First Guard Security Services (Pvt) Ltd, a licensed private security firm in Sri Lanka." />
      <Banner title="About First Guard" text="Licensed, government approved private security for Sri Lanka." />
      <section><div className="wrap split">
        <div>
          <h2>Security you can hand over with confidence</h2>
          <p>First Guard Security Services (Pvt) Ltd is a licensed, government approved, privately owned security firm. Our clientele includes businesses, financial institutions, private residences, residential complexes, healthcare establishments and well-known development projects in Sri Lanka.</p>
          <p>Our staff bring a wealth of combined security experience to the company. Our security officers, staff and management invite you to join our long list of highly satisfied clients.</p>
          <p>Our main objective is to relieve clients of the details connected with every security aspect of their organisation, so they can devote their time and energy to their endeavours.</p>
        </div>
        <Placeholder label="Team photograph" />
      </div></section>
      <Stats />
      <section className="alt"><div className="wrap grid g2">
        <div className="vm v"><h3>Our vision</h3><p>[Placeholder: replace with First Guard’s official vision statement.]</p></div>
        <div className="vm m"><h3>Our mission</h3><p>[Placeholder: replace with First Guard’s official mission statement.]</p></div>
      </div></section>
      <section><div className="wrap"><h2>Our core values</h2>
        <div className="grid g3">{VALUES.map(([t, p]) => <div className="card" key={t}><h3>{t}</h3><p>{p}</p></div>)}</div>
      </div></section>
      <section className="alt"><div className="wrap"><h2>Our approach</h2>
        <div className="steps"><div><h3>Assess</h3>We learn about your premises, people and risks.</div><div><h3>Plan and deploy</h3>We design an appropriate arrangement and deploy personnel where needed.</div><div><h3>Monitor</h3>We supervise performance and keep in touch to maintain quality.</div></div>
      </div></section>
      <section><div className="wrap"><h2>Our leadership</h2>
        <div className="grid g2"><div className="card"><h3>Deshabandu Vajira Hendawitharane</h3><p>Chairman and Managing Director</p></div><div className="card"><h3>Group Captain Sajeewa Hendawitharane (Retd)</h3><p>Director Operations</p></div></div>
      </div></section>
      <Cta title="Partner with First Guard for security you can trust" label="Contact Our Team" />
    </>
  )
}
