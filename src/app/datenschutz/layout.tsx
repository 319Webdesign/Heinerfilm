import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Heinerfilm - Informationen zum Umgang mit Ihren personenbezogenen Daten.',
  alternates: {
    canonical: 'https://www.heinerfilm.de/datenschutz',
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
