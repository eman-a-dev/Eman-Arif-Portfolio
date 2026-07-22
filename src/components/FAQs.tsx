import { useState } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'
import { LIME, CREAM, MID, DARK } from '../lib/theme'

const QUESTIONS: [string, string][] = [
  [
    "What's your workflow?",
    "Every project starts with understanding your requirements, followed by planning, design review (or Figma handoff), development, testing, revisions, and final delivery. I keep the process transparent and provide updates throughout the project.",
  ],
  [
    "Can you convert my Figma design into a website?",
    "Yes. I convert Figma designs into responsive, production-ready websites with clean, maintainable code while keeping the design as accurate as possible.",
  ],
  [
  "How long does a project usually take?",
  "Timelines depend on the project scope. Landing pages typically take 3–7 days, full-stack web applications usually take 2–6 weeks, and social media designs are often delivered within 1–3 days, depending on the number of creatives and revisions.",
  ],
  [
    "What technologies do you work with?",
    "I primarily work with React, Next.js, TypeScript, Node.js, Express.js, MySQL, and Supabase (PostgreSQL) to build modern landing pages and full-stack web applications.",
  ],
  [
    "Can you help with social media design?",
    "Yes. I also create clean and engaging social media graphics that align with your brand and help maintain a consistent online presence.",
  ],
  [
    "What's the best way to get started?",
    "Send me your project details, design files (if available), or even just your idea through the contact form. I'll review everything and get back to you as soon as possible.",
  ],
]

export default function FAQs() {
  const leftRef = useGsapReveal<HTMLDivElement>('left')
  const rightRef = useGsapReveal<HTMLDivElement>('right', 0.1)
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faqs" style={{ background: '#111', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div
        className="rotate-slow"
        style={{ position: 'absolute', bottom: -100, left: -100, width: 320, height: 320, border: '1px solid rgba(212,242,68,0.08)', borderRadius: '50%', pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '340px 1fr', gap: '5rem', alignItems: 'start' }} className="col-2">
        <div ref={leftRef} style={{ position: 'sticky', top: 100 }}>
          <div className="tag-pill" style={{ marginBottom: '1.25rem' }}>FAQs</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: CREAM, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Common
            <br />
            <em style={{ color: LIME }}>questions</em>
          </h2>
          <p style={{ fontSize: '0.9rem', color: MID, lineHeight: 1.75 }}>
            Still wondering about something? Reach out! I reply to all serious enquiries within 24 hours.
          </p>
        </div>

        <div ref={rightRef}>
          {QUESTIONS.map(([q, a], i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.6rem 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '1rem',
                }}
              >
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, color: open === i ? LIME : CREAM, lineHeight: 1.4, transition: 'color 0.25s' }}>
                  {q}
                </span>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    border: `1px solid ${open === i ? LIME : 'rgba(255,255,255,0.18)'}`,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s',
                    background: open === i ? LIME : 'transparent',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                    <path d="M2 4l4 4 4-4" stroke={open === i ? DARK : CREAM} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
              <div className={`faq-body ${open === i ? 'open' : ''}`} style={{ paddingBottom: open === i ? '1.5rem' : 0 }}>
                <p style={{ fontSize: '0.88rem', color: MID, lineHeight: 1.8, margin: 0 }}>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
