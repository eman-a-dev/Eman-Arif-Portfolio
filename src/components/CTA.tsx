import { useGsapReveal } from '../hooks/useGsapReveal'
import { LIME, DARK, CREAM, MID } from '../lib/theme'
import selfieImg from '../assets/selfie.png'

const CONTACT_EMAIL = 'emanarif656@gmail.com'
const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eman-arif' },
  { label: 'GitHub', href: 'https://github.com/eman-a-dev' },
]
const DETAILS = [
  { label: 'Email', val: CONTACT_EMAIL },
  { label: 'Based in', val: 'Karachi, Pakistan — remote-friendly' },
  { label: 'Availability', val: 'Open to new opportunities' },
]

// Opens Gmail's web compose window (in a new tab) with the "To" field
// pre-filled — instead of relying on whatever mail app is set as default.
function gmailComposeUrl(to: string, subject = "Let's work together") {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to, su: subject })
  return `https://mail.google.com/mail/?${params.toString()}`
}

export default function CTA() {
  const textRef = useGsapReveal<HTMLDivElement>('left')
  const imgRef = useGsapReveal<HTMLDivElement>('right', 0.15)

  return (
    <section id="contact" style={{ background: DARK, padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        style={{ position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)', fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(200px, 28vw, 380px)', color: 'rgba(212,242,68,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.06em' }}
      >
        ✉
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '5rem', alignItems: 'center' }} className="col-2">
        <div ref={textRef}>
          <div className="tag-pill" style={{ marginBottom: '1.5rem' }}>Get in Touch</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: CREAM, lineHeight: 1.06, letterSpacing: '-0.04em', marginBottom: '1.75rem' }}>
            Let's build
            <br />
            something
            <br />
            <em style={{ color: LIME }}>worth using.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: MID, lineHeight: 1.8, maxWidth: 440, marginBottom: '3rem' }}>
            I take on a limited number of projects at a time to ensure every client gets my full attention. If you
            have a project in mind, reach out.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {DETAILS.map(({ label, val }) => (
              <div key={label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: LIME, textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: 80 }}>{label}</span>
                <span style={{ fontSize: '0.92rem', color: CREAM, fontWeight: 400 }}>{val}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={gmailComposeUrl(CONTACT_EMAIL)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: LIME, color: DARK, padding: '0.9rem 2.2rem', borderRadius: 4, fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.02em', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Start a Conversation
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2 7.5h11M9 3l5 4.5L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            
            <a
              href="/Eman-Arif-CV.pdf"
              download="Eman-Arif-CV.pdf"
              style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid rgba(255,255,255,0.18)', color: CREAM, padding: '0.9rem 2.2rem', borderRadius: 4, fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', transition: 'border-color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = LIME)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)')}
            >
              Download CV
            </a>
          </div>
        </div>

        <div ref={imgRef} style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: -12, right: -12, width: '70%', height: '70%', border: `2px solid ${LIME}`, zIndex: 0 }} />

          <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }} className="img-clip-tall">
            <img src={selfieImg} alt="Eman Arif, excited to work with new clients" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 45%)' }} />
            <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
              <div style={{ background: LIME, padding: '0.4rem 1rem', display: 'inline-block', fontSize: '0.7rem', fontWeight: 800, color: DARK, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Open to projects
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', justifyContent: 'flex-end', position: 'relative', zIndex: 5, pointerEvents: 'auto' }}>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(event) => {
                  event.preventDefault()
                  window.location.assign(href)
                }}
                style={{ display: 'inline-flex', padding: '0.35rem 0', fontSize: '0.72rem', fontWeight: 700, color: MID, textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'color 0.2s', cursor: 'pointer', position: 'relative', zIndex: 6 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = LIME)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MID)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
