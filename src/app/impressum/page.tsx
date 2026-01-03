'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUp, Mail, Phone, MapPin, Building2, Hash } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Impressum() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // Offset für Navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="impressum-page" style={{ 
      minHeight: '100vh', 
      backgroundColor: '#050505',
      paddingTop: '100px',
      paddingBottom: '4rem'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Zurück-Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <Link 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <ArrowLeft size={18} />
            Zurück zur Startseite
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '4rem' }}
        >
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            fontFamily: 'var(--font-inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
          }}>
            Impressum
          </h1>
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            marginBottom: '3rem',
          }} />
        </motion.section>

        {/* Inhaltsverzeichnis */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2rem',
            marginBottom: '4rem',
          }}
        >
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-inter)',
          }}>
            Inhaltsverzeichnis
          </h2>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            {[
              { id: 'angaben', label: 'Angaben gemäß § 5 TMG' },
              { id: 'kontakt', label: 'Kontakt' },
              { id: 'haftungsausschluss', label: 'Haftungsausschluss' },
              { id: 'urheberrecht', label: 'Urheberrecht' },
              { id: 'datenschutz', label: 'Datenschutz' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 0',
                  borderLeft: '2px solid transparent',
                  paddingLeft: '1rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ef4444';
                  e.currentTarget.style.borderLeftColor = '#ef4444';
                  e.currentTarget.style.paddingLeft = '1.25rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.borderLeftColor = 'transparent';
                  e.currentTarget.style.paddingLeft = '1rem';
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.section>

        {/* Angaben gemäß § 5 TMG */}
        <motion.section
          id="angaben"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-inter)',
          }}>
            Angaben gemäß § 5 TMG
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Heinerfilm Medienagentur</strong>
            </p>
            <p style={{ marginBottom: '1rem' }}>
            Numrichstraße 10 <br />
              64319 Pfungstadt
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Vertreten durch:</strong><br />
              Tim Pfeifer
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Registergericht:</strong> Amtsgericht Darmstadt<br />
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Registernummer:</strong> HRB 12345
            </p>
            <p>
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Umsatzsteuer-ID:</strong><br />
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE00785633456
            </p>
          </div>
        </motion.section>

        {/* Kontakt */}
        <motion.section
          id="kontakt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '2rem',
            fontFamily: 'var(--font-inter)',
          }}>
            Kontakt
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1.5rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '0.5rem',
                flexShrink: 0,
              }}>
                <Mail size={18} color="#ef4444" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '0.25rem',
                  fontFamily: 'var(--font-inter)',
                }}>
                  E-Mail
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontFamily: 'var(--font-inter)',
                }}>
                  info@heinerfilm.de
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '0.5rem',
                flexShrink: 0,
              }}>
                <Phone size={18} color="#ef4444" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '0.25rem',
                  fontFamily: 'var(--font-inter)',
                }}>
                  Telefon
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontFamily: 'var(--font-inter)',
                }}>
                  0176 5679 2783
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1.25rem',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
            }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderRadius: '0.5rem',
                flexShrink: 0,
              }}>
                <MapPin size={18} color="#ef4444" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '0.25rem',
                  fontFamily: 'var(--font-inter)',
                }}>
                  Adresse
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#ffffff',
                  fontFamily: 'var(--font-inter)',
                  lineHeight: '1.6',
                }}>
                  Numrichstraße 10 <br />
                  64319 Pfungstadt
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Haftungsausschluss */}
        <motion.section
          id="haftungsausschluss"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-inter)',
          }}>
            Haftungsausschluss
          </h2>
          
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.95)',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-inter)',
            }}>
              Haftung für Inhalte
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen 
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer 
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese 
              Inhalte umgehend entfernen.
            </p>

            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.95)',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-inter)',
            }}>
              Haftung für Links
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum 
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend 
              entfernen.
            </p>

            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.95)',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontFamily: 'var(--font-inter)',
            }}>
              Urheberrecht
            </h3>
            <p style={{ marginBottom: '1rem' }}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen 
              des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und 
              Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine 
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von 
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </motion.section>

        {/* Urheberrecht */}
        <motion.section
          id="urheberrecht"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-inter)',
          }}>
            Urheberrecht
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheberrecht. Jede vom deutschen 
              Urheberrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder 
              jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, 
              Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen.
            </p>
            <p>
              Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe 
              einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien 
              und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
            </p>
          </div>
        </motion.section>

        {/* Datenschutz */}
        <motion.section
          id="datenschutz"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-inter)',
          }}>
            Datenschutz
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren 
              Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt 
              dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht 
              an Dritte weitergegeben.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) 
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht 
              möglich.
            </p>
            <p>
              Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten wie 
              Postanschriften, Telefon- und Faxnummern sowie E-Mail-Adressen durch Dritte zur Übersendung von nicht 
              ausdrücklich angeforderter Werbung und Informationsmaterialien ist hiermit ausdrücklich untersagt. Die Betreiber 
              der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von 
              Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
          </div>
        </motion.section>

        {/* Nach oben Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0.5rem',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-inter)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
            }}
          >
            Nach oben
            <ArrowUp size={16} />
          </button>
        </motion.div>
      </div>
    </main>
  );
}

