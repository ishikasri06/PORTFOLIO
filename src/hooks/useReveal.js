import { useEffect } from 'react'

// Adds `.is-visible` to every `[data-reveal]` element as it scrolls into view.
// When the user prefers reduced motion, elements are revealed immediately.
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
