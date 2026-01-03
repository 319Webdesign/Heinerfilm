'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'all' | 'film' | 'video' | 'post' | 'photo';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  categoryLabel: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Projekt 1', category: 'film', categoryLabel: 'Filmproduktion' },
  { id: 2, title: 'Projekt 2', category: 'video', categoryLabel: 'Videomarketing' },
  { id: 3, title: 'Projekt 3', category: 'post', categoryLabel: 'Post-Production' },
  { id: 4, title: 'Projekt 4', category: 'photo', categoryLabel: 'Fotografie' },
  { id: 5, title: 'Projekt 5', category: 'film', categoryLabel: 'Filmproduktion' },
  { id: 6, title: 'Projekt 6', category: 'video', categoryLabel: 'Videomarketing' },
];

const filters: { value: Category; label: string }[] = [
  { value: 'all', label: 'Alle' },
  { value: 'film', label: 'Filmproduktion' },
  { value: 'video', label: 'Videomarketing' },
  { value: 'post', label: 'Post-Production' },
  { value: 'photo', label: 'Fotografie' },
];

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

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
                <div className="portfolio-image">
                  <div className="placeholder-image">
                    <span>{item.title}</span>
                  </div>
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
