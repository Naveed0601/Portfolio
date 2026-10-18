import { motion, useReducedMotion } from 'framer-motion'

const offsets = { up: { y: 24 }, left: { x: -44 }, right: { x: 44 }, scale: { scale: 0.94 } }

// Scroll-triggered entrance. dir: up | left | right | scale
export default function Reveal({ as = 'div', dir = 'up', delay = 0, className, children, ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, ...offsets[dir] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
