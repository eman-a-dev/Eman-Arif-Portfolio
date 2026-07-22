import { useState } from 'react'
import { useGsapReveal, useGsapStagger } from '../hooks/useGsapReveal'
import { LIME, DARK, CREAM, MID } from '../lib/theme'
import { asset } from '../assets'

type ProjectAction =
  | { type: 'external'; label: string; href: string }
  | { type: 'internal'; label: string; href: string }
  | { type: 'download'; label: string; href: string }

type Project = {
  title: string; sub: string; tag: string; img: string; desc: string; action: ProjectAction
}

const TAGS = ['All', 'Landing Page', 'Full Stack', 'Social Media Designs']

// Replace each placeholder demo URL with that project's deployed website URL.
const ALL_PROJECTS: Project[] = [
  { title: 'Modesty', sub: 'Hijab Brand · 2025', tag: 'Landing Page', img: asset('Modesty.png'), desc: 'A landing Page for Hijab and Accessories with clean User friendly Ui inclused social icons and call to action buttons to convert visitors into customers.', action: { type: 'external', label: 'View Demo', href: 'https://mosdesty.vercel.app' } },
  { title: 'Uniswap', sub: 'Resource Sharing Marketplace · 2025', tag: 'Full Stack', img: asset('Uniswap.png'), desc: 'A full-stack university marketplace that enables students to buy, sell, and exchange semester-specific academic resources through a secure, searchable, and user-friendly platform. It has features like Wishlist, My Listings and PostItem.', action: { type: 'internal', label: 'View More', href: '#/projects/uniswap' } },
  { title: 'Aurelia', sub: 'Brand Identity · 2026', tag: 'Social Media Designs', img: asset('social media design for Aurelia.png'), desc: 'Ten Instagram post Designs for an organic skincare brand Aurelia', action: { type: 'download', label: 'Download Sample Designs', href: '/sample-designs.zip?v=2' } },
  { title: 'Levian', sub: 'Artisian Bakery Brand · 2026', tag: 'Landing Page', img: asset('Levian-bakers.png'), desc: 'A modern, Responsive and UI apealing Landing page for an Artisian Bakery brand Levian', action: { type: 'external', label: 'View Demo', href: 'https://levain-bakery-two.vercel.app' } },
  { title: 'Legal Vault', sub: 'Legal Docs Storage System · 2025', tag: 'Landing Page', img: asset('Legal-vault.png'), desc: 'A blockchain Based Legal Document Storage Website with clean, Respionsive and futuristic UI it includes feature add, search,and a secure login/signup for users  ', action: { type: 'external', label: 'View Demo', href: 'https://legal-vault-pearl.vercel.app' } },
  { title: 'Globex', sub: 'Consultant Website · 2025', tag: 'Landing Page', img: asset('Globex.png'), desc: 'Minimalist, Professional Landing page for a Consultant Company Globex', action: { type: 'external', label: 'View Demo', href: 'https://globex-gray.vercel.app' } },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const headerRef = useGsapReveal<HTMLDivElement>('up')
  const gridRef = useGsapStagger<HTMLDivElement>('.project-card')
  const shown = filter === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.tag === filter)

  return (
    <section id="projects" style={{ background: DARK, padding: '7rem 0', position: 'relative' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 2rem' }}>
        <div ref={headerRef} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div><div className="tag-pill" style={{ marginBottom: '1.25rem' }}>Selected Work</div><h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: CREAM, lineHeight: 1.08, letterSpacing: '-0.03em' }}>Projects that<br /><em style={{ color: LIME }}>moved the needle</em></h2></div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>{TAGS.map((t) => <button key={t} onClick={() => setFilter(t)} style={{ padding: '0.4rem 1.1rem', borderRadius: 2, border: 'none', cursor: 'pointer', background: filter === t ? LIME : 'rgba(255,255,255,0.06)', color: filter === t ? DARK : MID, fontSize: '0.78rem', fontWeight: 700, fontFamily: 'inherit', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.22s' }}>{t}</button>)}</div>
        </div>
        <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', background: 'rgba(255,255,255,0.06)' }} className="col-2">
          {shown.map((p, i) => <div key={p.title} className="card-lift project-card" style={{ background: '#0F0F0F', gridColumn: i === 0 ? 'span 2' : 'span 1', overflow: 'hidden' }} onMouseEnter={(e) => { const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = 'scale(1.04)' }} onMouseLeave={(e) => { const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = 'scale(1)' }}>
            <div style={{ position: 'relative', height: i === 0 ? 400 : 240, overflow: 'hidden' }}><img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} /><div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%)' }} /><div style={{ position: 'absolute', top: 16, left: 16 }}><span style={{ background: LIME, color: DARK, fontSize: '0.68rem', fontWeight: 800, padding: '0.25rem 0.7rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.tag}</span></div></div>
            <div style={{ padding: '1.5rem 1.75rem 2rem' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}><h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: i === 0 ? '1.5rem' : '1.15rem', fontWeight: 700, color: CREAM }}>{p.title}</h3><span style={{ fontSize: '0.72rem', color: MID, fontWeight: 500 }}>{p.sub}</span></div><p style={{ fontSize: '0.85rem', color: MID, lineHeight: 1.65 }}>{p.desc}</p><a href={p.action.href} target={p.action.type === 'external' ? '_blank' : undefined} rel={p.action.type === 'external' ? 'noreferrer' : undefined} download={p.action.type === 'download' ? 'eman-arif-sample-designs.zip' : undefined} style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 700, color: LIME, display: 'flex', alignItems: 'center', gap: '0.4rem', width: 'fit-content', textDecoration: 'none' }}>{p.action.label} →</a></div>
          </div>)}
        </div>
      </div>
    </section>
  )
}
