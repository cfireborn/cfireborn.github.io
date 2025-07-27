#!/usr/bin/env node

/**
 * Sample Image Generator for Heartbreak Project
 * Generates placeholder SVG images for testing the image randomizer system
 * Run: node generate-sample-images.js
 */

const fs = require('fs');
const path = require('path');

const stages = [
  { name: 'denial', folder: 'stage-1-denial', color: '#9E9E9E', emotion: '😵‍💫' },
  { name: 'anger', folder: 'stage-2-anger', color: '#F44336', emotion: '😠' },
  { name: 'bargaining', folder: 'stage-3-bargaining', color: '#FF9800', emotion: '🙏' },
  { name: 'depression', folder: 'stage-4-depression', color: '#2196F3', emotion: '😢' },
  { name: 'acceptance', folder: 'stage-5-acceptance', color: '#607D8B', emotion: '😌' },
  { name: 'hope', folder: 'stage-6-hope', color: '#8BC34A', emotion: '🙂' },
  { name: 'healing', folder: 'stage-7-healing', color: '#4CAF50', emotion: '😊' }
];

const artStyles = [
  { name: 'cartoon', style: 'cartoon-like' },
  { name: 'impressionist', style: 'painterly' },
  { name: 'abstract', style: 'geometric' },
  { name: 'realistic-oil-painting', style: 'classical' },
  { name: 'photorealistic', style: 'realistic' }
];

function createSVGImage(stage, artStyle, variation) {
  const size = 400;
  const centerX = size / 2;
  const centerY = size / 2;
  
  // Base colors and styling based on stage
  const primaryColor = stage.color;
  const lightColor = stage.color + '40';
  
  let svgContent = '';
  
  // Different visual styles based on art style
  switch (artStyle.name) {
    case 'cartoon':
      svgContent = `
        <!-- Cartoon style: Simple, clean lines -->
        <circle cx="${centerX}" cy="${centerY-40}" r="60" fill="${primaryColor}" stroke="#333" stroke-width="3"/>
        <circle cx="${centerX-20}" cy="${centerY-50}" r="8" fill="#333"/>
        <circle cx="${centerX+20}" cy="${centerY-50}" r="8" fill="#333"/>
        <path d="M ${centerX-15} ${centerY-20} Q ${centerX} ${centerY-10} ${centerX+15} ${centerY-20}" 
              stroke="#333" stroke-width="2" fill="none"/>
        <rect x="${centerX-30}" y="${centerY+20}" width="60" height="80" fill="${lightColor}" stroke="#333" stroke-width="3"/>
        <text x="${centerX}" y="${size-40}" text-anchor="middle" font-size="24" fill="#333">
          ${stage.emotion} ${stage.name}
        </text>
      `;
      break;
      
    case 'impressionist':
      svgContent = `
        <!-- Impressionist style: Soft, painterly -->
        <defs>
          <filter id="blur${variation}">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
          </filter>
        </defs>
        <ellipse cx="${centerX}" cy="${centerY-40}" rx="65" ry="60" fill="${primaryColor}" filter="url(#blur${variation})"/>
        <ellipse cx="${centerX-20}" cy="${centerY-50}" rx="10" ry="8" fill="#333" opacity="0.8"/>
        <ellipse cx="${centerX+20}" cy="${centerY-50}" rx="10" ry="8" fill="#333" opacity="0.8"/>
        <ellipse cx="${centerX}" cy="${centerY+20}" rx="35" ry="70" fill="${lightColor}" filter="url(#blur${variation})"/>
        <text x="${centerX}" y="${size-40}" text-anchor="middle" font-size="20" fill="#555" opacity="0.8">
          ${stage.emotion} impressionist ${stage.name}
        </text>
      `;
      break;
      
    case 'abstract':
      svgContent = `
        <!-- Abstract style: Geometric shapes -->
        <polygon points="${centerX-50},${centerY-60} ${centerX+50},${centerY-60} ${centerX+30},${centerY-20} ${centerX-30},${centerY-20}" 
                 fill="${primaryColor}"/>
        <rect x="${centerX-15}" y="${centerY-55}" width="10" height="10" fill="#333"/>
        <rect x="${centerX+5}" y="${centerY-55}" width="10" height="10" fill="#333"/>
        <rect x="${centerX-25}" y="${centerY+20}" width="50" height="60" fill="${lightColor}"/>
        <text x="${centerX}" y="${size-40}" text-anchor="middle" font-size="18" fill="#333">
          ${stage.emotion} abstract ${stage.name}
        </text>
      `;
      break;
      
    case 'realistic-oil-painting':
      svgContent = `
        <!-- Oil painting style: Rich, detailed -->
        <defs>
          <radialGradient id="grad${variation}">
            <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:1" />
            <stop offset="100%" style="stop-color:#333;stop-opacity:0.8" />
          </radialGradient>
        </defs>
        <circle cx="${centerX}" cy="${centerY-40}" r="62" fill="url(#grad${variation})" stroke="#333" stroke-width="1"/>
        <ellipse cx="${centerX-20}" cy="${centerY-50}" rx="6" ry="8" fill="#333"/>
        <ellipse cx="${centerX+20}" cy="${centerY-50}" rx="6" ry="8" fill="#333"/>
        <path d="M ${centerX-20} ${centerY-25} Q ${centerX} ${centerY-15} ${centerX+20} ${centerY-25}" 
              stroke="#333" stroke-width="2" fill="none"/>
        <ellipse cx="${centerX}" cy="${centerY+25}" rx="32" ry="65" fill="${lightColor}" stroke="#333" stroke-width="1"/>
        <text x="${centerX}" y="${size-40}" text-anchor="middle" font-size="16" fill="#333">
          ${stage.emotion} oil painting ${stage.name}
        </text>
      `;
      break;
      
    case 'photorealistic':
      svgContent = `
        <!-- Photorealistic style: Detailed, realistic -->
        <defs>
          <linearGradient id="realistic${variation}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:1" />
            <stop offset="50%" style="stop-color:${lightColor};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${primaryColor};stop-opacity:0.7" />
          </linearGradient>
        </defs>
        <circle cx="${centerX}" cy="${centerY-40}" r="58" fill="url(#realistic${variation})" stroke="#222" stroke-width="0.5"/>
        <circle cx="${centerX-18}" cy="${centerY-48}" r="5" fill="#222"/>
        <circle cx="${centerX+18}" cy="${centerY-48}" r="5" fill="#222"/>
        <path d="M ${centerX-12} ${centerY-28} Q ${centerX} ${centerY-22} ${centerX+12} ${centerY-28}" 
              stroke="#222" stroke-width="1.5" fill="none"/>
        <rect x="${centerX-28}" y="${centerY+15}" width="56" height="70" rx="8" fill="url(#realistic${variation})" 
              stroke="#222" stroke-width="0.5"/>
        <text x="${centerX}" y="${size-40}" text-anchor="middle" font-size="14" fill="#333">
          ${stage.emotion} photorealistic ${stage.name}
        </text>
      `;
      break;
  }
  
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f8f9fa"/>
  ${svgContent}
  <text x="${centerX}" y="30" text-anchor="middle" font-size="12" fill="#666">
    ${artStyle.style} - variation ${variation}
  </text>
</svg>`;
  
  return svg;
}

function generateAllSampleImages() {
  console.log('🎨 Generating sample images for heartbreak project...');
  
  let totalGenerated = 0;
  
  stages.forEach(stage => {
    artStyles.forEach(artStyle => {
      const stylePath = path.join('images', stage.folder, artStyle.name);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(stylePath)) {
        fs.mkdirSync(stylePath, { recursive: true });
      }
      
      // Generate 5 variations per style
      for (let i = 1; i <= 5; i++) {
        const filename = `${stage.name}_${artStyle.name}_${i.toString().padStart(2, '0')}.svg`;
        const filepath = path.join(stylePath, filename);
        
        const svgContent = createSVGImage(stage, artStyle, i);
        fs.writeFileSync(filepath, svgContent);
        
        totalGenerated++;
        console.log(`✅ Generated: ${filepath}`);
      }
    });
  });
  
  console.log(`\n🎉 Successfully generated ${totalGenerated} sample images!`);
  console.log(`📁 Images are organized in: /images/stage-X-name/art-style/`);
  console.log(`\n🚀 You can now test your heartbreak app with these placeholder images.`);
  console.log(`💡 Replace these SVG files with actual AI-generated images when ready.`);
}

// Run the generator
if (require.main === module) {
  try {
    generateAllSampleImages();
  } catch (error) {
    console.error('❌ Error generating images:', error.message);
    process.exit(1);
  }
}