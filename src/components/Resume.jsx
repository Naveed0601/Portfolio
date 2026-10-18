import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { profile } from '../data'

export default function Resume() {
  return (
    <section className="sec" id="resume">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Résumé &amp; education</h2>
          <p>The full one-page résumé, plus the short version.</p>
        </Reveal>
        <div className="resgrid">
          <Reveal dir="left" className="rescard">
            <div className="meta">PDF · 1 page</div>
            <h3>Mohd Abdul Naveed — Résumé</h3>
            <p>Experience at Innovacx and Marvix, FinSight and Restaurant Reservation projects, and full skills list.</p>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="btn primary" href={profile.resume} download="Mohd_Abdul_Naveed_Resume.pdf">Download résumé</motion.a>
          </Reveal>
          <Reveal dir="right" className="rescard">
            <div className="meta">June 2020 – July 2024</div>
            <h3>B.E. Computer Science</h3>
            <p>Lords Institute of Engineering and Technology, Hyderabad, India.</p>
            <div className="meta">Feb 2025 – Present</div>
            <h3 style={{ fontSize: '1rem' }}>Full Stack Developer, Innovacx</h3>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
