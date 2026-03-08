import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const routes = [
  '/',
  '/quienes-somos',
  '/que-ofrecemos',
  '/actividades',
  '/nuestro-espacio',
  '/contacto',
  '/servicios/psiquiatria',
  '/servicios/psicologia-clinica',
  '/servicios/infancia-adolescencia',
  '/servicios/terapia-emdr',
  '/servicios/mindfulness',
  '/servicios/perinatal',
  '/actividades/yoga',
  '/actividades/yoga-trauma',
  '/actividades/mindfulness',
  '/actividades/retiros'
];

function getMimeType(filePath) {
  const ext = filePath.split('.').pop().toLowerCase();
  const types = {
    html: 'text/html', css: 'text/css', js: 'application/javascript',
    json: 'application/json', png: 'image/png', jpg: 'image/jpeg',
    jpeg: 'image/jpeg', svg: 'image/svg+xml', woff: 'font/woff',
    woff2: 'font/woff2', ttf: 'font/ttf', ico: 'image/x-icon',
    webp: 'image/webp', gif: 'image/gif', txt: 'text/plain',
    xml: 'application/xml', map: 'application/json'
  };
  return types[ext] || 'application/octet-stream';
}

function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let urlPath = req.url.split('?')[0];
      let filePath = join(distDir, urlPath);

      if (!existsSync(filePath) || urlPath === '/' || !urlPath.includes('.')) {
        filePath = join(distDir, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const port = 4173;
  const server = await startServer(port);
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  console.log(`Prerendering ${routes.length} routes...\n`);

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForSelector('#app > *', { timeout: 10000 });
      await new Promise(r => setTimeout(r, 1000));

      const html = await page.content();

      const routePath = route === '/' ? '' : route;
      const outputDir = join(distDir, routePath);
      const outputFile = join(outputDir, 'index.html');

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      writeFileSync(outputFile, `<!DOCTYPE html>${html.replace(/^<!DOCTYPE html>/i, '')}`);
      console.log(`  OK  ${route} -> ${outputFile.replace(distDir, 'dist')}`);

      await page.close();
    } catch (err) {
      console.error(`  FAIL  ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log('\nPrerendering complete!');
}

prerender().catch(console.error);
