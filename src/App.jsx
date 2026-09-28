import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Project from './pages/Project.jsx'

function ScrollManager() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [key])

  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="*" element={<p className="mono side-pad" style={{ padding: '160px 0' }}>404 — nie ma takiej strony.</p>} />
      </Routes>
    </>
  )
}