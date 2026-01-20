'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Liste der Bilder, die nicht optimiert werden sollen (verursachen 400-Fehler bei Next.js Image Optimization)
const unoptimizedTeamImages = [
  'DamianDomin',
  'damiandomin' // Fallback für eventuelle lokale Varianten
];

// Komponente für Team-Mitglieder mit Platzhalter
function TeamMemberCard({ 
  imageSrc, 
  alt, 
  name, 
  role, 
  delay,
  objectPosition = 'center'
}: { 
  imageSrc: string; 
  alt: string; 
  name: string; 
  role: string; 
  delay: number;
  objectPosition?: string;
}) {
  const [imageError, setImageError] = useState(!imageSrc || imageSrc === '');
  const shouldUnoptimize = unoptimizedTeamImages.some(img => imageSrc.includes(img));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="portfolio-item-modern"
    >
      <div className="portfolio-card-glow"></div>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="portfolio-image-modern" style={{ aspectRatio: '3/4' }}>
          {!imageError && imageSrc ? (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              style={{ objectFit: 'cover', objectPosition: objectPosition }}
              quality={80}
              sizes={shouldUnoptimize ? undefined : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"}
              onError={() => setImageError(true)}
              unoptimized={shouldUnoptimize}
              fetchPriority="auto"
            />
          ) : (
            <div className="placeholder-image-modern" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(156, 163, 175, 1)', fontSize: '0.875rem' }}>
              Kein Bild
            </div>
          )}
        </div>
        <div className="portfolio-info-modern" style={{ textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
            {name}
          </h3>
          <p style={{ color: 'rgba(156, 163, 175, 1)', fontSize: '1rem', margin: 0 }}>
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [countProjects, setCountProjects] = useState(0);
  const [countClients, setCountClients] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Counter Animation
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Counter für Projekte
            const end = 250;
            const duration = 2000;
            const steps = 60;
            const increment = end / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= end) {
                setCountProjects(end);
                clearInterval(timer);
              } else {
                setCountProjects(Math.floor(current));
              }
            }, duration / steps);

            // Counter für Kunden
            const endClients = 80;
            const incrementClients = endClients / steps;
            let currentClients = 0;
            
            const timerClients = setInterval(() => {
              currentClients += incrementClients;
              if (currentClients >= endClients) {
                setCountClients(endClients);
                clearInterval(timerClients);
              } else {
                setCountClients(Math.floor(currentClients));
              }
            }, duration / steps);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      {/* Hero Section */}
      <section className="page-header">
        <div className="page-header-background">
          <Image
            src="/img/header_uberuns.webp"
            alt="Über uns Header"
            fill
            className="page-header-image"
            style={{ objectFit: 'cover' }}
            quality={85}
            sizes="100vw"
            priority
            fetchPriority="high"
            unoptimized
          />
          <div className="page-header-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Ein Blick hinter die Kamera</h1>
          </motion.div>
        </div>
      </section>

      {/* Zahlen-Fakten Sektion */}
      <section className="about-stats section section-dark">
        <div className="container">
          <div ref={statsRef} className="stats-grid">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="stat-number">6+</div>
              <div className="stat-label">Jahre Erfahrung</div>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="stat-number">{countProjects}+</div>
              <div className="stat-label">Abgeschlossene Projekte</div>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-number">{countClients}+</div>
              <div className="stat-label">Zufriedene Kunden</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Text - Zick-Zack Layout */}
      <section className="about-social section">
        <div className="container">
          <motion.div
            className="social-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="zigzag-item">
              <div className="zigzag-image" style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="/img/TimKamera.jpg"
                  alt="Videoproduktion und Social Media Marketing Darmstadt"
                  fill
                  className="zigzag-img"
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                  fetchPriority="auto"
                />
              </div>
              <div className="zigzag-text">
                <h2>Videoproduktion Darmstadt: Social Media Marketing mit Leidenschaft</h2>
                <p>
                  Momente festhalten. Geschichten erzählen. 
                  Schon früh haben wir erkannt, dass Social Media weit mehr ist als ein Zeitvertreib. Verknüpft mit 
                  unserer Liebe und Begeisterung für die Produktion von Videos, haben wir das Potenzial erkannt 
                  und uns dazu entschieden, den Schwerpunkt hierauf zu legen. Dazu gehört auch die Produktion 
                  von Eventfilmen, die besondere Momente eindrucksvoll festhalten.
                </p>
                <p>
                  Gerade im Eventbereich kommt es darauf an, Emotionen authentisch einzufangen und 
                  Atmosphäre spürbar zu machen. Ob Unternehmensveranstaltungen, Messen oder private 
                  Anlässe. 
                  Wir halten die Highlights professionell fest und verwandeln sie in hochwertige Filme.
                </p>
                <p>
                  Seit Beginn haben wir mehr als 250 abgeschlossene Projekte realisiert und über 80 zufriedene 
                  Kunden aus Industrie, Event und Gastronomie erfolgreich bei Ihrem Vorhaben unterstützt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Weitere Inhalte - Zick-Zack Fortsetzung */}
      <section className="about-additional section">
        <div className="container">
          <motion.div
            className="zigzag-item zigzag-reverse"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="zigzag-text">
              <h2>Ihre Vision, unsere Expertise</h2>
              <p>
                Wir arbeiten alle zusammen, um aus starken Ideen maßgeschneiderte Konzepte und Filme zu 
                entwickeln.
              </p>
              <p>
                Unser Team kombiniert kreative Vision mit technischer Präzision. Wir verstehen, dass jedes 
                Projekt einzigartig ist und erfordert daher eine individuelle Herangehensweise. Von der Konzeption 
                bis zur finalen Auslieferung begleiten wir Sie professionell und mit voller Leidenschaft.
              </p>
              <p>
                Der Name „Heinerfilm" entstand nach einem Filmdreh auf einer sehr langen Autofahrt von Berlin 
                nach Darmstadt, als auf einmal der Satz fiel: „Berlin war schön, aber ich bin stolz ein Heiner zu 
                sein."
              </p>
              <p>
                Und der Rest ist Geschichte…
              </p>
              <Link href="/contact" className="btn btn-secondary">
                Kostenloses Erstgespräch vereinbaren
              </Link>
            </div>
            <div className="zigzag-image" style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
              <Image
                src="/img/Tim_zoom.webp"
                alt="Professionelle Videoproduktion Darmstadt"
                fill
                className="zigzag-img"
                style={{ objectFit: 'cover', borderRadius: '12px' }}
                quality={75}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gemeinsame Stärke - Team Sektion */}
      <section className="section section-dark" style={{ backgroundColor: '#050505' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="zigzag-text" style={{ textAlign: 'center' }}>
              <h2>Gemeinsame Stärke</h2>
              <p>
                Ohne ein starkes Netzwerk wäre Heinerfilm nicht das geworden, was wir heute sind. Ein eingespieltes Team aus langjährigen Partnern und eine vertrauensvolle Zusammenarbeit prägen unsere Arbeit. Gemeinsam schaffen wir das gewisse Etwas, das Ihre Marke unverwechselbar macht.
              </p>
            </div>
          </motion.div>

          <div className="portfolio-grid portfolio-grid-modern" style={{ marginTop: '4rem' }}>
            <TeamMemberCard
              imageSrc="/img/svendrohne.webp"
              alt="Sven Perske"
              name="Sven Perske"
              role="Fotograf"
              delay={0.1}
            />
            <TeamMemberCard
              imageSrc="/img/Himken_idplus.webp"
              alt="Annette Himken"
              name="Annette Himken"
              role="Corporate Design & Grafikdesign"
              delay={0.2}
              objectPosition="center"
            />
            <TeamMemberCard
              imageSrc="/img/pxe-team-stefan.webp"
              alt="Stefan Reinhardt"
              name="Stefan Reinhardt"
              role="strategisches Marketing"
              delay={0.3}
            />
            <TeamMemberCard
              imageSrc="/img/Volker.webp"
              alt="Volker Pleil"
              name="Volker Pleil"
              role="Videograf"
              delay={0.4}
              objectPosition="left center"
            />
            <TeamMemberCard
              imageSrc="/img/DamianDomin.webp"
              alt="Damian Domin"
              name="Damian Domin"
              role="FPV-Drohne + Videograf"
              delay={0.5}
            />
            <TeamMemberCard
              imageSrc="/img/maik.webp"
              alt="Maik Schmidt"
              name="Maik Schmidt"
              role="Webdesign"
              delay={0.6}
            />
          </div>
        </div>
      </section>
    </>
  );
}
