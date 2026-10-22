import { useEffect, useRef, useState } from 'react'

function Reveal({ id, children }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined' || !ref.current) return undefined

    const io = new window.IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <section id={id} ref={ref} className={'rv' + (shown ? ' in' : '')}>{children}</section>
}

export default Reveal
