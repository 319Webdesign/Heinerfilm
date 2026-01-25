import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum - Heinerfilm',
  description: 'Impressum und rechtliche Informationen von Heinerfilm - Medienagentur für Film und Video.',
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
