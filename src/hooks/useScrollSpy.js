import { useEffect, useState } from 'react'

// Returns the id of the section currently in view. `ids` must be a stable
// (module-level) array so the effect is not re-created on every render.
export function useScrollSpy(ids, offset = 90) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + offset
      let current = ids[0] ?? ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) current = id
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      if (atBottom) current = ids[ids.length - 1]

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, offset])

  return active
}
