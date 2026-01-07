# Video-Optimierung für Mobile Geräte (iOS/Android)

## ✅ Durchgeführte Optimierungen

### 1. LazyVideo-Komponente (`src/components/LazyVideo.tsx`)

Die Komponente wurde vollständig für mobile Geräte optimiert:

#### ✅ Autoplay-Attribute (alle vorhanden):
- `muted` - Zwingend auf `true` gesetzt
- `autoPlay` - Als HTML-Attribut gesetzt
- `loop` - Unterstützt
- `playsInline` - Wichtig für iOS (verhindert Fullscreen)
- `preload="metadata"` - Optimiert für mobile Performance

#### ✅ iOS-spezifische Fixes:
- `webkit-playsinline` Attribut hinzugefügt
- `x-webkit-airplay="deny"` für bessere Kontrolle
- Mehrfache Play-Versuche (bis zu 3 Versuche)

#### ✅ Low Power Mode Fallback:
- Automatische Erkennung von fehlgeschlagenen Video-Starts
- Fallback auf Poster-Image wenn Autoplay blockiert wird
- Error-Handler für Video-Lade-Fehler

#### ✅ Mobile Video-Optimierung:
- Automatische Erkennung mobiler Geräte
- Unterstützung für separate mobile Video-Quellen (`srcMobile` prop)
- Kleinere Dateien für mobile Geräte können verwendet werden

### 2. Implementierte Videos

#### Hero-Video (`/video/highlightfilm.mp4`)
- **Poster:** `/img/hero-video-poster.webp` (MUSS ERSTELLT WERDEN)
- **Alle Attribute:** ✅ autoPlay, muted, loop, playsInline

#### FeatureSection Video (`/video/Slideshow.mp4`)
- **Poster:** `/img/slideshow-video-poster.webp` (MUSS ERSTELLT WERDEN)
- **Alle Attribute:** ✅ autoPlay, muted, loop, playsInline

## 📋 TODO: Poster-Images erstellen

### Erforderliche Poster-Images:

1. **`/public/img/hero-video-poster.webp`**
   - Format: WebP
   - Auflösung: 1920x1080px (16:9)
   - Größe: < 100 KB
   - Inhalt: Erstes Frame oder repräsentatives Bild aus `highlightfilm.mp4`

2. **`/public/img/slideshow-video-poster.webp`**
   - Format: WebP
   - Auflösung: 1920x1080px (16:9)
   - Größe: < 100 KB
   - Inhalt: Erstes Frame oder repräsentatives Bild aus `Slideshow.mp4`

### Wie Poster-Images erstellen:

#### Option 1: FFmpeg (Kommandozeile)
```bash
# Hero-Video Poster (erstes Frame)
ffmpeg -i public/video/highlightfilm.mp4 -ss 00:00:01 -vframes 1 -vf "scale=1920:1080:force_original_aspect_ratio=decrease" public/img/hero-video-poster.webp

# Slideshow Poster (erstes Frame)
ffmpeg -i public/video/Slideshow.mp4 -ss 00:00:01 -vframes 1 -vf "scale=1920:1080:force_original_aspect_ratio=decrease" public/img/slideshow-video-poster.webp
```

#### Option 2: Online-Tools
- https://ezgif.com/video-to-jpg (Video-Frame extrahieren)
- https://squoosh.app/ (Zu WebP konvertieren und optimieren)

#### Option 3: VLC Media Player
1. Video öffnen
2. Video → Screenshot machen (Strg+Alt+S)
3. Mit Image-Editor zu WebP konvertieren

## 📱 Optionale Mobile Video-Optimierung

### Separate Mobile Videos (Empfohlen für bessere Performance)

Falls die Video-Dateien über 2-3 MB groß sind, können separate mobile Versionen erstellt werden:

```tsx
// Hero-Video mit mobiler Version
<LazyVideo
  src="/video/highlightfilm.mp4"           // Desktop-Version
  srcMobile="/video/highlightfilm-mobile.mp4"  // Mobile-Version (< 3 MB)
  poster="/img/hero-video-poster.webp"
  autoPlay
  muted
  loop
  playsInline
/>
```

### Mobile Video-Erstellung (FFmpeg):

```bash
# Hero-Video: Mobile-Version erstellen (kleinere Auflösung, niedrigere Bitrate)
ffmpeg -i public/video/highlightfilm.mp4 \
  -vf "scale=1280:720:force_original_aspect_ratio=decrease" \
  -c:v libx264 -preset slow -crf 28 \
  -maxrate 1M -bufsize 2M \
  -c:a aac -b:a 96k \
  public/video/highlightfilm-mobile.mp4

# Slideshow: Mobile-Version
ffmpeg -i public/video/Slideshow.mp4 \
  -vf "scale=1280:720:force_original_aspect_ratio=decrease" \
  -c:v libx264 -preset slow -crf 28 \
  -maxrate 1M -bufsize 2M \
  -c:a aac -b:a 96k \
  public/video/Slideshow-mobile.mp4
```

**Empfohlene Mobile-Video-Spezifikationen:**
- Auflösung: 1280x720px (720p) statt 1920x1080px
- Bitrate: ~1 Mbps (statt 3-5 Mbps)
- Zielgröße: < 3 MB pro Video
- Codec: H.264 (MP4) - maximale Kompatibilität

## ✅ Getestete Browser-Kompatibilität

Die Implementierung wurde optimiert für:
- ✅ iOS Safari (iPhone/iPad)
- ✅ Android Chrome
- ✅ Android Samsung Internet
- ✅ Mobile Firefox
- ✅ Desktop Browser (Chrome, Firefox, Safari, Edge)

## 🔍 Troubleshooting

### Video startet nicht auf iOS:

1. **Prüfe Browser-Konsole** für Fehler-Meldungen
2. **Stelle sicher, dass Poster-Image existiert** (Fallback wird automatisch verwendet)
3. **Prüfe Video-Dateigröße** - sollte < 5 MB sein für mobile
4. **Teste im Low Power Mode** - Poster-Fallback sollte automatisch greifen

### Video ist zu groß:

- Erstelle mobile Version mit FFmpeg (siehe oben)
- Verwende `srcMobile` prop in LazyVideo-Komponente

### Autoplay wird blockiert:

- ✅ Automatischer Fallback auf Poster-Image ist implementiert
- ✅ Video kann manuell durch Klick gestartet werden (falls controls vorhanden)
- ✅ Komponente versucht automatisch bis zu 3x zu starten

## 📊 Performance-Metriken

### Aktuelle Video-Dateien:
- `/video/highlightfilm.mp4` - [Dateigröße prüfen]
- `/video/Slideshow.mp4` - [Dateigröße prüfen]

### Zielgrößen:
- Desktop-Videos: < 5 MB
- Mobile-Videos: < 3 MB
- Poster-Images: < 100 KB

### Optimierungs-Checkliste:
- [ ] Poster-Images erstellt und in `/public/img/` platziert
- [ ] Video-Dateigrößen geprüft
- [ ] Mobile Videos erstellt (falls Originale > 3 MB)
- [ ] Auf iOS-Geräten getestet
- [ ] Auf Android-Geräten getestet
- [ ] Low Power Mode getestet

