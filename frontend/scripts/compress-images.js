const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_ROOT = path.join(__dirname, '..', 'static', 'assets');
const MAX_BYTES = 200 * 1024; // 200KB

const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

async function compressImageFile(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    return;
  }

  const originalBuffer = await fs.promises.readFile(imagePath);
  if (originalBuffer.length <= MAX_BYTES) {
    console.log(`[SKIP] ${path.basename(imagePath)} already <= 200KB (${(originalBuffer.length / 1024).toFixed(1)}KB)`);
    return;
  }

  console.log(`[COMPRESS] ${path.basename(imagePath)} original ${(originalBuffer.length / 1024).toFixed(1)}KB`);

  let quality = 80;
  let targetWidth = 1920;
  let bestBuffer = originalBuffer;

  const originalSharp = sharp(originalBuffer);
  const metadata = await originalSharp.metadata();
  const originalWidth = metadata.width || targetWidth;

  while (true) {
    const widthToUse = Math.min(targetWidth, originalWidth);
    let pipeline = sharp(originalBuffer).resize({
      width: widthToUse,
      withoutEnlargement: true
    });

    if (ext === '.png') {
      pipeline = pipeline.png({
        quality,
        palette: true
      });
    } else {
      pipeline = pipeline.jpeg({
        quality
      });
    }

    const compressedBuffer = await pipeline.toBuffer();

    console.log(`  -> try width=${widthToUse}, quality=${quality}, size=${(compressedBuffer.length / 1024).toFixed(1)}KB`);

    bestBuffer = compressedBuffer;

    if (compressedBuffer.length <= MAX_BYTES) {
      break;
    }

    if (quality > 40) {
      quality -= 10;
    } else if (widthToUse > 600) {
      targetWidth = Math.floor(widthToUse * 0.8);
    } else {
      console.warn(`  !! cannot reach <= 200KB, stop at ${(compressedBuffer.length / 1024).toFixed(1)}KB`);
      break;
    }
  }

  await fs.promises.writeFile(imagePath, bestBuffer);
  console.log(`[DONE] ${path.basename(imagePath)} new size ${(bestBuffer.length / 1024).toFixed(1)}KB`);
}

async function walkDir(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else {
      await compressImageFile(fullPath);
    }
  }
}

async function main() {
  console.log(`Scanning assets in: ${ASSETS_ROOT}`);
  await walkDir(ASSETS_ROOT);
  console.log('All eligible images processed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
