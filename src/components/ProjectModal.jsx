import { useEffect, useRef, useState } from 'react'
import { asset } from '../utils/asset'
import { ArrowUpRightIcon, CloseIcon, GithubIcon, LayersIcon } from './Icons'

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setActiveImage(0)
  }, [project])

  useEffect(() => {
    if (!project) return undefined
    const panel = panelRef.current
    const previouslyFocused = document.activeElement

    panel?.querySelector('[data-autofocus]')?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key === 'Tab' && panel) {
        const nodes = Array.from(panel.querySelectorAll(FOCUSABLE))
        if (nodes.length === 0) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [project, onClose])

  if (!project) return null

  const cover = project.images[activeImage]

  return (
    <div className="modal" role="presentation" onMouseDown={onClose}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        ref={panelRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close icon-btn"
          onClick={onClose}
          aria-label="Close project details"
          data-autofocus
        >
          <CloseIcon size={20} />
        </button>

        <div className="modal__scroll">
          <header className="modal__head">
            <p className="modal__cat">
              {project.category} · {project.year}
            </p>
            <h3 className="modal__title" id="project-modal-title">
              {project.name}
            </h3>
            <p className="modal__tagline">{project.tagline}</p>
          </header>

          <div className="modal__gallery">
            <div className="modal__media">
              {cover ? (
                <img src={asset(cover.src)} alt={cover.alt} />
              ) : (
                <span className="modal__media-empty">
                  <LayersIcon size={34} />
                  No screenshots available for this project.
                </span>
              )}
            </div>
            {project.images.length > 1 && (
              <div className="modal__thumbs" role="tablist" aria-label="Project screenshots">
                {project.images.map((image, index) => (
                  <button
                    type="button"
                    key={image.src}
                    role="tab"
                    aria-selected={index === activeImage}
                    className={`modal__thumb ${index === activeImage ? 'is-active' : ''}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={asset(image.src)} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="modal__content">
            <div className="modal__main">
              <section className="modal__block">
                <h4>Overview</h4>
                <p>{project.summary}</p>
              </section>

              <section className="modal__block">
                <h4>Problem</h4>
                <p>{project.problem}</p>
              </section>

              <section className="modal__block">
                <h4>Implementation</h4>
                <ul className="bullet-list">
                  {project.implementation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="modal__block">
                <h4>Engineering challenges</h4>
                <p>{project.challenges}</p>
              </section>

              <section className="modal__block">
                <h4>Outcome</h4>
                <p>{project.outcome}</p>
              </section>
            </div>

            <aside className="modal__side">
              <h4>Tech stack</h4>
              <div className="tags tags--tight">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {(project.links.github || project.links.live) && (
                <div className="modal__links">
                  {project.links.github && (
                    <a
                      className="btn btn--outline btn--sm"
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <GithubIcon size={16} />
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      className="btn btn--primary btn--sm"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <ArrowUpRightIcon size={16} />
                      Live demo
                    </a>
                  )}
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}
