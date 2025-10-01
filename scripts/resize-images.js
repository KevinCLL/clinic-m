import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_SIZES = {
  'main_background.jpg': {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 800, height: 600 }
  },
  'nuestro_espacio.jpg': {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 800, height: 600 }
  },
  'que_ofrecemos.jpg': {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 800, height: 600 }
  },
  'quienes_somos.jpg': {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 800, height: 600 }
  },
  'inicio.jpg': {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 800, height: 600 }
  },

  'psychotherapy.jpg': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },
  'psychiatry.jpg': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },
  'mindfulness.jpg': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },

  'child.jpg': {
    desktop: { width: 600, height: 600 },
    mobile: { width: 300, height: 300 }
  },
  'teen.jpg': {
    desktop: { width: 600, height: 600 },
    mobile: { width: 300, height: 300 }
  },
  'adult.jpg': {
    desktop: { width: 600, height: 600 },
    mobile: { width: 300, height: 300 }
  },
  'perinatal.jpg': {
    desktop: { width: 600, height: 600 },
    mobile: { width: 300, height: 300 }
  },
  'third_age.jpg': {
    desktop: { width: 600, height: 600 },
    mobile: { width: 300, height: 300 }
  },

  'sala_terapia.png': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },
  'espacio_infantil.png': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },
  'terapia_grupal.png': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },
  'exterior.png': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },
  'recepcion.png': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },
  'sala_espera.png': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },

  'grupos_mindfulness.png': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },
  'yoga.png': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },
  'yoga_sensible.png': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },
  'retiros.png': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },
  'otras_actividades.png': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },

  'ramas_fondo_derecha.png': {
    desktop: { width: 400, height: 600 },
    mobile: { width: 200, height: 300 }
  },
  'ramas_fondo_derecha_2.png': {
    desktop: { width: 400, height: 600 },
    mobile: { width: 200, height: 300 }
  },
  'ramas_fondo_izquierda.png': {
    desktop: { width: 400, height: 600 },
    mobile: { width: 200, height: 300 }
  },
  'ramas_fondo_izquierda_2.png': {
    desktop: { width: 400, height: 600 },
    mobile: { width: 200, height: 300 }
  },

  'logo.png': {
    desktop: { width: 300, height: 300 },
    mobile: { width: 150, height: 150 }
  },

  'actividades.jpg': {
    desktop: { width: 1920, height: 1080 },
    mobile: { width: 800, height: 600 }
  },
  'grupos_mindfulness.jpg': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },
  'retiros.jpg': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },
  'yoga.jpg': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },
  'yoga_sensible.jpg': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 400, height: 300 }
  },
  'placeholder.jpg': {
    desktop: { width: 800, height: 600 },
    mobile: { width: 400, height: 300 }
  },
  'unknown.jpg': {
    desktop: { width: 800, height: 800 },
    mobile: { width: 400, height: 400 }
  },

  'ramas_fondo_abajo.png': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 300, height: 200 }
  },
  'ramas_fondo_abajo_2.png': {
    desktop: { width: 600, height: 400 },
    mobile: { width: 300, height: 200 }
  },
};

async function resizeImages() {
  const imagesDir = path.join(__dirname, '..', 'src', 'assets', 'images');
  const backupDir = path.join(__dirname, '..', 'src', 'assets', 'images-original');

  try {
    await fs.mkdir(backupDir, { recursive: true });
  } catch (err) {
    console.log('Backup directory already exists or error:', err.message);
  }

  const files = await fs.readdir(imagesDir);

  for (const file of files) {
    if (IMAGE_SIZES[file]) {
      const inputPath = path.join(imagesDir, file);
      const backupPath = path.join(backupDir, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);

      try {
        try {
          await fs.access(backupPath);
          console.log(`✓ Backup already exists for ${file}`);
        } catch {
          await fs.copyFile(inputPath, backupPath);
          console.log(`✓ Backed up ${file}`);
        }

        const metadata = await sharp(backupPath).metadata();
        const sizes = IMAGE_SIZES[file];

        const desktopSize = sizes.desktop;
        if (metadata.width > desktopSize.width || metadata.height > desktopSize.height) {
          await sharp(backupPath)
            .resize(desktopSize.width, desktopSize.height, {
              fit: 'inside',
              withoutEnlargement: true
            })
            .jpeg({ quality: 85, progressive: true })
            .png({ quality: 85, compressionLevel: 9 })
            .toFile(inputPath);

          const desktopSize_stat = (await fs.stat(inputPath)).size;
          const reduction = Math.round((1 - desktopSize_stat / (await fs.stat(backupPath)).size) * 100);
          console.log(`✅ ${file}: ${metadata.width}x${metadata.height} → ${desktopSize.width}x${desktopSize.height} (${reduction}% smaller)`);
        } else {
          await fs.copyFile(backupPath, inputPath);
          console.log(`⏭️  ${file}: Already optimal size (${metadata.width}x${metadata.height})`);
        }

        const mobileSize = sizes.mobile;
        const mobilePath = path.join(imagesDir, `${baseName}-mobile${ext}`);

        await sharp(backupPath)
          .resize(mobileSize.width, mobileSize.height, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ quality: 75, progressive: true })
          .png({ quality: 75, compressionLevel: 9 })
          .toFile(mobilePath);

        const mobileSize_stat = (await fs.stat(mobilePath)).size;
        const mobileReduction = Math.round((1 - mobileSize_stat / (await fs.stat(backupPath)).size) * 100);
        console.log(`📱 ${baseName}-mobile${ext}: ${metadata.width}x${metadata.height} → ${mobileSize.width}x${mobileSize.height} (${mobileReduction}% smaller)`);

      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }
  }

  console.log('\n✨ Image resizing complete!');
  console.log('💾 Original images backed up in:', backupDir);
  console.log('🎯 Desktop and mobile versions created');
}

resizeImages().catch(console.error);
