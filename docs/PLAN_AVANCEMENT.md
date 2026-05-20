# Plan d'avancement (mode optimise tokens)

## Objectif

Obtenir un rendu final tres proche de la maquette Figma avec un minimum d'echanges longs en conversation.

## Cadence de travail

1. Lister les ecrans a traiter (Home, A propos, Produits, Logistique, Contact).
2. Traiter un ecran a la fois avec une definition de termine claire.
3. Valider en 2 passes:
- Pass 1: structure et composants
- Pass 2: finesse visuelle (typo, espacements, couleurs, rayons, ombres)

## Definition de termine (DoD) par ecran

- Structure identique a la maquette.
- Couleurs conformes aux tokens de marque.
- Typographie harmonisee (tailles et poids coherents).
- Responsive desktop/tablette/mobile.
- Lint et build sans erreur.

## Backlog priorise

1. Systeme de tokens visuels (typographie/couleurs/espacements).
2. Harmonisation navigation et footer.
3. Ajustements pixel-perfect page par page.
4. Verification accessibilite (contrastes, focus, hierarchie Hn).
5. Verification performance (images, bundle, lazy loading).

## Methode de validation rapide

- Capture avant/apres
- Check-list: typo, couleurs, alignements, hauteurs de section, boutons
- Commandes: npm run lint && npm run build
