import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is deployed to GitHub Pages under the repository sub-path
// https://ishikasri06.github.io/PORTFOLIO/ so every asset URL must be
// prefixed with `/PORTFOLIO/`.
export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIO/',
})
