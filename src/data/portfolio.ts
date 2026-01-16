export type Category = 'all' | 'film' | 'video' | 'photo';

export type MediaType = 'image' | 'video';

export interface MediaItem {
  type: MediaType;
  src?: string; // Optional für Platzhalter
  alt?: string;
  poster?: string; // Für Videos
  isPlaceholder?: boolean; // Flag für Platzhalter
  placeholderLabel?: string; // Text für Platzhalter
  autoPlay?: boolean; // Für Videos - automatisches Abspielen
  loop?: boolean; // Für Videos - Loop
  muted?: boolean; // Für Videos - Stumm
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
    longDescription: 'In der eigens angemieteten Location „Schärferaum" in Bad Homburg produzierten wir für Klangversprechen mehrere Musikvideos und erstellten zusätzlich Porträt- und Setaufnahmen aller Musiker.\n\nIm späteren Verlauf wurde aus dem aufgenommenen Material ein Showreel sowie ein Teaser erstellt, welche sich ideal für Werbezwecke eignen.',
    client: 'Klangversprechen',
    year: '2024',
    additionalMedia: [
      { type: 'video', src: '/img/Klangversprechen/Showreel.mp4', alt: 'Klangversprechen Showreel', autoPlay: true, loop: true, muted: true },
      { type: 'video', src: '/img/Klangversprechen/Mashup_02_Master_final_1.webm', alt: 'Klangversprechen Mashup', autoPlay: true, loop: true, muted: true },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-36.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-38.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-53.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-57.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-74.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-88.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-119.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-122.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-129.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-144.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-146.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-152.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-155.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-160.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-168.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-171.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-178.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-181.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-187.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-196.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-205.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-216.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-221.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-226.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-227.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-231.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-232.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-236.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-258.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-262.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-265.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-275.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-311.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-334.webp', alt: 'Klangversprechen Projekt' },
      { type: 'image', src: '/img/Klangversprechen/Klangversprechen-335.webp', alt: 'Klangversprechen Projekt' },
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
    longDescription: 'Knapp 20.000 Besucherinnen und Besucher feierten bei der Loop 5 „The Social Mall" 2025 einen Tag voller Influencer, Entertainment und Live-Acts – darunter Schlager-Sänger Oimara und ESC-Teilnehmer Isaak.\n\nWir waren mittendrin und haben das Event mit der Kamera begleitet. Unser Team produzierte hochwertigen Foto- und Social Content für die Website und die Social-Media-Kanäle des Veranstalters – authentisch, sichtbar und perfekt für die digitale Reichweite.',
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
    longDescription: 'Die Zusammenarbeit zwischen Fibo und Smilodox erforderte eine präzise visuelle Umsetzung, die beide Marken gleichwertig repräsentiert.\n\nMit kreativen Kompositionen und lebhaften Bildern wurde viel Content für Social Media erstellt.',
    client: 'Fibo & Smilodox',
    year: '2024',
    additionalMedia: [
      { type: 'image', src: '/img/Fibo/fibo8.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo16.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo24.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo28.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo33.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo36.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo43.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo48.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo51.webp', alt: 'Fibo x Smilodox' },
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
    longDescription: 'Mit rund 2.300 Gästen, darunter Persönlichkeiten aus Sport, Politik, Wirtschaft und Medien, zählt der Deutsche SportpresseBall zu den herausragenden gesellschaftlichen Events der Ballsaison in Deutschland. Die glanzvolle Veranstaltung fand am 8. November 2025 in der Alten Oper Frankfurt statt und bot ein abwechslungsreiches Programm mit Live Acts, Gourmet Erlebnissen und inspirierenden Begegnungen im Zeichen des Sports.\n\nWir waren für den Veranstalter vor Ort, um den Abend visuell und inhaltlich einzufangen. Unser Team erstellte hochwertige Eventfotos für Social Media, realisierte diverse Kurzvideos inklusive Liveschnitt direkt vor Ort, welche am Abend bereits veröffentlicht wurden. Des Weiteren wurde ein emotionaler Highlightfilm im Hoch und Querformat produziert – perfekt zugeschnitten für Instagram, Website und digitale Kanäle.\n\nMit unserer Event und Social Media Videoproduktion setzten wir die Atmosphäre und die besonderen Momente des Abends professionell in Szene.',
    client: 'Deutscher SportPresseBall',
    year: '2025',
    additionalMedia: [
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_03.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_10.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_56.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_76.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_86.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_91.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_100.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_112.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_138.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_146.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_147.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_148.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_155.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_160.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_172.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_173.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_177.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_181.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_195.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_201.webp', alt: 'Sportpresseball 2025' },
      { type: 'image', src: '/img/Sportpresseball/Sportpresseball2025_212.webp', alt: 'Sportpresseball 2025' },
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
    longDescription: 'Knapp 12.000 Besucherinnen und Besucher aus ganz Europa feierten bei der Time Warp „Autumn Edition" am 7. und 8. November 2025 zwei Nächte mit elektrisierenden Techno-Sounds und purer Club-Atmosphäre in der Maimarkthalle Mannheim. Dieses legendäre Techno-Event mit „Two Days – Two Stages" zieht die Community der elektronischen Musikszene jedes Jahr an und steht für höchste Energie und unvergessliche Beats.\n\nWir waren vor Ort, um die Dynamik und Leidenschaft der Time Warp Mannheim mit der Kamera festzuhalten. Für den Veranstalter produzierten wir beeindruckende Eventfotos für Social Media sowie einen hochwertigen Highlightfilm, der die Atmosphäre und die emotionalen Höhepunkte des Wochenendes perfekt einfängt. Ideal für Online-Kanäle, Website und digitale Markenpräsenz.',
    client: 'TimeWarp',
    year: '2025',
    additionalMedia: [
      { type: 'video', src: '/img/TimeWarp/timewarp_1.webm', alt: 'TimeWrap Video', autoPlay: true, loop: true, muted: true },
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
    longDescription: 'Für Eicke H+ haben wir eine professionelle Videokampagne entwickelt, bei der Markenbekanntheit und mehr Sichtbarkeit im Vordergrund stand. Durch die Erstellung eines Imagefilms, besonderen Aktionen und Kooperationen konnte dies professionell umgesetzt werden.',
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
