import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen von Heinerfilm - Medienagentur für Film und Video.',
  alternates: {
    canonical: 'https://www.heinerfilm.de/impressum',
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
