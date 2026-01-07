'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <Image
              src="/img/Heinerfilm_Schriftzug_weiss.png"
              alt="Heinerfilm Logo"
              width={200}
              height={67}
              style={{ width: '200px', height: 'auto', objectFit: 'contain', marginBottom: '1rem' }}
              sizes="200px"
              loading="lazy"
            />
            <p>Ihre Medienagentur für professionelle Filmproduktion und visuelle Medienlösungen.</p>
          </div>
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Über uns</Link></li>
              <li><Link href="/services">Leistungen</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Kontakt</h4>
            <ul>
              <li>Email: <a 
                href="mailto:info@heinerfilm.de" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ff0000'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >info@heinerfilm.de</a></li>
              <li>Tel: <a 
                href="tel:+4917656792783" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ff0000'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
              >0176 5679 2783</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social Media</h4>
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
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Heinerfilm. Alle Rechte vorbehalten.</p>
          <ul>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <a 
            href="https://319Webdesign.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
          >
            Designed by 319Webdesign
          </a>
        </div>
      </div>
    </footer>
  );
}
