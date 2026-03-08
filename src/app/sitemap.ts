import { MetadataRoute } from 'next';
import { portfolioItems } from '@/data/portfolio';

// Fester Zeitstempel für Google Re-Crawl-Priorisierung (2026-03-08)
const SITEMAP_LASTMOD = new Date('2026-03-08T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.heinerfilm.de';
  
  // Statische Routen
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: SITEMAP_LASTMOD,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: SITEMAP_LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITEMAP_LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: SITEMAP_LASTMOD,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITEMAP_LASTMOD,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: SITEMAP_LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: SITEMAP_LASTMOD,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamische Portfolio-Routen
  const portfolioRoutes: MetadataRoute.Sitemap = portfolioItems.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
