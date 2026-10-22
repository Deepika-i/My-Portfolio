import { SERVICES } from '../data.jsx'
import Reveal from './Reveal.jsx'

const Services = () => (
  <Reveal id="services">
    <h2>SERVICES</h2>
    <div className="route">
      {SERVICES.map(s => (
        <article className="stop" tabIndex={0} key={s.t}>
          <span className="ic"><svg viewBox="0 0 24 24"><path d={s.p} /></svg></span>
          <h3>{s.t}</h3><p>{s.d}</p>
          <ul>{s.l.map(x => <li key={x}>{x}</li>)}</ul>
        </article>
      ))}
    </div>
  </Reveal>
)

export default Services
