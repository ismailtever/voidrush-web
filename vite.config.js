import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404-html',
      closeBundle() {
        // After build, copy index.html to 404.html and inject scripts
        const distPath = resolve(__dirname, 'dist')
        const indexPath = resolve(distPath, 'index.html')
        const html404Path = resolve(distPath, '404.html')
        
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
        } catch (error) {
          console.warn('Could not copy index.html to 404.html:', error)
        }
      }
    }
  ],
})
