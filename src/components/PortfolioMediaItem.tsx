'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LazyVideo from './LazyVideo';
import type { MediaItem } from '@/data/portfolio';

interface PortfolioMediaItemProps {
  media: MediaItem;
  index: number;
  projectTitle: string;
  onMediaClick?: (index: number) => void;
}

type ImageOrientation = 'portrait' | 'landscape' | 'square';

export default function PortfolioMediaItem({ media, index, projectTitle, onMediaClick }: PortfolioMediaItemProps) {
  const [orientation, setOrientation] = useState<ImageOrientation>('square');
  const [isDetected, setIsDetected] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState<string>('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset state when media changes
    setOrientation('square');
    setIsDetected(false);
    
    if (media.type === 'image' && media.src && !media.isPlaceholder) {
      const img = new window.Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        
        // Bestimme Orientierung für Bento Box Layout
        // Portrait: aspectRatio < 0.8 (Höhe > Breite)
        // Landscape: aspectRatio > 1.3 (Breite deutlich > Höhe)
        // Square: 0.8 <= aspectRatio <= 1.3
        let newOrientation: ImageOrientation = 'square';
        if (aspectRatio < 0.8) {
          newOrientation = 'portrait';
        } else if (aspectRatio > 1.3) {
          newOrientation = 'landscape';
        }
        
        setOrientation(newOrientation);
        setIsDetected(true);
        
        // Erstelle einfachen Blur Placeholder
        const canvas = document.createElement('canvas');
        canvas.width = 20;
        canvas.height = 20;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#1a1a1a';
          ctx.fillRect(0, 0, 20, 20);
          setBlurDataUrl(canvas.toDataURL());
        }
      };
      img.onerror = () => {
        setOrientation('square');
        setIsDetected(true);
      };
      img.src = media.src;
    } else {
      setOrientation('square');
      setIsDetected(true);
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

  const handleClick = () => {
    if (media.src && !media.isPlaceholder && onMediaClick) {
      onMediaClick(index);
    }
  };

  if (media.type === 'video') {
    // Videos werden standardmäßig als Landscape behandelt
    return (
      <div 
        className="portfolio-media-item portfolio-media-landscape"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="portfolio-media-video-wrapper portfolio-media-image-wrapper-landscape">
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
        <div className="portfolio-media-overlay">
          <span className="portfolio-media-overlay-text">{projectTitle}</span>
        </div>
      </div>
    );
  }

  // CSS-Klassen basierend auf Orientierung
  const orientationClass = isDetected ? `portfolio-media-${orientation}` : '';
  const wrapperClass = isDetected ? `portfolio-media-image-wrapper-${orientation}` : 'portfolio-media-image-wrapper';

  return (
    <>
      <div 
        className={`portfolio-media-item ${orientationClass}`} 
        ref={wrapperRef}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        <div className={wrapperClass}>
          {media.src && (
            <Image
              src={media.src}
              alt={media.alt || `${projectTitle} - Bild ${index + 2}`}
              fill
              className="portfolio-media-image"
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              placeholder={blurDataUrl ? 'blur' : 'empty'}
              blurDataURL={blurDataUrl}
              onLoad={(e) => {
                // Zusätzliche Erkennung beim Laden des Next.js Image
                const img = e.currentTarget;
                if (img.naturalWidth && img.naturalHeight) {
                  const aspectRatio = img.naturalWidth / img.naturalHeight;
                  let newOrientation: ImageOrientation = 'square';
                  if (aspectRatio < 0.8) {
                    newOrientation = 'portrait';
                  } else if (aspectRatio > 1.3) {
                    newOrientation = 'landscape';
                  }
                  setOrientation(newOrientation);
                  setIsDetected(true);
                }
              }}
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%'
              }}
              fetchPriority="auto"
              unoptimized={media.src?.endsWith('.webp')}
            />
          )}
        </div>
        <div className="portfolio-media-overlay">
          <span className="portfolio-media-overlay-text">{projectTitle}</span>
        </div>
      </div>
    </>
  );
}
