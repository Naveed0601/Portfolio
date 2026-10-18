import Reveal from './Reveal'
import { jobs } from '../data'

export default function Experience() {
  return (
    <section className="sec" id="experience" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <h2>Experience</h2>
          <p>Backend-leaning full stack work across two product teams and an internship.</p>
        </Reveal>
        {jobs.map((job) => (
          <Reveal key={job.role + job.org} dir="left" className="job">
            <div className="jobwhen">{job.when}</div>
            <div>
              <div className="jobrole">{job.role}</div>
              <div className="joborg">{job.org}</div>
              {job.groups.map((g, gi) => (
                <div key={gi}>
                  {g.name && <div className="sub">{g.name}</div>}
                  <ul className="bul">
                    {g.items.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
