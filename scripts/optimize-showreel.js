const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// FFmpeg Pfad
const ffmpegPath = 'C:\\Users\\Schmidtm.ROEDER\\Desktop\\ORDNER\\319Webdesign\\ffmpeg\\bin\\ffmpeg.exe';

const inputFile = path.join(process.cwd(), 'public', 'img', 'Klangversprechen', 'Showreel.mp4');
const outputFile = path.join(process.cwd(), 'public', 'img', 'Klangversprechen', 'Showreel-optimized.webm');

console.log('🎬 Optimiere Showreel.mp4 zu WebM...\n');

// Prüfe ob ffmpeg existiert
if (!fs.existsSync(ffmpegPath)) {
  console.error('❌ FFmpeg nicht gefunden unter:', ffmpegPath);
  console.error('\nBitte überprüfen Sie den Pfad.');
  process.exit(1);
}

// Prüfe ob Input-Datei existiert
if (!fs.existsSync(inputFile)) {
  console.error('❌ Showreel.mp4 nicht gefunden!');
  process.exit(1);
}

try {
  // Konvertiere zu WebM mit VP9 und Opus, optimiert für Web
  // -crf 35: Höhere CRF = kleinere Datei (30-40 ist gut für Web)
  // -b:v 0: Variable Bitrate
  // -deadline good: Guter Kompromiss zwischen Qualität und Geschwindigkeit
  console.log('⏳ Konvertierung läuft... (kann mehrere Minuten dauern)');
  execSync(
    `"${ffmpegPath}" -i "${inputFile}" -c:v libvpx-vp9 -crf 35 -b:v 0 -deadline good -c:a libopus -b:a 96k -y "${outputFile}"`,
    { stdio: 'inherit' }
  );
  
  const inputSize = fs.statSync(inputFile).size;
  const outputSize = fs.statSync(outputFile).size;
  const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);
  
  console.log('\n✅ Erfolgreich konvertiert!');
  console.log(`\n📊 Statistik:`);
  console.log(`   Original (MP4):  ${(inputSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Optimiert (WebM): ${(outputSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Einsparung:       ${reduction}%`);
  console.log(`\n📁 Ausgabe: ${outputFile}`);
  
} catch (error) {
  console.error('❌ Fehler bei der Konvertierung:', error.message);
  process.exit(1);
}
