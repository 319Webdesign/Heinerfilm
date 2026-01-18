'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

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
  eager?: boolean; // Wenn true, lädt das Video sofort ohne Intersection Observer
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
  eager = false,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [posterExists, setPosterExists] = useState<boolean | null>(null);
  const [mounted, setMounted] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Hydration-safe: Setze mounted Flag und eager Loading
  useEffect(() => {
    setMounted(true);
    if (eager) {
      setShouldLoad(true);
      setIsIntersecting(true);
    }
  }, [eager]);

  // Erkenne mobile Geräte
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prüfe, ob Poster-Image existiert
  useEffect(() => {
    if (!poster) {
      setPosterExists(false);
      return;
    }

    // Prüfe, ob das Bild existiert, ohne es zu laden
    const img = new Image();
    const checkImage = () => {
      img.onload = () => setPosterExists(true);
      img.onerror = () => setPosterExists(false);
      img.src = poster;
    };
    
    checkImage();
  }, [poster]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !mounted) return;

    // Wenn eager=true, überspringe Intersection Observer
    if (eager) {
      return;
    }

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
  }, [eager, mounted]);

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
    if (autoPlay && (isIntersecting || eager)) {
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
              // Timeout falls canplay nicht ausgelöst wird
              setTimeout(() => {
                video.removeEventListener('canplay', handleCanPlay);
                resolve(null);
              }, 2000);
            });
          }

          // Optimiertes Play mit Promise-Handling für iOS Low Power Mode
          const tryPlay = async () => {
            video.volume = 0;
            video.muted = true;
            video.setAttribute('muted', '');
            
            // Programmatischer Play-Versuch mit Promise-Fehlerbehandlung
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  // Autoplay erfolgreich
                  onPlay?.();
                  setVideoFailed(false);
                  setAutoplayBlocked(false);
                  setIsPlaying(true);
                })
                .catch((error) => {
                  // Autoplay wurde blockiert (z.B. durch Energiesparmodus)
                  console.log('Video autoplay blocked (e.g., Low Power Mode):', error);
                  setAutoplayBlocked(true);
                  setVideoFailed(false); // Video ist geladen, nur Autoplay blockiert
                });
            }
          };
          
          tryPlay();
        } catch (error) {
          console.log('Video autoplay prevented:', error);
          setAutoplayBlocked(true);
        }
      };

      // Warte auf verschiedene Events für maximale Kompatibilität
      if (video.readyState >= 2) {
        playVideo();
      } else {
        // Mehrere Event-Listener für bessere Kompatibilität
        const playOnce = () => {
          video.removeEventListener('loadeddata', playOnce);
          video.removeEventListener('canplay', playOnce);
          video.removeEventListener('canplaythrough', playOnce);
          playVideo();
        };
        video.addEventListener('loadeddata', playOnce, { once: true });
        video.addEventListener('canplay', playOnce, { once: true });
        video.addEventListener('canplaythrough', playOnce, { once: true });
        // Fallback: Starte nach max 1 Sekunde auch wenn Events nicht feuern
        setTimeout(() => {
          if (video.readyState > 0) {
            playOnce();
          }
        }, 1000);
      }
    }

    // Error Handler für Video-Lade-Fehler
    const handleError = () => {
      console.log('Video loading error, showing poster fallback');
      setVideoFailed(true);
    };

    video.addEventListener('error', handleError);

    // Event-Listener für Play/Pause-Zustand
    const handlePlay = () => {
      setIsPlaying(true);
      setAutoplayBlocked(false);
      onPlay?.();
    };
    
    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [shouldLoad, isIntersecting, autoPlay, muted, playsInline, onPlay, eager]);

  // Manueller Play-Handler für Fallback-Button
  const handleManualPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.volume = 0;
      video.muted = true;
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setAutoplayBlocked(false);
            setIsPlaying(true);
            onPlay?.();
          })
          .catch((error) => {
            console.log('Manual play failed:', error);
          });
      }
    } catch (error) {
      console.log('Manual play error:', error);
    }
  };

  // Wähle die richtige Video-Quelle (mobile oder desktop)
  const videoSource = isMobile && srcMobile ? srcMobile : src;

  // Bestimme den MIME-Type basierend auf der Dateiendung
  const getVideoType = (source: string): string => {
    const ext = source.toLowerCase().split('.').pop();
    switch (ext) {
      case 'webm':
        return 'video/webm';
      case 'mp4':
        return 'video/mp4';
      case 'ogg':
        return 'video/ogg';
      default:
        return 'video/mp4';
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video
        ref={videoRef}
        className={className}
        muted
        loop={loop}
        playsInline
        autoPlay={autoPlay}
        preload={mounted && eager ? 'auto' : shouldLoad ? 'auto' : 'none'}
        {...(poster && posterExists === true ? { poster } : {})}
        disablePictureInPicture={disablePictureInPicture}
        controlsList={controlsList}
        style={{
          ...(videoFailed && poster && posterExists === true ? {
            // Verstecke Video-Element wenn Fallback verwendet wird
            display: 'none'
          } : {})
        }}
      >
        {mounted && shouldLoad && !videoFailed && (
          <>
            <source src={videoSource} type={getVideoType(videoSource)} />
            Ihr Browser unterstützt keine Videos.
          </>
        )}
      </video>
      
      {/* Play-Button Fallback wenn Autoplay blockiert wurde (z.B. Low Power Mode) */}
      {autoplayBlocked && !isPlaying && shouldLoad && !videoFailed && (
        <button
          onClick={handleManualPlay}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 0, 0, 0.9)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s, background-color 0.2s',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
          }}
          aria-label="Video abspielen"
        >
          <Play 
            style={{ 
              width: '28px', 
              height: '28px', 
              color: 'white',
              marginLeft: '4px' // Optische Zentrierung des Play-Icons
            }} 
            fill="white"
          />
        </button>
      )}
      
      {videoFailed && poster && posterExists === true && (
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
    </div>
  );
}

