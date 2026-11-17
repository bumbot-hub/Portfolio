import { lazy, Suspense, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import MediaBlock from '../components/MediaBlock.jsx'
import { projects } from '../data/projects.js'
import NotFound from './NotFound.jsx'
import './Subpage.css'

// Projekty z własną podstroną: slug → plik w src/pages/cases/.
// Każda podstrona ma swój układ i treść. Nowy projekt = nowy plik + jedna linijka tutaj.
const casePages = {
    'hotb-26': lazy(() => import('./cases/Hotb26.jsx')),
}

export default function Project() {
    const { slug } = useParams()
    const index = projects.findIndex((p) => p.slug === slug)
    const project = projects[index]

    useEffect(() => {
        if (project) document.title = `${project.heading} — Kamil Kula`
        return () => { document.title = 'Kamil Kula — Product Designer' }
    }, [project])

    if (!project) return <NotFound />

    const CasePage = casePages[slug]
    const next = projects[(index + 1) % projects.length]

    const page = (
        <main className="page side-pad">
            {CasePage ? (
                <Suspense fallback={<p className="mono">loading…</p>}>
                    <CasePage />
                </Suspense>
            ) : (
                // Projekt bez własnej podstrony — prosty widok z danych w projects.js
                <>
                    <Link to="/#projects" className="page-back mono" aria-label="Back to all projects">&lt;</Link>
                    <header className="case-header">
                        <h1 className="page-title pixel">{project.heading}</h1>
                        <div className="feat-tags">
                            {project.tags?.map((tag) => <span key={tag} className="tag-hard mono">{tag}</span>)}
                        </div>
                    </header>
                    <MediaBlock size="big" border="center" src={project.image} label={project.imageLabel} />
                    <p className="page-lead">{project.description}</p>
                </>
            )}

            {next && next.slug !== slug && (
                <Link to={`/projects/${next.slug}`} className="case-next btn-hard mono">
                    Next: {next.heading} →
                </Link>
            )}
        </main>
    )

    // Kratka (mata do cięcia) tylko na podstronach case study
    return CasePage ? <div className="case-bg">{page}</div> : page
}