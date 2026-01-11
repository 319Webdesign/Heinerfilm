export type Category = 'all' | 'film' | 'video' | 'photo';

export type MediaType = 'image' | 'video';

export interface MediaItem {
  type: MediaType;
  src?: string; // Optional für Platzhalter
  alt?: string;
  poster?: string; // Für Videos
  isPlaceholder?: boolean; // Flag für Platzhalter
  placeholderLabel?: string; // Text für Platzhalter
}

export interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  category: Category;
  categoryLabel: string;
  imageSrc: string;
  description: string;
  longDescription: string;
  additionalMedia?: MediaItem[];
  client?: string;
  year?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Klangversprechen',
    slug: 'klangversprechen',
    category: 'video',
    categoryLabel: 'Videomarketing',
    imageSrc: '/img/Klangversprechen-311.webp',
    description: 'Professionelle Videoproduktion für Klangversprechen',
    longDescription: 'Bei diesem Projekt haben wir eine umfassende Videokampagne für Klangversprechen entwickelt. Unser Ziel war es, die einzigartige Klangkunst und das kreative Potenzial des Unternehmens visuell einzufangen. Durch die Kombination von aufwendigen Produktionsaufnahmen und kreativer Post-Production konnten wir eine emotionale Verbindung zur Marke herstellen.',
    client: 'Klangversprechen',
    year: '2024',
    additionalMedia: [
      { type: 'image', src: '/img/Klangversprechen-311.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
      { type: 'video', isPlaceholder: true, placeholderLabel: 'Video folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
    ]
  },
  {
    id: 2,
    title: 'Loop 5 Influecer Event',
    slug: 'loop-5-influencer-event',
    category: 'photo',
    categoryLabel: 'Fotografie',
    imageSrc: '/img/Loop5_SocialMall73.webp',
    description: 'Event-Fotografie für das Loop 5 Influencer Event',
    longDescription: 'Das Loop 5 Influencer Event war ein Highlight der Social-Media-Szene. Wir haben die gesamte Veranstaltung dokumentiert – von den spannenden Momenten auf der Bühne bis hin zu den authentischen Begegnungen hinter den Kulissen. Die Fotos spiegeln die Energie und Begeisterung des Events wider.',
    client: 'Loop 5',
    year: '2024',
    additionalMedia: [
      { type: 'image', src: '/img/Loop5_SocialMall73.webp', alt: 'Loop 5 Event' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
      { type: 'video', isPlaceholder: true, placeholderLabel: 'Video folgt' },
    ]
  },
  {
    id: 3,
    title: 'Fibo x Smilodox',
    slug: 'fibo-x-smilodox',
    category: 'photo',
    categoryLabel: 'Fotografie',
    imageSrc: '/img/Fibo-5.webp',
    description: 'Kooperations-Fotografie für Fibo und Smilodox',
    longDescription: 'Diese Zusammenarbeit zwischen Fibo und Smilodox erforderte eine präzise visuelle Umsetzung, die beide Marken gleichwertig repräsentiert. Mit kreativen Kompositionen und professionellem Lighting konnten wir eine Bildsprache entwickeln, die die Stärken beider Partner hervorhebt.',
    client: 'Fibo & Smilodox',
    year: '2024',
    additionalMedia: [
      { type: 'image', src: '/img/Fibo-5.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
    ]
  },
  {
    id: 4,
    title: 'Sportpresseball',
    slug: 'sportpresseball',
    category: 'film',
    categoryLabel: 'Filmproduktion',
    imageSrc: '/img/Sportpresseball2025_30.webp',
    description: 'Filmproduktion für den Deutschen Sportpresseball',
    longDescription: 'Der Deutsche Sportpresseball ist eines der prestigeträchtigsten Events der Sportwelt. Wir hatten die Ehre, einen umfassenden Highlightfilm zu produzieren, der die wichtigsten Momente des Abends einfängt. Von emotionalen Reden über inspirierende Auszeichnungen bis hin zu festlichen Momenten – dieser Film erzählt die Geschichte eines besonderen Abends.',
    client: 'Deutscher SportPresseBall',
    year: '2025',
    additionalMedia: [
      { type: 'image', src: '/img/Sportpresseball2025_30.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sprotpresseball.webp', alt: 'Sportpresseball Event' },
      { type: 'video', isPlaceholder: true, placeholderLabel: 'Highlight-Video folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
    ]
  },
  {
    id: 5,
    title: 'TimeWarp',
    slug: 'timewarp',
    category: 'film',
    categoryLabel: 'Filmproduktion',
    imageSrc: '/img/TimeWarp82_mitLogo.webp',
    description: 'Filmproduktion für TimeWarp',
    longDescription: 'TimeWarp benötigte einen energiegeladenen Imagefilm, der die Essenz ihrer Marke transportiert. Mit dynamischen Kamerafahrten, kreativen Schnitten und einer modernen Ästhetik haben wir einen Film geschaffen, der nicht nur informiert, sondern auch begeistert.',
    client: 'TimeWarp',
    year: '2024',
    additionalMedia: [
      { type: 'image', src: '/img/TimeWarp82_mitLogo.webp', alt: 'TimeWarp Projekt' },
      { type: 'video', isPlaceholder: true, placeholderLabel: 'Film folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Behind the Scenes' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
    ]
  },
  {
    id: 6,
    title: 'Eicke H+',
    slug: 'eicke-h-plus',
    category: 'video',
    categoryLabel: 'Videomarketing',
    imageSrc: '/img/Eicke-Upscale.webp',
    description: 'Videomarketing für Eicke H+',
    longDescription: 'Für Eicke H+ haben wir eine strategische Videokampagne entwickelt, die die innovativen Produkte und Dienstleistungen des Unternehmens präsentiert. Durch gezieltes Storytelling und eine klare visuelle Sprache konnten wir die Kernbotschaften effektiv vermitteln und die Zielgruppe erreichen.',
    client: 'Eicke H+',
    year: '2024',
    additionalMedia: [
      { type: 'image', src: '/img/Eicke-Upscale.webp', alt: 'Eicke H+ Projekt' },
      { type: 'video', isPlaceholder: true, placeholderLabel: 'Video folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
      { type: 'video', isPlaceholder: true, placeholderLabel: 'Video folgt' },
    ]
  },
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find(item => item.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
  return portfolioItems.map(item => item.slug);
}
