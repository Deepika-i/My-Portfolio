import { useEffect, useState } from 'react'
import Stars from './components/Stars.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') return undefined

    // Track which sections are visible and pick the one closest to the top
    const visible = new Map()

    const so = new window.IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          visible.set(e.target.id, e.boundingClientRect.top)
        } else {
          visible.delete(e.target.id)
        }
      })
      if (visible.size === 0) return
      // Pick the section whose top edge is closest to (but still below) the top of the viewport
      const topmost = [...visible.entries()].reduce((a, b) => Math.abs(a[1]) < Math.abs(b[1]) ? a : b)
      setActive(topmost[0])
    }, { threshold: 0.3 })

    document.querySelectorAll('section[id]').forEach(s => so.observe(s))

    // placeholder "#" links should not jump to the top of the page
    const stop = e => { if (e.target.closest('a[href="#"]')) e.preventDefault() }
    document.addEventListener('click', stop)
    return () => { so.disconnect(); document.removeEventListener('click', stop) }
  }, [])

  return (
    <>
      <Stars />
      <Nav active={active} setActive={setActive} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </main>
      <footer>© 2026 Deepika. All rights reserved.</footer>
    </>
  )
}
