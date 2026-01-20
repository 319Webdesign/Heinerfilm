import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Heinerfilm - Medienagentur für Film & Video',
  description: 'Heinerfilm - Ihre Medienagentur für professionelle Filmproduktion, Videomarketing und kreative visuelle Lösungen',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
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
