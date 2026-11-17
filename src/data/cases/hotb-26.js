// Case study: Heroes of the Brain 2026
//
// {{tekst}}  → podświetlone na stronie jako „do sprawdzenia / uzupełnienia”.
//              Gdy potwierdzisz, po prostu usuń nawiasy klamrowe.
// image / photo: ścieżka względem public/ (np. 'images/hotb/rollup.webp'); null = placeholder.
//   photo w galerii = zdjęcie z eventu pokazane obok pliku (plik ↔ w użyciu).

export const hotb26 = {
    breadcrumb: 'case_01 · Art_Director · 2026',
    title: 'Heroes_of_the_Brain',
    lead: 'Third edition, first complete system. I art-directed a five-person team through everything a 24-hour brain–computer interface hackathon needs: from social templates to stickers, ID badges, roll-up and presentations.',
    cover: { image: null, label: 'key visual' },
    meta: [
        ['role_', 'Art Director & Design Lead'],
        ['team_', '5 designers'],
        ['timeline_', 'Mar 2026 – Dec 2026'],
        ['tools_', 'Figma, Affinity'],
    ],

    context: {
        num: '01', name: 'Context', cmd: 'boot_sequence',
        question: 'What do you do when every edition starts almost from scratch?',
        body: [
            'Heroes of the Brain is a 24-hour neurohackathon run by the KN Neuron student research group and the student government at Wrocław University of Science and Technology, where teams build projects on brain–computer interface technology, mostly EEG.',
            '2026 was the third edition. The logo and core colours had carried over from year to year, but everything around them — layouts, graphic elements, typography — was reinvented each time. Not because the earlier directions were weak: the identity was simply never written down, or at least never handed over to the next team. On top of that, last year’s printed materials came out too dark to read. Having worked on the 2025 edition, I knew where things broke — partly because I’d broken some of them myself.',
            'I didn’t want to simply extend the 2025 look, as it never quite matched the event’s DNA, and very little survived from 2024. So instead of picking one, I took the strongest parts of both, added new elements that push the cyberpunk aesthetic further, and documented it all, so future teams can build on it instead of starting over. As Art Director I set the direction, led a team of five designers and handled everything from briefs and patron approvals to print-ready files.',
        ],
    },

    challenge: {
        num: '02', name: 'Challenge', cmd: 'known_issues',
        question: 'How do you make five designers sound like one brand — and get it past five patrons on time?',
        items: [
            { key: 'A', title: 'Team_consistency', text: 'Five designers, dozens of formats, one brand. Before anyone could start, the team needed a shared base: a defined identity, ready-to-use assets and example graphics to follow, so everything made before and during the event would look like it came from one hand.' },
            { key: 'B', title: 'Digital_to_print', text: 'The palette had to work everywhere, from glowing screens to matte paper, CMYK print and DTF transfers on black cotton. I adjusted the colours and built a matching print set, so the brand looked the same on screen and on paper.' },
            { key: 'C', title: 'Worth_keeping', text: 'Consistency alone isn’t enough: the designs also had to catch the eye and start tying a recognisable look to the event. The stickers were the test, since they had to be good enough that participants would proudly put them on their laptops and carry the brand beyond the hackathon.' },
            { key: 'D', title: 'Approval_deadlines', text: 'Honorary patronage came with rules: every piece carrying a patron’s logo had to be approved by them before it could be published or printed. With five patrons, every approval round set the pace and tightened already short deadlines.' },
        ],
    },

    system: {
        num: '03', name: 'Visual system', cmd: 'source_code',
        question: 'What’s left when you strip the brand down to its building blocks?',
        body: [
            'The logo, core palette and display fonts stayed. Next to cyan, pink and purple I added lime, a deliberate break from three neighbouring hues, and paired the existing typefaces with JetBrains Mono for a terminal feel.',
            'From my own {{2025}} T-shirt design I kept the wireframe line art, objects built purely from lines, along with dithering effects, used sparingly as accents. Around them I built a new set of elements in the same spirit: grids, chamfered frames and GUI lines. I also redrew the icons for all four categories so they finally match the rest of the event.',
            'For print, every colour got its own CMYK version, adjusted for how ink behaves on paper: toning down the intense purple, which CMYK can’t reproduce, and softening the lime so it doesn’t turn flat.',
        ],
        boards: [
            { image: null, label: 'palette — digital + print' },
            { image: null, label: 'typography' },
            { image: null, label: 'elements — wireframe, grids, frames' },
            { image: null, label: 'category icons' },
        ],
    },

    gallery: {
        num: '04', name: 'Gallery', cmd: 'build_output',
        question: 'From file to the real world.',
        items: [
            { title: 'Posters & covers', text: 'A3 poster, screen version and Facebook covers for the campaign.', image: null, photo: null },
            { title: 'Roll-up', text: 'Signed off by every patron; the brain and QR read from across the hall.', image: null, photo: null },
            { title: 'Social media', text: 'A template system that let the whole team turn out category, prize and partner posts fast and on-brand.', image: null, photo: null },
            { title: 'Stickers', text: 'A set of four, picked from the team’s proposals and refined into print-ready files with cut lines.', image: null, photo: null },
            { title: 'Crew T-shirt', text: 'Chosen from several team designs, then vectorised for DTF printing on black cotton.', image: null, photo: null },
            { title: 'ID badges', text: 'A colour per role, so participants, the jury, volunteers and coordinators can be told apart from across the room.', image: null, photo: null },
            { title: 'Invitations', text: 'Folded cards for university authorities.', image: null, photo: null },
            { title: 'Diplomas', text: 'Winner diplomas plus thank-you certificates in five variants for the jury, mentors and sponsors.', image: null, photo: null },
            { title: 'Presentations', text: 'Opening and closing decks, with an octagon progress rail, a submission QR and podium slides for the winners.', image: null, photo: null },
        ],
        // Zdjęcia z eventu bez pary z plikiem — krótki podpis do każdego
        photos: [
            // { image: 'images/hotb/day1-rollup.webp', caption: 'The roll-up on day one.' },
        ],
    },

    process: {
        num: '05', name: 'Process', cmd: 'commit_log',
        items: [
            ['direction', 'Set the look, palette and templates in one shared Figma project for the whole team.'],
            ['briefs', 'Wrote a brief for each piece in ClickUp and reviewed every draft with specific feedback.'],
            ['approvals', 'Ran sign-off rounds with ministries, the university and the city, and adapted patron logos for dark backgrounds.'],
            ['production', 'Checked every file before it went out: correct format and scale, everything in vectors, CMYK colours, bleed and cut lines, matched to each printer’s requirements.'],
        ],
    },

    outcome: {
        num: '06', name: 'Outcome', cmd: 'tests_passed',
        question: 'Did it work?',
        items: [
            { key: 'A', text: 'Five designers, one brand: every piece, before and during the event, built on the same system.' },
            { key: 'B', text: 'Readable prints this time, with only one sticker, the one on a lime background, drifting slightly in colour.' },
            { key: 'C', text: 'Stickers people {{actually put on their laptops}}.' },
            { key: 'D', text: 'Every piece approved by all five patrons {{on time}}.' },
            { key: '+', text: 'A documented brand book, {{handed over}} so the next edition doesn’t start from zero.' },
        ],
    },

    next: {
        num: '07', name: 'Next time', cmd: 'todo_2027',
        items: [
            '{{Put print specs (CMYK, bleed, cut lines) in every brief from the start, not at the end.}}',
            'Write the team rules down early: one shared Figma file, file naming, and where tasks live.',
            'Plan every graphic up front: a full list of what needs to be made, reviewed by the other coordinators, so the scope is clear from day one.',
            'Give the partnerships team a ready-made line for their emails, asking every sponsor, patron and partner for a white or dark-background logo from the start.',
            'Rethink social media: more engaging content that invites interaction and reaches beyond the usual audience.',
            'Design for the venue too: infographics, team and table signage and a room map, so participants and the jury always know where to go.',
            'Go fully English across every material from day one.',
        ],
    },
}