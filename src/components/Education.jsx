import Section from './Section'
import { achievements, education } from '../data/education'
import { AwardIcon, GraduationIcon } from './Icons'

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Achievements"
      title="Foundations and recognition"
    >
      <div className="edu">
        <div className="edu__col">
          {education.map((item) => (
            <article className="edu-card" key={item.institution} data-reveal>
              <span className="edu-card__icon" aria-hidden="true">
                <GraduationIcon size={20} />
              </span>
              <div>
                <h3>{item.institution}</h3>
                <p className="edu-card__degree">{item.degree}</p>
                <p className="edu-card__meta">
                  {item.period} · {item.score}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="edu__col">
          {achievements.map((item) => (
            <article className="edu-card" key={item.title} data-reveal>
              <span className="edu-card__icon" aria-hidden="true">
                <AwardIcon size={20} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p className="edu-card__meta">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
