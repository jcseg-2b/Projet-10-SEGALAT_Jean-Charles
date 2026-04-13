# Projet 10 - ArgentBank

Application bancaire fullstack développée dans le cadre du parcours Développeur d'application JavaScript React chez OpenClassrooms.

L'objectif est d'intégrer une API REST existante dans une application React, de gérer l'authentification via JWT et de définir les endpoints manquants via une documentation Swagger.

---

## Stack technique

### Frontend
- React 19 + Vite
- React Router DOM v7
- Redux Toolkit + React Redux
- Axios

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Bcrypt
- Swagger UI Express

---

## Structure du projet

```
Projet10/
├── argentbank-frontend/       # Application React (Vite)
│   └── src/
│       ├── components/        # Header, Footer, HomeCard, Account, PrivateRoute
│       ├── pages/             # Home, Login, User, Error
│       ├── store/             # Redux store + authSlice
│       └── stylepages/        # CSS global
│
└── ArgentBank-Backend-main/   # API REST Node.js/Express
    └── server/                # Serveur, routes, modèles, scripts
```

---

## Prérequis

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (instance locale ou Atlas)

---

## Installation & lancement

### 1. Backend

```bash
cd ArgentBank-Backend-main
npm install
```

Créer un fichier `.env` à la racine du dossier backend :

```env
PORT=3001
DATABASE_URL=mongodb://localhost:27017/argentbank
SECRET=votre_secret_jwt
```

Peupler la base de données (optionnel) :

```bash
npm run populate-db
```

Démarrer le serveur :

```bash
# Mode développement (avec nodemon)
npm run dev:server

# Mode production
npm run server
```

Le serveur tourne sur `http://localhost:3001`.

### 2. Frontend

```bash
cd argentbank-frontend
npm install
npm run dev
```

L'application tourne sur `http://localhost:5173`.

---

## Fonctionnalités

- **Page d'accueil** — présentation des services ArgentBank
- **Connexion** — authentification via email/mot de passe, récupération du token JWT
- **Profil utilisateur** — page protégée affichant les informations de l'utilisateur connecté, modification du nom d'utilisateur
- **Déconnexion** — suppression du token et réinitialisation du state Redux
- **Route protégée** — redirection automatique vers `/login` si non authentifié
- **Gestion d'état** — token JWT et données utilisateur centralisés dans Redux (authSlice)

---

## Documentation API (Swagger)

La documentation de l'API est accessible une fois le backend démarré :

```
http://localhost:3001/api-docs
```

Elle inclut les endpoints d'authentification existants ainsi que les endpoints de gestion de profil définis dans `swagger.yaml`.

---

## Auteur

Jean-Charles SEGALAT
