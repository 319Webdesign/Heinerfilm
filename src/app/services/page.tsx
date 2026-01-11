import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Leistungen - Heinerfilm',
  description: 'Von der Konzeption bis zur finalen Auslieferung',
};

export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-background">
          <Image
            src="/img/Headerbild_Leistungen_unscharf.webp"
            alt="Leistungen Header"
            fill
            className="page-header-image"
            quality={85}
            sizes="100vw"
            priority
            fetchPriority="high"
            unoptimized
          />
        </div>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1>Unsere Leistungen</h1>
          <p>Von der Konzeption bis zur finalen Auslieferung</p>
        </div>
      </section>

      <section className="services-detail section">
        <div className="container">
          <div className="service-detail-item">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h2>Filmproduktion</h2>
                <p>Von der Idee bis zum fertigen Film – wir begleiten Sie durch den gesamten Produktionsprozess. Unsere Expertise umfasst:</p>
                <ul>
                  <li>Konzeption und Drehbuchentwicklung</li>
                  <li>Professionelle Kameraarbeit und Lichtsetzung</li>
                  <li>Tonaufnahme und Sounddesign</li>
                  <li>Regie und Produktionsleitung</li>
                  <li>Drehbuch für Imagefilme, Werbefilme, Dokumentationen</li>
                </ul>
                <Link href="/contact" className="btn btn-secondary">Anfrage stellen</Link>
              </div>
              <div className="service-detail-image" style={{ aspectRatio: '16/9', position: 'relative' }}>
                <Image
                  src="/img/Behindthescenes-37.webp"
                  alt="Filmproduktion"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  fetchPriority="auto"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="service-detail-item service-detail-reverse">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h2>Videomarketing</h2>
                <p>Strategische Video-Konzepte, die Ihre Marke stärken und Ihre Zielgruppe erreichen:</p>
                <ul>
                  <li>Social Media Videos (Instagram, TikTok, YouTube)</li>
                  <li>Unternehmensvideos und Imagefilme</li>
                  <li>Produktvideos und Erklärfilme</li>
                  <li>Event-Videos und Livestreaming</li>
                  <li>Video-Marketing Strategie und Beratung</li>
                </ul>
                <Link href="/contact" className="btn btn-secondary">Anfrage stellen</Link>
              </div>
              <div className="service-detail-image" style={{ aspectRatio: '16/9', position: 'relative' }}>
                <Image
                  src="/img/videomarketing.webp"
                  alt="Videomarketing"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  fetchPriority="auto"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="service-detail-item">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h2>Fotografie</h2>
                <p>Professionelle Fotografie für alle Anlässe:</p>
                <ul>
                  <li>Produktfotografie</li>
                  <li>Event-Fotografie</li>
                  <li>Porträt- und People-Fotografie</li>
                  <li>Image-Kampagnen</li>
                  <li>Retusche und Bildbearbeitung</li>
                </ul>
                <Link href="/contact" className="btn btn-secondary">Anfrage stellen</Link>
              </div>
              <div className="service-detail-image" style={{ aspectRatio: '16/9', position: 'relative' }}>
                <Image
                  src="/img/Leistung_Fotografie.webp"
                  alt="Fotografie"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  fetchPriority="auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process section section-dark">
        <div className="container">
          <h2 className="section-title">Unser Arbeitsprozess</h2>
          <p className="section-subtitle">Wie wir gemeinsam zum Erfolg kommen</p>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>Beratung & Konzeption</h3>
              <p>Gemeinsam entwickeln wir die Idee und das Konzept für Ihr Projekt</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Produktion</h3>
              <p>Professionelle Umsetzung mit modernster Technik und kreativem Know-how</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>Post-Production</h3>
              <p>Schnitt, Bearbeitung und finale Optimierung des Materials</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>Auslieferung</h3>
              <p>Fertigstellung und Übergabe in Ihrem gewünschten Format</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
