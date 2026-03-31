# Québec 1905 – Agent Guide

> Guide pour les agents de codage travaillant sur ce projet / Guide for coding agents working on this project.
> Langue principale : Français (le contenu pédagogique est bilingue FR/EN).

---

## 🏛️ Aperçu du projet

**Québec 1905 – Mon histoire interactive** est une application web progressive (PWA) éducative et bilingue conçue pour les enfants de 10 ans. Elle enseigne l'histoire du Québec vers 1905 à travers des leçons interactives, des quiz et des mini-jeux.

Le contenu est basé sur les **Dossiers 15, 16 et 17** d'un manuel scolaire (scans dans `reference/`, non versionnés).

- **Déploiement** : https://barbirk.github.io/quebec/
- **Licence** : MIT

---

## 🛠️ Stack technique

| Aspect | Technologie |
|--------|-------------|
| Frontend | HTML5, CSS3, JavaScript vanilla (pas de framework) |
| Styles | CSS personnalisé avec variables pour les thèmes |
| Fonts | Google Fonts (Nunito, Fredoka One) |
| PWA | Manifest + Service Worker pour le mode offline |
| Stockage | localStorage pour la progression et les préférences |
| Déploiement | GitHub Pages via GitHub Actions |

---

## 📁 Structure du projet

```
quebec/
├── index.html              # Point d'entrée unique (SPA)
├── manifest.json           # Manifest PWA
├── sw.js                   # Service Worker (cache offline)
├── css/
│   └── styles.css          # Feuille de styles unique (~600 lignes)
├── js/
│   ├── data.js             # Données : leçons, quiz, glossaire, niveaux XP
│   ├── i18n.js             # Système de traduction FR/EN
│   ├── games.js            # Logique des 3 mini-jeux
│   └── app.js              # Contrôleur principal de l'application
├── icons/                  # Icônes PWA (192px, 512px, apple-touch)
├── reference/              # Scans du manuel (privé, gitignored)
└── .github/workflows/      # CI/CD GitHub Pages
```

---

## 🏗️ Architecture

### Pattern de module (IIFE)

Le JavaScript utilise le pattern Module avec des IIFE (Immediately Invoked Function Expressions) :

```javascript
const APP = (() => {
  // État privé
  const state = { /* ... */ };
  
  // Fonctions privées
  function init() { /* ... */ }
  
  // API publique
  return { init, navigate: navigateTo, showResults, awardXP, launchConfetti };
})();
```

Les modules globaux exposés sont :
- `APP` – Contrôleur principal (app.js)
- `APP_DATA` – Données statiques (data.js)
- `I18N` – Traductions (i18n.js)
- `GAMES` – Logique des jeux (games.js)

### Navigation SPA

L'application utilise un système d'écrans (screens) basé sur des sections HTML :

```html
<section id="screen-home" class="screen active" data-screen="home">
<section id="screen-lessons" class="screen" data-screen="lessons">
<!-- etc. -->
```

La navigation se fait via `APP.navigate(screenId)` qui active/désactive les classes CSS.

### Gestion d'état

```javascript
const state = {
  currentScreen: 'home',
  xp: 0,                          // Points d'expérience accumulés
  progress: {
    lessons: {},                  // { lessonId: true }
    quizzes: {},                  // { quizId: { score: pct } }
    games: {}                     // { gameId: { score: pct } }
  },
  currentQuiz: null,              // Quiz en cours
  // ... état temporaire des quiz/jeux
};
```

### Persistance (localStorage)

| Clé | Contenu |
|-----|---------|
| `qc1905_progress` | `{ xp, progress }` – progression utilisateur |
| `qc1905_lang` | `'fr'` ou `'en'` – langue préférée |
| `qc1905_theme` | `'dark'` ou `'light'` – thème préféré |

---

## 🎨 Système de design

### Thèmes

Deux thèmes CSS via `data-theme` attribute sur `<html>` :

```css
[data-theme="dark"] {
  --bg-primary: #0f0e17;
  --bg-secondary: #1a1a2e;
  --accent-blue: #4a9eff;
  --accent-gold: #ffd700;
  /* ... */
}

[data-theme="light"] {
  --bg-primary: #f0f4ff;
  /* ... */
}
```

### Variables CSS principales

```css
--font-main: 'Nunito', sans-serif;
--font-title: 'Fredoka One', cursive;
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--shadow-md: 0 6px 24px rgba(0,0,0,.3);
--transition: 0.25s cubic-bezier(.4,0,.2,1);
```

### Couleurs sémantiques

- `--accent-blue` : Actions principales, liens
- `--accent-gold` : XP, récompenses
- `--accent-green` : Succès, validation
- `--accent-red` : Erreurs, vies perdues
- `--accent-purple` : Accent secondaire

---

## 🌍 Internationalisation (i18n)

Le système utilise des clés de traduction avec fallback FR :

```javascript
const I18N = {
  fr: { 'key': 'Texte français' },
  en: { 'key': 'English text' }
};

function t(key, vars = {}) {
  let str = I18N[currentLang][key] || I18N['fr'][key] || key;
  // Remplacement des variables {xp}, etc.
  return str;
}
```

### Utilisation

- Dans HTML : `data-i18n="key"` → traduit automatiquement
- Dans JS : `t('key')` ou `t('key', { xp: 10 })`
- Dans data.js : toutes les chaînes ont des versions `{ fr: '', en: '' }`

---

## 📚 Structure des données

### Leçons (`APP_DATA.lessons`)

```javascript
{
  id: 'l1',
  dossier: 'Dossier 15',
  icon: '🗺️',
  color: '#4a9eff',
  xp: 15,
  title: { fr: '...', en: '...' },
  subtitle: { fr: '...', en: '...' },
  sections: [
    {
      title: { fr: '...', en: '...' },
      cards: [
        { type: 'info', icon: '📊', title: {...}, content: {...}, variant: 'highlight' },
        { type: 'fact', emoji: '🏙️', content: {...} },
        { type: 'comparison', left: {...}, right: {...} }
      ]
    }
  ]
}
```

### Quiz (`APP_DATA.quizzes`)

```javascript
{
  id: 'q1',
  icon: '🏙️',
  title: { fr: '...', en: '...' },
  desc: { fr: '...', en: '...' },
  xp: 20,
  type: 'mcq', // ou 'vf' pour Vrai/Faux
  questions: [
    {
      q: { fr: '...', en: '...' },
      icon: '🏙️',
      choices: { fr: [...], en: [...] }, // pour mcq
      correct: 0, // index de la bonne réponse
      explanation: { fr: '...', en: '...' }
    }
  ]
}
```

### Jeux (`APP_DATA.games`)

3 types de jeux :
- **g1 (Associe!)** : Matching termes ↔ définitions (`pairs`)
- **g2 (Frise)** : Timeline chronologique (`events` avec `year`)
- **g3 (Mot Mystère)** : Anagrammes (`words` avec `hint`)

---

## 🎮 Logique des jeux

### Quiz

- Système de vies (3 ❤️) – perdre toutes les vies = échec
- Questions mélangées aléatoirement
- XP +5 par bonne réponse immédiate
- Résultats avec trophées selon le pourcentage :
  - 100% : 🏆 Parfait!
  - ≥70% : 🥇 Excellent!
  - ≥50% : 🥈 Bien joué!
  - <50% : 💪 Continue!

### Mini-jeux (GAMES)

Le module `GAMES` expose 3 fonctions d'initialisation :
- `initMatch(gameData, container)` – Associe!
- `initTimeline(gameData, container)` – Frise chronologique
- `initScramble(gameData, container)` – Mot Mystère

---

## 🚀 Déploiement

### GitHub Actions (`.github/workflows/deploy.yml`)

```yaml
on:
  push:
    branches: [ main ]
  workflow_dispatch:  # Déclenchement manuel
```

Pas de build – déploiement statique direct des fichiers source.

### Mise à jour du Service Worker

Lors de modifications majeures, incrémenter la version dans `sw.js` :

```javascript
const CACHE_NAME = 'quebec1905-v1.0.0';  // ← changer la version
```

---

## 🧪 Conventions de code

### Style JavaScript

- Indentation : 2 espaces
- Quotes simples : `'string'`
- Point-virgules : optionnels (pas utilisés systématiquement)
- Commentaires de section : `/* ── Section ── */`
- Fonctions fléchées pour les callbacks courtes

### Style CSS

- Classes kebab-case : `.home-card`, `.quiz-choice`
- Variables CSS en minuscules avec tirets
- Organisation par sections avec commentaires

### Nommage

- IDs DOM : kebab-case descriptif (`quiz-q-counter`, `lesson-complete-btn`)
- Classes d'état : `.active`, `.done`, `.correct`, `.wrong`, `.hidden`

### Accessibilité

- Attributs `aria-label` sur les boutons d'icône
- `:focus-visible` pour la navigation clavier
- Support de `prefers-reduced-motion`

---

## ⚠️ Points d'attention

### Ne pas modifier

- La structure des objets dans `data.js` doit rester compatible avec le rendu dans `app.js`
- Les clés de traduction dans `i18n.js` sont référencées par `data-i18n` dans HTML

### Considérations spéciales

- **Langue par défaut** : Français (l'application est destinée à un public québécois)
- **Taille d'écran cible** : Tablette/iPad en priorité, mais responsive mobile
- **Offline** : Le Service Worker met en cache les ressources statiques – tester en mode offline après changements

### Gestion du cache

Le Service Worker utilise une stratégie **cache-first** pour les assets et **network-first** fallback vers index.html pour les navigation requests.

---

## 🔧 Commandes de développement

Pas de build ni de gestionnaire de paquets. Pour tester localement :

```bash
# Serveur local simple (Python 3)
python -m http.server 8000

# Ou avec Node.js
npx serve .
```

Puis ouvrir http://localhost:8000

---

## 📖 Ressources externes

- Google Fonts : https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap
- GitHub Pages : https://barbirk.github.io/quebec/
