import { useState } from 'react'
import Lightbox from './Lightbox.jsx'
import './PhotoRow.css'

// Zdjęcia w jednym rzędzie (bez przewijania). Kliknięcie otwiera zdjęcie w powiększeniu (Lightbox).
// photos: [{ src, alt, caption? }] — src względem public/ (np. 'images/hotb/event-1.webp'); null = placeholder
export default function PhotoRow({ photos, ...rest }) {
    const [open, setOpen] = useState(null)

    return (
        <>
            <ul className="photo-row" {...rest}>
                {photos.map((p, i) => (
                    <li key={i} className="photo-row__item">
                        <button type="button" className="photo-row__btn" onClick={() => setOpen(i)} aria-label={`Open photo: ${p.alt}`}>
                            {p.src
                                ? <img src={`${import.meta.env.BASE_URL}${p.src}`} alt={p.alt} loading="lazy" />
                                : <span className="photo-row__ph mono">[{p.alt}]</span>}
                        </button>
                    </li>
                ))}
            </ul>
            <Lightbox photos={photos} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
        </>
    )
}
