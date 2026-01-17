'use client';

import { useState } from 'react';
import PortfolioMediaItem from './PortfolioMediaItem';
import PortfolioLightbox from './PortfolioLightbox';
import type { MediaItem } from '@/data/portfolio';

interface PortfolioGalleryProps {
  media: MediaItem[];
  projectTitle: string;
}

export default function PortfolioGallery({ media, projectTitle }: PortfolioGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (index: number) => {
    // Filtere alle Bilder (ohne Videos und Placeholder) bis zum angeklickten Index
    const imageItems = media
      .slice(0, index + 1)
      .filter(item => 
        item.type === 'image' && 
        item.src && 
        !item.isPlaceholder
      );
    
    // Der Index ist die Länge minus 1 (da wir bis index+1 slicen)
    const imageIndex = imageItems.length - 1;
    
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="portfolio-media-grid">
        {media.map((item, index) => (
          <PortfolioMediaItem
            key={index}
            media={item}
            index={index}
            projectTitle={projectTitle}
            onImageClick={handleImageClick}
          />
        ))}
      </div>
      
      <PortfolioLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={media}
        initialIndex={lightboxIndex}
      />
    </>
  );
}
