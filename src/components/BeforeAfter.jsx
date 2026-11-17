import { useEffect, useRef, useState } from 'react'
import './BeforeAfter.css'

// Porównanie dwóch wersji (np. edycja 2025 vs 2026).
// Desktop: przeciągasz suwak (myszką albo strzałkami na klawiaturze).
// Telefon / ekran dotykowy: dotknięcie przełącza widok z animacją, każde kolejne — z powrotem.
// before/after: ścieżki względem public/; null = placeholder. labels: podpisy obu wersji.
const TAP_QUERY = '(max-width: 860px), (pointer: coarse)'

function useMatch(query) {
    const [match, setMatch] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
    useEffect(() => {
        const mq = window.matchMedia(query)
        const on = () => setMatch(mq.matches)
        on()
        mq.addEventListener('change', on)
        return () => mq.removeEventListener('change', on)
    }, [query])
    return match
}

const clamp = (v) => Math.min(100, Math.max(0, v))

export default function BeforeAfter({ before, after, labels = ['2025', '2026'], alt = '' }) {
    const ref = useRef(null)
    const dragging = useRef(false)
    const tap = useMatch(TAP_QUERY)
    // pos = ile % szerokości (od lewej) zajmuje wersja „before”
    const [pos, setPos] = useState(tap ? 100 : 50)
    useEffect(() => { setPos(tap ? 100 : 50) }, [tap])

    const fromPointer = (e) => {
        const r = ref.current.getBoundingClientRect()
        setPos(clamp(((e.clientX - r.left) / r.width) * 100))
    }

    const handlers = tap
        ? { onClick: () => setPos((p) => (p > 50 ? 0 : 100)) }
        : {
            onPointerDown: (e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); fromPointer(e) },
            onPointerMove: (e) => { if (dragging.current) fromPointer(e) },
            onPointerUp: () => { dragging.current = false },
            onPointerCancel: () => { dragging.current = false },
        }

    const img = (src, label) => src
        ? <img src={`${import.meta.env.BASE_URL}${src}`} alt={`${alt} — ${label}`} draggable="false" />
        : <span className="ba__ph mono">[{alt} {label}]</span>

    const showingBefore = pos > 50

    return (
        <div
            ref={ref}
            className={`ba${tap ? ' ba--tap' : ''}`}
            style={{ '--pos': `${pos}%` }}
            {...handlers}
            {...(tap ? { role: 'button', tabIndex: 0, 'aria-label': `Switch to ${showingBefore ? labels[1] : labels[0]}`,
                onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPos((p) => (p > 50 ? 0 : 100)) } } } : {})}
        >
            <div className="ba__layer ba__layer--after">{img(after, labels[1])}</div>
            <div className="ba__layer ba__layer--before">{img(before, labels[0])}</div>

            <span className={`ba__label ba__label--before mono${tap && showingBefore ? ' is-active' : ''}`}>{labels[0]}</span>
            <span className={`ba__label ba__label--after mono${tap && !showingBefore ? ' is-active' : ''}`}>{labels[1]}</span>

            <div className="ba__line" aria-hidden={tap || undefined}>
                {!tap && (
                    <span
                        className="ba__knob mono"
                        role="slider" tabIndex={0}
                        aria-label={`Compare ${labels[0]} and ${labels[1]}`}
                        aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pos)}
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowLeft') setPos((p) => clamp(p - 5))
                            if (e.key === 'ArrowRight') setPos((p) => clamp(p + 5))
                        }}
                    >&lt;&gt;</span>
                )}
            </div>
            {tap && <span className="ba__hint mono">tap to compare</span>}
        </div>
    )
}
