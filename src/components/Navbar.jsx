import { useEffect, useState } from 'react'
import { navItems, spyIds } from '../data/nav'
import { profile, resumeUrl } from '../data/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { asset } from '../utils/asset'
import {
  CloseIcon,
  DownloadIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from './Icons'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(spyIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const resumeHref = asset(resumeUrl)
  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#hero" className="brand" onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand__name">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? 'is-active' : ''}`}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          <a className="btn btn--outline btn--sm nav__resume" href={resumeHref} download>
            <DownloadIcon size={16} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className="icon-btn nav__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`nav__mobile ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile" className="nav__mobile-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__mobile-link ${active === item.id ? 'is-active' : ''}`}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary nav__mobile-resume" href={resumeHref} download onClick={close}>
          <DownloadIcon size={18} />
          <span>Download Resume</span>
        </a>
      </div>
    </header>
  )
}
