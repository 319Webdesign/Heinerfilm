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
      { type: 'video', src: '/img/Klangversprechen/Showreel.mp4', poster: '/img/Klangversprechen/Klangversprechen-36.webp', alt: 'Klangversprechen Showreel', autoPlay: false, loop: true, muted: true },
      { type: 'video', src: '/img/Klangversprechen/Mashup_02_Master_final_1.webm', poster: '/img/Klangversprechen/Klangversprechen-38.webp', alt: 'Klangversprechen Mashup', autoPlay: true, loop: true, muted: true },
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
      // 2 Reihen mit je 2 Querformat-Bildern (1920x1080)
      { type: 'image', src: '/img/Fibo/fibo16.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo24.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo28.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo36.webp', alt: 'Fibo x Smilodox' },
      // Hochkant-Bilder (1080x1440)
      { type: 'image', src: '/img/Fibo/fibo8.webp', alt: 'Fibo x Smilodox' },
      { type: 'image', src: '/img/Fibo/fibo33.webp', alt: 'Fibo x Smilodox' },
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
      { type: 'video', isPlaceholder: true, placeholderLabel: 'Video folgt' },
      { type: 'image', isPlaceholder: true, placeholderLabel: 'Bild folgt' },
      { type: 'video', isPlaceholder: true, placeholderLabel: 'Video folgt' },
    ]
  },
  {
    id: 7,
    title: 'Xtreme-Fitness',
    slug: 'xtreme',
    category: 'video',
    categoryLabel: 'Videomarketing',
    imageSrc: '/img/titelbildxtreme.webp',
    description: 'Videomarketing für Xtreme-Fitness',
    longDescription: 'Für das Xtreme-Fitness in Pfungstadt haben wir eine Videokampagne, entwickelt bei der mehr Sichtbarkeit und das Aufbauen einer Community im Fokus standen. Durch das Produzieren eines Imagefilms und besonderen Aktionen wie einem gemeinsamen Training mit Omid, Markus Rühl und Inscope21 konnte dies umgesetzt werden.\n\nAuch das eigens produzierte Videoformat „meet our athletes" hat dazu beigetragen.',
    client: 'Xtreme-Fitness',
    year: '2024',
    additionalMedia: [
      // Videos
      { type: 'video', src: '/video/hochkant2.webm', alt: 'Xtreme-Fitness Video', autoPlay: true, loop: true, muted: true },
      { type: 'video', src: '/video/ninaxtreme.webm', alt: 'Xtreme-Fitness Nina Video', autoPlay: true, loop: true, muted: true },
      // Alle Hochkant-Bilder (1080x1440)
      { type: 'image', src: '/img/Xtreme/xtreme-9.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-11.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-15.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-19.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-22.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-33.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-42.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-45.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-50.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-77.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-86.webp', alt: 'Xtreme-Fitness' },
      { type: 'image', src: '/img/Xtreme/xtreme-92.webp', alt: 'Xtreme-Fitness' },
    ]
  },
  {
    id: 8,
    title: 'Heinerwiesn',
    slug: 'heinerwiesn',
    category: 'photo',
    categoryLabel: 'Fotografie',
    imageSrc: '/img/titelbildheinerwiesn.webp',
    description: 'Event-Fotografie für Heinerwiesn',
    longDescription: 'Auf den Heinerwiesn, dem größten hessischen Oktoberfest, wurde Heinerfilm für Eventfotos engagiert, welche für Website sowie Social Media Kanäle gebraucht wurden.\n\nWir waren vom Fassanstich bis zum letzten Bierausschank vorort und haben den gesamten Abend begleitet.',
    client: 'Heinerwiesn',
    year: '2024',
    additionalMedia: [
      // Querformat-Bilder (1920x1080)
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn65.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn122.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn150.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn219.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn220.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn296.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/allgaeupower01.webp', alt: 'Heinerwiesn Event' },
      // Hochkant-Bilder (1080x1440)
      { type: 'image', src: '/img/Heinerwiesn/1.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/2.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn20.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn21.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn30.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn56.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn69.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn99.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn101.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn108.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn128.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn140.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn174.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn194.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn200.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn234.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn237.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn245.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn282.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn284.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn291.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/Heinerwiesn292.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/allgaeupower09.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/allgaeupower16.webp', alt: 'Heinerwiesn Event' },
      { type: 'image', src: '/img/Heinerwiesn/allgaeupower18.webp', alt: 'Heinerwiesn Event' },
    ]
  },
  {
    id: 9,
    title: 'FS Businessforum',
    slug: 'fs-businessforum',
    category: 'film',
    categoryLabel: 'Filmproduktion',
    imageSrc: '/img/titelbildbusinessforum.webp',
    description: 'Filmproduktion für FS Businessforum',
    longDescription: 'Das FS Business Forum ist eine zweitägige Wirtschaftskonferenz an der Frankfurt School of Finance & Management. Jedes Jahr gibt es dort spannende Vorträge und Diskussionen mit Führungskräften aus Wirtschaft, Finanzwesen und Politik.\n\nIn diesem Jahr haben wir den Highlightfilm sowie Impressionen der Veranstaltung produziert.',
    client: 'FS Businessforum',
    year: '2024',
    additionalMedia: [
      // Querformat-Bilder (1920x1080)
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_03.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_70.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_151.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_277.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_295.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_325.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_342.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_356.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_394.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_454.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_479.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_47.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_49.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_65.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_91.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_137.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_141.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_173.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_291.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_346.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_390.webp', alt: 'FS Businessforum' },
      // Hochkant-Bilder (1080x1440)
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_48.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_200.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_286.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_335.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag01_415.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_119.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_194.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_207.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_223.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_230.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_244.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_366.webp', alt: 'FS Businessforum' },
      { type: 'image', src: '/img/FS Businessforum/FS_BusinessforumTag02_384.webp', alt: 'FS Businessforum' },
    ]
  },
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find(item => item.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
  return portfolioItems.map(item => item.slug);
}
