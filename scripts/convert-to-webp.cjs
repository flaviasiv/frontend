#!/usr/bin/env node
/**
 * Convert PNG images to WebP format for better performance
 *
 * Usage: node scripts/convert-to-webp.js
 *
 * This script converts large PNG hero images to WebP format,
 * reducing file sizes by ~60-70% while maintaining visual quality.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images to convert (hero images, backgrounds)
const imagesToConvert = [
  'hero-header-33c370.png',
  'hero-header-mobile-4dae4b.png',
  'cta-background.png',
  'hero2-image.png',
  'hero3-image.png',
  'hero-saude-mental.png',
  'hero-emagrecimento.png',
];

const imagesDir = path.join(__dirname, '../public/images');

async function convertImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const outputPath = inputPath.replace('.png', '.webp');

  // Check if input exists
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  ${filename} - not found, skipping`);
    return null;
  }

  // Check if output already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  ${filename} - WebP already exists, skipping`);
    return null;
  }

  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;

    // Convert to WebP
    await sharp(inputPath)
      .webp({
        quality: 85,  // High quality
        effort: 6,    // Higher compression effort
        lossless: false
      })
      .toFile(outputPath);

    // Get new file size
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${filename}`);
    console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   WebP:     ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Savings:  ${savings}%`);
    console.log('');

    return {
      filename,
      originalSize,
      newSize,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ ${filename} - Error: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🖼️  Converting PNG images to WebP format...\n');

  const results = [];

  for (const filename of imagesToConvert) {
    const result = await convertImage(filename);
    if (result) {
      results.push(result);
    }
  }

  // Summary
  if (results.length > 0) {
    console.log('📊 Summary:');
    console.log(`   Images converted: ${results.length}`);

    const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
    const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
    const totalSavings = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

    console.log(`   Total original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Total WebP:     ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Total savings:  ${totalSavings}%`);
    console.log('');
    console.log('✅ Conversion complete!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Update components to use <picture> element with WebP');
    console.log('2. Keep PNG files as fallback for older browsers');
    console.log('3. Test in multiple browsers');
  } else {
    console.log('ℹ️  No images were converted (already exist or not found)');
  }
}

main().catch(console.error);
