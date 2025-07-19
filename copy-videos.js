const fs = require('fs');
const path = require('path');

// Erstelle Verzeichnisse
const createDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Kopiere Datei
const copyFile = (src, dest) => {
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} to ${dest}`);
};

// Hauptfunktion
const copyVideos = () => {
  const sourceDir = path.join(__dirname, 'public', 'video');
  const outDir = path.join(__dirname, 'out', 'video');
  
  // Erstelle Zielverzeichnis
  createDir(outDir);
  
  // Kopiere Videos
  const videos = ['hero-placeholder2.mp4', 'hero-background.mp4'];
  videos.forEach(video => {
    const src = path.join(sourceDir, video);
    const dest = path.join(outDir, video);
    if (fs.existsSync(src)) {
      copyFile(src, dest);
    } else {
      console.warn(`Warning: ${src} does not exist`);
    }
  });
};

copyVideos(); 