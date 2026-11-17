import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
    return (
        <header className="hero">
            <h1 className="hero-title">
                <span>KAMIL</span>
                <span>KULA</span>
            </h1>
            {/* Jedno zdanie o tym, kim jesteś — czytelne od razu, nie tylko w obróconej naklejce */}
            <p className="hero-tagline">
                <span className="hero-role">Product Designer</span>
                UI/UX · brand identity · art direction — Wrocław
            </p>
            <Link to="/#projects" className="hero-cta btn-hard-light">See projects ↓</Link>
        </header>
    )
}
