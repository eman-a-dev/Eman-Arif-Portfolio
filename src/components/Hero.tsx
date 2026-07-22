import { useGsapReveal } from '../hooks/useGsapReveal'
import { LIME, DARK, CREAM, MID } from '../lib/theme'
import heroImg from '../assets/hero.png'

export default function Hero() {
  const textRef = useGsapReveal<HTMLDivElement>('up')
  const imgRef = useGsapReveal<HTMLDivElement>('right', 0.15)

  return (
    <section
      id="about"
      style={{ minHeight: '100vh', paddingTop: 68, background: DARK, position: 'relative', overflow: 'hidden' }}
    >
      {/* Large background text */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          fontSize: 'clamp(120px, 18vw, 240px)',
          color: 'rgba(255,255,255,0.025)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          letterSpacing: '-0.06em',
        }}
      >
        PORTFOLIO
      </div>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: LIME }} />

      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '5rem 2rem 4rem',
          display: 'grid',
          gridTemplateColumns: '1fr 480px',
          gap: '3rem',
          alignItems: 'center',
          minHeight: 'calc(100vh - 68px)',
        }}
        className="col-2"
      >
        {/* Left — text */}
        <div ref={textRef}>
          <div className="tag-pill" style={{ marginBottom: '2rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: LIME, display: 'inline-block', marginRight: 6 }} />
            Available for freelance
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              lineHeight: 1.04,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              color: CREAM,
              letterSpacing: '-0.04em',
              marginBottom: '2rem',
            }}
          >
            Web Developer
            <br />
            <em style={{ color: LIME }}>& Creative</em>
            <br />
            Designer.
          </h1>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: MID, maxWidth: 480, marginBottom: '3rem' }}>
            I help transform ideas into modern digital products through full stack development and thoughtful design. 
            My focus is on building fast, responsive, and user-centered web experiences that make an impact.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: LIME,
                color: DARK,
                padding: '0.85rem 2rem',
                borderRadius: 4,
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.9rem',
                letterSpacing: '0.02em',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              View Work
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2 7.5h11M9 3l5 4.5L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                border: '1px solid rgba(255,255,255,0.2)',
                color: CREAM,
                padding: '0.85rem 2rem',
                borderRadius: 4,
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = LIME
                e.currentTarget.style.color = LIME
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.color = CREAM
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Stats row
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '0 3rem', width: 'fit-content' }}>
            {[
              ['5+', 'Years exp.'],
              ['80+', 'Projects'],
              ['40k+', 'Users impacted'],
            ].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 900, color: CREAM, lineHeight: 1 }}>
                  {v}
                </div>
                <div style={{ fontSize: '0.75rem', color: MID, fontWeight: 500, marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {l}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right — image panel */}
        <div ref={imgRef} style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: -16,
              bottom: -16,
              left: 16,
              border: `2px solid ${LIME}`,
              borderRadius: 2,
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden', borderRadius: 2 }} className="img-clip-tall">
            <img
              src={heroImg}
              alt="Eman Arif, UX Designer, standing confidently"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', minHeight: 540 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)' }} />

            <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: LIME, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                Full Stack Developer
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>Eman Arif</div>
            </div>
          </div>

          {/* Lime dot grid accent */}
          <div style={{ position: 'absolute', bottom: -40, left: -40, zIndex: 0 }}>
            {Array.from({ length: 4 }).map((_, r) => (
              <div key={r} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                {Array.from({ length: 4 }).map((_, c) => (
                  <div key={c} style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(212,242,68,0.35)' }} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
