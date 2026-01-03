'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Datenschutz() {
  return (
    <main className="impressum-page" style={{ 
      minHeight: '100vh', 
      backgroundColor: '#050505',
      paddingTop: '100px',
      paddingBottom: '4rem'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
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
            Datenschutzerklärung
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
              { id: 'verantwortlicher', label: '1. Verantwortlicher' },
              { id: 'allgemeine-hinweise', label: '2. Allgemeine Hinweise' },
              { id: 'rechte', label: '3. Rechte der betroffenen Person' },
              { id: 'erfassung', label: '4. Erfassung allgemeiner Informationen' },
              { id: 'cookies', label: '5. Cookies' },
              { id: 'kontaktformular', label: '6. Kontaktformular' },
              { id: 'ssl-verschluesselung', label: '7. SSL-Verschlüsselung' },
              { id: 'aenderungen', label: '8. Änderungen der Datenschutzerklärung' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
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

        {/* 1. Verantwortlicher */}
        <motion.section
          id="verantwortlicher"
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
            1. Verantwortlicher
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Verantwortlich für die Datenverarbeitung:</strong>
            </p>
            <p style={{ marginBottom: '1rem' }}>
              {/* PLATZHALTER: Firmenname */}
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Heinerfilm Medienagentur</strong><br />
              {/* PLATZHALTER: Adresse */}
              Numrichstraße 10<br />
              64319 Pfungstadt
            </p>
            <p style={{ marginBottom: '1rem' }}>
              {/* PLATZHALTER: Kontakt */}
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Kontakt:</strong><br />
              E-Mail: info@heinerfilm.de<br />
              Telefon: 0176/56792783
            </p>
          </div>
        </motion.section>

        {/* 2. Allgemeine Hinweise */}
        <motion.section
          id="allgemeine-hinweise"
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
            2. Allgemeine Hinweise
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. In dieser Datenschutzerklärung 
              informieren wir Sie über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Website.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
              Hierzu gehören z. B. Name, Adresse, E-Mail-Adressen, Nutzerverhalten.
            </p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt "Verantwortlicher" in dieser Datenschutzerklärung entnehmen.
            </p>
          </div>
        </motion.section>

        {/* 3. Rechte der betroffenen Person */}
        <motion.section
          id="rechte"
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
            3. Rechte der betroffenen Person
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. 
              Außerdem haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung sowie ein 
              Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Sofern Sie eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden. 
              Ihre zuständige Aufsichtsbehörde richtet sich nach dem Bundesstaat Ihres Wohnsitzes, Ihrer Arbeit 
              oder der mutmaßlichen Verletzung.
            </p>
          </div>
        </motion.section>

        {/* 4. Erfassung allgemeiner Informationen */}
        <motion.section
          id="erfassung"
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
            4. Erfassung allgemeiner Informationen
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. 
              Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete 
              Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und Ähnliches.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Sie werden insbesondere zu folgenden Zwecken verarbeitet:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyle: 'disc' }}>
              <li style={{ marginBottom: '0.5rem' }}>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
              <li style={{ marginBottom: '0.5rem' }}>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
              <li style={{ marginBottom: '0.5rem' }}>Auswertung der Systemsicherheit und -stabilität</li>
              <li>zu weiteren administrativen Zwecken</li>
            </ul>
            <p>
              Die Verarbeitung Ihrer personenbezogenen Daten basiert auf unserem berechtigten Interesse aus den 
              vorgenannten Zwecken zur Datenerfassung. Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre 
              Person zu ziehen. Empfänger der Daten sind nur die verantwortliche Stelle und ggf. Auftragsverarbeiter.
            </p>
          </div>
        </motion.section>

        {/* 5. Cookies */}
        <motion.section
          id="cookies"
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
            5. Cookies
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Wie viele andere Websites verwenden wir auch so genannte "Cookies". Bei Cookies handelt es sich um 
              kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, 
              wenn Sie unsere Website besuchen.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Sie können Ihre Einwilligung zur Cookie-Speicherung jederzeit individuell anpassen oder widerrufen. 
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und 
              Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell 
              ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Notwendige Cookies:</strong><br />
              Diese Cookies sind für die Funktion der Website erforderlich und können nicht deaktiviert werden.
            </p>
            <p>
              <strong style={{ color: 'rgba(255, 255, 255, 0.95)' }}>Optionale Cookies:</strong><br />
              Diese Cookies helfen uns, die Website zu verbessern und Ihre Nutzererfahrung zu optimieren. 
              Sie können diese jederzeit aktivieren oder deaktivieren.
            </p>
          </div>
        </motion.section>

        {/* 6. Kontaktformular */}
        <motion.section
          id="kontaktformular"
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
            6. Kontaktformular
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              Sofern Sie per Kontaktformular Anfragen an uns richten, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre 
              Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
              an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
            </p>
          </div>
        </motion.section>

        {/* 7. SSL-Verschlüsselung */}
        <motion.section
          id="ssl-verschluesselung"
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
            7. SSL-Verschlüsselung
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p>
              Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der 
              Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
            </p>
          </div>
        </motion.section>

        {/* 8. Änderungen der Datenschutzerklärung */}
        <motion.section
          id="aenderungen"
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
            8. Änderungen der Datenschutzerklärung
          </h2>
          <div style={{
            fontSize: '1rem',
            lineHeight: '1.75',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'var(--font-inter)',
          }}>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen 
              Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. 
              Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
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
