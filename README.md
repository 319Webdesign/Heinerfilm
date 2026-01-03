# Heinerfilm - Next.js Website

Professionelle Website für die Medienagentur Heinerfilm, erstellt mit Next.js 14 und TypeScript.

## Technologie-Stack

- **Next.js 14** - React Framework mit App Router
- **TypeScript** - Typisierte JavaScript-Erweiterung
- **React 18** - UI-Bibliothek
- **CSS Modules** - Scoped Styling

## Projektstruktur

```
heinerfilm-redesign/
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root Layout
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Globale Styles
│   │   ├── about/             # Über uns Seite
│   │   ├── services/          # Leistungen Seite
│   │   ├── portfolio/         # Portfolio Seite
│   │   └── contact/           # Kontakt Seite
│   │
│   └── components/            # React Komponenten
│       ├── Navbar.tsx         # Navigation
│       ├── Footer.tsx         # Footer
│       ├── PortfolioFilter.tsx # Portfolio Filter
│       └── ContactForm.tsx    # Kontaktformular
│
├── public/                    # Statische Assets
│   ├── img/                   # Bilder
│   └── video/                 # Videos
│
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Entwicklung

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

### Production Build

```bash
npm run build
npm start
```

## Features

- ✅ Next.js 14 mit App Router
- ✅ TypeScript
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Video-Hintergrund im Hero-Bereich
- ✅ Portfolio-Filter-Funktion
- ✅ Kontaktformular
- ✅ SEO-optimiert
- ✅ Moderne, professionelle Optik

## Seiten

- **/** - Homepage mit Hero-Video und Services-Übersicht
- **/about** - Über uns Seite mit Team-Vorstellung
- **/services** - Detaillierte Leistungsübersicht
- **/portfolio** - Portfolio-Galerie mit Filter-Funktion
- **/contact** - Kontaktseite mit Formular

## Anpassungen

### Farben
Die Farben können in `src/app/globals.css` im `:root` Block angepasst werden.

### Inhalte
- Texte können direkt in den Komponenten/Pages angepasst werden
- Platzhalter-Bilder sollten durch echte Bilder ersetzt werden
- Kontaktdaten in `src/components/Footer.tsx` und `src/app/contact/page.tsx` anpassen

### Kontaktformular
Das Kontaktformular benötigt ein Backend für die Verarbeitung. Aktuell wird nur eine Bestätigungsmeldung angezeigt. Für die Implementierung:
- API Route in Next.js erstellen (`src/app/api/contact/route.ts`)
- Oder externen Service nutzen (Formspree, EmailJS, etc.)

## Deployment

Die Website kann auf verschiedenen Plattformen deployed werden:

- **Vercel** (empfohlen für Next.js)
- **Netlify**
- **Eigener Server** mit Node.js

## Lizenz

© 2024 Heinerfilm. Alle Rechte vorbehalten.