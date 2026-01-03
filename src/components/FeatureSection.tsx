'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-content">
          {/* Left Side - Text */}
          <motion.div 
            className="feature-text"
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="feature-overline">TECHNIK TRIFFT EMOTION</div>
            <h2 className="feature-headline">6K. Film. Video.</h2>
            <p className="feature-description">
              Unvergessliches Seherlebnis bis ins kleinste Detail. Wir erwecken Ihre Geschichte mit Brillanz und Klarheit zum Leben, die Ihre Marke unvergesslich macht.
            </p>
            <Link href="/contact" className="btn btn-feature">
              Projekt anfragen
            </Link>
          </motion.div>

          {/* Right Side - Video Grid */}
          <motion.div 
            className="feature-video-grid"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="video-tile video-tile-full">
              <video autoPlay muted loop playsInline>
                <source src="/video/Slideshow.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

