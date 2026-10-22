import { NAV } from '../data.jsx'

function Nav({ active, setActive }) {
  return (
    <nav>
      <a className="logo" href="#top" onClick={() => setActive('top')}>Deepika.</a>
      <ul>
        {NAV.map(([id, label]) => (
          <li key={id}>
            <a
              href={'#' + id}
              className={active === id ? 'on' : ''}
              onClick={() => setActive(id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a className="pill" href="#contact" onClick={() => setActive('contact')}>Let's talk →</a>
    </nav>
  )
}

export default Nav
