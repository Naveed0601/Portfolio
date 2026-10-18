import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { pillars } from '../data'

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap aboutgrid">
        <Reveal dir="left">
          <h2>About</h2>
          <p>I'm a Java backend–leaning full stack developer with 1.8+ years of experience building web applications with Java, Spring Boot, React.js, Node.js and PostgreSQL/MongoDB.</p>
          <p>My work centres on production-oriented REST APIs, authentication and authorization, and database-driven systems — with a focus on backend architecture, performance, maintainability and scalable design.</p>
          <p>I'm based in Hyderabad and currently building marketplace and product-configuration features at Innovacx.</p>
        </Reveal>
        <div className="pillars">
          {pillars.map(([title, text], i) => (
            <Reveal key={title} dir="right" delay={i * 0.1}>
              <motion.div className="pillar" whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                <b>{title}</b>
                <span>{text}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
