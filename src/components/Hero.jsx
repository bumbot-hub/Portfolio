import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { scramble } from '../lib/scramble.js'
import './Hero.css'

// Role pokazane jako tagi pod imieniem — dopisz/usuń dowolnie.
const roles = ['Product Designer', 'UI/UX Designer', 'Art Director']

export default function Hero() {
    const titleRef = useRef(null)

    // tytuł „dekoduje się” z losowych znaków, jak tytuły podstron
    useLayoutEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const lines = titleRef.current?.querySelectorAll('span') ?? []
        const tweens = Array.from(lines, (el, i) => scramble(el, { duration: 1.2, delay: 0.15 + i * 0.25 }))
        return () => tweens.forEach((t) => t?.kill())   // kill → onInterrupt przywraca gotowy napis
    }, [])

    return (
        <header className="hero blueprint side-pad">
            <div className="hero-inner">
                <h1 className="hero-title" ref={titleRef} aria-label="Kamil Kula">
                    <span aria-hidden="true">KAMIL</span>
                    <span aria-hidden="true">KULA</span>
                </h1>
                <div className="hero-bottom">
                    <div className="hero-info">
                        <ul className="hero-roles" aria-label="Roles">
                            {roles.map((r) => <li key={r} className="tag-hard mono">{r}</li>)}
                        </ul>
                        <p className="hero-tagline">UI/UX · brand identity · art direction — Wrocław</p>
                    </div>
                    <Link to="/#projects" className="hero-cta btn-hard mono">See projects ↓</Link>
                </div>
            </div>
        </header>
    )
}
