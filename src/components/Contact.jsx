import Section from './Section'
import { profile, socials } from '../data/profile'
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
}

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something reliable"
      lead="The fastest way to reach me is email. I'm also on GitHub and LinkedIn."
    >
      <div className="contact" data-reveal>
        <a className="contact__primary" href={`mailto:${profile.email}`}>
          <span className="contact__icon" aria-hidden="true">
            <MailIcon size={22} />
          </span>
          <span className="contact__primary-text">
            <span className="contact__label">Email me</span>
            <span className="contact__value">{profile.email}</span>
          </span>
          <ArrowUpRightIcon size={20} />
        </a>

        <div className="contact__cards">
          {socials
            .filter((s) => s.id !== 'email')
            .map((s) => {
              const Icon = socialIcons[s.icon] ?? MailIcon
              return (
                <a
                  key={s.id}
                  className="contact-card"
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon size={22} />
                  <span className="contact-card__label">{s.label}</span>
                  <span className="contact-card__handle">{s.handle}</span>
                </a>
              )
            })}
        </div>
      </div>
    </Section>
  )
}
