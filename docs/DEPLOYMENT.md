# Deployment Anleitung für IONOS

## Vorbereitung

1. Stelle sicher, dass alle Änderungen gespeichert und committed sind
2. Prüfe, ob das neue Video in `/public/video/` liegt
3. Teste die Seite lokal mit:
   ```bash
   npm run build
   npm run start
   ```

## Build erstellen

1. Öffne ein Terminal im Projektordner
2. Führe folgende Befehle aus:
   ```bash
   # Dependencies installieren
   npm install

   # Production Build erstellen
   npm run build
   ```
3. Der Build wird in `.next` erstellt

## Deployment auf IONOS

### Option 1: Über IONOS Deploy Now (empfohlen)

1. Logge dich in IONOS ein
2. Gehe zu "Deploy Now"
3. Wähle "Neues Projekt"
4. Verbinde dein GitHub Repository
5. Wähle den "main" Branch
6. Framework Einstellungen:
   - Framework: Next.js
   - Node Version: 18.x
   - Build Command: `npm run build`
   - Output Dir: `.next`

### Option 2: Manuelles FTP Upload

1. Verbinde dich via FTP mit deinem IONOS Webspace
2. Lade folgende Ordner/Dateien hoch:
   - `.next/` (der komplette Build)
   - `public/` (alle statischen Assets)
   - `package.json`
   - `package-lock.json`
   - `next.config.js`

3. Führe auf dem Server aus:
   ```bash
   npm install --production
   npm run start
   ```

## Domain Einrichtung

1. In IONOS Control Panel:
   - Gehe zu "Domains & SSL"
   - Wähle deine Domain
   - Setze die DNS Einträge:
     ```
     A     @     [Server-IP]
     CNAME www   @
     ```

## SSL Zertifikat

1. In IONOS Control Panel:
   - Gehe zu "SSL Zertifikate"
   - Wähle "Neues Zertifikat"
   - Folge dem Assistenten

## Nach dem Deployment

1. Teste die Website auf:
   - Mobile & Desktop
   - Verschiedene Browser
   - Alle wichtigen Funktionen
   - Ladezeiten
   - SSL (https)

2. Prüfe:
   - Video Playback
   - Kontaktformular
   - Social Media Einbindungen
   - Bilder & Assets

## Troubleshooting

### Falls die Seite nicht lädt:
1. Prüfe die Node.js Version
2. Prüfe die Logs in IONOS
3. Teste ob alle Dependencies installiert sind
4. Prüfe die next.config.js Einstellungen

### Falls Bilder nicht laden:
1. Prüfe die Image Optimization Settings
2. Stelle sicher dass alle Assets hochgeladen wurden

### Bei Performance Problemen:
1. Aktiviere die Node.js Runtime in next.config.js
2. Prüfe die Server Ressourcen
3. Optimiere große Assets

## Support

Bei Problemen:
- IONOS Support: [Link zum Support]
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: [Link zum Repository] 