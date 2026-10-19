export default function Section({ id, eyebrow, title, lead, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        {(eyebrow || title || lead) && (
          <header className="section-head" data-reveal>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {lead && <p className="section-lead">{lead}</p>}
          </header>
        )}
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
