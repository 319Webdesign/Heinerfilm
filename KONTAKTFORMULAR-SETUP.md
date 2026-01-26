# 📧 Kontaktformular Setup-Anleitung

## Übersicht

Das Kontaktformular ist jetzt vollständig implementiert und sendet E-Mails über SMTP. Diese Anleitung erklärt, wie Sie es konfigurieren.

## ✅ Was wurde implementiert?

### 1. **API-Route** (`/src/app/api/contact/route.ts`)
- Validierung aller Eingaben
- E-Mail-Versand über Nodemailer
- **Zwei E-Mails werden gesendet:**
  - Eine an Sie (Heinerfilm) mit den Kontaktdaten
  - Eine Bestätigungs-E-Mail an den Absender

### 2. **Kontaktformular** (`/src/components/ContactForm.tsx`)
- Vollständige Validierung
- Erfolgs- und Fehler-Feedback
- Disabled-Status während des Sendens
- Link zur Datenschutzerklärung korrigiert

### 3. **Umgebungsvariablen** (`.env.example`)
- Vorlage für alle benötigten Konfigurationen
- Beispiele für verschiedene E-Mail-Anbieter

---

## 🚀 Einrichtung in 3 Schritten

### Schritt 1: Umgebungsvariablen erstellen

1. **Kopieren Sie `.env.example` zu `.env.local`:**
   ```bash
   cp .env.example .env.local
   ```

2. **Öffnen Sie `.env.local` und füllen Sie Ihre SMTP-Daten aus:**

   ```env
   SMTP_HOST=smtp.ihre-domain.de
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=ihre-email@ihre-domain.de
   SMTP_PASSWORD=IhrPasswort
   SMTP_FROM_EMAIL=noreply@heinerfilm.de
   CONTACT_EMAIL=info@heinerfilm.de
   ```

### Schritt 2: SMTP-Zugangsdaten erhalten

Abhängig von Ihrem E-Mail-Anbieter:

#### 📧 **Gmail**
1. Gehen Sie zu [Google App-Passwörter](https://myaccount.google.com/apppasswords)
2. Erstellen Sie ein neues App-Passwort für "Mail"
3. Verwenden Sie dieses Passwort in der `.env.local`

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ihre-email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
```

#### 📧 **IONOS (1&1)**
1. Loggen Sie sich in Ihr IONOS-Konto ein
2. Gehen Sie zu E-Mail → E-Mail-Adressen
3. Verwenden Sie Ihre E-Mail-Adresse und das Passwort

```env
SMTP_HOST=smtp.ionos.de
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ihre-email@ihre-domain.de
SMTP_PASSWORD=IhrPasswort
```

#### 📧 **Strato**
```env
SMTP_HOST=smtp.strato.de
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=ihre-email@ihre-domain.de
SMTP_PASSWORD=IhrPasswort
```

#### 📧 **All-Inkl**
```env
SMTP_HOST=ihre-domain.de
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=ihre-email@ihre-domain.de
SMTP_PASSWORD=IhrPasswort
```

### Schritt 3: Development Server neu starten

Nach dem Erstellen der `.env.local`:

```bash
npm run dev
```

---

## 🧪 Testen

1. Öffnen Sie http://localhost:3000/contact
2. Füllen Sie das Formular aus
3. Klicken Sie auf "Nachricht senden"
4. Sie sollten:
   - Eine Erfolgsmeldung sehen
   - Eine E-Mail an `CONTACT_EMAIL` erhalten
   - Der Absender erhält eine Bestätigungs-E-Mail

---

## 🔒 Sicherheit

### Wichtig:

✅ **`.env.local` ist bereits in `.gitignore`** und wird NICHT ins Repository hochgeladen

✅ **Niemals `.env.local` committen** oder pushen

✅ **Für Production**: Setzen Sie die Umgebungsvariablen auf Ihrem Server/Hosting-Anbieter

---

## 🌐 Production Deployment

### Vercel
1. Gehen Sie zu Ihrem Projekt auf [vercel.com](https://vercel.com)
2. Settings → Environment Variables
3. Fügen Sie alle Variablen aus `.env.local` hinzu

### Netlify
1. Site Settings → Build & Deploy → Environment
2. Fügen Sie alle Variablen hinzu

### Anderes Hosting
- Fügen Sie die Umgebungsvariablen über das Hosting-Panel hinzu
- Oder erstellen Sie `.env.production` auf dem Server

---

## 📨 E-Mail-Format

### E-Mail an Sie (Heinerfilm):
```
Betreff: Neue Kontaktanfrage: [Betreff]

Von: [Name]
E-Mail: [E-Mail]
Telefon: [Telefon] (optional)
Betreff: [Betreff]

Nachricht:
[Nachricht]
```

### Bestätigungs-E-Mail an Absender:
```
Betreff: Ihre Nachricht an Heinerfilm - Bestätigung

Vielen Dank für Ihre Nachricht!
Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.

[Zusammenfassung der Nachricht]

Kontakt:
📧 info@heinerfilm.de
📞 0176 56792783
```

---

## 🔧 Troubleshooting

### Problem: E-Mails werden nicht gesendet

**Lösung 1: SMTP-Daten überprüfen**
```bash
# Im Development-Modus die Console/Terminal prüfen
# Fehler werden dort angezeigt
```

**Lösung 2: Port überprüfen**
- Port 587 = TLS (SMTP_SECURE=false)
- Port 465 = SSL (SMTP_SECURE=true)
- Port 25 = Unverschlüsselt (nicht empfohlen)

**Lösung 3: Firewall-Einstellungen**
- Stellen Sie sicher, dass ausgehende SMTP-Verbindungen erlaubt sind

### Problem: "Authentication failed" / "535 5.7.8 Authentication failed"

**Dieser Fehler bedeutet, dass die SMTP-Anmeldedaten falsch sind.**

**Häufige Ursachen und Lösungen:**

1. **Falsches Passwort**
   - Überprüfen Sie, ob das Passwort korrekt ist
   - Achten Sie auf Groß-/Kleinschreibung
   - Prüfen Sie, ob Leerzeichen am Anfang/Ende vorhanden sind

2. **Gmail: App-Passwort erforderlich**
   - Bei Gmail funktioniert das normale Passwort NICHT
   - Sie müssen ein App-Passwort erstellen:
     1. Gehen Sie zu [Google Account → Sicherheit](https://myaccount.google.com/security)
     2. Aktivieren Sie die 2-Faktor-Authentifizierung (falls noch nicht aktiviert)
     3. Gehen Sie zu [App-Passwörter](https://myaccount.google.com/apppasswords)
     4. Erstellen Sie ein neues App-Passwort für "Mail"
     5. Verwenden Sie dieses 16-stellige Passwort (ohne Leerzeichen) in `SMTP_PASSWORD`

3. **IONOS/1&1: Spezielle Anforderungen**
   - Verwenden Sie die vollständige E-Mail-Adresse als `SMTP_USER`
   - Stellen Sie sicher, dass SMTP-Versand in Ihrem IONOS-Konto aktiviert ist
   - Manche IONOS-Pakete benötigen eine separate SMTP-Aktivierung

4. **Falscher Benutzername**
   - Bei manchen Anbietern: Verwenden Sie nur den Benutzernamen (ohne @domain.de)
   - Bei anderen: Verwenden Sie die vollständige E-Mail-Adresse
   - Prüfen Sie die Dokumentation Ihres E-Mail-Anbieters

5. **Vercel/Production: Umgebungsvariablen überprüfen**
   - Gehen Sie zu Vercel → Projekt → Settings → Environment Variables
   - Stellen Sie sicher, dass alle Variablen korrekt gesetzt sind
   - Achten Sie darauf, dass keine Leerzeichen oder Anführungszeichen enthalten sind
   - Nach dem Setzen: Neues Deployment auslösen

**Test-Checkliste:**
- [ ] `SMTP_USER` ist korrekt (vollständige E-Mail oder nur Benutzername je nach Anbieter)
- [ ] `SMTP_PASSWORD` ist korrekt (bei Gmail: App-Passwort!)
- [ ] `SMTP_HOST` entspricht Ihrem E-Mail-Anbieter
- [ ] `SMTP_PORT` und `SMTP_SECURE` sind korrekt konfiguriert
- [ ] Bei Vercel: Alle Umgebungsvariablen sind gesetzt und ein neues Deployment wurde erstellt

### Problem: E-Mail landet im Spam

**Lösung:**
- Verwenden Sie eine echte E-Mail-Adresse als `SMTP_FROM_EMAIL`
- Verwenden Sie die gleiche Domain wie Ihre Website
- Richten Sie SPF und DKIM für Ihre Domain ein

---

## 📞 Support

Bei Problemen:
1. Prüfen Sie die Browser-Console (F12) auf Fehler
2. Prüfen Sie das Terminal/die Console auf Server-Fehler
3. Testen Sie die SMTP-Verbindung separat

---

## 🎉 Fertig!

Das Kontaktformular ist jetzt vollständig funktionsfähig und bereit für den Einsatz!

**Nächste Schritte:**
1. `.env.local` erstellen und konfigurieren
2. Formular testen
3. Für Production deployen
4. Umgebungsvariablen auf dem Server setzen

Viel Erfolg! 🚀
