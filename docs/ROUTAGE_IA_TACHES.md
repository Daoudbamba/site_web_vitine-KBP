# Routage IA par type de tache

## Pourquoi

Reduire les tokens en envoyant chaque tache a l'agent le plus adapte, puis agreger uniquement le resultat utile.

## Strategie pratique

1. Exploration codebase
- Agent recommande: Explore
- Sortie attendue: liste courte des fichiers a modifier + risques

2. Reproduction visuelle d'un ecran
- Agent principal: Copilot (edition directe)
- Sortie attendue: modifications ciblees des pages/composants

3. Refactor transversal
- Agent recommande: Explore (audit) puis Copilot (edition)
- Sortie attendue: patchs minimaux et coherents

4. Verification qualite
- Outils: lint + build
- Sortie attendue: OK ou liste d'erreurs precise

## Regles d'economie de tokens

- Une seule intention par demande.
- Eviter les prompts multi-objectifs longs.
- Demander des sorties structurees courtes (liste de points actionnables).
- Reutiliser les tokens design deja fixes dans le projet.

## Template de demande (court)

Contexte: page cible et objectif.
Contraintes: reproduire la maquette, ne pas casser le responsive.
Sortie: modifier les fichiers puis lancer lint/build.

## Exemple

"Reproduis la section Hero de la page Produits selon la maquette. Conserve les composants existants si possible. Lance lint/build et donne un resume court des changements."
