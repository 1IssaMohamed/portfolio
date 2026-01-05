import { useState, useEffect, lazy, Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CursorGlow from './components/CursorGlow'
import { useTheme } from './context/ThemeContext'

const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const { theme } = useTheme()

  useEffect(() => {
    console.log('👋 Hey there!')
    console.log('Curious about the code? github.com/1IssaMohamed')
  }, [])

  return (
    <ErrorBoundary>
      <CursorGlow />
      <div style={{ minHeight: '100vh', backgroundColor: theme.bgPrimary }}>
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <About />
          </Suspense>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <Suspense fallback={null}>
            <Projects />
          </Suspense>
          <Suspense fallback={null}>
            <Skills />
          </Suspense>
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}

export default App
