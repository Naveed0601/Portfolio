import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { profile, stats } from '../data'
import Terminal from './Terminal'
import CountUp from './CountUp'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }
const btnMotion = { whileHover: { y: -2 }, whileTap: { scale: 0.97 } }

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <header className="hero theme-dark" id="top" ref={ref}>
      <motion.div className="glow" style={{ y: reduce ? 0 : glowY }} />
      <div className="wrap herogrid">
        <motion.div variants={container} initial={reduce ? 'show' : 'hidden'} animate="show" style={{ y: reduce ? 0 : textY }}>
          <motion.div variants={item} className="role">{profile.role}</motion.div>
          <motion.h1 variants={item}>{profile.name}</motion.h1>
          <motion.p variants={item} className="lede">
            I build scalable, production-oriented systems with Java, Spring Boot and PostgreSQL, and the React front ends that sit on top of them. 1.8+ years shipping backend architecture, authentication and database-driven features for real users.
          </motion.p>
          <motion.div variants={item} className="btnrow">
            <motion.a {...btnMotion} className="btn primary" href={`mailto:${profile.email}`}>Email me</motion.a>
            <motion.a {...btnMotion} className="btn ghost" href={profile.resume} download="Mohd_Abdul_Naveed_Resume.pdf">Download résumé</motion.a>
            <motion.a {...btnMotion} className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</motion.a>
            <motion.a {...btnMotion} className="btn ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</motion.a>
          </motion.div>
          <motion.div variants={item} className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <Terminal />
      </div>
      <a className="scrollcue" href="#about">scroll<i /></a>
    </header>
  )
}
