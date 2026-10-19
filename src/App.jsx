import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import BackToTop from './components/BackToTop'
import { useTheme } from './hooks/useTheme'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const { theme, toggle } = useTheme()
  const [activeProject, setActiveProject] = useState(null)
  useReveal()

  const closeProject = useCallback(() => setActiveProject(null), [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects onOpenProject={setActiveProject} />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <ProjectModal project={activeProject} onClose={closeProject} />
    </>
  )
}
