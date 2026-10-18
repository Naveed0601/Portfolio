import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Languages &amp; technologies</h2>
          <p>Grouped by where they sit in the stack — not a claim of equal depth across all of them.</p>
        </Reveal>
        <div className="skillgrid">
          {skills.map(([group, items], i) => (
            <Reveal key={group} dir="scale" delay={(i % 3) * 0.08}>
              <motion.div className="skillcard" whileHover={{ y: -3 }}>
                <h4>{group}</h4>
                <div>
                  {items.map((t) => (
                    <motion.span key={t} className="chip" whileHover={{ y: -2, scale: 1.04 }}>{t}</motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
