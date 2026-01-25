import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über uns - Ihr Team für Videoproduktion | Heinerfilm',
  description: 'Lernen Sie das Team von Heinerfilm kennen - Ihre Experten für professionelle Videoproduktion, Filmproduktion und Videomarketing in Darmstadt und Pfungstadt.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
