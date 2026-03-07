import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://www.heinerfilm.de';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Heinerfilm | Professionelle Videoproduktion in Darmstadt & Pfungstadt',
    template: '%s | Heinerfilm',
  },
  description: 'Heinerfilm – Medienagentur für Filmproduktion, Videomarketing und Fotografie in Darmstadt und Pfungstadt. Imagefilme, Eventvideos, Social Media Content.',
  keywords: ['Videoproduktion', 'Filmproduktion', 'Darmstadt', 'Pfungstadt', 'Videomarketing', 'Eventfotografie', 'Imagefilm'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: BASE_URL,
    siteName: 'Heinerfilm',
    title: 'Heinerfilm | Professionelle Videoproduktion in Darmstadt & Pfungstadt',
    description: 'Medienagentur für Filmproduktion, Videomarketing und Fotografie. Imagefilme, Eventvideos, Social Media Content.',
    images: [
      {
        url: '/img/Heinerfilm_schriftzug_schwarz.svg',
        width: 320,
        height: 100,
        alt: 'Heinerfilm Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heinerfilm | Professionelle Videoproduktion in Darmstadt & Pfungstadt',
    description: 'Medienagentur für Filmproduktion, Videomarketing und Fotografie.',
  },
  icons: {
    icon: '/img/Heinerfilm_schriftzug_schwarz.svg',
    apple: '/img/Heinerfilm_schriftzug_schwarz.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Preload Hero-Video für sofortiges Laden - startet Download während HTML-Parsing */}
        <link rel="preload" as="video" href="/video/headervideo.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/video/headervideomobile.mp4" type="video/mp4" />
        <JsonLd />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
