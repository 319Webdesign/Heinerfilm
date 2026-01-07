'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  srcMobile?: string; // Optionale mobile Version für kleinere Dateigröße
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
  srcMobile,
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
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Erkenne mobile Geräte
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

    // Kritische Attribute für mobile Autoplay-Kompatibilität
    video.muted = true; // Zwingend auf true für Autoplay
    video.volume = 0; // Zusätzliche Absicherung
    video.playsInline = true; // Wichtig für iOS
    
    // Setze HTML-Attribute explizit (wichtig für iOS/Safari)
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('autoplay', autoPlay ? 'true' : 'false');
    
    // Für iOS: WebKit-spezifische Attribute
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('x-webkit-airplay', 'deny');

    // Versuche das Video abzuspielen, wenn autoPlay aktiviert ist
    if (autoPlay && isIntersecting) {
      const playVideo = async () => {
        try {
          // Warte bis genug Daten geladen sind
          if (video.readyState < 2) {
            await new Promise((resolve) => {
              const handleCanPlay = () => {
                video.removeEventListener('canplay', handleCanPlay);
                resolve(null);
              };
              video.addEventListener('canplay', handleCanPlay);
            });
          }

          // Mehrere Versuche für mobile Geräte
          let attempts = 0;
          const maxAttempts = 3;
          
          const tryPlay = async () => {
            try {
              video.volume = 0;
              video.muted = true;
              await video.play();
              onPlay?.();
              setVideoFailed(false);
            } catch (error) {
              attempts++;
              if (attempts < maxAttempts) {
                // Kurze Pause zwischen Versuchen
                setTimeout(tryPlay, 300);
              } else {
                console.log('Video autoplay failed after', maxAttempts, 'attempts. Showing poster image fallback.');
                setVideoFailed(true);
              }
            }
          };
          
          tryPlay();
        } catch (error) {
          console.log('Video autoplay prevented:', error);
          setVideoFailed(true);
        }
      };

      // Warte auf verschiedene Events für maximale Kompatibilität
      if (video.readyState >= 2) {
        playVideo();
      } else {
        video.addEventListener('loadeddata', playVideo, { once: true });
        video.addEventListener('canplay', playVideo, { once: true });
        video.addEventListener('canplaythrough', playVideo, { once: true });
      }
    }

    // Error Handler für Video-Lade-Fehler
    const handleError = () => {
      console.log('Video loading error, showing poster fallback');
      setVideoFailed(true);
    };

    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('error', handleError);
    };
  }, [shouldLoad, isIntersecting, autoPlay, muted, playsInline, onPlay]);

  // Wähle die richtige Video-Quelle (mobile oder desktop)
  const videoSource = isMobile && srcMobile ? srcMobile : src;

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        muted
        loop={loop}
        playsInline
        autoPlay={autoPlay}
        preload={shouldLoad ? 'metadata' : 'none'}
        poster={poster}
        disablePictureInPicture={disablePictureInPicture}
        controlsList={controlsList}
        style={{
          ...(videoFailed && poster ? {
            // Verstecke Video-Element wenn Fallback verwendet wird
            display: 'none'
          } : {})
        }}
      >
        {shouldLoad && !videoFailed && (
          <>
            <source src={videoSource} type="video/mp4" />
            Ihr Browser unterstützt keine Videos.
          </>
        )}
      </video>
      {videoFailed && poster && (
        // Fallback: Zeige Poster-Image wenn Video nicht lädt
        <img 
          src={poster} 
          alt="Video placeholder" 
          className={className}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
      )}
    </>
  );
}

