# SecuriPass SG - PRD

## Problem Statement
Masquer le badge "Made with Emergent" de l'application SecuriPass SG.

## Architecture
- Frontend: React (CRA) avec Tailwind CSS
- Backend: FastAPI (Python)
- DB: MongoDB

## What's Been Implemented (Jan 2026)
- Supprimé le script `emergent-main.js` qui injectait le badge
- Ajouté CSS aggressive pour masquer le badge (`display: none !important`, `visibility: hidden`, etc.)
- Ajouté un MutationObserver JS qui supprime activement tout badge injecté dynamiquement
- Modifié l'élément HTML du badge existant avec `display: none !important`

## Files Modified
- `/app/frontend/public/index.html`

## Notes
- Le badge reste visible dans l'environnement de preview Emergent car il est injecté au niveau infrastructure (reverse proxy). Les modifications fonctionneront sur tout autre déploiement.

## Backlog
- P0: Aucun
- P1: Aucun
- P2: Aucun
