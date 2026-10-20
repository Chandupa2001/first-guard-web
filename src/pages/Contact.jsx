import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Faq } from '../components/sections.jsx'
import { Seo, Banner, Cta } from '../components/ui.jsx'
import { SERVICES, CONTACT } from '../data.js'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const EMPTY = { name: '', company: '', email: '', tel: '', service: '', message: '', hp: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.'
  if (!/^[+\d][\d\s()-]{6,}$/.test(v.tel.trim())) e.tel = 'Enter a valid telephone number.'
  if (v.message.trim().length < 10) e.message = 'Enter a message of at least 10 characters.'
  return e
}

export default function Contact() {
  const { state } = useLocation()
  const [v, setV] = useState({ ...EMPTY, service: state?.service || '' })
  const [err, setErr] = useState({})
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState(false)
  const set = k => e => setV({ ...v, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    if (v.hp) return
    const er = validate(v); setErr(er)
    if (Object.keys(er).length) return setStatus({ ok: false, msg: 'Please fix the highlighted fields and try again.' })
    if (!ENDPOINT) {
      const body = `Name: ${v.name}\nCompany: ${v.company || '-'}\nEmail: ${v.email}\nTelephone: ${v.tel}\nService: ${v.service || '-'}\n\n${v.message}`
      window.location.href = `mailto:${CONTACT.emails[0]}?subject=${encodeURIComponent('Website enquiry: ' + (v.service || 'General'))}&body=${encodeURIComponent(body)}`
      return setStatus({ ok: true, msg: `Your email app should now open with this enquiry ready. Press send there to complete it. If nothing opens, email ${CONTACT.emails[0]} directly.` })
    }
    setBusy(true); setStatus(null)
    try {
      const { hp, ...data } = v
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error(String(res.status))
      setV({ ...EMPTY }); setStatus({ ok: true, msg: 'Thank you. Your enquiry has been sent and our team will be in touch.' })
    } catch {
      setStatus({ ok: false, msg: `We could not send your enquiry. Please try again or call ${CONTACT.phones[0][0]}.` })
    } finally { setBusy(false) }
  }

  const field = (id, label, type = 'text', req = true, extra = {}) => (
    <div className="f">
      <label htmlFor={id}>{label}{req && <span className="req"> *</span>}</label>
      <input id={id} type={type} value={v[id]} onChange={set(id)} aria-invalid={!!err[id]} aria-describedby={`e-${id}`} {...extra} />
      <span className="err" id={`e-${id}`}>{err[id]}</span>
    </div>
  )

  return (
    <>
      <Seo title="Contact Us | First Guard Security Services" description="Contact First Guard Security Services (Pvt) Ltd, Hokandara South, Sri Lanka, to discuss your security requirements." />
      <Banner title="Contact First Guard" text="Let’s discuss your security requirements." />
      <section><div className="wrap split" style={{ alignItems: 'start' }}>
        <div>
          <h2>Head office</h2>
          <div className="ct">
            <div><b>Address</b>{CONTACT.address}</div>
            <div><b>Telephone</b>{CONTACT.phones.map(([l, h], i) => <span key={h}>{i > 0 && ' · '}<a href={`tel:${h}`}>{l}</a></span>)}</div>
            <div><b>Email</b>{CONTACT.emails.map(m => <span key={m}><a href={`mailto:${m}`}>{m}</a><br /></span>)}</div>
            <div><b>Business hours</b>{CONTACT.hours}</div>
          </div>
          <iframe className="map" title="Map showing First Guard head office in Hokandara South" src={CONTACT.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <p><a href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
        </div>
        <div>
          <h2>Send an enquiry</h2>
          <form onSubmit={submit} noValidate>
            {field('name', 'Full name', 'text', true, { autoComplete: 'name' })}
            {field('company', 'Company name (optional)', 'text', false, { autoComplete: 'organization' })}
            {field('email', 'Email address', 'email', true, { autoComplete: 'email' })}
            {field('tel', 'Telephone number', 'tel', true, { autoComplete: 'tel' })}
            <div className="f"><label htmlFor="service">Service required</label>
              <select id="service" value={v.service} onChange={set('service')}>
                <option value="">Select a service</option>
                {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}<option>Other</option>
              </select></div>
            <div className="f"><label htmlFor="message">Message <span className="req">*</span></label>
              <textarea id="message" rows="5" value={v.message} onChange={set('message')} aria-invalid={!!err.message} aria-describedby="e-message" />
              <span className="err" id="e-message">{err.message}</span></div>
            <div className="hp" aria-hidden="true"><label>Leave blank<input tabIndex="-1" autoComplete="off" value={v.hp} onChange={set('hp')} /></label></div>
            <button className="btn dark" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Submit Enquiry'}</button>
            <div role="status" aria-live="polite">{status && <div className={`status ${status.ok ? 'ok' : 'bad'}`}>{status.msg}</div>}</div>
            {!ENDPOINT && <p className="small">Submitting opens your email app with this enquiry ready to send. Nothing is sent until you send it.</p>}
          </form>
        </div>
      </div></section>
      <Faq />
      <Cta title="Speak to our team about your security needs" label={`Call ${CONTACT.phones[0][0]}`} to={`tel:${CONTACT.phones[0][1]}`} />
    </>
  )
}
