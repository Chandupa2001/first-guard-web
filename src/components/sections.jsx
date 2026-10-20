import { useEffect, useRef, useState } from 'react'
import { STATS, SECTORS, TESTIMONIALS, CLIENTS, FAQS } from '../data.js'
import { Shield } from './ui.jsx'

function Count({ value, suffix }) {
  const ref = useRef(null)
  const target = Number(value)
  const [n, setN] = useState(Number.isFinite(target) ? 0 : value)
  useEffect(() => {
    if (!Number.isFinite(target)) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return setN(target)
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = t => { const p = Math.min((t - t0) / 1200, 1); setN(Math.round(target * p)); if (p < 1) requestAnimationFrame(tick) }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [target])
  return <span ref={ref}>{n}{suffix}</span>
}

export function Stats() {
  const placeholder = STATS.some(s => String(s.value).includes('XX'))
  return (
    <section className="stats"><div className="wrap">
      <div className="grid g4">
        {STATS.map(s => <div className="stat" key={s.label}><strong><Count value={s.value} suffix={s.suffix} /></strong><span>{s.label}</span></div>)}
      </div>
      {placeholder && <p className="small" style={{ textAlign: 'center' }}>Placeholder figures. Replace XX in src/data.js with verified numbers.</p>}
    </div></section>
  )
}

export const Credentials = () => (
  <div className="creds"><div className="wrap">
    <span><Shield /> Licensed security company</span><span><Shield /> Government approved</span><span><Shield /> Privately owned, Sri Lanka</span>
  </div></div>
)

export const Sectors = () => (
  <section><div className="wrap">
    <h2>Who we protect</h2><p className="lead">Our clients span the sectors that depend on dependable security.</p>
    <div className="grid g3">{SECTORS.map(s => <div className="chip" key={s}><Shield />{s}</div>)}</div>
  </div></section>
)

export function Testimonials() {
  if (!TESTIMONIALS.length) return null
  return (
    <section className="alt"><div className="wrap"><h2>What our clients say</h2>
      <div className="grid g3">{TESTIMONIALS.map(t => <figure className="card quote" key={t.name}><blockquote>“{t.quote}”</blockquote><figcaption><b>{t.name}</b><br />{t.role}</figcaption></figure>)}</div>
    </div></section>
  )
}

export function Clients() {
  if (!CLIENTS.length) return null
  return (
    <section><div className="wrap"><h2>Trusted by</h2>
      <div className="logos">{CLIENTS.map(c => <img key={c.name} src={c.logo} alt={c.name} loading="lazy" />)}</div>
    </div></section>
  )
}

export const Faq = () => (
  <section className="alt"><div className="wrap narrow"><h2>Frequently asked questions</h2>
    {FAQS.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
  </div></section>
)
