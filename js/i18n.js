/**
 * QUÉBEC 1905 – INTERNATIONALIZATION (i18n)
 */

const I18N = {
  fr: {
    'badge.explorer': 'Explorateur',
    'home.title': 'Le Québec\nvers 1905',
    'home.subtitle': 'Voyage dans le temps et découvre comment vivaient les gens au Québec!',
    'home.stat.lessons': 'leçons',
    'home.stat.quizzes': 'quiz',
    'home.stat.games': 'jeux',
    'home.lessons': 'Mes Leçons',
    'home.lessons.desc': 'Explore les dossiers historiques',
    'home.quiz': 'Quiz',
    'home.quiz.desc': 'Teste tes connaissances!',
    'home.games': 'Mini-Jeux',
    'home.games.desc': 'Joue et apprends en t\'amusant!',
    'home.glossary': 'Glossaire',
    'home.glossary.desc': 'Les mots importants expliqués',
    'mascot.welcome': 'Salut! Je suis Castor, ton guide historique. Clique sur une leçon pour commencer l\'aventure!',
    'mascot.lesson': 'Super choix! Cette leçon est très intéressante!',
    'mascot.quiz': 'Tu peux le faire! Prends le temps de bien lire chaque question.',
    'mascot.games': 'C\'est parti pour les jeux! Amuse-toi bien!',
    'mascot.correct': 'Bravo! Tu as la bonne réponse!',
    'mascot.wrong': 'Pas cette fois… mais tu apprendras avec chaque essai!',
    'nav.back': 'Retour',
    'nav.home': 'Accueil',
    'nav.lessons': 'Leçons',
    'nav.quiz': 'Quiz',
    'nav.games': 'Jeux',
    'nav.glossary': 'Mots',
    'lessons.title': '📚 Mes Leçons',
    'quiz.title': '🎯 Quiz',
    'games.title': '🎮 Mini-Jeux',
    'glossary.title': '📖 Glossaire',
    'lesson.complete': '✅ Leçon terminée!',
    'results.perfect': 'Parfait!',
    'results.great': 'Excellent!',
    'results.good': 'Bien joué!',
    'results.keep-going': 'Continue!',
    'results.tryagain': 'Réessaie!',
    'results.back': 'Retour',
    'results.retry': 'Réessayer',
    'results.next': 'Suivant',
    'quiz.correct': '✅ Correct!',
    'quiz.wrong': '❌ Pas tout à fait…',
    'quiz.next': 'Question suivante →',
    'quiz.finish': 'Voir mes résultats 🎉',
    'quiz.true': 'VRAI ✅',
    'quiz.false': 'FAUX ❌',
    'game.check': 'Vérifier ✓',
    'game.next': 'Mot suivant →',
    'game.restart': 'Recommencer',
    'game.submit': 'Valider',
    'match.instructions': 'Clique sur un terme, puis sur sa définition pour les associer!',
    'timeline.instructions': 'Fais glisser les événements pour les mettre en ordre chronologique!',
    'scramble.instructions': 'Déchiffre le mot mystère en utilisant les lettres mélangées!',
    'timeline.check': 'Vérifier l\'ordre',
    'xp.toast': '+{xp} étoiles!',
    'lesson.xp': '+{xp} étoiles pour cette leçon!',
  },
  en: {
    'badge.explorer': 'Explorer',
    'home.title': 'Quebec\naround 1905',
    'home.subtitle': 'Travel back in time and discover how people lived in Quebec!',
    'home.stat.lessons': 'lessons',
    'home.stat.quizzes': 'quizzes',
    'home.stat.games': 'games',
    'home.lessons': 'Lessons',
    'home.lessons.desc': 'Explore history dossiers',
    'home.quiz': 'Quiz',
    'home.quiz.desc': 'Test your knowledge!',
    'home.games': 'Mini-Games',
    'home.games.desc': 'Play and learn!',
    'home.glossary': 'Glossary',
    'home.glossary.desc': 'Important words explained',
    'mascot.welcome': 'Hi! I\'m Castor, your history guide. Click on a lesson to start your adventure!',
    'mascot.lesson': 'Great choice! This is a really interesting lesson!',
    'mascot.quiz': 'You can do it! Take your time and read each question carefully.',
    'mascot.games': 'Let\'s play! Good luck and have fun!',
    'mascot.correct': 'Well done! That\'s the right answer!',
    'mascot.wrong': 'Not this time… but you learn something new with every try!',
    'nav.back': 'Back',
    'nav.home': 'Home',
    'nav.lessons': 'Lessons',
    'nav.quiz': 'Quiz',
    'nav.games': 'Games',
    'nav.glossary': 'Words',
    'lessons.title': '📚 My Lessons',
    'quiz.title': '🎯 Quiz',
    'games.title': '🎮 Mini-Games',
    'glossary.title': '📖 Glossary',
    'lesson.complete': '✅ Lesson complete!',
    'results.perfect': 'Perfect!',
    'results.great': 'Excellent!',
    'results.good': 'Well done!',
    'results.keep-going': 'Keep going!',
    'results.tryagain': 'Try again!',
    'results.back': 'Back',
    'results.retry': 'Try Again',
    'results.next': 'Next',
    'quiz.correct': '✅ Correct!',
    'quiz.wrong': '❌ Not quite…',
    'quiz.next': 'Next question →',
    'quiz.finish': 'See my results 🎉',
    'quiz.true': 'TRUE ✅',
    'quiz.false': 'FALSE ❌',
    'game.check': 'Check ✓',
    'game.next': 'Next word →',
    'game.restart': 'Try again',
    'game.submit': 'Submit',
    'match.instructions': 'Click a term, then its definition to match them!',
    'timeline.instructions': 'Drag the events to put them in the right order!',
    'scramble.instructions': 'Unscramble the mystery word using the mixed-up letters!',
    'timeline.check': 'Check the order',
    'xp.toast': '+{xp} stars!',
    'lesson.xp': '+{xp} stars for this lesson!',
  }
};

let currentLang = localStorage.getItem('qc1905_lang') || 'fr';

function t(key, vars = {}) {
  let str = I18N[currentLang][key] || I18N['fr'][key] || key;
  Object.entries(vars).forEach(([k, v]) => { str = str.replace(`{${k}}`, v); });
  return str;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('qc1905_lang', lang);
  applyI18n();
}

function getLang() { return currentLang; }

function applyI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[currentLang][key]) el.textContent = I18N[currentLang][key];
  });
  document.getElementById('lang-label').textContent = currentLang === 'fr' ? 'EN' : 'FR';
}
