# KBP Distribution — Site vitrine B2B

Site web vitrine professionnel pour **KBP Distribution**, distributeur d'arachides et de nougat africain.
Realise avec Next.js 15 (App Router), React 19, TypeScript et Tailwind CSS.

## Stack technique

| Technologie | Role |
|---|---|
| Next.js 15 (App Router) | Framework React full-stack, rendu statique |
| React 19 + TypeScript | UI typee strictement |
| Tailwind CSS 3 | Styles utilitaires, tokens de marque KBP |
| nodemailer | Envoi d'emails via l'API route `/api/devis` |

## Pages

| Route | Description |
|---|---|
| `/` | Accueil — hero, produits en vedette, appel a l'action |
| `/produits` | Catalogue complet des 5 produits |
| `/a-propos` | Presentation de KBP Distribution |
| `/logistique` | Processus de commande et livraison |
| `/contact` | Formulaire de devis + coordonnees |
| `/mentions-legales` | Mentions legales |
| `/cgv` | Conditions generales de vente |
| `/politique-confidentialite` | Politique RGPD |
| `/politique-cookies` | Politique cookies |

## Installation

```bash
# 1. Installer les dependances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env.local
# Remplir .env.local avec vos credentials SMTP

# 3. Lancer le serveur de developpement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Variables d'environnement

Copier `.env.example` en `.env.local` et renseigner :

```env
CONTACT_EMAIL_TO=contact@kbpdistribution.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=votre_utilisateur_smtp
SMTP_PASS=votre_mot_de_passe_smtp
SMTP_FROM="KBP Distribution <no-reply@kbpdistribution.com>"
```

> Sur Vercel, ces variables sont a configurer dans **Project Settings → Environment Variables**.

## Scripts

```bash
npm run dev      # Mode developpement (hot reload)
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Verification du code (ESLint)
```

## Structure du projet

```
app/                    # Pages et routes (App Router)
  api/devis/            # Route API — envoi de devis par email
  a-propos/             # Page Apropos
  produits/             # Catalogue produits
  logistique/           # Logistique & livraison
  contact/              # Formulaire de contact
  cgv/                  # CGV
  mentions-legales/     # Mentions legales
  politique-*/          # Pages RGPD
components/             # Composants UI reutilisables
  header.tsx            # Navigation principale
  footer.tsx            # Pied de page
  logo.tsx              # Composant logo KBP (variantes couleur/blanc)
  product-card.tsx      # Carte produit
  contact-form.tsx      # Formulaire de devis
lib/
  site-data.ts          # Donnees produits et contenu du site
public/images/          # Assets images (logo, photos produits)
.env.example            # Modele de configuration SMTP
```

## SEO et performances

- Metadata OpenGraph complete sur chaque page
- `sitemap.xml` et `robots.txt` generes automatiquement
- Images optimisees via `next/image`
- Headers de securite HTTP (CSP, HSTS, X-Frame-Options, etc.)
- Routes statiques pre-rendues au build

## Pages legales

- /mentions-legales
- /politique-confidentialite
- /politique-cookies
- /cgv

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

## Variables d'environnement

- CONTACT_EMAIL_TO : destinataire des demandes
- SMTP_HOST, SMTP_PORT, SMTP_SECURE
- SMTP_USER, SMTP_PASS, SMTP_FROM
- NEXT_PUBLIC_SITE_URL : URL canonique

Voir [.env.example](.env.example) pour un modele complet.

## Pilotage projet

- Plan d'avancement : [docs/PLAN_AVANCEMENT.md](docs/PLAN_AVANCEMENT.md)
- Routage IA par tache : [docs/ROUTAGE_IA_TACHES.md](docs/ROUTAGE_IA_TACHES.md)
- Convention de commits : [CONVENTION_COMMITS.md](CONVENTION_COMMITS.md)
