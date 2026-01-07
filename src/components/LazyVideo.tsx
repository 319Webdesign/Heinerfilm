'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controlsList?: string;
  disablePictureInPicture?: boolean;
  onPlay?: () => void;
}

export default function LazyVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  controlsList,
  disablePictureInPicture = false,
  onPlay,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer für Lazy Loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Starte das Laden 50px bevor das Video sichtbar wird
        threshold: 0.1,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    // Video-Eigenschaften setzen
    video.muted = muted;
    video.playsInline = playsInline;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    // Versuche das Video abzuspielen, wenn autoPlay aktiviert ist
    if (autoPlay && isIntersecting) {
      const playVideo = async () => {
        try {
          video.volume = 0;
          await video.play();
          onPlay?.();
        } catch (error) {
          console.log('Video autoplay prevented:', error);
        }
      };

      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo, { once: true });
        video.addEventListener('canplay', playVideo, { once: true });
      }
    }
  }, [shouldLoad, isIntersecting, autoPlay, muted, playsInline, onPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={shouldLoad ? 'auto' : 'none'}
      poster={poster}
      disablePictureInPicture={disablePictureInPicture}
      controlsList={controlsList}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}

