import type { Metadata } from 'next';
import PortfolioFilter from '@/components/PortfolioFilter';

export const metadata: Metadata = {
  title: 'Portfolio - Heinerfilm',
  description: 'Unsere Projekte und Referenzen',
};

export default function Portfolio() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Portfolio</h1>
          <p>Unsere Projekte und Referenzen</p>
        </div>
      </section>

      <PortfolioFilter />

      <section className="testimonials section section-dark">
        <div className="container">
          <h2 className="section-title">Was unsere Kunden sagen</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Die Zusammenarbeit mit Heinerfilm war außergewöhnlich. Professionell, kreativ und termingerecht.
                  Unser Imagefilm hat alle Erwartungen übertroffen."
                </p>
              </div>
              <div className="testimonial-author">
                <strong>Name</strong>
                <span>Firma/Position</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Ein absolut zuverlässiger Partner für unsere Video-Projekte. Die kreative Umsetzung und die
                  Kommunikation waren jederzeit auf höchstem Niveau."
                </p>
              </div>
              <div className="testimonial-author">
                <strong>Name</strong>
                <span>Firma/Position</span>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Heinerfilm hat unsere Vision perfekt verstanden und in beeindruckende Bilder umgesetzt. Sehr empfehlenswert!"</p>
              </div>
              <div className="testimonial-author">
                <strong>Name</strong>
                <span>Firma/Position</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
