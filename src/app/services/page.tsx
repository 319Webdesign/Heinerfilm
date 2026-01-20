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
            src="/img/Headerbild_Leistungen_scharf.webp"
            alt="Leistungen Header"
            fill
            className="page-header-image"
            style={{ objectFit: 'cover' }}
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
                <p>Von der Idee bis zum fertigen Film begleiten wir Sie durch den gesamten Produktionsprozess.</p>
                <ul>
                  <li>Imagefilm</li>
                  <li>Recruiting Video</li>
                  <li>Aftermovie für Events</li>
                  <li>Messefilm</li>
                </ul>
                <Link href="/contact" className="btn btn-secondary">Anfrage stellen</Link>
              </div>
              <div className="service-detail-image" style={{ aspectRatio: '16/9', position: 'relative', backgroundColor: '#1a1a1a' }}>
                <Image
                  src="/img/Behindthescenes-37.webp"
                  alt="Filmproduktion"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                  fetchPriority="high"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="service-detail-item service-detail-reverse">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h2>Videomarketing</h2>
                <p>Verschiedene Möglichkeiten Ihre Dienstleistung oder Produkt zu vermarkten.</p>
                <ul>
                  <li>Kurzvideos (Instagram, TikTok, YouTube)</li>
                  <li>Videokampagnen</li>
                  <li>Erklärvideos</li>
                  <li>Testimonials</li>
                  <li>Teaser</li>
                </ul>
                <Link href="/contact" className="btn btn-secondary">Anfrage stellen</Link>
              </div>
              <div className="service-detail-image" style={{ aspectRatio: '16/9', position: 'relative', backgroundColor: '#1a1a1a' }}>
                <Image
                  src="/img/videomarketing.webp"
                  alt="Videomarketing"
                  fill
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                  fetchPriority="high"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="service-detail-item">
            <div className="service-detail-content">
              <div className="service-detail-text">
                <h2>Fotografie</h2>
                <p>Eindrucksvolle Fotografie für:</p>
                <ul>
                  <li>Events</li>
                  <li>Mitarbeiterportraits</li>
                  <li>Imagekampagnen</li>
                  <li>Produkte</li>
                  <li>Unternehmen</li>
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
              <h3>Konzeption</h3>
              <p>Ideenentwicklung und Konzepterstellung für Ihr Projekt</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Produktion</h3>
              <p>Professionelle Umsetzung mit modernster Technik und kreativem Know-How</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>Postproduktion</h3>
              <p>Schnitt, Bearbeitung, finale Optimierung des Materials inkl. Änderungsschleifen</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>Auslieferung</h3>
              <p>Fertigstellung und Übergabe in Ihrem gewünschtem Format</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
