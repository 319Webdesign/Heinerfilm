'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type CookieConsent = 'accepted' | 'essential' | null;

const COOKIE_CONSENT_KEY = 'heinerfilm-cookie-consent';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydration-safe: Erst nach dem Mount prüfen
    setMounted(true);
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as CookieConsent;
    console.log('Cookie consent check:', consent); // Debug log
    if (!consent) {
      console.log('No consent found, showing banner'); // Debug log
      setShowBanner(true);
    } else {
      console.log('Consent found:', consent); // Debug log
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
    // Hier können zukünftig Tracking-Skripte aktiviert werden
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'essential');
    setShowBanner(false);
  };

  // Nur rendern, wenn gemountet
  if (!mounted) {
    return null;
  }

  // Nur rendern, wenn Banner angezeigt werden soll
  if (!showBanner) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        maxWidth: '28rem',
        width: 'calc(100% - 2rem)',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <h3
            style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
            }}
          >
            Cookie-Einstellungen
          </h3>
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.75)',
              fontFamily: 'var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
            }}
          >
            Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
            Einige sind notwendig, andere helfen uns, diese Website und Ihre Nutzererfahrung zu verbessern.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            onClick={handleAcceptAll}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#ff0000',
              color: '#ffffff',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#cc0000';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ff0000';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Alle akzeptieren
          </button>

          <button
            onClick={handleEssentialOnly}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'transparent',
              color: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
            }}
          >
            Nur notwendige
          </button>
        </div>

        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <a
            href="/datenschutz"
            style={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.6)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              fontFamily: 'var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff0000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
            }}
          >
            Weitere Informationen in unserer Datenschutzerklärung
          </a>
        </div>
      </div>
    </motion.div>
  );
}