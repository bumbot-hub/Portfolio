import { Link } from 'react-router-dom'
import MediaBlock from '../../components/MediaBlock.jsx'
import './hotb26.css'

// Podstrona case study: Heroes of the Brain 2026.
// Cały układ i treść są tutaj — inne projekty mają własne pliki w src/pages/cases/.
//
// Obrazki: wrzuć do public/images/hotb/ i wpisz ścieżkę w src, np. src="images/hotb/rollup.webp"
// <mark className="todo-mark"> = do sprawdzenia; gdy potwierdzisz, usuń znacznik i zostaw sam tekst.

const challenges = [
    { key: 'A', title: 'Team_consistency', text: 'Five designers, dozens of formats, one brand. Before anyone could start, the team needed a shared base: a defined identity, ready-to-use assets and example graphics to follow, so everything made before and during the event would look like it came from one hand.' },
    { key: 'B', title: 'Digital_to_print', text: 'The palette had to work everywhere, from glowing screens to matte paper, CMYK print and DTF transfers on black cotton. I adjusted the colours and built a matching print set, so the brand looked the same on screen and on paper.' },
    { key: 'C', title: 'Worth_keeping', text: 'Consistency alone isn’t enough: the designs also had to catch the eye and start tying a recognisable look to the event. The stickers were the test, since they had to be good enough that participants would proudly put them on their laptops and carry the brand beyond the hackathon.' },
    { key: 'D', title: 'Approval_deadlines', text: 'Honorary patronage came with rules: every piece carrying a patron’s logo had to be approved by them before it could be published or printed. With five patrons, every approval round set the pace and tightened already short deadlines.' },
]

// photo = zdjęcie z eventu pokazane obok pliku (plik ↔ w użyciu); null = tylko plik
const gallery = [
    { title: 'Posters & covers', text: 'A3 poster, screen version and Facebook covers for the campaign.', image: null, photo: null },
    { title: 'Roll-up', text: 'Signed off by every patron; the brain and QR read from across the hall.', image: null, photo: null },
    { title: 'Social media', text: 'A template system that let the whole team turn out category, prize and partner posts fast and on-brand.', image: null, photo: null },
    { title: 'Stickers', text: 'A set of four, picked from the team’s proposals and refined into print-ready files with cut lines.', image: null, photo: null },
    { title: 'Crew T-shirt', text: 'Chosen from several team designs, then vectorised for DTF printing on black cotton.', image: null, photo: null },
    { title: 'ID badges', text: 'A colour per role, so participants, the jury, volunteers and coordinators can be told apart from across the room.', image: null, photo: null },
    { title: 'Invitations', text: 'Folded cards for university authorities.', image: null, photo: null },
    { title: 'Diplomas', text: 'Winner diplomas plus thank-you certificates in five variants for the jury, mentors and sponsors.', image: null, photo: null },
    { title: 'Presentations', text: 'Opening and closing decks, with an octagon progress rail, a submission QR and podium slides for the winners.', image: null, photo: null },
]

export default function Hotb26() {
    return (
        <article className="hotb">
            {/* ---------- Hero ---------- */}
            <header className="hotb-hero">
                <Link to="/#projects" className="page-back mono" aria-label="Back to all projects">&lt;</Link>
                <h1 className="hotb-title pixel">Heroes of the Brain</h1>
                <p className="hotb-lead">
                    Third edition, first complete system. I art-directed a five-person team through everything
                    a 24-hour brain–computer interface hackathon needs: from social templates to stickers,
                    ID badges, roll-up and presentations.
                </p>
                <dl className="hotb-meta mono">
                    <div><dt>role_</dt><dd>Art Director &amp; Design Lead</dd></div>
                    <div><dt>team_</dt><dd>5 designers</dd></div>
                    <div><dt>timeline_</dt><dd>Mar 2026 – Dec 2026</dd></div>
                    <div><dt>tools_</dt><dd>Figma, Affinity</dd></div>
                </dl>
                <div className="feat-tags">
                    <span className="tag-hard mono">ART DIRECTION</span>
                    <span className="tag-hard mono">BRAND IDENTITY</span>
                    <span className="tag-hard mono">PRINT</span>
                </div>
            </header>

            <MediaBlock size="big" border="center" src={null} label="key visual" />

            {/* ---------- 01 Context ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono">01 · Context</p>
                <h2 className="hotb-question">What do you do when every edition starts almost from scratch?</h2>
                <div className="hotb-body">
                    <p>
                        Heroes of the Brain is a 24-hour neurohackathon run by the KN Neuron student research group
                        and the student government at Wrocław University of Science and Technology, where teams build
                        projects on brain–computer interface technology, mostly EEG.
                    </p>
                    <p>
                        2026 was the third edition. The logo and core colours had carried over from year to year, but
                        everything around them — layouts, graphic elements, typography — was reinvented each time. Not
                        because the earlier directions were weak: the identity was simply never written down, or at
                        least never handed over to the next team. On top of that, last year’s printed materials came out
                        too dark to read. Having worked on the 2025 edition, I knew where things broke — partly because
                        I’d broken some of them myself 🤓.
                    </p>
                    <p>
                        I didn’t want to simply extend the 2025 look, as it never quite matched the event’s DNA, and very
                        little survived from 2024. So instead of picking one, I took the strongest parts of both, added new
                        elements that push the cyberpunk aesthetic further, and documented it all, so future teams can
                        build on it instead of starting over. As Art Director I set the direction, led a team of five
                        designers and handled everything from briefs and patron approvals to print-ready files.
                    </p>
                </div>
            </section>

            {/* ---------- 02 Challenge ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono">02 · Challenge</p>
                <h2 className="hotb-question">How do you ship one consistent brand with five designers - on a schedule you don’t control?</h2>
                <div className="hotb-cards">
                    {challenges.map((c) => (
                        <div key={c.key} className="hotb-card">
                            <h3 className="hotb-card-title mono"><span className="hotb-key">{c.key}</span> {c.title}</h3>
                            <p>{c.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- 03 Visual system ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono">03 · Visual system</p>
                <h2 className="hotb-question">What’s left when you strip the brand down to its building blocks?</h2>
                <div className="hotb-body">
                    <p>
                        The logo, core palette and display fonts stayed. Next to cyan, pink and purple I added lime, a
                        deliberate break from three neighbouring hues, and paired the existing typefaces with JetBrains
                        Mono for a terminal feel.
                    </p>
                    <p>
                        From the T-shirt I designed for the 2025 edition, I kept the wireframe line art,
                        objects built purely from lines, along with dithering effects, used sparingly as accents. Around
                        them I built a new set of elements in the same spirit: grids, chamfered frames and GUI lines. I also
                        redrew the icons for all four categories so they finally match the rest of the event.
                    </p>
                    <p>
                        For print, every colour got its own CMYK version, adjusted for how ink behaves on paper: toning
                        down the intense purple, which CMYK can’t reproduce, and softening the lime so it doesn’t turn flat.
                    </p>
                </div>
                <div className="hotb-boards">
                    <MediaBlock size="small" border="center" src={null} label="palette — digital + print" />
                    <MediaBlock size="small" border="center" src={null} label="typography" />
                    <MediaBlock size="small" border="center" src={null} label="elements — wireframe, grids, frames" />
                    <MediaBlock size="small" border="center" src={null} label="category icons" />
                </div>
            </section>

            {/* ---------- 04 Gallery ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono">04 · Gallery</p>
                <h2 className="hotb-question">From file to the real world.</h2>
                <div className="hotb-gallery">
                    {gallery.map((g) => (
                        <figure key={g.title} className={`hotb-shot${g.photo ? ' hotb-shot--pair' : ''}`}>
                            <div className="hotb-shot-media">
                                <MediaBlock size="small" border="center" src={g.image} label={g.title} />
                                {g.photo && <MediaBlock size="small" border="center" src={g.photo} label={`${g.title} — on site`} />}
                            </div>
                            <figcaption>
                                <strong className="mono">{g.title}</strong>
                                <span>{g.text}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                {/* Zdjęcia z eventu bez pary — dodaj tu figure z krótkim podpisem, np. „The roll-up on day one.” */}
            </section>

            {/* ---------- 05 Process ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono">05 · Process</p>
                <ol className="hotb-log mono">
                    <li><span className="hotb-log-key">&gt; direction:</span> Set the look, palette and templates in one shared Figma project for the whole team.</li>
                    <li><span className="hotb-log-key">&gt; briefs:</span> Wrote a brief for each piece in ClickUp and reviewed every draft with specific feedback.</li>
                    <li><span className="hotb-log-key">&gt; approvals:</span> Ran sign-off rounds with ministries, the university and the city, and adapted patron logos for dark backgrounds.</li>
                    <li><span className="hotb-log-key">&gt; production:</span> Checked every file before it went out: correct format and scale, everything in vectors, CMYK colours, bleed and cut lines, matched to each printer’s requirements.</li>
                </ol>
            </section>

            {/* ---------- 06 Outcome ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono">06 · Outcome</p>
                <h2 className="hotb-question">Did it work?</h2>
                <ul className="hotb-list">
                    <li><span className="hotb-check mono">[✓]</span><span><b className="hotb-key mono">A</b> Five designers, one brand: every piece, before and during the event, built on the same system.</span></li>
                    <li><span className="hotb-check mono">[✓]</span><span><b className="hotb-key mono">B</b> Readable prints this time, with only one sticker, the one on a lime background, drifting slightly in colour.</span></li>
                    <li><span className="hotb-check mono">[✓]</span><span><b className="hotb-key mono">C</b> Stickers people <mark className="todo-mark">actually put on their laptops</mark>.</span></li>
                    <li><span className="hotb-check mono">[✓]</span><span><b className="hotb-key mono">D</b> Every piece signed off by all five patrons and sent to print on schedule — despite late sponsor logos and category details that kept changing.</span></li>
                    <li><span className="hotb-check mono">[+]</span><span>A documented brand book, ready for whoever leads the next edition — so it doesn’t start from zero.</span></li>
                </ul>
            </section>

            {/* ---------- 07 Next time ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono">07 · Next time</p>
                <ul className="hotb-list">
                    <li><span className="hotb-box mono">[ ]</span><span>Write the team rules down early: one shared Figma file, file naming, and where tasks live.</span></li>
                    <li><span className="hotb-box mono">[ ]</span><span>Plan every graphic up front: a full list of what needs to be made, reviewed by the other coordinators, so the scope is clear from day one.</span></li>
                    <li><span className="hotb-box mono">[ ]</span><span>Give the partnerships team a ready-made line for their emails, asking every sponsor, patron and partner for a white or dark-background logo from the start.</span></li>
                    <li><span className="hotb-box mono">[ ]</span><span>Rethink social media: more engaging content that invites interaction and reaches beyond the usual audience.</span></li>
                    <li><span className="hotb-box mono">[ ]</span><span>Design for the venue too: infographics, team and table signage and a room map, so participants and the jury always know where to go.</span></li>
                    <li><span className="hotb-box mono">[ ]</span><span>Go fully English across every material from day one.</span></li>
                </ul>
            </section>
        </article>
    )
}