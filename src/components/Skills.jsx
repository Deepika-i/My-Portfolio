import { useEffect, useRef, useState } from 'react'
import { SKILLS, EDGES } from '../data.jsx'
import Reveal from './Reveal.jsx'
import { RM } from '../utils.js'

function Skills() {
  const wrap = useRef(null), nodes = useRef([]), lines = useRef([])
  const [sel, setSel] = useState(null)
  const def = 'Tap a skill to see my comfort level'

  useEffect(() => {
    let raf
    const upd = () => {
      const r = wrap.current.getBoundingClientRect()
      const p = nodes.current.map(e => {
        const q = e.querySelector('i').getBoundingClientRect()
        return [q.left - r.left + q.width / 2, q.top - r.top + q.height / 2]
      })
      EDGES.forEach(([a, b], k) => [0, 1].forEach(j => {
        const l = lines.current[k * 2 + j]
        if (!l) return
        l.setAttribute('x1', p[a][0]); l.setAttribute('y1', p[a][1])
        l.setAttribute('x2', p[b][0]); l.setAttribute('y2', p[b][1])
      }))
      if (!RM) raf = requestAnimationFrame(upd)
    }
    upd(); addEventListener('resize', upd)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', upd) }
  }, [])

  const onMove = e => nodes.current.forEach(s => {
    const q = s.getBoundingClientRect()
    const dx = e.clientX - (q.left + q.width / 2), dy = e.clientY - (q.top + q.height / 2)
    const f = Math.max(0, 1 - Math.hypot(dx, dy) / 160)
    s.style.setProperty('--mx', dx * f * 0.35 + 'px'); s.style.setProperty('--my', dy * f * 0.35 + 'px')
    s.classList.toggle('near', f > 0.55)
  })
  const onLeave = () => nodes.current.forEach(s => {
    s.style.setProperty('--mx', '0px'); s.style.setProperty('--my', '0px'); s.classList.remove('near')
  })
  const toggle = i => setSel(sel === i ? null : i)

  return (
    <Reveal id="skills">
      <h2>SKILLS</h2>
      <div className="skillwrap" ref={wrap} onPointerMove={RM ? undefined : onMove} onPointerLeave={RM ? undefined : onLeave}>
        <svg className="net" aria-hidden="true">
          {EDGES.flatMap(([a, b], k) => ['ln', 'ln pulse'].map((c, j) => (
            <line key={`${k}-${j}`} ref={el => (lines.current[k * 2 + j] = el)} className={c} pathLength="100" style={{ '--k': k }} />
          )))}
        </svg>
        {SKILLS.map((s, i) => (
          <div key={s.n} ref={el => (nodes.current[i] = el)}
            className={'sk' + (sel === i ? ' sel' : '')} role="button" tabIndex={0} aria-pressed={sel === i}
            style={{ left: s.x + '%', top: s.y + '%', '--g': s.g, '--dl': s.dl + 's', '--i': i }}
            onClick={() => toggle(i)}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i) } }}>
            <i>{s.i}</i>{s.n}
            <span className="pct" aria-hidden="true"><b style={{ '--w': s.lv + '%' }} />{s.lv}%</span>
          </div>
        ))}
      </div>
      <p className="skhint" role="status">{sel === null ? def : `${SKILLS[sel].n} · ${SKILLS[sel].lv}%`}</p>
    </Reveal>
  )
}

export default Skills
