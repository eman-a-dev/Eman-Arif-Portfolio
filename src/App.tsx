import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Projects from './components/Projects'
import FAQs from './components/FAQs'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const match = hash.match(/^#\/projects\/([a-z0-9-]+)$/)
  if (match) return <ProjectDetails slug={match[1]} />

  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Projects />
      <FAQs />
      <CTA />
      <Footer />
    </>
  )
}
