'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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
      <section className="about-hero">
        <div className="about-hero-background">
          <Image
            src="/img/ueberuns.jpg"
            alt="Heinerfilm Team"
            fill
            className="about-hero-image"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">Ihre Vision ist unsere Leidenschaft</h1>
            <p className="about-hero-subtitle">
              Professionelle Videoproduktion Darmstadt – Authentisches Storytelling für Ihre Marke
            </p>
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
              <div className="zigzag-image">
                <Image
                  src="/img/TimKamera.jpg"
                  alt="Videoproduktion und Social Media Marketing Darmstadt"
                  width={600}
                  height={400}
                  className="zigzag-img"
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
              <div className="zigzag-text">
                <h2>Videoproduktion Darmstadt: Social Media Marketing mit Leidenschaft</h2>
                <p>
                  Schon sehr früh haben wir erkannt, dass Social Media nicht nur ein Zeitvertreib für zwischendurch ist. 
                  Verknüpft mit unserer Liebe und Begeisterung für die Produktion von Videos, haben wir das Potenzial erkannt 
                  und uns dazu entschieden, den Schwerpunkt hierauf zu legen.
                </p>
                <p>
                  Als Videoproduktion Darmstadt verstehen wir die Kraft von visuellen Inhalten auf Social Media Plattformen. 
                  Unsere Videos sprechen lauter als Worte und erreichen Ihre Zielgruppe dort, wo sie sich täglich aufhält.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story-Box für Namensentstehung */}
      <section className="about-story-box section section-dark">
        <div className="container">
          <motion.div
            className="story-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Die Geschichte hinter Heinerfilm</h2>
            <p className="story-box-text">
              Der Name „Heinerfilm" entstand nach einem Filmdreh auf einer sehr langen Autofahrt von Berlin nach Darmstadt, 
              als auf einmal der Satz fiel: „Berlin war schön aber ich bin Stolz ein Heiner zu sein." Und der Rest ist Geschichte...
            </p>
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
                Seit Beginn haben wir mehr als 250 abgeschlossene Projekte realisiert und über 80 zufriedene Kunden 
                erfolgreich bei ihrer Videoproduktion in Darmstadt und Umgebung unterstützt.
              </p>
              <p>
                Unser Team kombiniert kreative Vision mit technischer Präzision. Wir verstehen, dass jedes Projekt 
                einzigartig ist und erfordert eine individuelle Herangehensweise. Von der Konzeption bis zur finalen 
                Auslieferung begleiten wir Sie professionell und mit voller Leidenschaft.
              </p>
              <Link href="/contact" className="btn btn-secondary">
                Kostenloses Erstgespräch vereinbaren
              </Link>
            </div>
            <div className="zigzag-image">
              <Image
                src="/img/DSC06760.jpg"
                alt="Professionelle Videoproduktion Darmstadt"
                width={600}
                height={400}
                className="zigzag-img"
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
