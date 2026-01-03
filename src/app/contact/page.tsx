'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="page-header-background">
          <Image
            src="/img/bannerevent.png"
            alt="Event Banner"
            fill
            className="page-header-image"
            style={{ objectFit: 'cover' }}
            priority
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
                        0176 5679 2783
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
                      <MapPin style={{ width: '1.5rem', height: '1.5rem', color: '#ef4444' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>Adresse</h3>
                    <p style={{ color: 'rgba(156, 163, 175, 1)', margin: 0, lineHeight: '1.6' }}>
                      Heinerfilm<br />
                      Straße, Hausnummer<br />
                      PLZ Ort
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="contact-card-modern"
                >
                  <div className="contact-card-glow"></div>
                  <div style={{ position: 'relative', zIndex: 10 }}>
                    <div className="contact-icon">
                      <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#ef4444' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>Geschäftszeiten</h3>
                    <p style={{ color: 'rgba(156, 163, 175, 1)', margin: 0, lineHeight: '1.6' }}>
                      Montag - Freitag: 9:00 - 18:00 Uhr<br />
                      Samstag - Sonntag: Geschlossen
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="social-media-contact-modern"
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1.5rem' }}>Folgen Sie uns</h3>
                <div className="social-links-modern">
                  <a href="#" aria-label="Facebook" className="social-link-modern">
                    <Facebook style={{ width: '1.5rem', height: '1.5rem' }} />
                  </a>
                  <a href="#" aria-label="Instagram" className="social-link-modern">
                    <Instagram style={{ width: '1.5rem', height: '1.5rem' }} />
                  </a>
                  <a href="#" aria-label="YouTube" className="social-link-modern">
                    <Youtube style={{ width: '1.5rem', height: '1.5rem' }} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="social-link-modern">
                    <Linkedin style={{ width: '1.5rem', height: '1.5rem' }} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="contact-form-wrapper"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
