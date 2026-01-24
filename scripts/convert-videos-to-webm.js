const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Pfad zum Video-Verzeichnis
const videoDir = path.join(process.cwd(), 'public', 'video');

// Prüfe ob ffmpeg installiert ist
function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Konvertiere eine MP4-Datei zu WebM
function convertToWebM(mp4Path) {
  const webmPath = mp4Path.replace(/\.mp4$/i, '.webm');
  const fileName = path.basename(mp4Path);
  const webmFileName = path.basename(webmPath);

  // Prüfe ob WebM bereits existiert
  if (fs.existsSync(webmPath)) {
    console.log(`⚠️  ${webmFileName} existiert bereits. Überspringe ${fileName}...`);
    return false;
  }

  console.log(`🔄 Konvertiere ${fileName} zu ${webmFileName}...`);

  try {
    // FFmpeg-Befehl für WebM-Konvertierung mit VP9 Codec (bessere Qualität)
    // -c:v libvpx-vp9: VP9 Video Codec
    // -crf 30: Qualität (niedriger = besser, 30 ist ein guter Kompromiss)
    // -b:v 0: Variable Bitrate
    // -c:a libopus: Opus Audio Codec
    // -b:a 128k: Audio Bitrate
    execSync(
      `ffmpeg -i "${mp4Path}" -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 128k -y "${webmPath}"`,
      { stdio: 'inherit' }
    );
    console.log(`✅ ${webmFileName} erfolgreich erstellt!\n`);
    return true;
  } catch (error) {
    console.error(`❌ Fehler beim Konvertieren von ${fileName}:`, error.message);
    return false;
  }
}

// Hauptfunktion
function main() {
  console.log('🎬 Video-Konvertierung: MP4 → WebM\n');

  // Prüfe ob ffmpeg installiert ist
  if (!checkFFmpeg()) {
    console.error('❌ FFmpeg ist nicht installiert!');
    console.error('\nBitte installieren Sie FFmpeg:');
    console.error('  Windows: https://ffmpeg.org/download.html');
    console.error('  Oder mit Chocolatey: choco install ffmpeg');
    console.error('  Oder mit winget: winget install ffmpeg');
    process.exit(1);
  }

  // Prüfe ob Verzeichnis existiert
  if (!fs.existsSync(videoDir)) {
    console.error(`❌ Verzeichnis nicht gefunden: ${videoDir}`);
    process.exit(1);
  }

  // Finde alle MP4-Dateien
  const files = fs.readdirSync(videoDir);
  const mp4Files = files.filter(file => file.toLowerCase().endsWith('.mp4'));

  if (mp4Files.length === 0) {
    console.log('ℹ️  Keine MP4-Dateien gefunden.');
    return;
  }

  console.log(`📁 Gefundene MP4-Dateien: ${mp4Files.length}\n`);

  let successCount = 0;
  let skipCount = 0;

  // Konvertiere jede Datei
  mp4Files.forEach((file, index) => {
    const mp4Path = path.join(videoDir, file);
    const converted = convertToWebM(mp4Path);
    
    if (converted) {
      successCount++;
    } else {
      skipCount++;
    }
  });

  // Zusammenfassung
  console.log('\n' + '='.repeat(50));
  console.log('📊 Zusammenfassung:');
  console.log(`   ✅ Konvertiert: ${successCount}`);
  console.log(`   ⏭️  Übersprungen: ${skipCount}`);
  console.log(`   📁 Gesamt: ${mp4Files.length}`);
  console.log('='.repeat(50));
}

// Script ausführen
main();
