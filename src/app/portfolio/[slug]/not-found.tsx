import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="portfolio-detail-content section section-dark" style={{ paddingTop: '8rem', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '4rem', color: 'white', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem' }}>Projekt nicht gefunden</h2>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '3rem' }}>
          Das gesuchte Portfolio-Projekt konnte nicht gefunden werden.
        </p>
        <Link href="/portfolio" className="btn btn-secondary">
          <ArrowLeft style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
          Zurück zum Portfolio
        </Link>
      </div>
    </section>
  );
}
