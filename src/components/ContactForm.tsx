'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message || !data.privacy) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      setIsSubmitting(false);
      return;
    }

    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    setTimeout(() => {
      alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
      e.currentTarget.reset();
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefon</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Betreff *</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Nachricht *</label>
        <textarea id="message" name="message" rows={6} required></textarea>
      </div>
      <div className="form-group">
        <label className="checkbox-label">
          <input type="checkbox" name="privacy" required />
          <span>
            Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und akzeptiere sie. *
          </span>
        </label>
      </div>
      <button type="submit" className="btn btn-secondary" disabled={isSubmitting} style={{ width: '100%' }}>
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
}
