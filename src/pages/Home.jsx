import Hero from '../components/Hero.jsx'
import ProjectTiles from '../components/ProjectTiles.jsx'
import { projects, logofolio, homeGrid } from '../data/projects.js'
import { LINKS } from '../data/links.js'
import './home.css'

export default function Home() {
    return (
        <main className="home">
            <Hero />

            <ProjectTiles projects={projects} logos={logofolio} order={homeGrid} />

            <footer id="contact" className="contact-section halftone side-pad">
                <div className="contact-label">contact</div>
                <h2 className="contact-title h-display">Let's work together</h2>
                <p className="contact-text">Open to internships, freelance and collaborations.</p>
                <div className="contact-ctas">
                    {LINKS.email && <a href={`mailto:${LINKS.email}`} className="btn-hard-light">{LINKS.email}</a>}
                    <a href={LINKS.linkedin} className="btn-hard-light" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={LINKS.github} className="btn-hard-light" target="_blank" rel="noreferrer">GitHub</a>
                    <a href={LINKS.cv} className="btn-hard-light" target="_blank" rel="noreferrer">CV</a>
                </div>
                <p className="contact-copy">© {new Date().getFullYear()} Kamil Kula</p>
            </footer>
        </main>
    )
}