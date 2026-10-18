import { Fragment } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { profile, finsight, reservation } from '../data'

const Tags = ({ tags }) => <div>{tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>

const SourceLink = () => (
  <a className="plink" href={profile.github} target="_blank" rel="noopener noreferrer">View source ↗</a>
)

const lift = { whileHover: { y: -3 }, transition: { type: 'spring', stiffness: 260, damping: 22 } }

export default function Work() {
  return (
    <section className="sec theme-dark" id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Featured work</h2>
          <p>FinSight is the project I'd point an engineering manager to first — the case study below covers the architecture, not just the feature list.</p>
        </Reveal>

        <Reveal dir="scale">
          <motion.div className="pcard" {...lift}>
            <div className="phead"><h3>{finsight.title}</h3><SourceLink /></div>
            <p className="ptagline">{finsight.tagline}</p>
            <Tags tags={finsight.tags} />

            <div className="flow">
              {finsight.flow.map((step, i) => (
                <Fragment key={step}>
                  <motion.div
                    className="flowbox"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.45 }}
                  >
                    {step}
                  </motion.div>
                  {i < finsight.flow.length - 1 && <div className="flowarrow">→</div>}
                </Fragment>
              ))}
            </div>

            <div className="casegrid">
              {finsight.blocks.map(([h, p]) => (
                <div className="caseblock" key={h}><h4>{h}</h4><p>{p}</p></div>
              ))}
            </div>
          </motion.div>
        </Reveal>

        <Reveal dir="scale">
          <motion.div className="pcard" {...lift}>
            <div className="phead"><h3>{reservation.title}</h3><SourceLink /></div>
            <p className="ptagline">{reservation.tagline}</p>
            <div style={{ marginBottom: 16 }}><Tags tags={reservation.tags} /></div>
            <ul className="bul">{reservation.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
