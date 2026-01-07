'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Category = 'all' | 'film' | 'video' | 'photo';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  categoryLabel: string;
  imageSrc: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Klangversprechen', category: 'video', categoryLabel: 'Videomarketing', imageSrc: '/img/Klangversprechen-311.jpg' },
  { id: 2, title: 'Loop 5 Influecer Event', category: 'photo', categoryLabel: 'Fotografie', imageSrc: '/img/Loop5_SocialMall73.jpg' },
  { id: 3, title: 'Fibo x Smilodox', category: 'photo', categoryLabel: 'Fotografie', imageSrc: '/img/Fibo-5.jpg' },
  { id: 4, title: 'Sportpresseball', category: 'film', categoryLabel: 'Filmproduktion', imageSrc: '/img/Sportpresseball2025_30.jpg' },
  { id: 5, title: 'TimeWarp', category: 'film', categoryLabel: 'Filmproduktion', imageSrc: '/img/TimeWarp82_mitLogo.png' },
  { id: 6, title: 'Eicke H+', category: 'video', categoryLabel: 'Videomarketing', imageSrc: '' },
];

const filters: { value: Category; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'film', label: 'Filmproduktion' },
  { value: 'video', label: 'Videomarketing' },
  { value: 'photo', label: 'Fotografie' },
];

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <>
      <section className="portfolio-filter section">
        <div className="container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-grid-detail section">
        <div className="container">
          <div className="portfolio-items">
            {filteredItems.map((item) => (
              <div key={item.id} className="portfolio-item" data-category={item.category}>
                <div className="portfolio-image" style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
                  {item.imageSrc && !imageErrors[item.id] ? (
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="portfolio-img"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={() => setImageErrors(prev => ({ ...prev, [item.id]: true }))}
                    />
                  ) : (
                    <div className="placeholder-image" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.125rem' }}>
                      <span style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{item.title}</span>
                      <span style={{ fontSize: '0.875rem', opacity: 0.6 }}>Bild folgt</span>
                    </div>
                  )}
                  <div className="portfolio-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.categoryLabel}</p>
                    <Link href="#" className="btn btn-primary">
                      Details ansehen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
