import { useEffect, useState } from 'react'
import { ROLES } from '../data.jsx'
import { RM } from '../utils.js'

function Typed() {
  const [text, setText] = useState('')
  useEffect(() => {
    if (RM) { setText(ROLES[0]); return }
    let wi = 0, ci = 0, del = false, t
    const tick = () => {
      const w = ROLES[wi]
      setText(w.slice(0, ci))
      if (!del && ci === w.length) { del = true; t = setTimeout(tick, 1600); return }
      if (del && ci === 0) { del = false; wi = (wi + 1) % ROLES.length }
      ci += del ? -1 : 1
      t = setTimeout(tick, del ? 40 : 90)
    }
    tick()
    return () => clearTimeout(t)
  }, [])
  return <span className="typed">{text}</span>
}

export default Typed
