import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, copyFileSync, existsSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs',
  },
  plugins: [
    react(),
    {
      name: 'copy-404-html',
      closeBundle() {
        // After build, copy index.html to 404.html and inject scripts
        const buildPath = resolve(__dirname, 'docs')
        const indexPath = resolve(buildPath, 'index.html')
        const html404Path = resolve(buildPath, '404.html')
        
        try {
          let indexHtml = readFileSync(indexPath, 'utf-8')
          
          // Add script to handle static files before React Router
          const staticFileScript = `
    <script>
      // Handle static files (like app-ads.txt) before React Router
      (function() {
        var path = window.location.pathname;
        var staticExtensions = ['.txt', '.xml', '.json', '.ico'];
        var knownStaticFiles = ['/app-ads.txt', '/robots.txt', '/sitemap.xml'];
        
        var isStaticFile = staticExtensions.some(function(ext) {
          return path.toLowerCase().endsWith(ext);
        });
        var isKnownStatic = knownStaticFiles.includes(path);
        
        if (isStaticFile || isKnownStatic) {
          // Try to fetch the file - if it exists, let the server serve it
          // Otherwise, let React Router handle it
          fetch(path, { method: 'HEAD', cache: 'no-cache' })
            .then(function(response) {
              if (!response.ok) {
                // File doesn't exist, let React Router handle it
                return;
              }
            })
            .catch(function() {
              // Error fetching, let React Router handle it
            });
        }
      })();
    </script>`
          
          // Insert script before closing head tag
          indexHtml = indexHtml.replace('</head>', staticFileScript + '\n  </head>')
          
          writeFileSync(html404Path, indexHtml, 'utf-8')
          
          // Copy app-ads.txt from public to docs if it exists
          const publicAppAdsPath = resolve(__dirname, 'public', 'app-ads.txt')
          const docsAppAdsPath = resolve(buildPath, 'app-ads.txt')
          if (existsSync(publicAppAdsPath)) {
            copyFileSync(publicAppAdsPath, docsAppAdsPath)
            console.log('✓ Copied app-ads.txt to docs folder')
          }
        } catch (error) {
          console.warn('Could not copy index.html to 404.html:', error)
        }
      }
    }
  ],
})
