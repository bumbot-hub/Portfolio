import Hero from '../components/Hero.jsx'
import Card from '../components/Card.jsx'
import MediaBlock from '../components/MediaBlock.jsx'
import { projects, logofolio } from '../data/projects.js'

const bigProjects = projects.filter((p) => p.size === 'big')
const smallProjects = projects.filter((p) => p.size === 'small')
const logos = logofolio;

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="projects" className="projects-section side-pad">
        <div className="section-label mono">projekty</div>
        {bigProjects.map((project, i) => (
          <Card key={project.slug} index={i + 1} reverse={i % 2 === 1} {...project} />
        ))}
      </section>

      <section className="grid-section side-pad">
        <div className="section-label mono">pozostałe</div>
        <div className="small-grid">
          {smallProjects.map((project) => (
            <Card key={project.slug} {...project} />
          ))}
        </div>
      </section>


      <section id="logofolio" className="side-pad" style={{ minHeight: '40vh' }}>
        <div className="section-label mono">logofolio</div>
        <div className="logo-grid">
          {logos.map((logo, i) => (
            <MediaBlock key={i} size="logo" src={logo.image} label={logo.name} />
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-section halftone side-pad" style={{ minHeight: '40vh' }}>
        <div className="contact-label mono">kontakt</div>
      </footer>
    </main>
  )
}