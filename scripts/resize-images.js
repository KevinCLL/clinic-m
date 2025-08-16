import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_SIZES = {
  // Fondos de cabecera - necesitan alta resolución
  'main_background.jpg': { width: 1920, height: 1080 },
  'nuestro_espacio.jpg': { width: 1920, height: 1080 },
  'que_ofrecemos.jpg': { width: 1920, height: 1080 },
  'quienes_somos.jpg': { width: 1920, height: 1080 },
  
  // Imágenes de servicios/cards - tamaño medio
  'psychotherapy.jpg': { width: 800, height: 600 },
  'psychiatry.jpg': { width: 800, height: 600 },
  'mindfulness.jpg': { width: 800, height: 600 },
  
  // Imágenes circulares de etapas de vida
  'child.jpg': { width: 600, height: 600 },
  'teen.jpg': { width: 600, height: 600 },
  'adult.jpg': { width: 600, height: 600 },
  'perinatal.jpg': { width: 600, height: 600 },
  'third_age.jpg': { width: 600, height: 600 },
  
  // Imágenes de instalaciones
  'sala_terapia.png': { width: 800, height: 600 },
  'espacio_infantil.png': { width: 800, height: 600 },
  'terapia_grupal.png': { width: 800, height: 600 },
  'exterior.png': { width: 800, height: 600 },
  'recepcion.png': { width: 800, height: 600 },
  'sala_espera.png': { width: 800, height: 600 },
  
  // Imágenes de actividades
  'grupos_mindfulness.png': { width: 600, height: 400 },
  'yoga.png': { width: 600, height: 400 },
  'yoga_sensible.png': { width: 600, height: 400 },
  'retiros.png': { width: 600, height: 400 },
  'otras_actividades.png': { width: 600, height: 400 },
  
  // Ramas decorativas - pueden ser más pequeñas
  'ramas_fondo_derecha.png': { width: 400, height: 600 },
  'ramas_fondo_izquierda.png': { width: 400, height: 600 },
  
  // Logo - mantener pequeño
  'logo.png': { width: 300, height: 300 },
};

async function resizeImages() {
  const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');
  const backupDir = path.join(__dirname, '..', 'src', 'assets', 'images-original');
  
  // Crear directorio de backup si no existe
  try {
    await fs.mkdir(backupDir, { recursive: true });
  } catch (err) {
    console.log('Backup directory already exists or error:', err.message);
  }
  
  // Leer todos los archivos en el directorio
  const files = await fs.readdir(imagesDir);
  
  for (const file of files) {
    if (IMAGE_SIZES[file]) {
      const inputPath = path.join(imagesDir, file);
      const backupPath = path.join(backupDir, file);
      
      try {
        // Verificar si ya existe un backup
        try {
          await fs.access(backupPath);
          console.log(`✓ Backup already exists for ${file}`);
        } catch {
          // Crear backup del original
          await fs.copyFile(inputPath, backupPath);
          console.log(`✓ Backed up ${file}`);
        }
        
        // Obtener metadata de la imagen
        const metadata = await sharp(inputPath).metadata();
        const targetSize = IMAGE_SIZES[file];
        
        // Solo redimensionar si es más grande que el objetivo
        if (metadata.width > targetSize.width || metadata.height > targetSize.height) {
          await sharp(inputPath)
            .resize(targetSize.width, targetSize.height, {
              fit: 'cover',
              position: 'center'
            })
            .jpeg({ quality: 90, progressive: true })
            .png({ quality: 90, compressionLevel: 9 })
            .toFile(inputPath + '.tmp');
          
          // Reemplazar el archivo original
          await fs.rename(inputPath + '.tmp', inputPath);
          
          const oldSize = (await fs.stat(backupPath)).size;
          const newSize = (await fs.stat(inputPath)).size;
          const reduction = Math.round((1 - newSize / oldSize) * 100);
          
          console.log(`✅ ${file}: ${metadata.width}x${metadata.height} → ${targetSize.width}x${targetSize.height} (${reduction}% smaller)`);
        } else {
          console.log(`⏭️  ${file}: Already optimal size (${metadata.width}x${metadata.height})`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log('\n✨ Image resizing complete!');
  console.log('💾 Original images backed up in:', backupDir);
  console.log('🎯 Now run "npm run build" to apply compression');
}

resizeImages().catch(console.error);