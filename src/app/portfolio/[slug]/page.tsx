import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolioItemBySlug, getAllPortfolioSlugs } from '@/data/portfolio';
import LazyVideo from '@/components/LazyVideo';
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
              {project.year && <span className="portfolio-year">{project.year}</span>}
            </div>
            <h1 className="portfolio-hero-title">{project.title}</h1>
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
              <h2 className="portfolio-section-title">Über das Projekt</h2>
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
              {project.year && (
                <div className="portfolio-info-card">
                  <h3>Jahr</h3>
                  <p>{project.year}</p>
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
            <div className="portfolio-media-grid">
              {remainingMedia.map((media, index) => (
                <div key={index} className="portfolio-media-item">
                  {media.isPlaceholder ? (
                    <div className="portfolio-media-placeholder">
                      <div className="portfolio-placeholder-icon">
                        {media.type === 'video' ? (
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        ) : (
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        )}
                      </div>
                      <p className="portfolio-placeholder-label">
                        {media.placeholderLabel || (media.type === 'video' ? 'Video folgt' : 'Bild folgt')}
                      </p>
                    </div>
                  ) : media.type === 'video' ? (
                    <div className="portfolio-media-video-wrapper">
                      {media.src && (
                        <LazyVideo
                          src={media.src}
                          poster={media.poster}
                          className="portfolio-media-video"
                          autoPlay={false}
                          muted
                          loop={false}
                          playsInline
                          controlsList="nodownload nofullscreen"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="portfolio-media-image-wrapper">
                      {media.src && (
                      <Image
                        src={media.src}
                        alt={media.alt || `${project.title} - Bild ${index + 2}`}
                        fill
                        className="portfolio-media-image"
                        quality={80}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        style={{ objectFit: 'cover' }}
                        fetchPriority="auto"
                        unoptimized={media.src?.endsWith('.webp')}
                      />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
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
