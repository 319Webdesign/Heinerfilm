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
    title: 'Loop5 The Social Mall',
    slug: 'loop-5-influencer-event',
    category: 'photo',
    categoryLabel: 'Fotografie',
    imageSrc: '/img/Loop5_SocialMall73.webp',
    description: 'Event-Fotografie für das Loop 5 Influencer Event',
    longDescription: 'Knapp 20.000 Besucherinnen und Besucher feierten bei der Loop 5 „The Social Mall" 2025 einen Tag voller Influencer, Entertainment und Live-Acts – darunter Schlager-Sänger Oimara und ESC-Teilnehmer Isaak. Wir waren mittendrin und haben das Event mit der Kamera begleitet. Unser Team produzierte hochwertigen Foto- und Social Content für die Website und die Social-Media-Kanäle des Veranstalters – authentisch, sichtbar und perfekt für die digitale Reichweite.',
    client: 'Loop 5',
    year: '2025',
    additionalMedia: [
      { type: 'image', src: '/img/Loop/loop1.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop2.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop3.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop4.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop5.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop6.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop7.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop8.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop9.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop10.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop11.webp', alt: 'Loop5 The Social Mall Event' },
      { type: 'image', src: '/img/Loop/loop12.webp', alt: 'Loop5 The Social Mall Event' },
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
    title: 'TimeWrap',
    slug: 'timewarp',
    category: 'film',
    categoryLabel: 'Filmproduktion',
    imageSrc: '/img/TimeWarp82_mitLogo.webp',
    description: 'Filmproduktion für TimeWrap',
    longDescription: 'Knapp 12.000 Besucherinnen und Besucher aus ganz Europa feierten bei der Time Warp „Autumn Edition" am 7. und 8. November 2025 zwei Nächte mit elektrisierenden Techno-Sounds und purer Club-Atmosphäre in der Maimarkthalle Mannheim. Dieses legendäre Techno-Event mit „Two Days – Two Stages" zieht die Community der elektronischen Musikszene jedes Jahr an und steht für höchste Energie und unvergessliche Beats.\n\nWir waren vor Ort, um die Dynamik und Leidenschaft der Time Warp Mannheim mit der Kamera festzuhalten. Für den Veranstalter produzierten wir beeindruckende Eventfotos für Social Media sowie einen hochwertigen Highlightfilm, der die Atmosphäre und die emotionalen Höhepunkte des Wochenendes perfekt einfängt. Ideal für Online-Kanäle, Website und digitale Markenpräsenz.',
    client: 'TimeWrap',
    year: '2025',
    additionalMedia: [
      { type: 'image', src: '/img/TimeWarp/tw1.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw2.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw3.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw4.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw5.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw6.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw7.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw8.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw9.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw10.webp', alt: 'TimeWrap Event' },
      { type: 'image', src: '/img/TimeWarp/tw11.webp', alt: 'TimeWrap Event' },
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
