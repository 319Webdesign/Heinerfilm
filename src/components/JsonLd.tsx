const BASE_URL = 'https://www.heinerfilm.de';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: 'Heinerfilm Medienagentur',
  description: 'Medienagentur für professionelle Videoproduktion, Filmproduktion, Videomarketing und Fotografie in Darmstadt und Pfungstadt. Imagefilme, Eventvideos, Social Media Content.',
  url: BASE_URL,
  logo: `${BASE_URL}/img/Heinerfilm_schriftzug_schwarz.svg`,
  image: `${BASE_URL}/img/Heinerfilm_schriftzug_schwarz.svg`,
  telephone: '+4917656792783',
  email: 'info@heinerfilm.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Numrichstraße 10',
    addressLocality: 'Pfungstadt',
    postalCode: '64319',
    addressRegion: 'Hessen',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.8064,
    longitude: 8.6034,
  },
  areaServed: [
    { '@type': 'City', name: 'Darmstadt' },
    { '@type': 'City', name: 'Pfungstadt' },
    { '@type': 'State', name: 'Hessen' },
  ],
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '10:00',
    closes: '19:00',
  },
  sameAs: [
    'https://www.instagram.com/heinerfilm.de/',
    'https://www.youtube.com/@Heinerfilm',
    'https://www.tiktok.com/@heinerfilm',
    'https://www.linkedin.com/in/tim-pfeifer-b8a858203/',
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
