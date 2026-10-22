import { useEffect, useRef } from 'react'
import { SOCIALS } from '../data.jsx'
import Typed from './Typed.jsx'
import Planet from './Planet.jsx'
import { RM } from '../utils.js'

function Hero() {
  const sys = useRef(null)
  useEffect(() => {
    if (RM || !sys.current) return undefined
    const move = e => {
      const px = (e.clientX / window.innerWidth - 0.5) * 10, py = (e.clientY / window.innerHeight - 0.5) * -10
      sys.current.style.transform = `perspective(900px) rotateY(${px}deg) rotateX(${py}deg)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <section className="hero" id="top">
      <div>
        <div className="hello">HELLO, I'M</div>
        <h1>Deepika<i>✦</i></h1>
        <div className="role"><Typed /></div>
        <p>I'm a passionate full-stack developer who builds beautiful, responsive and user-friendly web experiences. I love turning ideas into real, interactive products.</p>
        <div className="btns"><a className="pill fill" href="#projects">View my work →</a>
        <a
          className="pill"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume ↗
        </a></div>
        <div className="socials">
          {SOCIALS.map(([label, href, icon]) => <a key={label} href={href} aria-label={label}><svg viewBox="0 0 24 24">{icon}</svg></a>)}
        </div>
      </div>
      <div className="profile" ref={sys}>
        <div className="pf-glow" />
        <div className="pf-frame"><div className="pf-img"><img alt="Deepika" src="/photo.webp" /></div></div>
        <Planet className="pl-a" />
        <Planet className="pl-b" />
        <span className="pf-chip pf-a"><span className="pf-ic">{'</>'}</span><span><b>Web</b> developer</span></span>
        <span className="pf-chip pf-live"><i />Open to work</span>
      </div>
    </section>
  )
}

export default Hero
