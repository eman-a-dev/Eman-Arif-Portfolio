import { useState, useEffect } from 'react'
import { LIME, CREAM, MID } from '../lib/theme'

const LINKS = ['About', 'Services', 'Projects', 'FAQs', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        inset: '0 0 auto',
        zIndex: 999,
        background: scrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'all 0.35s',
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 2rem',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#about" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, background: LIME }} />
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: '1.2rem',
              color: CREAM,
              letterSpacing: '-0.02em',
            }}
          >
            Eman Arif
          </span>
        </a>

        <div className="hide-mob" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-pill"
              style={{
                color: MID,
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: LIME,
              color: '#0A0A0A',
              padding: '0.5rem 1.3rem',
              borderRadius: 4,
              fontSize: '0.82rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="show-mob"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: CREAM, fontSize: '1.4rem' }}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{ background: '#111', padding: '1.5rem 2rem 2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.85rem 0',
                color: CREAM,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
