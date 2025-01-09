// fix-imports.js
const fs = require('fs');
const path = require('path');

const sdkDir = './sdk-javascript-web/src';

function addJsExtensions(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace relative imports with .js extension
  content = content.replace(
    /import .* from ['"](\.[^'"]+)['"]/g, 
    (match, importPath) => {
      if (!importPath.endsWith('.js')) {
        return match.replace(importPath, `${importPath}.js`);
      }
      return match;
    }
  );

  fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.js')) {
      console.log(`Processing: ${fullPath}`);
      addJsExtensions(fullPath);
    }
  });
}

processDirectory(sdkDir);