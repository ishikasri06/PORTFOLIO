import Section from './Section'
import { experience } from '../data/experience'
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from './Icons'

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      lead="Backend, platform, and data work on production systems."
    >
      <ol className="timeline">
        {experience.map((job) => (
          <li className="timeline__item" key={job.company} data-reveal>
            <span className="timeline__marker" aria-hidden="true">
              <BriefcaseIcon size={17} />
            </span>
            <article className="timeline__card">
              <div className="timeline__head">
                <div>
                  <h3 className="timeline__role">
                    {job.role}
                    {job.current && <span className="badge">Current</span>}
                  </h3>
                  <p className="timeline__company">{job.company}</p>
                </div>
                <div className="timeline__meta">
                  <span>
                    <CalendarIcon size={15} />
                    {job.period}
                  </span>
                  <span>
                    <MapPinIcon size={15} />
                    {job.location}
                  </span>
                </div>
              </div>

              <p className="timeline__summary">{job.summary}</p>

              <ul className="bullet-list">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="tags">
                {job.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
