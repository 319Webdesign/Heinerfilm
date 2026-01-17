import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioItemBySlug, getAllPortfolioSlugs } from '@/data/portfolio';
import LazyVideo from '@/components/LazyVideo';
import PortfolioGallery from '@/components/PortfolioGallery';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getPortfolioItemBySlug(params.slug);

  if (!project) {
    return {
      title: 'Projekt nicht gefunden',
    };
  }

  return {
    title: `${project.title} - Portfolio | Heinerfilm`,
    description: project.description,
  };
}

export default function PortfolioDetailPage({ params }: Props) {
  const project = getPortfolioItemBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Hauptprojektbild immer im Hero verwenden
  const heroMedia: { type: 'image' | 'video'; src?: string; alt?: string; poster?: string } = { 
    type: 'image', 
    src: project.imageSrc, 
    alt: project.title 
  };

  // Alle zusätzlichen Media-Dateien in der Galerie
  const remainingMedia = project.additionalMedia || [];

  return (
    <>
      {/* Hero Section */}
      <section className="portfolio-detail-hero">
        <div className="portfolio-hero-background">
          {heroMedia.type === 'video' && heroMedia.src ? (
            <LazyVideo
              src={heroMedia.src}
              poster={heroMedia.poster}
              className="portfolio-hero-video"
              autoPlay
              muted
              loop
              playsInline
              eager
            />
          ) : heroMedia.src ? (
            <Image
              src={heroMedia.src}
              alt={heroMedia.alt || project.title}
              fill
              className="portfolio-hero-image"
              priority
              quality={85}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              fetchPriority="high"
              unoptimized={heroMedia.src.endsWith('.webp')}
            />
          ) : null}
        </div>
        <div className="portfolio-hero-overlay"></div>
        <div className="container">
          <div className="portfolio-hero-content">
            <Link 
              href="/portfolio" 
              className="portfolio-back-link"
            >
              <ArrowLeft style={{ width: '1rem', height: '1rem' }} />
              Zurück zum Portfolio
            </Link>
            <div className="portfolio-hero-meta">
              <span className="portfolio-category-badge">{project.categoryLabel}</span>
            </div>
            <h1 className="portfolio-hero-title">
              {project.slug === 'loop-5-influencer-event' ? 'Loop5' : project.title}
            </h1>
            {project.client && (
              <p className="portfolio-hero-client">Für {project.client}</p>
            )}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="portfolio-detail-content section section-dark">
        <div className="container">
          <div className="portfolio-detail-grid">
            <div className="portfolio-detail-text">
              <h2 className="portfolio-section-title">
                {project.slug === 'loop-5-influencer-event' ? 'Loop5 The Social Mall' : 
                 project.slug === 'timewarp' ? 'TimeWrap' : 'Über das Projekt'}
              </h2>
              <p className="portfolio-description">{project.longDescription}</p>
            </div>
            <div className="portfolio-detail-info">
              <div className="portfolio-info-card">
                <h3>Kategorie</h3>
                <p>{project.categoryLabel}</p>
              </div>
              {project.client && (
                <div className="portfolio-info-card">
                  <h3>Kunde</h3>
                  <p>{project.client}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Media Gallery */}
      {remainingMedia && remainingMedia.length > 0 && (
        <section className="portfolio-media-gallery section section-dark">
          <div className="container">
            <h2 className="portfolio-section-title" style={{ marginBottom: '3rem', textAlign: 'center' }}>
              Weitere Einblicke
            </h2>
            <PortfolioGallery
              media={remainingMedia}
              projectTitle={project.title}
            />
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="portfolio-detail-navigation section section-dark">
        <div className="container">
          <Link href="/portfolio" className="btn btn-secondary">
            <ArrowLeft style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
            Alle Projekte ansehen
          </Link>
        </div>
      </section>
    </>
  );
}
