import { useEffect, useRef } from 'react'
import Nav from './Nav'
import { CREAM, DARK, LIME, MID } from '../lib/theme'
import { PROJECT_DETAILS } from '../data/ProjectDetails'

export default function ProjectDetails({ slug }: { slug: string }) {
  const project = PROJECT_DETAILS[slug]
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const video = videoRef.current
    if (!video) return
    video.muted = false
    video.volume = 1
    void video.play().catch(() => {
      // Browsers can block unmuted autoplay until the visitor interacts with the page.
    })
  }, [slug])

  if (!project) {
    window.location.hash = '#projects'
    return null
  }

  const overviewHeadline = project.overviewHeadline ?? 'A closer look at the project.'

  return (
    <main style={{ minHeight: '100vh', background: DARK, color: CREAM }}>
      <Nav />
      <section style={{ maxWidth: 1160, margin: '0 auto', padding: '8.5rem 2rem 6rem' }}>
        <a href="#projects" style={{ color: LIME, fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>← Back to projects</a>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', flexWrap: 'wrap', margin: '1.8rem 0 2.5rem' }}>
          <div>
            <p style={{ color: LIME, fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 0.8rem' }}>{project.category}</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.05em', lineHeight: 0.95, margin: 0 }}>{project.title}</h1>
          </div>
          <span style={{ color: MID, fontSize: '0.9rem', paddingBottom: '0.35rem' }}>{project.year}</span>
        </div>

        {project.video && (
          <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', background: '#111', boxShadow: '0 24px 70px rgba(0,0,0,0.32)', margin: '0 auto' }}>
            <video ref={videoRef} autoPlay loop controls playsInline preload="auto" poster={project.img} style={{ width: '100%', display: 'block', aspectRatio: '16 / 9', background: '#090909' }}>
              <source src={project.video} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.35fr) minmax(250px, 0.65fr)', gap: '5rem', marginTop: '7rem' }} className="project-detail-grid">
          <section>
            <p style={{ color: LIME, fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Overview</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: 1.05, margin: '0 0 1.5rem' }}>{overviewHeadline}</h2>
            <p style={{ color: MID, fontSize: '1.02rem', lineHeight: 1.9, margin: 0 }}>{project.description}</p>
          </section>
          <aside style={{ borderLeft: `2px solid ${LIME}`, paddingLeft: '1.5rem', alignSelf: 'start' }}>
            <p style={{ color: CREAM, fontWeight: 700, margin: '0 0 0.7rem' }}>Project type</p>
            <p style={{ color: MID, lineHeight: 1.65, margin: 0 }}>{project.category}</p>
          </aside>
        </div>

        <section style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '6rem', paddingTop: '4rem' }}>
          <p style={{ color: LIME, fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Features</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', margin: '0 0 2rem' }}>What it can do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.1)' }}>
            {project.features.map((feature, index) => <div key={feature} style={{ background: '#101010', padding: '1.8rem' }}><span style={{ color: LIME, fontSize: '0.75rem', fontWeight: 800 }}>0{index + 1}</span><p style={{ margin: '1.2rem 0 0', color: CREAM, fontSize: '0.98rem', lineHeight: 1.55 }}>{feature}</p></div>)}
          </div>
        </section>

        <section style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '6rem', paddingTop: '4rem' }}>
          <p style={{ color: LIME, fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Tech stack</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '0 0 2rem' }}>The tools behind it</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>{project.stack.map((tech) => <span key={tech} style={{ border: '1px solid rgba(205,255,55,0.45)', color: CREAM, padding: '0.7rem 1rem', fontSize: '0.85rem', fontWeight: 700 }}>{tech}</span>)}</div>
        </section>
      </section>
    </main>
  )
}