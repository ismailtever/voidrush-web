import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');
const four04Path = join(distPath, '404.html');

try {
  copyFileSync(indexPath, four04Path);
  console.log('✓ Copied index.html to 404.html');
} catch (error) {
  console.error('Error copying 404.html:', error);
  process.exit(1);
}

