import { useEffect, useRef } from 'react'
import { RM } from '../utils.js'

function Stars() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d')
    let W, H, S = [], sh = [], raf
    const rs = () => {
      W = c.width = innerWidth; H = c.height = innerHeight
      S = Array.from({ length: Math.min(220, W / 5) }, () => ({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + 0.2,
        p: Math.random() * 6, s: Math.random() * 0.02 + 0.005,
        k: Math.random() < 0.3 ? '255,150,190' : '255,255,255',
      }))
    }
    const draw = () => {
      x.clearRect(0, 0, W, H)
      for (const s of S) {
        s.p += s.s
        x.fillStyle = `rgba(${s.k},${0.35 + 0.5 * Math.sin(s.p) ** 2})`
        x.beginPath(); x.arc(s.x, s.y, s.r, 0, 7); x.fill()
        s.y += 0.04; if (s.y > H) s.y = 0
      }
      if (Math.random() < 0.008) sh.push({ x: Math.random() * W, y: Math.random() * H * 0.5, l: 0 })
      sh = sh.filter(m => m.l < 40)
      for (const m of sh) {
        m.l++; m.x += 9; m.y += 4
        const g = x.createLinearGradient(m.x, m.y, m.x - 90, m.y - 40)
        g.addColorStop(0, 'rgba(255,200,220,.9)'); g.addColorStop(1, 'transparent')
        x.strokeStyle = g; x.lineWidth = 1.5
        x.beginPath(); x.moveTo(m.x, m.y); x.lineTo(m.x - 90, m.y - 40); x.stroke()
      }
      if (!RM) raf = requestAnimationFrame(draw)
    }
    rs(); draw()
    addEventListener('resize', rs)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', rs) }
  }, [])
  return <canvas id="stars" ref={ref} aria-hidden="true" />
}

export default Stars
