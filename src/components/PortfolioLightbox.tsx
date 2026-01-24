'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyVideo from './LazyVideo';
import type { MediaItem } from '@/data/portfolio';

interface PortfolioLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: MediaItem[];
  initialIndex: number;
}

export default function PortfolioLightbox({ isOpen, onClose, images, initialIndex }: PortfolioLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Filtere Bilder und Videos (keine Placeholder)
  const mediaItems = useMemo(() => 
    images.filter(item => 
      item.src && 
      !item.isPlaceholder
    ), 
    [images]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentIndex(initialIndex);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  }, [mediaItems.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }, [mediaItems.length]);

  // Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrevious]);

  // Swipe Handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (!isOpen || mediaItems.length === 0) return null;

  const currentMedia = mediaItems[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="portfolio-lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Bildgalerie"
      >
        {/* Close Button */}
        <motion.button
          className="portfolio-lightbox-close"
          onClick={onClose}
          aria-label="Schließen"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={32} />
        </motion.button>

        {/* Navigation Buttons */}
        {mediaItems.length > 1 && (
          <>
            <motion.button
              className="portfolio-lightbox-nav portfolio-lightbox-nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              aria-label="Vorheriges Medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={32} />
            </motion.button>

            <motion.button
              className="portfolio-lightbox-nav portfolio-lightbox-nav-next"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Nächstes Medium"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={32} />
            </motion.button>
          </>
        )}

        {/* Media Content */}
        <motion.div
          className="portfolio-lightbox-content"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="portfolio-lightbox-media-wrapper"
            >
              {currentMedia.type === 'image' && currentMedia.src && (
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt || `Bild ${currentIndex + 1}`}
                  fill
                  className="portfolio-lightbox-image"
                  quality={90}
                  sizes="100vw"
                  style={{ objectFit: 'contain' }}
                  priority
                  unoptimized={currentMedia.src?.endsWith('.webp')}
                />
              )}
              {currentMedia.type === 'video' && currentMedia.src && (
                <LazyVideo
                  src={currentMedia.src}
                  poster={currentMedia.poster}
                  className="portfolio-lightbox-video"
                  autoPlay={currentMedia.autoPlay ?? true}
                  muted={currentMedia.muted !== undefined ? currentMedia.muted : true}
                  loop={currentMedia.loop ?? true}
                  playsInline
                  controls
                  eager={true}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Counter */}
        {mediaItems.length > 1 && (
          <motion.div
            className="portfolio-lightbox-counter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {currentIndex + 1} / {mediaItems.length}
          </motion.div>
        )}

        {/* Thumbnail Strip */}
        {mediaItems.length > 1 && mediaItems.length <= 20 && (
          <motion.div
            className="portfolio-lightbox-thumbnails"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {mediaItems.map((item, index) => (
              <button
                key={index}
                className={`portfolio-lightbox-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                aria-label={`${item.type === 'video' ? 'Video' : 'Bild'} ${index + 1} anzeigen`}
              >
                {item.type === 'image' && item.src && (
                  <Image
                    src={item.src}
                    alt={item.alt || `Thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={50}
                    sizes="80px"
                    unoptimized={item.src?.endsWith('.webp')}
                  />
                )}
                {item.type === 'video' && (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ opacity: 0.8 }}>
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
