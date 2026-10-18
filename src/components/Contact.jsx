import Reveal from './Reveal'
import { profile } from '../data'

const fields = [
  ['email', profile.email, `mailto:${profile.email}`],
  ['phone', profile.phone, profile.phoneHref],
  ['linkedin', 'linkedin.com/in/naveed06', profile.linkedin],
  ['github', 'github.com/Naveed0601', profile.github],
  ['leetcode', 'leetcode.com/u/naveed_6', profile.leetcode],
  ['location', 'Hyderabad, India', null],
]

export default function Contact() {
  return (
    <section className="sec theme-dark" id="contact">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Contact</h2>
          <p>Open to Java backend and full-stack roles — happy to talk through any of the projects above in more depth.</p>
        </Reveal>
        <div className="contactgrid">
          {fields.map(([k, label, href], i) => (
            <Reveal key={k} dir="right" delay={(i % 2) * 0.08} className="cfield">
              <span className="k">"{k}"</span>
              {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{label}</a> : label}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
