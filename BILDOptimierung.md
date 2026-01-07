# Bildoptimierungs-Workflow für Heinerfilm

## Problem
WebP-Bilder sind über 1 MB groß, was die Ladezeit massiv beeinträchtigt.

## Ziel
Alle Bilder auf unter **100 KB** optimieren, ohne sichtbaren Qualitätsverlust.

## Workflow

### 1. Vorbereitung der Originale

1. **Export aus Photoshop/Lightroom:**
   - Format: JPEG (vor WebP-Konvertierung)
   - Qualität: 85-90%
   - Maximale Auflösung: 2400px auf der längsten Seite (ausreichend für Retina-Displays)

2. **Bildgrößen-Richtlinien:**
   - **Hero/Header-Bilder:** Max. 1920px Breite
   - **Content-Bilder (50% Breite):** Max. 1200px Breite
   - **Team-Bilder (3er-Grid):** Max. 800px Breite
   - **Thumbnails/Portfolio:** Max. 1200px Breite

### 2. WebP-Konvertierung

#### Option A: Squoosh (Browser-Tool - Empfohlen)
1. Öffne https://squoosh.app/
2. Lade das optimierte JPEG hoch
3. Wähle **WebP** als Format
4. Stelle **Qualität auf 75-80**
5. Aktiviere "Resize" wenn nötig:
   - Hero: 1920px
   - Content: 1200px
   - Team: 800px
   - Portfolio: 1200px
6. Prüfe Dateigröße (Ziel: < 100 KB)
7. Download und ersetze Original

#### Option B: cwebp (Command Line)
```bash
# Installation (macOS)
brew install webp

# Windows: Download von https://developers.google.com/speed/webp/download

# Konvertierung mit Qualität 75
cwebp -q 75 -resize 1920 0 input.jpg -o output.webp

# Für Team-Bilder (800px)
cwebp -q 75 -resize 800 0 input.jpg -o output.webp
```

#### Option C: ImageMagick (Batch-Verarbeitung)
```bash
# Installation
# macOS: brew install imagemagick
# Windows: https://imagemagick.org/script/download.php

# Einzelnes Bild
magick input.jpg -quality 75 -resize 1920x0 -format webp output.webp

# Batch-Verarbeitung aller JPEGs in einem Ordner
for file in *.jpg; do
  magick "$file" -quality 75 -resize 1920x0 -format webp "${file%.jpg}.webp"
done
```

### 3. Qualitätskontrolle

1. **Dateigröße prüfen:**
   ```bash
   # macOS/Linux
   ls -lh *.webp
   
   # Windows PowerShell
   Get-ChildItem *.webp | Select-Object Name, @{Name="Size(KB)";Expression={[math]::Round($_.Length/1KB,2)}}
   ```

2. **Visuelle Qualitätsprüfung:**
   - Vergleiche Original vs. WebP side-by-side
   - Prüfe bei 100% Zoom auf Retina-Display
   - Stelle sicher, dass keine Artefakte sichtbar sind

3. **Falls > 100 KB:**
   - Reduziere Qualität auf 70-75
   - Oder reduziere Auflösung um 10-20%
   - Wiederhole bis unter 100 KB

### 4. Automatisierung (Optional)

#### npm-Script für Batch-Optimierung
```json
// package.json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js"
  },
  "devDependencies": {
    "sharp": "^0.33.0"
  }
}
```

#### Node.js Script (scripts/optimize-images.js)
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/img/originals';
const outputDir = './public/img';

async function optimizeImage(inputPath, outputPath, maxWidth = 1920) {
  const stats = await sharp(inputPath)
    .resize(maxWidth, null, { withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(outputPath);
  
  const sizeKB = stats.size / 1024;
  console.log(`${path.basename(outputPath)}: ${sizeKB.toFixed(2)} KB`);
  
  if (sizeKB > 100) {
    console.warn(`⚠️  Warnung: ${path.basename(outputPath)} ist über 100 KB!`);
  }
}

// Verwendung:
// optimizeImage('input.jpg', 'output.webp', 1920);
```

### 5. Checkliste vor Upload

- [ ] Dateigröße < 100 KB
- [ ] Format: WebP
- [ ] Qualität 75-80
- [ ] Auflösung passend zum Einsatzort
- [ ] Visuelle Qualität akzeptabel
- [ ] Alt-Text vorhanden
- [ ] Dateiname aussagekräftig

### 6. Optimierte sizes-Attribute in Next.js

Die Bilder verwenden bereits optimierte `sizes`-Attribute:

- **Team-Bilder (3er-Grid):** `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"`
- **Portfolio-Grid:** `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`
- **Content-Bilder:** `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"`
- **Hero/Header:** `sizes="100vw"`

### 7. Performance-Monitoring

Nach der Optimierung:
1. Prüfe Ladezeiten mit Chrome DevTools (Network-Tab)
2. Lighthouse-Score sollte > 90 für Performance sein
3. Largest Contentful Paint (LCP) sollte < 2.5s sein

## Tools & Ressourcen

- **Squoosh:** https://squoosh.app/ (Browser-Tool, einfachste Lösung)
- **TinyPNG WebP:** https://tinypng.com/ (Batch-Verarbeitung möglich)
- **ImageOptim:** https://imageoptim.com/ (macOS App)
- **Squoosh CLI:** https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli

## Wichtige Hinweise

1. **Qualität 75** ist der Sweet-Spot zwischen Dateigröße und visueller Qualität
2. **Niemals** die Original-JPEGs löschen - behalte sie als Backup
3. **Teste auf echten Geräten** - mobile Verbindungen zeigen Ladezeit-Unterschiede am deutlichsten
4. **Next.js optimiert automatisch** - die `quality={75}` Einstellung ist bereits gesetzt

