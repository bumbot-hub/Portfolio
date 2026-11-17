import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Domyślnie base = '/' (Vercel / Netlify / Cloudflare Pages / własna domena).
// Dla GitHub Pages (bumbot-hub.github.io/Portfolio/) użyj `npm run deploy:gh`,
// który buduje z --base=/Portfolio/.
export default defineConfig({
  plugins: [react()],
})
