import { DARK, LIME } from '../lib/theme'

const ITEMS = ['ReactJS', 'NextJS', 'NodeJS', 'ExpressJS', 'Supabase', 'MySQL', 'Canva', 'Figma']

export default function Ticker() {
  const all = [...ITEMS, ...ITEMS]
  return (
    <div style={{ background: LIME, padding: '0.9rem 0', overflow: 'hidden' }}>
      <div className="marquee" style={{ display: 'flex', gap: '3rem', width: 'max-content', whiteSpace: 'nowrap' }}>
        {all.map((t, i) => (
          <span
            key={i}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.8rem', fontWeight: 700, color: DARK, textTransform: 'uppercase', letterSpacing: '0.08em' }}
          >
            {t}
            <span style={{ fontSize: '0.5rem', color: 'rgba(10,10,10,0.4)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
