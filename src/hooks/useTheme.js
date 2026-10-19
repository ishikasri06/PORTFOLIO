import { useCallback, useEffect, useState } from 'react'

function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark'
  const current = document.documentElement.getAttribute('data-theme')
  return current === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0c10' : '#f7f8fb')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable — non-critical */
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
