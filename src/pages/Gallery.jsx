import { Seo, Banner, Cta, Placeholder } from '../components/ui.jsx'
import { GALLERY } from '../data.js'

export default function Gallery() {
  return (
    <>
      <Seo title="Gallery | First Guard Security Services" description="A closer look at First Guard’s people, services and security operations." />
      <Banner title="Our gallery" text="A closer look at our people, services and security operations." />
      <section><div className="wrap">
        <p className="note">These tiles are placeholders. Replace each with a genuine First Guard photograph, and do not present stock images as company operations.</p>
        <div className="grid g3">{GALLERY.map(g => <Placeholder key={g} label={g} className="ph" />)}</div>
      </div></section>
      <Cta title="Want to see how we can protect your premises?" label="Get in Touch" />
    </>
  )
}
