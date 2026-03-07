import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Medienagentur Darmstadt & Pfungstadt',
  description: 'Kontaktieren Sie Heinerfilm für Ihr nächstes Video- oder Filmprojekt. Professionelle Beratung für Videoproduktion und Videomarketing in Darmstadt und Pfungstadt.',
  alternates: {
    canonical: 'https://www.heinerfilm.de/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

