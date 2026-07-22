import { CREAM, LIME, MID } from '../lib/theme'

export default function Footer() {
  return (
    <footer style={{ background: '#060606', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.75rem 2rem' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
        <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, color: CREAM, fontSize: '1rem' }}>
          <span style={{ color: LIME }}>.</span>Eman Arif
        </span>
        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>© 2026 Eman Arif — All rights reserved</span>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2ECC8C' }} />
          <span style={{ fontSize: '0.72rem', color: MID, fontWeight: 600 }}>Available for work</span>
        </div>
      </div>
    </footer>
  )
}
