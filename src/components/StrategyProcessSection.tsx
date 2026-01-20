'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Video, Layers, Share2 } from 'lucide-react';

const processPhases = [
  {
    number: '01',
    icon: Search,
    title: 'Strategische Beratung',
    keywords: 'Zielgruppen-Analyse, Markenidentität',
    description: 'Wir analysieren Ihre Zielgruppe, definieren Ihre Markenidentität und entwickeln eine maßgeschneiderte Strategie, die Ihre Vision in messbare Ergebnisse umsetzt.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Individuelle Konzeption',
    keywords: 'Storyboard & Drehbuch',
    description: 'Maßgeschneiderte Drehbücher, die Ihre Zielgruppe emotional binden. Jedes Konzept wird individuell auf Ihre Marke zugeschnitten und erzählt eine Geschichte, die nicht nur gesehen, sondern auch gefühlt wird.',
  },
  {
    number: '03',
    icon: Video,
    title: 'Effiziente Produktion',
    keywords: 'Videodreh, Zeitmanagement',
    description: 'Professioneller Dreh mit minimalem Zeitaufwand für Ihr Team. Wir arbeiten effizient und präzise, damit Sie sich auf Ihr Kerngeschäft konzentrieren können, während wir die perfekten Aufnahmen für Ihr Projekt erstellen.',
  },
  {
    number: '04',
    icon: Layers,
    title: 'High-End Postproduktion',
    keywords: 'Filmschnitt, Farbkorrektur, Sounddesign und Effekte',
    description: 'Perfektion im Detail für Ergebnisse, die überzeugen. Durch präzisen Filmschnitt, fein abgestimmte Farbkorrektur sowie überzeugendes Sounddesign und Effekte entsteht ein visuelles Erlebnis, das im Gedächtnis bleibt.',
  },
  {
    number: '05',
    icon: Share2,
    title: 'Digitale Begleitung',
    keywords: 'Veröffentlichung, Social Media Content',
    description: 'Nach der erfolgreichen Abnahme eines Projekts unterstützen wir Sie gerne bei der Veröffentlichung. Wir verfolgen das Ziel einer ganzheitlichen Betreuung für Ihren Social Media Content, sodass langfristig professionelle Inhalte veröffentlicht werden können.',
  },
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function StrategyProcessSection() {
  return (
    <section className="strategy-process-section section section-dark" style={{ padding: 'var(--spacing-xl) 0', background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
      <div className="container">
        {/* Header */}
        <div className="strategy-process-header">
          <h2 className="section-title" style={{ color: '#ffffff', marginBottom: '1rem', textAlign: 'center' }}>
            Strategie & Prozess
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
            Von der ersten Idee bis zur erfolgreichen Veröffentlichung
          </p>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '48rem', margin: '1rem auto 0', textAlign: 'center' }}>
            Unser Ablauf für Ihr zukünftiges Projekt
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-steps-container">
          {processPhases.map((phase, index) => {
            const IconComponent = phase.icon;
            const isLast = index === processPhases.length - 1;

            return (
              <motion.div
                key={phase.number}
                className="process-phase-item"
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              >
                <div className="process-phase-content">
                  {/* Phase Number & Icon */}
                  <div className="process-phase-header">
                    <div className="process-phase-number">{phase.number}</div>
                    <div className="process-phase-icon-wrapper">
                      <IconComponent className="process-phase-icon" />
                    </div>
                    {!isLast && <div className="process-phase-connector" />}
                  </div>

                  {/* Phase Content */}
                  <div className="process-phase-body">
                    <div className="process-phase-keywords">{phase.keywords}</div>
                    <h3 className="process-phase-title">{phase.title}</h3>
                    <p className="process-phase-description">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

