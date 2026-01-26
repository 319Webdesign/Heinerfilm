'use client';

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Formular-Element speichern, bevor es null wird
    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Client-seitige Validierung
    if (!data.name || !data.email || !data.subject || !data.message) {
      setErrorMessage('Bitte füllen Sie alle Pflichtfelder aus.');
      setStatus('error');
      return;
    }

    if (!formData.get('privacy')) {
      setErrorMessage('Bitte akzeptieren Sie die Datenschutzerklärung.');
      setStatus('error');
      return;
    }

    try {
      // AbortController mit 60 Sekunden Timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 Sekunden

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId); // Timeout abbrechen wenn Response da ist
      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        form.reset(); // Gespeicherte Form-Referenz verwenden
        
        // Erfolgs-Status nach 5 Sekunden zurücksetzen
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setErrorMessage(result.error || 'Ein Fehler ist aufgetreten.');
        setStatus('error');
      }
    } catch (error: any) {
      console.error('Fehler beim Senden:', error);
      
      // Spezifische Fehlermeldung für Timeout
      if (error.name === 'AbortError') {
        setErrorMessage('Die Anfrage dauert zu lange. Bitte versuchen Sie es erneut. Falls das Problem bestehen bleibt, kontaktieren Sie uns bitte direkt per E-Mail.');
      } else {
        setErrorMessage('Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.');
      }
      
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {status === 'success' && (
        <div style={{
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '1.5rem',
          color: '#22c55e',
        }}>
          <strong>✓ Nachricht erfolgreich gesendet!</strong>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
            Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.
          </p>
        </div>
      )}

      {status === 'error' && errorMessage && (
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '1.5rem',
          color: '#ef4444',
        }}>
          <strong>✕ Fehler:</strong>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
            {errorMessage}
          </p>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          disabled={status === 'submitting'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          disabled={status === 'submitting'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefon</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          disabled={status === 'submitting'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Betreff *</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          required 
          disabled={status === 'submitting'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Nachricht *</label>
        <textarea 
          id="message" 
          name="message" 
          rows={6} 
          required
          disabled={status === 'submitting'}
        ></textarea>
      </div>
      <div className="form-group">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            name="privacy" 
            required 
            disabled={status === 'submitting'}
          />
          <span>
            Ich habe die <a href="/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> gelesen und akzeptiere sie. *
          </span>
        </label>
      </div>
      <button 
        type="submit" 
        className="btn btn-secondary" 
        disabled={status === 'submitting'} 
        style={{ width: '100%' }}
      >
        {status === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
}
