'use client';

import { lazy, Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import { FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa';

const ContactForm = lazy(() => import('@/components/ContactForm'));

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-background">
          <Image
            src="/img/header_contact.webp"
            alt="Kontakt Header"
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
            <h1>Kontakt</h1>
            <p>Lassen Sie uns gemeinsam etwas Außergewöhnliches schaffen</p>
          </motion.div>
        </div>
      </section>

      <section className="contact section section-dark" style={{ backgroundColor: '#050505', marginBottom: 0, paddingBottom: '6rem' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '5rem', textAlign: 'center' }}
          >
            <h2 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
              Kontaktieren Sie uns
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(156, 163, 175, 1)', maxWidth: '48rem', margin: '0 auto' }}>
              Haben Sie Fragen oder ein Projekt im Kopf? Wir freuen uns auf Ihre Nachricht und beraten Sie gerne unverbindlich.
            </p>
          </motion.div>

          <div className="contact-wrapper">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="contact-info-modern"
            >
              <div className="contact-details-grid">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="contact-card-modern"
                >
                  <div className="contact-card-glow"></div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="contact-icon">
                      <Mail style={{ width: '1.5rem', height: '1.5rem', color: '#ef4444' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>Email</h3>
                    <p style={{ color: 'rgba(156, 163, 175, 1)', margin: 0 }}>
                      <a href="mailto:info@heinerfilm.de" style={{ color: 'rgba(156, 163, 175, 1)', textDecoration: 'none' }}>
                        info@heinerfilm.de
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="contact-card-modern"
                >
                  <div className="contact-card-glow"></div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="contact-icon">
                      <Phone style={{ width: '1.5rem', height: '1.5rem', color: '#ef4444' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>Telefon</h3>
                    <p style={{ color: 'rgba(156, 163, 175, 1)', margin: 0 }}>
                      <a href="tel:+4917656792783" style={{ color: 'rgba(156, 163, 175, 1)', textDecoration: 'none' }}>
                        0176 56792783
                      </a>
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="contact-card-modern"
                >
                  <div className="contact-card-glow"></div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="contact-icon">
                      <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#ef4444' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>Geschäftszeiten</h3>
                    <p style={{ color: 'rgba(156, 163, 175, 1)', margin: 0, lineHeight: '1.8', paddingBottom: '0.25rem' }}>
                      Montag - Freitag: <span style={{ whiteSpace: 'nowrap' }}>10 - 19 Uhr</span><br />
                      Samstag - Sonntag: Geschlossen
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="social-media-contact-modern"
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1.5rem' }}>Folgen Sie uns</h3>
                <ul className="social-links">
                  <li>
                    <a href="https://www.youtube.com/@Heinerfilm" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/heinerfilm.de/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@heinerfilm" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon">
                      <FaTiktok />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/tim-pfeifer-b8a858203/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="contact-form-wrapper"
            >
              <Suspense fallback={<div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>Lade Formular...</div>}>
                <ContactForm />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
