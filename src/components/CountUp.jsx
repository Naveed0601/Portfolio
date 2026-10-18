import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, { duration: 0.9, ease: 'easeOut', onUpdate: setValue })
    return () => controls.stop()
  }, [inView, reduce, to])

  return <b ref={ref}>{value.toFixed(decimals)}{suffix}</b>
}
