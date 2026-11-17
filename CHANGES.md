# Co zmieniłem

## Hosting / build
- Jeden `vite.config.js` (z pluginem React); usunięty martwy `src/vite.config.js`.
- `npm run build` → base `/` (Vercel/Netlify/Cloudflare/własna domena). `vercel.json` przekierowuje podstrony na index.html, więc odświeżanie `/about` i `/projects/...` działa.
- `npm run deploy:gh` → GitHub Pages (base `/Portfolio/` + kopia `404.html`, dzięki czemu podstrony po odświeżeniu nie dają 404). Stary `npm run deploy` zastąpiony tym skryptem.

## Wydajność
- `hero-bg.png` 2,2 MB → `hero-bg.webp` 274 KB.
- Fonty self-hosted przez @fontsource (Plex Mono 400/700, Press Start 2P), bez Google Fonts. Excelorate faktycznie ładowany przez @font-face (wcześniej nigdzie nie był zadeklarowany).

## Błędy
- `Project.jsx` i `About.jsx` zwracały pustą stronę — teraz szkielet case study (problem/process/outcome, „next project”) i about.
- Logo z `src/assets/logos` przeniesione do `public/images/logos` (ścieżka z `src/` nie działała po buildzie).
- Klasa `overlay-heading` → `overlay-title` (nie miała stylów).
- `letter-spacing: -3%` → `-0.03em`.

## SEO / udostępnianie
- Tytuł, meta description, Open Graph (dodaj `public/og.png` 1200×630).

## UX
- Hero: rola + jedno zdanie + przycisk „See projects”.
- Opisy bez justowania, max 65 znaków w linii.
- Kafelki „others”: na dotyku tytuł widoczny zawsze.
- Nawigacja na telefonie na całą szerokość (wcześniej wychodziła poza ekran).
- Stopka z kontaktem; treść nie chowa się pod dolną nawigacją.
- Fokus klawiatury, „Skip to content”, prefers-reduced-motion.
- Strona 404 z powrotem na główną.

## TODO dla Ciebie
- `public/cv.pdf`, `public/og.png`, e-mail w `src/data/links.js`.
- Prawdziwe treści i obrazki w `src/data/projects.js` (opcjonalne pola: role, year, problem, process, outcome).
