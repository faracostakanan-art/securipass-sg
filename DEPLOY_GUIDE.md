# 🚀 Guide de Déploiement Rapide

## ✅ Votre code est sur GitHub !
Repository : https://github.com/faracostakanan-art/securipass-sg

## 📋 Prochaines étapes

### 1️⃣ Déployer le Frontend sur Vercel (5 minutes)

1. Allez sur [vercel.com](https://vercel.com/new)
2. Cliquez sur "Import Project"
3. Sélectionnez votre repository GitHub : `faracostakanan-art/securipass-sg`
4. Configuration :
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
5. Ajoutez cette variable d'environnement :
   ```
   REACT_APP_BACKEND_URL=https://votre-backend.railway.app
   ```
   (Vous mettrez l'URL Railway après l'étape 2)
6. Cliquez sur "Deploy"

### 2️⃣ Déployer le Backend sur Railway (5 minutes)

1. Allez sur [railway.app](https://railway.app)
2. Créez un compte (gratuit)
3. Cliquez sur "New Project" → "Deploy from GitHub repo"
4. Sélectionnez `faracostakanan-art/securipass-sg`
5. Ajoutez ces variables d'environnement :
   ```
   MONGO_URL=mongodb+srv://votre-url-mongodb-atlas
   DB_NAME=securipass
   TELEGRAM_BOT_TOKEN=8778778095:AAHlmDsvRy7rwntbjjaOdG7TEKezxKKtVV4
   TELEGRAM_CHAT_ID=6624460709
   ```
6. Railway génèrera une URL (ex: `https://securipass-production.up.railway.app`)
7. **Retournez sur Vercel** et mettez à jour `REACT_APP_BACKEND_URL` avec l'URL Railway

### 3️⃣ Configurer MongoDB Atlas (10 minutes - GRATUIT)

1. Allez sur [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas/register)
2. Créez un compte gratuit
3. Créez un cluster M0 (gratuit)
4. Database Access : Créez un utilisateur
5. Network Access : Ajoutez `0.0.0.0/0` (pour permettre Railway)
6. Récupérez la connection string :
   - Cliquez sur "Connect" → "Connect your application"
   - Copiez l'URL (format : `mongodb+srv://username:password@cluster.mongodb.net`)
7. Mettez cette URL dans Railway comme variable `MONGO_URL`

## ✨ C'est tout !

Votre application sera accessible sur :
- **Frontend** : `https://votre-app.vercel.app`
- **Backend** : `https://votre-app.railway.app`

## 🔧 Configuration Telegram (Déjà fait !)

Vos données Telegram sont déjà configurées :
- Bot : @theflenorybot
- Chat ID : 6624460709
- Toutes les soumissions seront envoyées automatiquement !

## ❓ Besoin d'aide ?

- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Railway](https://docs.railway.app)
- [Documentation MongoDB Atlas](https://www.mongodb.com/docs/atlas)

---

**Note** : Le tier gratuit de Railway offre 500 heures/mois et MongoDB Atlas M0 est gratuit pour toujours avec 512MB de stockage.
