import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const root = path.resolve('src/assets/mobile');

const targets = [
  {
    input: 'mobile-header-hero.png',
    output: 'mobile-header-hero.jpg',
    width: 700,
    format: 'jpeg',
    options: { quality: 82, progressive: true },
  },
  {
    input: 'mobile-hero-logo-grid.png',
    output: 'mobile-hero-logo-grid.jpg',
    width: 700,
    format: 'jpeg',
    options: { quality: 82, progressive: true },
  },
  {
    input: 'mobile-hero-saude.png',
    output: 'mobile-hero-saude.jpg',
    width: 700,
    format: 'jpeg',
    options: { quality: 82, progressive: true },
  },
  {
    input: 'mobile-cta-background.png',
    output: 'mobile-cta-background.jpg',
    width: 700,
    format: 'jpeg',
    options: { quality: 80, progressive: true },
  },
  {
    input: 'mobile-card-profissionais-alt.png',
    output: 'mobile-card-profissionais-alt.jpg',
    width: 640,
    format: 'jpeg',
    options: { quality: 80, progressive: true },
  },
  {
    input: 'mobile-card-tratamento-alt.png',
    output: 'mobile-card-tratamento-alt.jpg',
    width: 640,
    format: 'jpeg',
    options: { quality: 80, progressive: true },
  },
];

async function optimize() {
  for (const target of targets) {
    const inputPath = path.join(root, target.input);
    const outputPath = path.join(root, target.output);

    const pipeline = sharp(inputPath).resize({ width: target.width });

    if (target.format === 'jpeg') {
      pipeline.jpeg(target.options);
    } else {
      pipeline.png({ compressionLevel: 9, palette: true });
    }

    await pipeline.toFile(outputPath);
    await fs.unlink(inputPath);
    console.log(`Optimized ${target.input} -> ${path.basename(outputPath)}`);
  }
}

optimize().catch((error) => {
  console.error(error);
  process.exit(1);
});
