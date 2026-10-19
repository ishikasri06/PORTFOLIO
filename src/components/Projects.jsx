import Section from './Section'
import { projects } from '../data/projects'
import { asset } from '../utils/asset'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LayersIcon,
} from './Icons'

export default function Projects({ onOpenProject }) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      lead="Full-stack applications, distributed systems, and data-engineering pipelines."
    >
      <div className="projects">
        {projects.map((project) => {
          const cover = project.images[0]
          return (
            <article className="proj-card" key={project.id} data-reveal>
              <button
                type="button"
                className="proj-card__media"
                onClick={() => onOpenProject(project)}
                aria-label={`View details for ${project.name}`}
              >
                {cover ? (
                  <img
                    src={asset(cover.src)}
                    alt={cover.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="proj-card__placeholder" aria-hidden="true">
                    <LayersIcon size={30} />
                    {project.category}
                  </span>
                )}
                <span className="proj-card__open">View details</span>
              </button>

              <div className="proj-card__body">
                <div className="proj-card__topline">
                  <span className="proj-card__cat">{project.category}</span>
                  <span className="proj-card__year">{project.year}</span>
                </div>

                <h3 className="proj-card__name">{project.name}</h3>
                <p className="proj-card__tagline">{project.tagline}</p>

                <div className="tags tags--tight">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="tag tag--muted">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>

                <div className="proj-card__actions">
                  <button
                    type="button"
                    className="btn btn--sm btn--ghost"
                    onClick={() => onOpenProject(project)}
                  >
                    Case study
                    <ArrowRightIcon size={16} />
                  </button>

                  {project.links.github && (
                    <a
                      className="icon-link"
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.name} on GitHub`}
                    >
                      <GithubIcon size={17} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      className="icon-link"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.name} live demo`}
                    >
                      <ArrowUpRightIcon size={17} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
