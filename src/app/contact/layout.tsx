import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Heinerfilm | Medienagentur Darmstadt & Pfungstadt',
  description: 'Kontaktieren Sie Heinerfilm für Ihr nächstes Video- oder Filmprojekt. Professionelle Beratung für Videoproduktion und Videomarketing in Darmstadt und Pfungstadt.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

