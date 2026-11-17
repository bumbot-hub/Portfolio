// GitHub Pages nie zna routingu SPA: dla nieznanej ścieżki serwuje 404.html.
// Kopia index.html jako 404.html sprawia, że /Portfolio/about itp. działają po odświeżeniu.
import { copyFileSync } from 'node:fs'
copyFileSync('dist/index.html', 'dist/404.html')
console.log('✓ dist/404.html (SPA fallback for GitHub Pages)')
