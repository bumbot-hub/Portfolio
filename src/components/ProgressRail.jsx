import './ProgressRail.css'

// Pionowy pasek postępu przy sekcji projektów: linia + kropka na każdy projekt.
// Przejrzane = wypełnione, aktualny = większa limonkowa kropka z nazwą obok.
export default function ProgressRail({ names, active, progress }) {
    const n = names.length
    const pad = (x) => String(x).padStart(2, '0')

    return (
        <aside className="rail" aria-hidden="true">
            <div className="rail-inner">
                <span className="rail-label">PROJECTS</span>
                <div className="rail-track">
                    <span className="rail-line" />
                    <span className="rail-fill" style={{ height: `${progress}%` }} />
                    {names.map((name, i) => (
                        <span
                            key={name}
                            className={`rail-dot${i < active ? ' is-past' : ''}${i === active ? ' is-active' : ''}`}
                            style={{ top: `${n > 1 ? (i / (n - 1)) * 100 : 0}%` }}
                        >
              <span className="rail-dot-mark" />
                            {i === active && <span className="rail-dot-name">{name}</span>}
            </span>
                    ))}
                </div>
                <span className="rail-counter">{pad(active + 1)} / {pad(n)}</span>
            </div>
        </aside>
    )
}