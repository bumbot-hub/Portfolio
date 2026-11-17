import { useRef, useState } from 'react'
import BeforeAfter from './BeforeAfter.jsx'
import Lightbox from './Lightbox.jsx'
import './Bento.css'

// Galeria bento: kafelki różnej wielkości ułożone według mapy obszarów (grid-template-areas).
// items:  [{ id, title, text, image, compare? }]
//         text    = jedno krótkie zdanie (pokazuje się w tooltipie przy kursorze)
//         image   = ścieżka względem public/; null = placeholder
//         fit     = 'contain' → cała grafika widoczna (np. naklejki o różnych kształtach); domyślnie kadr na cały kafelek
//         compare = { before, after, labels? } → zamiast zdjęcia suwak porównania (bez powiększenia)
// layout: { desktop: [...wiersze], mobile: [...wiersze] }
//         każde słowo to id kafelka; ten sam id w kilku komórkach = kafelek większy
//         skróty: 'social*6' = 6 kolumn, ' x2' na końcu wiersza = wiersz powtórzony 2 razy
//         liczba kolumn siatki = liczba komórek w pierwszym wierszu
// Kliknięcie w zwykły kafelek otwiera zdjęcie w powiększeniu (Lightbox).
const expand = (rows) => rows.flatMap((row) => {
    const m = row.match(/\s+x(\d+)\s*$/)
    const line = (m ? row.slice(0, m.index) : row).trim().split(/\s+/)
        .flatMap((t) => { const [name, n] = t.split('*'); return Array(Number(n || 1)).fill(name) })
        .join(' ')
    return Array(m ? Number(m[1]) : 1).fill(line)
})
const grid = (rows) => {
    const lines = expand(rows)
    return { areas: lines.map((r) => `"${r}"`).join(' '), cols: lines[0].split(' ').length }
}
const num = (i) => String(i + 1).padStart(2, '0')
const OFFSET = 16   // odległość tooltipa od kursora

export default function Bento({ items, layout, ...rest }) {
    const [open, setOpen] = useState(null)
    const [tip, setTip] = useState(null)         // indeks kafelka z tooltipem albo null
    const tipRef = useRef(null)

    // w powiększeniu tylko kafelki ze zwykłym zdjęciem
    const zoomable = items.filter((it) => !it.compare)
    const photos = zoomable.map((it) => ({ src: it.image, alt: it.title, caption: `${it.title} — ${it.text}` }))

    // pozycja ustawiana bezpośrednio w stylu — bez re-renderu przy każdym ruchu myszy
    const place = (x, y) => {
        const el = tipRef.current
        if (!el) return
        const w = el.offsetWidth, h = el.offsetHeight
        const left = x + OFFSET + w > window.innerWidth - 8 ? x - OFFSET - w : x + OFFSET
        const top = y + OFFSET + h > window.innerHeight - 8 ? y - OFFSET - h : y + OFFSET
        el.style.transform = `translate(${left}px, ${top}px)`
    }

    const tileProps = (i) => ({
        onPointerEnter: (e) => { if (e.pointerType === 'mouse') { setTip(i); place(e.clientX, e.clientY) } },
        onPointerMove: (e) => { if (e.pointerType === 'mouse') place(e.clientX, e.clientY) },
        onPointerLeave: () => setTip(null),
        onPointerDown: () => setTip(null),        // przy kliknięciu / przeciąganiu suwaka tooltip znika
    })

    const current = tip !== null ? items[tip] : null
    const d = grid(layout.desktop)
    const m = grid(layout.mobile ?? layout.desktop)

    return (
        <>
            <div
                className="bento"
                style={{ '--areas-d': d.areas, '--cols-d': d.cols, '--areas-m': m.areas, '--cols-m': m.cols }}
                {...rest}
            >
                {items.map((it, i) => (
                    <figure
                        key={it.id}
                        className={`bento__tile${it.compare ? ' bento__tile--compare' : ''}${it.fit === 'contain' ? ' bento__tile--contain' : ''}`}
                        style={{ gridArea: it.id }}
                        {...tileProps(i)}
                    >
                        {it.compare ? (
                            <BeforeAfter
                                before={it.compare.before}
                                after={it.compare.after}
                                labels={it.compare.labels}
                                alt={it.title}
                            />
                        ) : (
                            <button
                                type="button" className={`bento__btn${it.fit === 'contain' ? ' bento__btn--contain' : ''}`}
                                onClick={() => setOpen(zoomable.indexOf(it))}
                                aria-label={`Open: ${it.title}`}
                            >
                                {it.image
                                    ? <img src={`${import.meta.env.BASE_URL}${it.image}`} alt={it.title} loading="lazy" />
                                    : <span className="bento__ph mono">[{it.title}]</span>}
                            </button>
                        )}
                        {/* dla czytników ekranu; wizualnie: tooltip na desktopie, etykieta na telefonie */}
                        <figcaption className="bento__tag mono">
                            <span className="bento__num">{num(i)}</span> {it.title}
                            <span className="visually-hidden">: {it.text}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>

            <div ref={tipRef} className={`bento-tip mono${current ? ' is-visible' : ''}`} aria-hidden="true">
                {current && (
                    <>
                        <span className="bento-tip__head"><span className="bento__num">{num(tip)}</span> {current.title}</span>
                        <span className="bento-tip__text">{current.text}</span>
                    </>
                )}
            </div>

            <Lightbox photos={photos} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
        </>
    )
}
