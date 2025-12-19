import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        // Build sonrası index.html'i 404.html'e kopyala
        const docsPath = join(__dirname, 'docs')
        const indexPath = join(docsPath, 'index.html')
        const four04Path = join(docsPath, '404.html')
        try {
          copyFileSync(indexPath, four04Path)
          console.log('✓ Copied index.html to 404.html')
        } catch (error) {
          console.error('Error copying 404.html:', error)
        }
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
})
