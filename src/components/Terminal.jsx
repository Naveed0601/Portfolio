import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const lines = [
  { t: 'get', h: 'GET /api/v1/engineers/naveed' },
  { t: 'ok', h: '200 OK' },
  { t: 'plain', h: '{' },
  { t: 'kv', k: '"role"', v: '"Java Backend / Full Stack Developer"' },
  { t: 'kv', k: '"experience_years"', v: '1.8' },
  { t: 'kv', k: '"stack"', v: '["Java", "Spring Boot", "React", "PostgreSQL"]' },
  { t: 'kv', k: '"focus"', v: '"backend architecture, APIs, auth"' },
  { t: 'kv', k: '"status"', v: '"open_to_work"' },
  { t: 'plain', h: '}' },
]

function Line({ l }) {
  if (l.t === 'get') return <div><span className="get">{l.h}</span></div>
  if (l.t === 'ok') return <div style={{ opacity: 0.6, marginBottom: '1em' }}>{l.h}</div>
  if (l.t === 'plain') return <div>{l.h}</div>
  return <div>&nbsp;&nbsp;<span className="k">{l.k}</span>: <span className="s">{l.v}</span>,</div>
}

export default function Terminal() {
  const reduce = useReducedMotion()
  const [count, setCount] = useState(reduce ? lines.length : 0)

  useEffect(() => {
    if (reduce || count >= lines.length) return
    const id = setTimeout(() => setCount((c) => c + 1), count === 0 ? 400 : 110)
    return () => clearTimeout(id)
  }, [count, reduce])

  return (
    <motion.div
      className="term"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="termbar"><span /><span /><span /></div>
      <div className="termbody">
        {lines.slice(0, count).map((l, i) => <Line key={i} l={l} />)}
        {count >= lines.length && <span className="cursor" />}
      </div>
    </motion.div>
  )
}
