import { profile, socials } from '../data/profile'
import { navItems } from '../data/nav'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons'

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#hero" className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand__name">{profile.name}</span>
          </a>
          <p className="footer__tagline">
            Software, data systems, and intelligent applications.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {socials.map((s) => {
            const Icon = socialIcons[s.icon] ?? MailIcon
            return (
              <a
                key={s.id}
                href={s.url}
                target={s.id === 'email' ? undefined : '_blank'}
                rel={s.id === 'email' ? undefined : 'noreferrer noopener'}
                aria-label={s.label}
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <a href="#hero" className="footer__top">
          Back to top
        </a>
      </div>
    </footer>
  )
}
