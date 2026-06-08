# Academy 21 France — Frontend Next.js

Frontend complet pour la plateforme Academy 21 France, branché sur l'API backend ATO Paris.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **CSS pur** (design system custom Academy 21)
- **Barlow Condensed + Barlow** (Google Fonts)

## Pages
| Route | Description |
|-------|-------------|
| `/` | Accueil avec hero, stats, CTA |
| `/formations` | Catalogue formations + achat Stripe/PayPal |
| `/evenements` | Liste des événements |
| `/login` | Connexion |
| `/register` | Inscription |
| `/dashboard` | Espace membre (protégé) |
| `/paiement/succes` | Confirmation paiement |
| `/paiement/echec` | Paiement échoué |

## Installation

```bash
# 1. Cloner / copier le projet
cd academy21

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.local.example .env.local
# Éditer .env.local si besoin

# 4. Lancer en développement
npm run dev
```

Le frontend sera disponible sur [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

```env
NEXT_PUBLIC_API_URL=http://localhost:3001       # URL de votre backend
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000  # URL du frontend (pour redirections paiement)
```

## Auth
- Token stocké dans `localStorage` sous la clé `ato_token`
- Header automatique `Authorization: Bearer TOKEN` sur toutes les routes protégées
- Redirection automatique vers `/login` si non connecté

## Design System
Couleurs principales :
- Rouge : `#D41217`
- Or : `#C8A200` / `#F5C800`
- Bleu : `#1E6FA8`
- Vert : `#7EC82A`
- Fond : `#0a0a0a`

## Build production

```bash
npm run build
npm start
```
