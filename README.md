# KBP Distribution - Site vitrine B2B

Site web vitrine professionnel realise avec Next.js pour KBP Distribution.

## Stack technique

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

## Installation

1. Installer les dependances:

```bash
npm install
```

2. Lancer le serveur de developpement:

```bash
npm run dev
```

3. Ouvrir dans le navigateur:

http://localhost:3000

## Scripts

- npm run dev : mode developpement
- npm run build : build production
- npm run start : serveur production
- npm run lint : verification du code

## Structure

- app : pages, layout, routes API, SEO technique
- components : composants UI reutilisables
- lib : donnees metier et configuration contenu
- public/images : assets images

## SEO et performance

- Metadata OpenGraph et robots indexes
- sitemap.xml et robots.txt generes automatiquement
- Images optimisees via next/image
- Police chargee avec next/font

## Accessibilite

- Hierarchie de titres claire
- Labels explicites sur formulaires
- Focus visible et contrastes elevables via variables Tailwind

## Deploiement

### Vercel (recommande)

1. Connecter le repository Git
2. Framework detecte automatiquement (Next.js)
3. Commander le deploy en production

### Netlify

- Build command: npm run build
- Publish directory: .next
- Adapter Netlify Next.js requis

### OVH / VPS

1. npm install
2. npm run build
3. npm run start
4. Mettre en place un reverse proxy Nginx

## Variables futures conseillees

- CONTACT_EMAIL_TO : destinataire des demandes
- SMTP_* : envoi email automatique des formulaires
- NEXT_PUBLIC_SITE_URL : URL canonique
