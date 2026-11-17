import { Link } from 'react-router-dom'
import MediaBlock from '../../components/MediaBlock.jsx'
import Marquee from '../../components/Marquee.jsx'
import Bento from '../../components/Bento.jsx'
import PhotoRow from '../../components/PhotoRow.jsx'
import useHotbAnimations from './useHotbAnimations.js'
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

// Pasek w „03 Visual system” — screeny z identyfikacji. Dodawaj/usuwaj dowolnie, kolejność = kolejność na pasku.
// Obrazki mogą mieć różne proporcje: wysokość paska jest stała, szerokość dopasuje się sama.
const visualSystem = [
    { src: "images/hotb/color-palette.webp", label: 'palette — digital' },
    { src: "images/hotb/typo.webp", label: 'typography' },
    { src: "images/hotb/assets.webp", label: 'wireframe line art' },
    { src: "images/hotb/icons.webp", label: 'category icons' },
    //{ src: null, label: 'dithering accents' },
]

// „04 Gallery” — bento. image = plik graficzny (względem public/, np. 'images/hotb/rollup.webp'); null = placeholder.
// compare = suwak porównania edycji 2025 ↔ 2026 zamiast zwykłego zdjęcia (na telefonie: dotknięcie przełącza).
const gallery = [
    { id: 'rollup', title: 'Roll-up', text: 'Signed off by every patron, readable from across the hall.', image: null,
        compare: { before: null, after: "images/hotb/rollup_26.webp", labels: ['2025', '2026'] } },
    { id: 'social', title: 'Social media', text: 'Templates that let the whole team post fast and on-brand.', image: null },
    { id: 'badges', title: 'ID badges', text: 'A colour per role, readable from across the room.', image: null,
        compare: { before: null, after: "images/hotb/ID_26.webp", labels: ['2025', '2026'] } },
    { id: 'posters', title: 'Posters & covers', text: 'A3 poster, screen version and Facebook covers.', image: null },
    // naklejki: 4 osobne kafelki (cały rząd na desktopie); fit: 'contain' = cały kształt widoczny, bez przycinania
    { id: 'sticker1', title: 'Sticker 1/4', text: 'One of four, picked from team proposals and made print-ready.', image: "images/hotb/sticker_1.webp", fit: 'contain' },
    { id: 'sticker2', title: 'Sticker 2/4', text: 'One of four, picked from team proposals and made print-ready.', image: "images/hotb/sticker_2.webp", fit: 'contain' },
    { id: 'sticker3', title: 'Sticker 3/4', text: 'One of four, picked from team proposals and made print-ready.', image: "images/hotb/sticker_3.webp", fit: 'contain' },
    { id: 'sticker4', title: 'Sticker 4/4', text: 'One of four, picked from team proposals and made print-ready.', image: "images/hotb/sticker_4.webp", fit: 'contain' },
    { id: 'slides', title: 'Presentations', text: 'Opening and closing decks, with podium slides for the winners.', image: null },
    { id: 'tshirt', title: 'Crew T-shirt', text: 'A team design, vectorised for DTF print on black cotton.', image: null },
    { id: 'invites', title: 'Invitations', text: 'Folded cards for university authorities.', image: null },
    { id: 'diplomas', title: 'Diplomas', text: 'Winner diplomas and thank-you certificates in five variants.', image: null },
]

// Mapa bento: każde słowo = id kafelka z `gallery`, ten sam id w kilku komórkach = większy kafelek.
// Skróty: 'social*6' = kafelek na 6 kolumn, ' x2' na końcu = wiersz powtórzony 2 razy.
// Desktop: 12 kolumn (drobna siatka → naklejki 1–3 prawie kwadratowe, 4 szeroki prostokąt).
// Telefon: 6 kolumn, wiersze o połowie wysokości (zwykły kafelek = x2).
// Kolejność w `gallery` = numeracja 01–12 i kolejność w powiększeniu — trzymaj ją zgodną z czytaniem układu.
const galleryLayout = {
    desktop: [
        'rollup*3   social*6   badges*3 x2',
        'rollup*3   posters*6  badges*3',
        'sticker1*2 sticker2*2 sticker3*2 sticker4*6',
        'slides*6   tshirt*3   invites*3',
        'slides*6   tshirt*3   diplomas*3',
    ],
    mobile: [
        'rollup*3   social*3   x4',
        'badges*3   posters*3  x4',
        'sticker1*2 sticker2*2 sticker3*2',
        'sticker4*6 x2',
        'slides*6   x2',
        'tshirt*3   invites*3  x2',
        'tshirt*3   diplomas*3 x2',
    ],
}

// „07 On site” — zdjęcia z eventu, na których widać grafiki. Jeden rząd, klik = powiększenie.
// src względem public/ (np. 'images/hotb/event-rollup.webp'); null = placeholder. Najlepiej 4–6 zdjęć.
const onSite = [
    { src: null, alt: 'Roll-up at the venue', caption: 'The roll-up on day one.' },
    { src: null, alt: 'Crew in event T-shirts', caption: 'Crew T-shirts in action.' },
    { src: null, alt: 'Stickers on laptops', caption: 'Stickers that made it onto laptops.' },
    { src: null, alt: 'ID badges', caption: 'Colour-coded badges — role readable from across the room.' },
    { src: null, alt: 'Opening presentation', caption: 'Opening deck on the main screen.' },
]

export default function Hotb26() {
    const ref = useHotbAnimations()

    return (
        <article className="hotb" ref={ref}>
            {/* ---------- Hero ---------- */}
            <header className="hotb-hero" data-anim="hero">
                <Link to="/#projects" className="page-back mono" aria-label="Back to all projects">&lt;</Link>
                <h1 className="hotb-title pixel" data-anim="scramble">Heroes of the Brain</h1>
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

            <div data-anim="fade">
                <MediaBlock size="big" border="center" src={null} label="key visual" />
            </div>

            {/* ---------- 01 Context ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono" data-anim="fade">01 · Context</p>
                <h2 className="hotb-question" data-anim="fade">What do you do when every edition starts almost from scratch?</h2>
                <div className="hotb-body" data-anim="fade">
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
                <p className="hotb-kicker mono" data-anim="fade">02 · Challenge</p>
                <h2 className="hotb-question" data-anim="fade">How do you ship one consistent brand with five designers - on a schedule you don’t control?</h2>
                <div className="hotb-cards" data-anim="stagger">
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
                <p className="hotb-kicker mono" data-anim="fade">03 · Visual system</p>
                <h2 className="hotb-question" data-anim="fade">What’s left when you strip the brand down to its building blocks?</h2>
                <div className="hotb-body" data-anim="fade">
                    <p>
                        The logo, core palette and display fonts stayed. Next to cyan, pink and purple I added lime, a
                        deliberate break from three neighbouring hues, and paired the existing typefaces with JetBrains
                        Mono for a terminal feel.
                    </p>
                    <p>
                        From the T-shirt I designed for the 2025 edition, I kept the wireframe line art — objects built
                        purely from lines. Around it I built a new set of elements in the same spirit: grids, chamfered
                        frames and GUI lines. With four new categories this year, the icons were designed from scratch
                        as part of the system. On the crew T-shirt I tried out dithering as a one-off accent, a small
                        experiment worth developing in future editions.
                    </p>
                    <p>
                        For print, every colour got its own CMYK version, adjusted for how ink behaves on paper: toning
                        down the intense purple, which CMYK can’t reproduce, and softening the lime so it doesn’t turn flat.
                    </p>
                </div>
                <div data-anim="fade">
                    <Marquee items={visualSystem} duration={67} bleed label="Visual identity elements" />
                </div>
            </section>

            {/* ---------- 04 Gallery ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono" data-anim="fade">04 · Gallery</p>
                <h2 className="hotb-question" data-anim="fade">From file to the real world.</h2>
                <Bento items={gallery} layout={galleryLayout} data-anim="stagger" />
            </section>

            {/* ---------- 05 Process ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono" data-anim="fade">05 · Process</p>
                <ol className="hotb-log mono" data-anim="type">
                    <li><span className="hotb-log-key">&gt; direction:</span> Set the look, palette and templates in one shared Figma project for the whole team.</li>
                    <li><span className="hotb-log-key">&gt; briefs:</span> Wrote a brief for each piece in ClickUp and reviewed every draft with specific feedback.</li>
                    <li><span className="hotb-log-key">&gt; approvals:</span> Ran sign-off rounds with ministries, the university and the city, and adapted patron logos for dark backgrounds.</li>
                    <li><span className="hotb-log-key">&gt; production:</span> Checked every file before it went out: correct format and scale, everything in vectors, CMYK colours, bleed and cut lines, matched to each printer’s requirements.</li>
                </ol>
            </section>

            {/* ---------- 06 Outcome ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono" data-anim="fade">06 · Outcome</p>
                <h2 className="hotb-question" data-anim="fade">Did it work?</h2>
                <ul className="hotb-list" data-anim="stagger">
                    <li><span className="hotb-check mono">[✓]</span><span><b className="hotb-key mono">A</b> Five designers, one brand: every piece, before and during the event, built on the same system.</span></li>
                    <li><span className="hotb-check mono">[✓]</span><span><b className="hotb-key mono">B</b> Readable prints this time, with only one sticker, the one on a lime background, drifting slightly in colour.</span></li>
                    <li><span className="hotb-check mono">[✓]</span><span><b className="hotb-key mono">C</b> Stickers people <mark className="todo-mark">actually put on their laptops</mark>.</span></li>
                    <li><span className="hotb-check mono">[✓]</span><span><b className="hotb-key mono">D</b> Every piece signed off by all five patrons and sent to print on schedule — despite late sponsor logos and category details that kept changing.</span></li>
                    <li><span className="hotb-check mono">[+]</span><span>A documented brand book, ready for whoever leads the next edition — so it doesn’t start from zero.</span></li>
                </ul>
            </section>

            {/* ---------- 07 On site ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono" data-anim="fade">07 · On site</p>
                <h2 className="hotb-question" data-anim="fade">How did it look in the room?</h2>
                <PhotoRow photos={onSite} data-anim="stagger" />
            </section>

            {/* ---------- 08 Next time ---------- */}
            <section className="hotb-section">
                <p className="hotb-kicker mono" data-anim="fade">08 · Next time</p>
                <ul className="hotb-list" data-anim="stagger">
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