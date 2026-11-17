import { useEffect, useRef } from 'react'
import './Lightbox.css'

// Zdjęcie w powiększeniu na całym ekranie.
// photos: [{ src, alt, caption? }], index: otwarte zdjęcie albo null (= zamknięty)
// onChange(nowyIndex), onClose() — stan trzyma rodzic.
// Strzałki ← → / przyciski przełączają, Esc albo klik w tło zamyka.
export default function Lightbox({ photos, index, onChange, onClose }) {
    const ref = useRef(null)
    const count = photos.length
    const go = (dir) => onChange((index + dir + count) % count)

    // <dialog> sam łapie fokus i obsługuje Esc
    useEffect(() => {
        const d = ref.current
        if (!d) return
        if (index !== null && !d.open) d.showModal()
        if (index === null && d.open) d.close()
    }, [index])

    useEffect(() => {
        if (index === null) return
        const onKey = (e) => {
            if (e.key === 'ArrowRight') go(1)
            if (e.key === 'ArrowLeft') go(-1)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    })

    const current = index !== null ? photos[index] : null

    return (
        <dialog
            ref={ref}
            className="lightbox"
            onClose={onClose}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            {current && (
                <figure className="lightbox__figure" key={index}>
                    {current.src
                        ? <img src={`${import.meta.env.BASE_URL}${current.src}`} alt={current.alt} />
                        : <span className="lightbox__ph mono">[{current.alt}]</span>}
                    <figcaption className="lightbox__bar mono">
                        <span>{current.caption ?? current.alt}</span>
                        <span className="lightbox__count">{String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
                    </figcaption>
                </figure>
            )}
            {count > 1 && (
                <>
                    <button type="button" className="lightbox__nav lightbox__nav--prev mono" onClick={() => go(-1)} aria-label="Previous photo">&lt;</button>
                    <button type="button" className="lightbox__nav lightbox__nav--next mono" onClick={() => go(1)} aria-label="Next photo">&gt;</button>
                </>
            )}
            <button type="button" className="lightbox__close mono" onClick={onClose} aria-label="Close">×</button>
        </dialog>
    )
}
