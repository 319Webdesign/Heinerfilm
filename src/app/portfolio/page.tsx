import type { Metadata } from 'next';
import { Suspense } from 'react';
import Image from 'next/image';
import PortfolioFilter from '@/components/PortfolioFilter';

export const metadata: Metadata = {
  title: 'Portfolio - Heinerfilm',
  description: 'Unsere Projekte und Referenzen',
};

export default function Portfolio() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-background">
          <Image
            src="/img/Headerbild_Leistungen_scharf.webp"
            alt="Portfolio Header"
            fill
            className="page-header-image"
            style={{ objectFit: 'cover' }}
            quality={85}
            sizes="100vw"
            priority
            fetchPriority="high"
            unoptimized
          />
          <div className="page-header-overlay"></div>
        </div>
        <div className="container">
          <h1>Portfolio</h1>
          <p>Unsere Projekte und Referenzen</p>
        </div>
      </section>

      <Suspense fallback={<div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Lade Portfolio...</div>}>
        <PortfolioFilter />
      </Suspense>

      <section className="testimonials section section-dark">
        <div className="container">
          <h2 className="section-title">Was unsere Kunden sagen</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Die Zusammenarbeit mit heinerfilm war außergewöhnlich professionell. Besonders beeindruckt hat mich die präzise Planung und Pünktlichkeit – wichtige Faktoren, wenn man Termine koordinieren muss. Die Kunst, zum richtigen Zeitpunkt am Auslöser zu drücken, beherrscht das Team perfekt, auch bei herausfordernden Lichtverhältnissen. Das Ergebnis spricht für sich."
                </p>
              </div>
              <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: '0.25rem',
                  flexShrink: 0
                }}>
                  <Image
                    src="/img/idplus.png"
                    alt="ID-Plus Logo"
                    width={48}
                    height={48}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <strong>Annette Himken</strong>
                  <span>ID-Plus</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Ich bin begeistert! Tim arbeitet äußerst professionell, von der ersten Kontaktaufnahme bis hin zur finalen Umsetzung. Die Kommunikation war immer klar, offen und sehr angenehm, sodass ich mich jederzeit gut aufgehoben fühlte."
                </p>
              </div>
              <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: '0.1rem',
                  flexShrink: 0
                }}>
                  <Image
                    src="/img/klangversprechen.png"
                    alt="Klangversprechen Logo"
                    width={48}
                    height={48}
                    style={{ objectFit: 'contain', width: '100%', height: '100%', transform: 'scale(1.3)' }}
                  />
                </div>
                <div>
                  <strong>Robin Steitz</strong>
                  <span>Klangversprechen</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Die Ergebnisse sprechen für sich: Die Bilder sind modern, hochwertig und spiegeln perfekt den Charakter unseres Teams wider. Wir freuen uns, diese Fotos sowohl auf unserer Website als auch in anderen Firmenpräsentationen nutzen zu können."</p>
              </div>
              <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  padding: '0.25rem',
                  flexShrink: 0
                }}>
                  <Image
                    src="/img/noveo.png"
                    alt="Noveo Logo"
                    width={48}
                    height={48}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <strong>Dirk Stumpf</strong>
                  <span>Noveo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
