import Section from './Section'
import { skillGroups } from '../data/skills'
import { iconMap } from './iconMap'

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      lead="Grouped by the kind of work each tool is used for — no arbitrary proficiency scores."
    >
      <div className="skills">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon]
          return (
            <article className="skill-card" key={group.id} data-reveal>
              <div className="skill-card__head">
                <span className="skill-card__icon" aria-hidden="true">
                  {Icon && <Icon size={20} />}
                </span>
                <h3>{group.title}</h3>
              </div>
              <div className="tags tags--tight">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
