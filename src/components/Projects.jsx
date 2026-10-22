
import { useEffect, useRef, useState } from 'react'
import { PROJECTS } from '../data.jsx'
import Reveal from './Reveal.jsx'
import { RM, CAN_HOVER } from '../utils.js'

const dl = v => ({ '--dl': v })

function Bar({ children }) {
  return <div className="bar"><u /><u /><u /><em />{children}</div>
}

function Shot({ id }) {
  if (id === 'ecom') return (
    <div className="shot">
      <Bar><span className="cart">3</span></Bar>
      <div className="body prod">
        <div className="tile" />
        <div className="tile" style={dl('.5s')} />
        <div className="tile" style={dl('1s')} />
        <small>$49</small><small>$79</small><small>$35</small>
      </div>
    </div>
  )

  if (id === 'dash') return (
    <div className="shot">
      <Bar />
      <div className="body dash">
        <div className="side" />
        <div className="stats">
          <div className="tile" />
          <div className="tile" style={dl('.4s')} />
          <div className="tile" style={dl('.8s')} />
        </div>
        <div className="chart">
          {[40, 70, 55, 90, 65, 80].map((h, i) => (
            <s key={i} style={{ '--h': h + '%', '--dl': i * 0.2 + 's' }} />
          ))}
        </div>
      </div>
    </div>
  )

  if (id === 'port') return (
    <div className="shot">
      <Bar />
      <div className="body port">
        <div><i /><i /><i className="b" /><i /></div>
        <div className="av" />
      </div>
    </div>
  )

  return (
    <div className="shot wx">
      <div className="body wx">
        <div>
          <span className="sun">☀</span><b>28°C</b>Chennai
          <div className="fc" style={{ marginTop: 6 }}>
            <span>Mon</span><span>Tue</span><span>Wed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Tags = ({ list, className = '' }) => (
  <div className={'tags ' + className}>
    {list.map(t => <span key={t}>{t}</span>)}
  </div>
)

// Each project gets its own links from data.jsx
const Links = ({ p, className = '' }) => (
  <div className={'links ' + className}>
    {p?.liveUrl && (
      <a
        href={p.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
      >
        Live Demo ↗
      </a>
    )}

    {p?.githubUrl && (
      <a
        href={p.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
      >
        GitHub
      </a>
    )}
  </div>
)

function Card({ p, i, onOpen }) {
  const open = e => onOpen(p, e.currentTarget)

  const move = e => {
    const c = e.currentTarget
    const r = c.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height

    c.style.setProperty('--mx', px * 100 + '%')
    c.style.setProperty('--my', py * 100 + '%')
    c.style.setProperty('--ry', (px - 0.5) * 12 + 'deg')
    c.style.setProperty('--rx', (0.5 - py) * 12 + 'deg')
  }

  const leave = e => {
    e.currentTarget.style.setProperty('--rx', '0deg')
    e.currentTarget.style.setProperty('--ry', '0deg')
  }

  const tilt = !RM && CAN_HOVER

  return (
    <article
      className="card"
      style={{ '--i': i }}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      onClick={e => {
        if (!e.target.closest('.links a')) open(e)
      }}
      onKeyDown={e => {
        if (
          e.target === e.currentTarget &&
          (e.key === 'Enter' || e.key === ' ')
        ) {
          e.preventDefault()
          open(e)
        }
      }}
      onPointerMove={tilt ? move : undefined}
      onPointerLeave={tilt ? leave : undefined}
    >
      <Shot id={p.id} />
      <h3>{p.title}</h3>
      <p>{p.desc}</p>
      <Tags list={p.tags} />
      <span className="more">View details →</span>
      <Links p={p} />
    </article>
  )
}

function ProjectModal({ p, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current && typeof ref.current.showModal === 'function') {
      ref.current.showModal()
    }
  }, [])

  return (
    <dialog
      ref={ref}
      className="pm"
      aria-labelledby="pmT"
      onClose={onClose}
      onClick={e => {
        if (e.target === e.currentTarget) e.currentTarget.close()
      }}
    >
      <button
        className="pmx"
        type="button"
        aria-label="Close details"
        onClick={() => ref.current.close()}
      >
        ✕
      </button>

      <div className="pmshot"><Shot id={p.id} /></div>

      <div className="pmb">
        <h3 id="pmT">{p.title}</h3>
        <p className="pmr">{p.role}</p>
        <p className="pmd">{p.long}</p>

        <h4>Key features</h4>
        <ul className="pmf">
          {p.features.map(f => <li key={f}>{f}</li>)}
        </ul>

        <h4>Tech stack</h4>
        <Tags list={p.tags} className="pmt" />
        <Links p={p} className="pml" />
      </div>
    </dialog>
  )
}

function Projects() {
  const [active, setActive] = useState(null)
  const last = useRef(null)

  return (
    <Reveal id="projects">
      <h2>PROJECTS</h2>
      <div className="grid">
        {PROJECTS.map((p, i) => (
          <Card
            key={p.id}
            p={p}
            i={i}
            onOpen={(proj, el) => {
              last.current = el
              setActive(proj)
            }}
          />
        ))}
      </div>

      {active && (
        <ProjectModal
          p={active}
          onClose={() => {
            setActive(null)
            last.current?.focus()
          }}
        />
      )}
    </Reveal>
  )
}

export default Projects
    