import { useGsapReveal, useGsapStagger } from '../hooks/useGsapReveal'
import { LIME, CREAM, MID } from '../lib/theme'
import workingImg from '../assets/working.png'

const ITEMS = [
  {
    num: '01',
    title: 'Full Stack Development',
    body: 'Modern, scalable web applications built from front end to back end with clean architecture, responsive design, and reliable performance.',
  },
  {
    num: '02',
    title: 'Landing Pages',
    body: 'High-converting landing pages for startups and small businesses, designed to showcase your brand, engage visitors, and drive more leads.',
  },
  {
    num: '03',
    title: 'Social Media Design',
    body: 'Eye-catching social media posts, banners, and promotional creatives that strengthen your online presence while staying true to your brand.',
  },
  {
    num: '04',
    title: 'Website Maintenance & Optimization',
    body: 'Performance improvements, bug fixes, responsive enhancements, and ongoing updates to keep your website fast, secure, and up to date.',
  },
];

export default function Services() {
  const headerRef = useGsapReveal<HTMLDivElement>('up')
  const imgRef = useGsapReveal<HTMLDivElement>('right', 0.1)
  const gridRef = useGsapStagger<HTMLDivElement>('.service-card')

  return (
    <section id="services" style={{ background: '#111', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div
        className="rotate-slow"
        style={{ position: 'absolute', top: -120, right: -120, width: 360, height: 360, border: '1px solid rgba(212,242,68,0.12)', borderRadius: '50%', pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '5rem', alignItems: 'end' }} className="col-2">
          <div ref={headerRef}>
            <div className="tag-pill" style={{ marginBottom: '1.25rem' }}>Services</div>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: CREAM, lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              What I bring
              <br />
              to the table
            </h2>
          </div>

          <div ref={imgRef} style={{ position: 'relative' }}>
  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 2, aspectRatio: '16 / 10' }} className="img-clip-angled">
    <img
      src={workingImg}
      alt="Eman working on her laptop"
      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
    />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(10,10,10,0.55) 0%, transparent 60%)' }} />
  </div>
  {/* <div
    style={{ position: 'absolute', top: 0, left: 0, background: LIME, padding: '0.35rem 0.9rem', fontSize: '0.7rem', fontWeight: 800, color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.08em' }}
  >
    Since 2019
  </div> */}
</div>
        </div>

        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }} className="col-2">
          {ITEMS.map((s, i) => (
            <div
              key={i}
              className="card-lift service-card"
              style={{
                padding: '2.5rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                cursor: 'default',
              }}
            >
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: LIME, letterSpacing: '0.1em', marginBottom: '1.25rem' }}>{s.num}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: CREAM, marginBottom: '0.9rem', lineHeight: 1.25 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: MID }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
