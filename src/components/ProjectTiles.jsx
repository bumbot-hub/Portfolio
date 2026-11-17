import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProgressRail from './ProgressRail.jsx'

const BASE = import.meta.env.BASE_URL

// Wideo (mp4/webm) albo obrazek/GIF na kaflu; bez pliku — animowany placeholder.
function TileMedia({ src, label }) {
    if (!src) return <span className="tile-gif" aria-hidden="true"><span>[ {label} ]</span></span>
    const url = `${BASE}${src}`
    if (/\.(mp4|webm)$/i.test(src)) {
        return <video className="tile-media" src={url} autoPlay muted loop playsInline aria-hidden="true" />
    }
    return <img className="tile-media" src={url} alt="" loading="lazy" />
}

function ProjectTile({ project, rail }) {
    return (
        <Link
            to={`/projects/${project.slug}`}
            className={`tile tile--${project.tile} tone-${project.tone}`}
            data-name={project.heading}
            data-rail={rail}
        >
            <TileMedia src={project.media} label={project.imageLabel || project.heading} />
            <span className="tile-meta">
        <span className="tile-title h-display">{project.tileTitle || project.heading}</span>
      </span>
        </Link>
    )
}

function LogoTile({ logo, rail }) {
    const content = logo.image
        ? <img className="logo-img" src={`${BASE}${logo.image}`} alt={logo.name} loading="lazy" />
        : <span className="logo-placeholder h-display">{logo.name}</span>

    // Gdy podstrona logo będzie gotowa (page: true), kafel staje się linkiem.
    return logo.page ? (
        <Link to={`/logos/${logo.slug}`} className="tile tile--small tile--logo" data-name={`${logo.name} · logo`} data-rail={rail}>
            {content}
        </Link>
    ) : (
        <div className="tile tile--small tile--logo" data-name={`${logo.name} · logo`} data-soon="true" data-rail={rail}>
            {content}
        </div>
    )
}

// Układa projekty i logotypy w kolejności z `order` ('slug' albo 'logo:slug'); reszta trafia na koniec.
function buildItems(projects, logos, order) {
    const items = []
    const seen = new Set()
    order.forEach((key) => {
        const isLogo = key.startsWith('logo:')
        const slug = isLogo ? key.slice(5) : key
        const data = isLogo ? logos.find((l) => l.slug === slug) : projects.find((p) => p.slug === slug)
        if (data && !seen.has(key)) { items.push({ key, isLogo, data }); seen.add(key) }
    })
    projects.forEach((p) => { if (!seen.has(p.slug)) items.push({ key: p.slug, isLogo: false, data: p }) })
    logos.forEach((l) => { if (!seen.has(`logo:${l.slug}`)) items.push({ key: `logo:${l.slug}`, isLogo: true, data: l }) })
    return items
}

export default function ProjectTiles({ projects, logos = [], order = [] }) {
    const items = buildItems(projects, logos, order)
    const orderedProjects = items.filter((it) => !it.isLogo).map((it) => it.data)
    const sectionRef = useRef(null)
    const [tip, setTip] = useState(null) // { x, y, name, soon }
    const [progress, setProgress] = useState(0)
    const [active, setActive] = useState(0)

    const railNames = [...orderedProjects.map((p) => p.heading), ...(logos.length ? ['Logos'] : [])]
    const logoRail = orderedProjects.length
    const countRef = useRef(railNames.length)

    // Ile pól siatki (4 kolumny) zajmują kafle — „Your project?” wypełnia resztę ostatniego rzędu.
    const CELLS = { big: 4, wide: 2, small: 1 }
    const used = projects.reduce((sum, p) => sum + (CELLS[p.tile] || 1), 0) + logos.length
    const ctaSpan = 4 - (used % 4)
    countRef.current = railNames.length

    // Pasek postępu: ile sekcji przewinięto + który projekt jest teraz na wysokości ~środka ekranu.
    useEffect(() => {
        let raf = null
        const update = () => {
            raf = null
            const sec = sectionRef.current
            if (!sec) return
            const r = sec.getBoundingClientRect()
            const vh = window.innerHeight
            // 0 = sekcja wjeżdża od dołu ekranu (góra na 80% wysokości), 1 = jej dół mija połowę ekranu
            const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.3)))
            setProgress(Math.round(p * 100))
            // Kafle mieszczą się na 1–2 ekranach, więc aktywny punkt wynika z postępu, a nie z pozycji kafla.
            setActive(Math.min(countRef.current - 1, Math.round(p * (countRef.current - 1))))
        }
        const onScroll = () => {
            setTip(null) // tooltip znika przy przewijaniu, żeby nie wisiał nad innym kaflem
            if (!raf) raf = requestAnimationFrame(update)
        }
        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            if (raf) cancelAnimationFrame(raf)
        }
    }, [])

    // Tooltip przy kursorze — jeden handler na całą siatkę.
    const onMove = (e) => {
        const tile = e.target.closest('.tile')
        if (!tile) return setTip(null)
        setTip({ x: e.clientX, y: e.clientY, name: tile.dataset.name, soon: tile.dataset.soon === 'true' })
    }

    return (
        <section id="projects" ref={sectionRef} className="projects side-pad">
            <div className="projects-layout">
                <ProgressRail names={railNames} active={active} progress={progress} />

                <div className="projects-main">
                    <header className="projects-head">
                        <h2 className="projects-title h-display">/projects/</h2>
                    </header>

                    <div className="tiles" onMouseMove={onMove} onMouseLeave={() => setTip(null)}>
                        {items.map((it) => it.isLogo
                            ? <LogoTile key={it.key} logo={it.data} rail={logoRail} />
                            : <ProjectTile key={it.key} project={it.data} rail={orderedProjects.indexOf(it.data)} />
                        )}

                    </div>
                </div>
            </div>

            {tip && (
                <div className="tile-tip" style={{ left: tip.x, top: tip.y }} aria-hidden="true">
                    <span className="tile-tip-name">{tip.name}</span>
                    <span className="tile-tip-cta h-display">{tip.soon ? 'SOON' : 'SEE MORE →'}</span>
                </div>
            )}
        </section>
    )
}