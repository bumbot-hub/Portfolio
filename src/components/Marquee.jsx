import './Marquee.css'

// Zapętlony pasek obrazków przewijający się w poziomie.
// items:    [{ src, label }] — src jak w MediaBlock (ścieżka względem public/, bez „/” na początku); brak src = placeholder
// duration: ile sekund trwa jedno pełne okrążenie (więcej = wolniej)
// reverse:  przewijanie w prawo zamiast w lewo
// bleed:    pasek na całą szerokość ekranu, poza kolumnę z treścią
//
// Lista renderuje się dwa razy (druga kopia ukryta przed czytnikami ekranu),
// a animacja przesuwa całość o połowę — dzięki temu pętla nie ma „szwu”.
export default function Marquee({ items, duration = 40, reverse = false, bleed = false, label }) {
    const className = `marquee${reverse ? ' marquee--reverse' : ''}${bleed ? ' marquee--bleed' : ''}`

    const group = (hidden) => (
        <ul className="marquee__group" aria-hidden={hidden || undefined}>
            {items.map((item, i) => (
                <li key={i} className="marquee__item">
                    {item.src ? (
                        <img src={`${import.meta.env.BASE_URL}${item.src}`} alt={hidden ? '' : item.label} loading="lazy" />
                    ) : (
                        <span className="mono marquee__placeholder">[{item.label}]</span>
                    )}
                </li>
            ))}
        </ul>
    )

    return (
        <div className={className} style={{ '--marquee-duration': `${duration}s` }} role="region" aria-label={label}>
            <div className="marquee__track">
                {group(false)}
                {group(true)}
            </div>
        </div>
    )
}
