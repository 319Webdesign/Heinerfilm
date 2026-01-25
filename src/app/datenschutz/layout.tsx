import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung - Heinerfilm',
  description: 'Datenschutzerklärung von Heinerfilm - Informationen zum Umgang mit Ihren personenbezogenen Daten.',
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
