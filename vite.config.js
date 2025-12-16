import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/voidrush-web/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
