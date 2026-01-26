import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validierung
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Überprüfung der SMTP-Umgebungsvariablen
    const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM_EMAIL'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('Fehlende Umgebungsvariablen:', missingVars);
      return NextResponse.json(
        { 
          error: 'E-Mail-Konfiguration fehlt. Bitte kontaktieren Sie den Administrator.',
          details: 'SMTP-Konfiguration ist nicht vollständig.'
        },
        { status: 500 }
      );
    }

    // Nodemailer Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true für Port 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Timeout-Einstellungen für schnellere Antwort
      connectionTimeout: 5000, // 5 Sekunden
      greetingTimeout: 5000,
      socketTimeout: 10000,
    });

    // E-Mail an Sie (Heinerfilm)
    const mailOptionsToYou = {
      from: `"${name}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.CONTACT_EMAIL || 'info@heinerfilm.de',
      replyTo: email,
      subject: `Neue Kontaktanfrage: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef4444;">Neue Kontaktanfrage über heinerfilm.de</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Von:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            <p><strong>Betreff:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3>Nachricht:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            Diese Nachricht wurde über das Kontaktformular auf heinerfilm.de gesendet.
          </p>
        </div>
      `,
    };

    // Bestätigungs-E-Mail an den Absender
    const mailOptionsToSender = {
      from: `"Heinerfilm" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: 'Ihre Nachricht an Heinerfilm - Bestätigung',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef4444;">Vielen Dank für Ihre Nachricht!</h2>
          <p>Hallo ${name},</p>
          <p>wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Ihre Nachricht:</h3>
            <p><strong>Betreff:</strong> ${subject}</p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>Bei Rückfragen erreichen Sie uns unter:</p>
          <ul style="list-style: none; padding: 0;">
            <li>📧 <a href="mailto:info@heinerfilm.de">info@heinerfilm.de</a></li>
            <li>📞 <a href="tel:+4917656792783">0176 56792783</a></li>
          </ul>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #666; font-size: 12px;">
            Mit freundlichen Grüßen<br>
            Ihr Heinerfilm Team<br>
            <a href="https://www.heinerfilm.de">www.heinerfilm.de</a>
          </p>
        </div>
      `,
    };

    // Haupt-E-Mail an Heinerfilm versenden
    try {
      await transporter.sendMail(mailOptionsToYou);
      console.log('✓ Haupt-E-Mail erfolgreich gesendet');
    } catch (sendError: any) {
      console.error('Fehler beim Senden der E-Mail an Heinerfilm:', sendError);
      
      // Spezifische Fehlerbehandlung für Authentifizierungsfehler
      if (sendError?.code === 'EAUTH' || sendError?.responseCode === 535) {
        throw new Error('SMTP-Authentifizierung fehlgeschlagen. Bitte überprüfen Sie die SMTP-Anmeldedaten.');
      }
      
      throw new Error(`Fehler beim Senden der E-Mail: ${sendError instanceof Error ? sendError.message : 'Unbekannter Fehler'}`);
    }

    // Bestätigungs-E-Mail im Hintergrund versenden (blockiert nicht die Response)
    // Fehler werden geloggt, aber brechen den Prozess nicht ab
    transporter.sendMail(mailOptionsToSender)
      .then(() => console.log('✓ Bestätigungs-E-Mail erfolgreich gesendet'))
      .catch((error) => console.error('⚠ Fehler beim Senden der Bestätigungs-E-Mail:', error));

    return NextResponse.json(
      { success: true, message: 'Nachricht erfolgreich gesendet!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fehler beim Senden der E-Mail:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler';
    console.error('Fehlerdetails:', {
      message: errorMessage,
      code: error?.code,
      responseCode: error?.responseCode,
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    // Spezifische Fehlermeldung für Authentifizierungsfehler
    if (error?.code === 'EAUTH' || error?.responseCode === 535 || errorMessage.includes('Authentication failed')) {
      return NextResponse.json(
        { 
          error: 'E-Mail-Authentifizierung fehlgeschlagen. Bitte überprüfen Sie die SMTP-Konfiguration.',
          details: process.env.NODE_ENV === 'development' 
            ? 'SMTP-Benutzername oder Passwort sind falsch. Bei Gmail benötigen Sie ein App-Passwort.'
            : undefined
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Es ist ein Fehler beim Senden der Nachricht aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}
