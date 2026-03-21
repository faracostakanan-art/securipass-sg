# SecuriPass SG - PRD

## Problème Original
Déploiement de l'application SecuriPass SG sur Vercel (frontend) et Railway (backend) avec MongoDB Atlas.

## Architecture
- **Frontend**: React sur Vercel (`securipass-sg.vercel.app`)
- **Backend**: FastAPI sur Railway (`web-production-b21a3.up.railway.app`)
- **Database**: MongoDB Atlas (cluster gratuit M0)
- **Notifications**: Telegram Bot

## Ce qui a été fait (21 Mars 2026)
1. ✅ Simplifié requirements.txt pour Railway (supprimé packages problématiques)
2. ✅ Configuré MongoDB Atlas Network Access (0.0.0.0/0)
3. ✅ Corrigé REACT_APP_BACKEND_URL sur Vercel (supprimé slash final)
4. ✅ Redéployé sur Vercel

## Configuration requise
### Railway Variables
- MONGO_URL
- DB_NAME
- TELEGRAM_BOT_TOKEN
- TELEGRAM_CHAT_ID

### Vercel Variables
- REACT_APP_BACKEND_URL

## Backlog / Améliorations futures
- P1: Tableau de bord admin pour voir les soumissions
- P2: Authentification admin
- P2: Export des données en CSV
