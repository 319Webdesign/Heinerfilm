import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Heinerfilm',
  description: 'Kontaktieren Sie Heinerfilm für Ihr nächstes Projekt',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

