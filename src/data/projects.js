// Projekty na stronie głównej (kafle) i dane dla podstron.
//
// tile:  'big' (2×2) | 'wide' (2×1) | 'small' (1×1) — rozmiar kafla w siatce
// tone:  kolor kafla z palety — 'forest' | 'olive' | 'green' | 'ink' | 'lime' | 'mint' | 'paper'
// media: zapętlone wideo/GIF na kaflu, ścieżka względem public/ (np. 'media/hotb.mp4' albo 'media/hotb.gif').
//        Najlepiej MP4/WebM — waży kilka razy mniej niż GIF. null = animowany placeholder.
// Pozostałe pola (heading, description, tags, image, imageLabel) czyta podstrona projektu.

export const projects = [
    {
        slug: 'hotb-26',
        heading: 'Heroes of the Brain 2026',
        tileTitle: 'Heroes of\nthe Brain',
        description: 'Third edition, first complete system. I art-directed a five-person team through everything a 24-hour brain–computer interface hackathon needs: from social templates to stickers, ID badges, roll-up and presentations.',
        tags: ['ART DIRECTION', 'BRAND IDENTITY', 'PRINT'],
        tile: 'big',
        tone: 'forest',
        media: null,
        image: null,
        imageLabel: 'keyVisual'
    },
    {
        slug: 'neuron-ide',
        heading: 'Neuron IDE',
        description: 'A node-based visual pipeline editor for EEG and BCI signal processing, made with the KN Neuron student research group.',
        tags: ['UI/UX', 'PRODUCT'],
        tile: 'big',
        tone: 'olive',
        media: null,
        image: null,
        imageLabel: 'UI screens'
    },
    {
        slug: 'better-meow',
        heading: 'Better Meow',
        tileTitle: 'Better\nMeow',
        description: 'Concept branding and an online clothing shop, built from a practice brief.',
        tags: ['BRAND IDENTITY', 'E-COMMERCE'],
        tile: 'small',
        tone: 'green',
        media: null,
        image: null,
        imageLabel: 'brand + shop'
    },
    {
        slug: 'nocturne',
        heading: 'Nocturne',
        description: 'A self-initiated rebrand of a nightlife group, with an event page to match.',
        tags: ['REBRAND', 'WEB'],
        tile: 'small',
        tone: 'ink',
        media: null,
        image: null,
        imageLabel: 'event page'
    },
    {
        slug: 'neuro-randki',
        heading: 'Neuro Randki',
        description: 'A UI redesign of the app, done at the development team’s request.',
        tags: ['UI REDESIGN'],
        tile: 'wide',
        tone: 'lime',
        media: null,
        image: null,
        imageLabel: 'app screens'
    },
]

// Logotypy — małe kafle, po 4 w jednym polu siatki.
// image: ścieżka względem public/ (np. 'images/logos/neuron-ide.png'); null = nazwa jako placeholder.
// slug: gdy podstrona logo będzie gotowa, kafel zrobi się linkiem do /logos/<slug>. Na razie page: false.
export const logofolio = [
    { slug: 'neuron-ide', name: 'Neuron IDE', image: 'images/logos/neuron-ide.png', page: false },
    { slug: 'logo-2', name: '[LOGO 2]', image: null, page: false },
    { slug: 'logo-3', name: '[LOGO 3]', image: 'images/logos/neurohorror.png', page: false },
    { slug: 'logo-4', name: '[LOGO 4]', image: 'images/logos/neuroscholar.png', page: false },
    { slug: 'logo-5', name: '[LOGO 5]', image: null, page: false },
    { slug: 'logo-6', name: '[LOGO 6]', image: null, page: false },
    { slug: 'logo-7', name: '[LOGO 7]', image: null, page: false },
    { slug: 'logo-8', name: '[LOGO 8]', image: null, page: false },
]

// Kolejność kafli na stronie głównej (siatka 4 kolumny, luki wypełniają się same).
// 'slug' = projekt, 'logo:slug' = logotyp. Czego tu nie ma, trafia na koniec.
// Aktualny układ:
//   HOTB HOTB  logo  logo
//   HOTB HOTB  BMeow logo
//   Noct logo  NIDE  NIDE
//   logo logo  NIDE  NIDE
//   NRan NRan  logo  logo
//   [ Your project? — cały rząd ]
export const homeGrid = [
    'hotb-26', 'logo:neuron-ide', 'logo:logo-2',
    'better-meow', 'logo:logo-3',
    'nocturne', 'logo:logo-4', 'neuron-ide',
    'logo:logo-5', 'logo:logo-6',
    'neuro-randki', 'logo:logo-7', 'logo:logo-8',
]