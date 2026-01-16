'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LazyVideo from './LazyVideo';
import type { MediaItem } from '@/data/portfolio';

interface PortfolioMediaItemProps {
  media: MediaItem;
  index: number;
  projectTitle: string;
}

export default function PortfolioMediaItem({ media, index, projectTitle }: PortfolioMediaItemProps) {
  const [isPortrait, setIsPortrait] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (media.type === 'image' && media.src && !media.isPlaceholder) {
      const img = new window.Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        // Wenn Höhe größer als Breite (Hochkant), dann aspectRatio < 1
        // Wir prüfen auf 9:16 Format (0.5625) oder allgemein Hochkant (< 0.7)
        setIsPortrait(aspectRatio < 0.7);
      };
      img.onerror = () => {
        // Fallback: nicht als Hochkant behandeln
        setIsPortrait(false);
      };
      img.src = media.src;
    }
  }, [media]);

  if (media.isPlaceholder) {
    return (
      <div className="portfolio-media-item">
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
      </div>
    );
  }

  if (media.type === 'video') {
    return (
      <div className="portfolio-media-item">
        <div className="portfolio-media-video-wrapper">
          {media.src && (
            <LazyVideo
              src={media.src}
              poster={media.poster}
              className="portfolio-media-video"
              autoPlay={media.autoPlay ?? false}
              muted={media.muted !== undefined ? media.muted : true}
              loop={media.loop ?? false}
              playsInline
              controlsList="nodownload nofullscreen"
              eager={media.autoPlay === true}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`portfolio-media-item ${isPortrait ? 'portfolio-media-portrait' : ''}`} ref={wrapperRef}>
      <div className={`portfolio-media-image-wrapper ${isPortrait ? 'portfolio-media-image-wrapper-portrait' : ''}`}>
        {media.src && (
          <Image
            src={media.src}
            alt={media.alt || `${projectTitle} - Bild ${index + 2}`}
            fill
            className="portfolio-media-image"
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            style={{ objectFit: isPortrait ? 'contain' : 'cover' }}
            fetchPriority="auto"
            unoptimized={media.src?.endsWith('.webp')}
          />
        )}
      </div>
    </div>
  );
}
