import { Link } from 'react-router-dom'
import MediaBlock from './MediaBlock.jsx'

// {{tekst}} → <mark> „do sprawdzenia”. Usuń klamry w danych, gdy potwierdzisz.
function Rich({ text }) {
    const parts = text.split(/\{\{(.+?)\}\}/g)
    return parts.map((part, i) =>
        i % 2 ? <mark key={i} className="todo-mark" title="Do sprawdzenia">{part}</mark> : part
    )
}

function SectionHead({ num, name, question }) {
    return (
        <header className="cs-head">
            <p className="cs-kicker mono">
                <span className="cs-num">{num} · {name}</span>
            </p>
            {question && <h2 className="cs-question">{question}</h2>}
        </header>
    )
}

function Body({ paragraphs }) {
    return (
        <div className="cs-body">
            {paragraphs.map((p, i) => <p key={i}><Rich text={p} /></p>)}
        </div>
    )
}

export default function CaseStudy({ project }) {
    const cs = project.caseStudy
    const { context, challenge, system, gallery, process, outcome, next } = cs

    return (
        <article className="cs">
            {/* ---------- Hero ---------- */}
            <header className="cs-hero">
                <p className="cs-breadcrumb mono">
                    <Link to="/#projects">/projects/</Link> {cs.breadcrumb}
                </p>
                <h1 className="cs-title pixel">{cs.title}</h1>
                <p className="cs-lead">{cs.lead}</p>
                <dl className="cs-meta mono">
                    {cs.meta.map(([label, value]) => (
                        <div key={label}>
                            <dt>{label}</dt>
                            <dd><Rich text={value} /></dd>
                        </div>
                    ))}
                </dl>
                <div className="feat-tags">
                    {project.tags?.map((tag) => <span key={tag} className="tag-hard mono">{tag}</span>)}
                </div>
            </header>

            <MediaBlock size="big" border="center" src={cs.cover.image} label={cs.cover.label} />

            {/* ---------- 01 Context ---------- */}
            <section className="cs-section">
                <SectionHead {...context} />
                <Body paragraphs={context.body} />
            </section>

            {/* ---------- 02 Challenge ---------- */}
            <section className="cs-section">
                <SectionHead {...challenge} />
                <div className="cs-cards">
                    {challenge.items.map((c) => (
                        <div key={c.key} className="cs-card">
                            <h3 className="cs-card-title mono"><span className="cs-key">[{c.key}]</span> {c.title}</h3>
                            <p><Rich text={c.text} /></p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- 03 Visual system ---------- */}
            <section className="cs-section">
                <SectionHead {...system} />
                <Body paragraphs={system.body} />
                <div className="cs-boards">
                    {system.boards.map((b) => (
                        <MediaBlock key={b.label} size="small" border="center" src={b.image} label={b.label} />
                    ))}
                </div>
            </section>

            {/* ---------- 04 Gallery ---------- */}
            <section className="cs-section">
                <SectionHead {...gallery} />
                <div className="cs-gallery">
                    {gallery.items.map((g) => (
                        <figure key={g.title} className={`cs-shot${g.photo ? ' cs-shot--pair' : ''}`}>
                            <div className="cs-shot-media">
                                <MediaBlock size="small" border="center" src={g.image} label={g.title} />
                                {g.photo && <MediaBlock size="small" border="center" src={g.photo} label={`${g.title} — on site`} />}
                            </div>
                            <figcaption>
                                <strong className="mono">{g.title}</strong>
                                <span><Rich text={g.text} /></span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                {gallery.photos.length > 0 && (
                    <div className="cs-photos">
                        {gallery.photos.map((ph) => (
                            <figure key={ph.image} className="cs-shot">
                                <MediaBlock size="small" border="center" src={ph.image} label={ph.caption} />
                                <figcaption><span>{ph.caption}</span></figcaption>
                            </figure>
                        ))}
                    </div>
                )}
            </section>

            {/* ---------- 05 Process ---------- */}
            <section className="cs-section">
                <SectionHead {...process} />
                <ol className="cs-log mono">
                    {process.items.map(([key, text]) => (
                        <li key={key}>
                            <span className="cs-log-key">&gt; {key}:</span> <Rich text={text} />
                        </li>
                    ))}
                </ol>
            </section>

            {/* ---------- 06 Outcome ---------- */}
            <section className="cs-section">
                <SectionHead {...outcome} />
                <ul className="cs-outcome">
                    {outcome.items.map((o) => (
                        <li key={o.key}>
                            <span className="cs-check mono" aria-hidden="true">{o.key === '+' ? '[+]' : '[✓]'}</span>
                            <span>
                                {o.key !== '+' && <span className="cs-key mono">{o.key} </span>}
                                <Rich text={o.text} />
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ---------- 07 Next time ---------- */}
            <section className="cs-section">
                <SectionHead {...next} />
                <ul className="cs-todo">
                    {next.items.map((t, i) => (
                        <li key={i}>
                            <span className="cs-box mono" aria-hidden="true">[ ]</span>
                            <span><Rich text={t} /></span>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}