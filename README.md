# ⚜️ Québec 1905 – Mon histoire interactive

Une application web progressive (PWA) interactive et bilingue pour apprendre l'histoire du Québec vers 1905 — conçue pour les enfants de 10 ans.

> **An interactive, bilingual Progressive Web App for learning Quebec history around 1905 — designed for 10-year-olds.**

[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue?logo=github)](https://barbirk.github.io/quebec/)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen?logo=googlechrome)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 🌟 Fonctionnalités / Features

### 📚 Leçons interactives / Interactive Lessons
- 6 leçons couvrant les **Dossiers 15, 16 et 17** (ville, campagne, colonisation)
- Fiches d'information visuelles, citations historiques et comparaisons illustrées
- Système de dossiers thématiques avec indicateur de progression

### 🎯 Quiz
- **5 quiz thématiques** incluant QCM et Vrai/Faux
- Système de vies (❤️ × 3) pour ajouter du défi
- Rétroaction immédiate avec explication pour chaque question

### 🎮 Mini-Jeux
- **🔗 Associe!** — Associe les termes à leur définition
- **📅 Frise du temps** — Ordonne 5 événements par glisser-déposer
- **🔤 Mot Mystère** — Déchiffre les mots mélangés

### ⭐ Système de récompenses
- Étoiles XP gagnées après chaque leçon, quiz et jeu
- Badges de niveau progressifs (Débutant → Maître)
- Confettis et animations de célébration

### 🌐 Bilingue / Bilingual
- Interface **Français & English** basculable à tout moment
- Traductions contextuellement correctes (pas littérales)

### 🎨 Design
- Mode sombre 🌙 et mode clair ☀️
- Optimisé tablette/iPad (portrait et paysage)
- Animations micro-interactions et mascotte Castor 🦦

---

## 🚀 Déploiement / Deployment

L'application est déployée sur GitHub Pages :
**👉 https://barbirk.github.io/quebec/**

### Installer comme PWA (iPhone/iPad)
1. Ouvre le lien dans **Safari**
2. Appuie sur le bouton **Partager** ↑
3. Sélectionne **"Sur l'écran d'accueil"**
4. Appuie sur **Ajouter**

### Install as PWA (iPhone/iPad)
1. Open the link in **Safari**
2. Tap the **Share** button ↑
3. Select **"Add to Home Screen"**
4. Tap **Add**

---

## 🗂️ Structure du projet / Project Structure

```
quebec/
├── index.html          # Point d'entrée / Entry point
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (offline support)
├── css/
│   └── styles.css      # Styles principaux / Main styles
├── js/
│   ├── data.js         # Contenu des leçons / Lesson content
│   ├── i18n.js         # Traductions / Translations (FR/EN)
│   ├── games.js        # Logique des jeux / Game logic
│   └── app.js          # Contrôleur principal / Main controller
├── icons/              # Icônes PWA / PWA Icons
└── reference/          # Scans du manuel scolaire (privé)
```

---

## 📖 Contenu pédagogique / Educational Content

Le contenu est basé sur les **Dossiers 15, 16 et 17** du manuel scolaire :

| Dossier | Thème |
|---------|-------|
| 15 | Le territoire du Québec vers 1905 — Population et colonisation |
| 16 | La société urbaine — Vie quotidienne, technologie et classes sociales |
| 17 | La société rurale — Village, agriculture, bûcherons et colons |

---

## 🛠️ Technologies

- **HTML5 + CSS3 + JavaScript** (vanilla, sans framework)
- **Progressive Web App** (manifest + service worker)
- **Google Fonts** : Nunito + Fredoka One
- Déploiement via **GitHub Pages**

---

## 📝 Licence / License

MIT © 2025 barbirk — Voir [LICENSE](./LICENSE)
