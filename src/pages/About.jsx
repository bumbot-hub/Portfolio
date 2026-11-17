import { LINKS } from '../data/links.js'
import './Subpage.css'

// Szkic — przepisz własnymi słowami.
export default function About() {
  return (
    <main className="page side-pad">
      <h1 className="page-title pixel">about_me</h1>
      <p className="page-lead">
        I'm Kamil — a product designer and Computer Engineering student at
        Wrocław University of Science and Technology. I design interfaces,
        brand identities and event visuals, and I can build what I design.
      </p>
      <section className="case-section">
        <h2 className="case-section-title pixel">What I do</h2>
        <p>UI/UX design · brand identity · art direction · frontend (React)</p>
      </section>
      <div className="contact-ctas">
        <a href={LINKS.cv} className="btn-hard mono page-btn" target="_blank" rel="noreferrer">Download CV</a>
        <a href={LINKS.linkedin} className="btn-hard mono page-btn" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </main>
  )
}
