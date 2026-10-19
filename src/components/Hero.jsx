import { profile, resumeUrl, socials } from '../data/profile'
import { asset } from '../utils/asset'
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from './Icons'

const stats = [
  { value: '2.96M', label: 'records processed with PySpark' },
  { value: '15–20%', label: 'matching coverage gained at Amazon' },
  { value: '500+', label: 'DSA problems solved' },
  { value: '95.17%', label: 'NLP classification accuracy' },
]

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
}

export default function Hero() {
  const [before, after] = profile.headline.split('data systems')
  const resumeHref = asset(resumeUrl)

  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <p className="hero__status">
            <span className="dot" aria-hidden="true" />
            Data Engineer I at KPI Partners · ex-Amazon SDE Intern
          </p>

          <h1 className="hero__title">
            {before}
            <span className="text-grad">data systems</span>
            {after}
          </h1>

          <p className="hero__lead">{profile.intro[0]}</p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              View Projects
              <ArrowRightIcon size={18} />
            </a>
            <a className="btn btn--ghost" href={resumeHref} download>
              <DownloadIcon size={18} />
              Download Resume
            </a>
          </div>

          <div className="hero__socials" aria-label="Profiles">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon] ?? MailIcon
              return (
                <a
                  key={s.id}
                  className="chip-link"
                  href={s.url}
                  target={s.id === 'email' ? undefined : '_blank'}
                  rel={s.id === 'email' ? undefined : 'noreferrer noopener'}
                >
                  <Icon size={16} />
                  <span>{s.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        <aside className="hero__card" data-reveal>
          <div className="profile-card">
            <div className="profile-card__top">
              <span className="profile-card__avatar" aria-hidden="true">
                {profile.initials}
              </span>
              <div>
                <p className="profile-card__name">{profile.name}</p>
                <p className="profile-card__role">{profile.role}</p>
              </div>
            </div>

            <p className="profile-card__loc">
              <MapPinIcon size={15} />
              {profile.location}
            </p>

            <div className="profile-card__divider" />

            <ul className="profile-card__list">
              <li>Backend services &amp; APIs</li>
              <li>Distributed data pipelines</li>
              <li>Analytics &amp; machine learning</li>
            </ul>
          </div>

          <div className="hero__stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.value}>
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
