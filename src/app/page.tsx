'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Heart, UserCheck, Zap, Target, BarChart, Star, Quote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureSection from '@/components/FeatureSection';
import StrategyProcessSection from '@/components/StrategyProcessSection';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Sicherstellen, dass das Video auf mobilen Geräten sofort abgespielt wird
    const video = videoRef.current;
    if (video) {
      // Video-Eigenschaften setzen (kritisch für Autoplay auf Mobile)
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      
      // Versuche das Video sofort abzuspielen
      const playVideo = async () => {
        try {
          // Setze Volume auf 0, um sicherzustellen, dass es stumm ist
          video.volume = 0;
          await video.play();
        } catch (error) {
          // Autoplay wurde verhindert - wird nach Benutzerinteraktion gestartet
          console.log('Video autoplay prevented:', error);
        }
      };

      // Versuche sofort zu starten, wenn das Video bereits geladen ist
      if (video.readyState >= 2) {
        playVideo();
      } else {
        // Warte auf verschiedene Events, um Kompatibilität zu maximieren
        video.addEventListener('loadedmetadata', playVideo, { once: true });
        video.addEventListener('loadeddata', playVideo, { once: true });
        video.addEventListener('canplay', playVideo, { once: true });
      }

      // Fallback: Starte Video nach Benutzerinteraktion, falls Autoplay fehlschlägt
      const handleUserInteraction = () => {
        if (video.paused) {
          video.play().catch(() => {});
        }
      };

      // Event-Listener für Benutzerinteraktionen
      document.addEventListener('touchstart', handleUserInteraction, { once: true, passive: true });
      document.addEventListener('click', handleUserInteraction, { once: true });

      return () => {
        video.removeEventListener('loadedmetadata', playVideo);
        video.removeEventListener('loadeddata', playVideo);
        video.removeEventListener('canplay', playVideo);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('click', handleUserInteraction);
      };
    }
  }, []);

  const handleHeroClick = () => {
    // Starte Video wenn auf Hero-Section geklickt wird
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" onClick={handleHeroClick}>
        <video 
          ref={videoRef}
          className="hero-video" 
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/ueberuns.jpg"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="/video/highlightfilm.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">IHRE VISION IST MEINE LEIDENSCHAFT</h1>
            <p className="hero-subtitle">
              Professionelle Filmproduktion und visuelle Medienlösungen, die Ihre Geschichte zum Leben erwecken
            </p>
            <div className="hero-buttons">
              <Link href="/portfolio" className="btn btn-primary">Unsere Projekte</Link>
              <Link href="/contact" className="btn btn-secondary">Kostenloses Erstgespräch</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section section-dark">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-text">
              <h2 className="section-title">Unsere Videos Sprechen Lauter als Worte</h2>
              <p>
              Schon sehr früh haben wir erkannt, dass Social Media nicht nur ein Zeitvertreib für zwischendurch ist. Verknüpft mit unserer Liebe und Begeisterung für die Produktion von Videos, haben wir das Potenzial erkannt und uns dazu entschieden den Schwerpunkt hierauf zulegen.
              Seit Beginn haben wir 250 abgeschlossene Projekte und mehr als 80 zufriedene Kunden.
              </p>
              <p>
                Der Name „Heinerfilm" entstand nach einem Filmdreh auf einer sehr langen Autofahrt von Berlin nach Darmstadt, 
                als auf einmal der Satz fiel: „Berlin war schön aber ich bin Stolz ein Heiner zu sein." Und der Rest ist Geschichte….
              </p>
              <Link href="/about" className="btn btn-secondary">
                Mehr über Heinerfilm <span className="btn-icon">→</span>
              </Link>
            </div>
            <div className="about-image">
              <Image
                src="/img/DSC01407.jpg"
                alt="Heiner - Filmemacher aus Darmstadt"
                width={600}
                height={800}
                className="about-image-photo"
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
              Warum Videos? Warum HEINERFILM?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(156, 163, 175, 1)', maxWidth: '48rem', margin: '0 auto', marginBottom: '3rem' }}>
              Professionelle Videoproduktion in Darmstadt, die nicht nur Ihr Publikum begeistert, sondern auch messbare Ergebnisse liefert
            </p>
          </div>
          
          <div className="benefits-grid">
            {/* Benefit 1: Digitale Dominanz */}
            <article className="benefits-card">
              <div className="benefits-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="benefits-icon">
                  <TrendingUp style={{ width: '1.75rem', height: '1.75rem', color: '#ff0000' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Digitale Dominanz</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Maximieren Sie Ihre Sichtbarkeit in Google und auf Social Media durch professionelle Videoproduktion Darmstadt. Unsere Video-SEO-Strategie sorgt dafür, dass Ihre Inhalte gefunden werden und Ihre Marke in den Köpfen Ihrer Zielgruppe bleibt.
                </p>
              </div>
            </article>

            {/* Benefit 2: Vertrauens-Bonus */}
            <article className="benefits-card">
              <div className="benefits-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="benefits-icon">
                  <Heart style={{ width: '1.75rem', height: '1.75rem', color: '#ff0000' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Vertrauens-Bonus</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Authentisches Storytelling, das Kunden emotional bindet und langfristiges Vertrauen schafft. Wir erzählen Ihre Geschichte so, dass sie nicht nur gesehen, sondern auch gefühlt wird – und Ihre Marke zu einer persönlichen Verbindung wird.
                </p>
              </div>
            </article>

            {/* Benefit 3: Fachkräfte-Magnet */}
            <article className="benefits-card">
              <div className="benefits-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="benefits-icon">
                  <UserCheck style={{ width: '1.75rem', height: '1.75rem', color: '#ff0000' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Fachkräfte-Magnet</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Gezielte Recruiting-Videos, die gegen den Fachkräftemangel in Darmstadt und der Region Rhein-Main wirken. Mit professioneller Videoproduktion zeigen wir authentisch, warum Ihr Unternehmen der richtige Arbeitgeber ist – und begeistern die Talente, die Sie suchen.
                </p>
              </div>
            </article>

            {/* Benefit 4: Effiziente Kommunikation */}
            <article className="benefits-card">
              <div className="benefits-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="benefits-icon">
                  <Zap style={{ width: '1.75rem', height: '1.75rem', color: '#ff0000' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Effiziente Kommunikation</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Komplexe Angebote schnell und einfach erklärt – Video übertrifft jeden Text und jede Präsentation. Professionelle Videoproduktion Darmstadt verwandelt komplizierte Botschaften in verständliche Geschichten, die Ihre Kunden sofort begreifen.
                </p>
              </div>
            </article>

            {/* Benefit 5: Nachhaltiger Erfolg */}
            <article className="benefits-card">
              <div className="benefits-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="benefits-icon">
                  <Target style={{ width: '1.75rem', height: '1.75rem', color: '#ff0000' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Nachhaltiger Erfolg</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Strategisches Branding statt kurzfristiger Werbung – wir entwickeln mit professioneller Videoproduktion eine einzigartige Marken-Identität, die Ihre Werte transportiert und sich von der Masse abhebt. Langfristig wirkungsvoll, nachhaltig erfolgreich.
                </p>
              </div>
            </article>

            {/* Benefit 6: Mehr Umsatz */}
            <article className="benefits-card">
              <div className="benefits-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="benefits-icon">
                  <BarChart style={{ width: '1.75rem', height: '1.75rem', color: '#ff0000' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Mehr Umsatz</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Messbare Ergebnisse durch höhere Conversion-Rates auf Ihrer Website. Professionelle Videoproduktion Darmstadt steigert die Verweildauer, reduziert die Absprungrate und verwandelt Besucher in Kunden – nachvollziehbar, messbar, erfolgreich.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Services Preview */}
      <section className="services-preview section section-dark">
        <div className="container">
          <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>Unsere Leistungen</h2>
          <p className="section-subtitle" style={{ color: 'rgba(156, 163, 175, 1)', marginBottom: '5rem' }}>
            Von der Konzeption bis zur finalen Auslieferung – wir begleiten Ihr Projekt
          </p>
          <div className="services-grid">
            <div className="service-card-modern">
              <div className="service-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="service-icon-modern">🎬</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Filmproduktion</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Professionelle Film- und Videoproduktion für Unternehmen, Events und kreative Projekte
                </p>
              </div>
            </div>
            <div className="service-card-modern">
              <div className="service-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="service-icon-modern">📹</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Videomarketing</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Strategische Video-Konzepte, die Ihre Marke stärken und Ihre Zielgruppe erreichen
                </p>
              </div>
            </div>
            <div className="service-card-modern">
              <div className="service-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="service-icon-modern">✂️</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Post-Production</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Schnitt, Farbkorrektur, Motion Graphics und visuelle Effekte für ein perfektes Ergebnis
                </p>
              </div>
            </div>
            <div className="service-card-modern">
              <div className="service-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="service-icon-modern">📸</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>Fotografie</h3>
                <p style={{ color: 'rgba(156, 163, 175, 1)', lineHeight: '1.75' }}>
                  Professionelle Fotografie für Produkte, Events, Porträts und Image-Kampagnen
                </p>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link href="/services" className="btn btn-secondary">Alle Leistungen ansehen</Link>
          </div>
        </div>
      </section>

      {/* Strategy & Process Section */}
      <StrategyProcessSection />

      {/* Kundenstimmen Section */}
      <section className="testimonials-section" style={{ backgroundColor: '#050505', padding: '6rem 0', width: '100%', minHeight: 'auto' }}>
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{ 
              marginBottom: '5rem', 
              width: '100%', 
              display: 'block',
              textAlign: 'center',
              margin: '0 auto 5rem auto',
              padding: 0,
              boxSizing: 'border-box'
            }}
          >
            <h2 className="section-title" style={{ 
              color: '#ffffff', 
              marginBottom: '1rem', 
              textAlign: 'center', 
              width: '100%', 
              marginLeft: 'auto', 
              marginRight: 'auto',
              padding: 0,
              display: 'block',
              boxSizing: 'border-box'
            }}>
              Was Kunden über die Zusammenarbeit sagen
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'rgba(156, 163, 175, 1)', 
              maxWidth: '48rem', 
              margin: '0 auto', 
              textAlign: 'center', 
              width: '100%',
              padding: 0,
              display: 'block',
              boxSizing: 'border-box'
            }}>
              Erfahren Sie, warum Unternehmen in der Region Darmstadt auf die Expertise von Heinerfilm vertrauen.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(1, 1fr)', 
            gap: '1.5rem', 
            marginBottom: '3rem'
          }}
          className="testimonials-grid-responsive"
          >
            {/* Testimonial 1: ID-PLUS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Quote Icon - Top Right */}
              <Quote 
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '4rem',
                  height: '4rem',
                  color: 'white',
                  opacity: 0.1,
                }}
                strokeWidth={1.5}
              />
              
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{ width: '1.25rem', height: '1.25rem', fill: '#fbbf24', color: '#fbbf24' }} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p style={{ 
                color: '#ffffff', 
                lineHeight: '1.75', 
                marginBottom: '1.5rem', 
                fontSize: '1rem',
                position: 'relative',
                zIndex: 10
              }}>
                "Die Zusammenarbeit mit heinerfilm war außergewöhnlich professionell. Besonders beeindruckt hat mich die präzise Planung und Pünktlichkeit – wichtige Faktoren, wenn man Termine koordinieren muss. Die Kunst, zum richtigen Zeitpunkt am Auslöser zu drücken, beherrscht das Team perfekt, auch bei herausfordernden Lichtverhältnissen. Das Ergebnis spricht für sich."
              </p>
              
              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 10 }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.125rem'
                }}>
                  ID
                </div>
                <div>
                  <p style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '0.125rem' }}>ID-PLUS</p>
                  <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '0.875rem' }}>Kunde</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2: Robin Steitz */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Quote Icon - Top Right */}
              <Quote 
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '4rem',
                  height: '4rem',
                  color: 'white',
                  opacity: 0.1,
                }}
                strokeWidth={1.5}
              />
              
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{ width: '1.25rem', height: '1.25rem', fill: '#fbbf24', color: '#fbbf24' }} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p style={{ 
                color: '#ffffff', 
                lineHeight: '1.75', 
                marginBottom: '1.5rem', 
                fontSize: '1rem',
                position: 'relative',
                zIndex: 10
              }}>
                "Ich bin begeistert! Tim arbeitet äußerst professionell, von der ersten Kontaktaufnahme bis hin zur finalen Umsetzung. Die Kommunikation war immer klar, offen und sehr angenehm, sodass ich mich jederzeit gut aufgehoben fühlte."
              </p>
              
              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 10 }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.125rem'
                }}>
                  RS
                </div>
                <div>
                  <p style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '0.125rem' }}>Robin Steitz</p>
                  <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '0.875rem' }}>Klangversprechen</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3: Dirk Stumpf */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Quote Icon - Top Right */}
              <Quote 
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '4rem',
                  height: '4rem',
                  color: 'white',
                  opacity: 0.1,
                }}
                strokeWidth={1.5}
              />
              
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} style={{ width: '1.25rem', height: '1.25rem', fill: '#fbbf24', color: '#fbbf24' }} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p style={{ 
                color: '#ffffff', 
                lineHeight: '1.75', 
                marginBottom: '1.5rem', 
                fontSize: '1rem',
                position: 'relative',
                zIndex: 10
              }}>
                "Die Ergebnisse sprechen für sich: Die Bilder sind modern, hochwertig und spiegeln perfekt den Charakter unseres Teams wider. Wir freuen uns, diese Fotos sowohl auf unserer Website als auch in anderen Firmenpräsentationen nutzen zu können."
              </p>
              
              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 10 }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.125rem'
                }}>
                  DS
                </div>
                <div>
                  <p style={{ color: '#ffffff', fontWeight: 'bold', marginBottom: '0.125rem' }}>Dirk Stumpf</p>
                  <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '0.875rem' }}>Noveo</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textAlign: 'center' }}
          >
            <Link 
              href="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                backgroundColor: '#ef4444',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dc2626';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(239, 68, 68, 0.2)';
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) {
                  arrow.style.transform = 'translateX(4px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ef4444';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                const arrow = e.currentTarget.querySelector('svg');
                if (arrow) {
                  arrow.style.transform = 'translateX(0)';
                }
              }}
            >
              Kostenloses Erstgespräch
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem', transition: 'transform 0.3s ease' }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="portfolio-preview section section-dark" style={{ backgroundColor: '#050505' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '5rem', textAlign: 'center' }}
          >
            <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
              Aktuelle Projekte
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(156, 163, 175, 1)' }}>
            Einblicke in unsere aktuellen Projekte
            </p>
          </motion.div>
          <div className="portfolio-grid portfolio-grid-modern">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="portfolio-item-modern"
            >
              <div className="portfolio-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="portfolio-image-modern">
                  <Image
                    src="/img/Sprotpresseball.png"
                    alt="Deutscher SportPresseBall"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="portfolio-info-modern">
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
                    Deutscher SportPresseBall
                  </h3>
                  <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '1rem', margin: 0 }}>Event Highlightfilm</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="portfolio-item-modern"
            >
              <div className="portfolio-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="portfolio-image-modern">
                  <Image
                    src="/img/Xtreme.png"
                    alt="Xtreme"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="portfolio-info-modern">
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
                    Xtreme
                  </h3>
                  <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '1rem', margin: 0 }}>Social Media Content</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="portfolio-item-modern"
            >
              <div className="portfolio-card-glow"></div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="portfolio-image-modern">
                  <Image
                    src="/img/Heinerwiesn.png"
                    alt="Heinerwiesn"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="portfolio-info-modern">
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
                    Heinerwiesn
                  </h3>
                  <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '1rem', margin: 0 }}>Fotografie</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
            style={{ marginTop: '4rem' }}
          >
            <Link href="/portfolio" className="btn btn-secondary">
              Portfolio ansehen <span className="btn-icon">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta section section-dark">
        <div className="container">
          <div className="contact-cta-content">
            <h2>Bereit für Ihr nächstes Projekt?</h2>
            <p>
              Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen. Kontaktieren Sie uns für ein unverbindliches
              Beratungsgespräch.
            </p>
            <Link href="/contact" className="btn btn-primary">Jetzt Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
