/**
 * QUÉBEC 1905 – MAIN APPLICATION
 */

const APP = (() => {
  /* ── State ── */
  const state = {
    currentScreen: 'home',
    prevScreen: 'home',
    xp: 0,
    progress: { lessons: {}, quizzes: {}, games: {} },
    currentQuiz: null,
    currentQuizQ: 0,
    currentQuizLives: 3,
    currentQuizScore: 0,
    currentQuizType: null,
  };

  /* ── Init ── */
  function init() {
    loadProgress();
    applyI18n();
    updateXPDisplay();

    // Theme
    const savedTheme = localStorage.getItem('qc1905_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('theme-icon').textContent = savedTheme === 'dark' ? '🌙' : '☀️';

    // Language button shows the OTHER language
    document.getElementById('lang-label').textContent = getLang() === 'fr' ? 'EN' : 'FR';

    bindEvents();
    buildLessonsList();
    buildQuizHub();
    buildGamesGrid();
    buildGlossary();

    // Activate home screen BEFORE removing loading so layout is ready
    navigateTo('home');

    // Hide loading screen after animation
    setTimeout(() => {
      const ls = document.getElementById('loading-screen');
      const appEl = document.getElementById('app');
      if (ls) ls.style.display = 'none';
      if (appEl) appEl.classList.remove('hidden');
    }, 2800);
  }

  /* ── Event Binding ── */
  function bindEvents() {
    // Theme toggle
    document.getElementById('theme-btn').addEventListener('click', toggleTheme);

    // Language toggle
    document.getElementById('lang-btn').addEventListener('click', () => {
      setLang(getLang() === 'fr' ? 'en' : 'fr');
      rebuildAllScreens();
    });

    // Home button
    document.getElementById('home-btn').addEventListener('click', () => navigateTo('home'));

    // Home cards
    document.getElementById('btn-lessons').addEventListener('click', () => navigateTo('lessons'));
    document.getElementById('btn-quiz').addEventListener('click', () => navigateTo('quiz'));
    document.getElementById('btn-games').addEventListener('click', () => navigateTo('games'));
    document.getElementById('btn-glossary').addEventListener('click', () => navigateTo('glossary'));

    // Bottom nav
    document.querySelectorAll('.bottom-btn').forEach(btn => {
      btn.addEventListener('click', () => navigateTo(btn.dataset.nav));
    });

    // Back buttons (delegated)
    document.addEventListener('click', e => {
      const back = e.target.closest('[data-back]');
      if (back) navigateTo(back.dataset.back);
    });

    // Glossary Search
    document.getElementById('glossary-search').addEventListener('input', e => {
      filterGlossary(e.target.value);
    });

    // Lesson complete button
    document.getElementById('lesson-complete-btn').addEventListener('click', () => {
      const lessonId = document.getElementById('lesson-detail-title').dataset.lessonId;
      completLesson(lessonId);
    });
  }

  /* ── Navigation ── */
  function navigateTo(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));
    const target = document.getElementById('screen-' + screenId);
    if (target) target.classList.add('active');

    state.prevScreen = state.currentScreen;
    state.currentScreen = screenId;

    // Update bottom nav
    document.querySelectorAll('.bottom-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.nav === screenId);
    });

    updateMascot(screenId);
    updateHomeStats();
  }

  /* ── Theme ── */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('qc1905_theme', next);
    document.getElementById('theme-icon').textContent = next === 'dark' ? '🌙' : '☀️';
  }

  /* ── XP System ── */
  function awardXP(amount) {
    state.xp += amount;
    updateXPDisplay();
    showXPToast(amount);
    saveProgress();
  }

  function updateXPDisplay() {
    document.getElementById('xp-value').textContent = state.xp;
    // Level badge
    const level = APP_DATA.levels.slice().reverse().find(l => state.xp >= l.min) || APP_DATA.levels[0];
    const lang = getLang();
    const badge = document.getElementById('hero-badge');
    if (badge) {
      badge.querySelector('.badge-icon').textContent = level.icon;
      badge.querySelector('.badge-text').textContent = level.name[lang];
    }
  }

  function showXPToast(amount) {
    const toast = document.getElementById('xp-toast');
    document.getElementById('toast-text').textContent = `+${amount} ${getLang() === 'fr' ? 'étoiles!' : 'stars!'}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }

  /* ── Confetti ── */
  function launchConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#4a9eff', '#ffd700', '#ff6b6b', '#4caf93', '#9c6fff', '#ffa53e'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.cssText = `
        left: ${Math.random() * 100}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        width: ${6 + Math.random() * 10}px;
        height: ${6 + Math.random() * 10}px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        animation-duration: ${1.5 + Math.random() * 2}s;
        animation-delay: ${Math.random() * 0.8}s;
      `;
      container.appendChild(piece);
    }
    setTimeout(() => { container.innerHTML = ''; }, 4000);
  }

  /* ── Mascot ── */
  function updateMascot(screen) {
    const bubble = document.getElementById('speech-bubble');
    if (!bubble) return;
    const lang = getLang();
    const messages = {
      home: t('mascot.welcome'),
      lessons: t('mascot.lesson'),
      quiz: t('mascot.quiz'),
      games: t('mascot.games'),
    };
    if (messages[screen]) bubble.querySelector('p').textContent = messages[screen];
  }

  /* ── HOME ── */
  function renderHome() { updateHomeStats(); }

  function updateHomeStats() {
    const totalLessons = APP_DATA.lessons.length;
    const doneLessons  = Object.keys(state.progress.lessons).length;
    const totalQuizzes = APP_DATA.quizzes.length;
    const doneQuizzes  = Object.keys(state.progress.quizzes).length;
    const totalGames   = APP_DATA.games.length;
    const doneGames    = Object.keys(state.progress.games).length;

    const ls = document.getElementById('stat-lessons');
    const qs = document.getElementById('stat-quizzes');
    const gs = document.getElementById('stat-games');
    if (ls) ls.textContent = `${doneLessons}/${totalLessons}`;
    if (qs) qs.textContent = `${doneQuizzes}/${totalQuizzes}`;
    if (gs) gs.textContent = `${doneGames}/${totalGames}`;

    const lp = document.getElementById('lessons-progress');
    const qp = document.getElementById('quiz-progress');
    const gp = document.getElementById('games-progress');
    if (lp) lp.style.width = `${totalLessons ? doneLessons / totalLessons * 100 : 0}%`;
    if (qp) qp.style.width = `${totalQuizzes ? doneQuizzes / totalQuizzes * 100 : 0}%`;
    if (gp) gp.style.width = `${totalGames ? doneGames / totalGames * 100 : 0}%`;
  }

  /* ── LESSONS ── */
  function buildLessonsList() {
    const lang = getLang();
    const container = document.getElementById('lessons-list');
    container.innerHTML = '';

    APP_DATA.lessons.forEach(lesson => {
      const done = !!state.progress.lessons[lesson.id];
      const el = document.createElement('div');
      el.className = `lesson-item${done ? ' done' : ''}`;
      el.innerHTML = `
        <div class="lesson-icon">${lesson.icon}</div>
        <div class="lesson-meta">
          <div class="lesson-dossier">${lesson.dossier}</div>
          <h3>${lesson.title[lang]}</h3>
          <p>${lesson.subtitle[lang]}</p>
        </div>
        <div class="lesson-badge" style="border-color:${lesson.color}40;color:${lesson.color};">⭐ ${lesson.xp}</div>
      `;
      el.addEventListener('click', () => openLesson(lesson));
      container.appendChild(el);
    });
  }

  function openLesson(lesson) {
    const lang = getLang();
    document.getElementById('lesson-detail-title').textContent = lesson.title[lang];
    document.getElementById('lesson-detail-title').dataset.lessonId = lesson.id;

    const content = document.getElementById('lesson-content');
    content.innerHTML = '';

    lesson.sections.forEach(section => {
      const sec = document.createElement('div');
      sec.className = 'lesson-section';
      sec.innerHTML = `<h2 class="lesson-section-title"><span>${lesson.icon}</span> ${section.title[lang]}</h2>`;
      const cardsDiv = document.createElement('div');
      cardsDiv.className = 'lesson-cards';

      section.cards.forEach(card => {
        const cardEl = document.createElement('div');
        if (card.type === 'info') {
          cardEl.className = `info-card${card.variant ? ' ' + card.variant : ''}`;
          cardEl.innerHTML = `
            ${card.icon ? `<h4>${card.icon} ${card.title[lang]}</h4>` : ''}
            <p>${card.content[lang]}</p>
          `;
        } else if (card.type === 'fact') {
          cardEl.className = 'fact-bubble';
          cardEl.innerHTML = `<div class="fact-emoji">${card.emoji}</div><p class="fact-text">${card.content[lang]}</p>`;
        } else if (card.type === 'comparison') {
          cardEl.className = 'comparison-grid';
          const left  = card.left;
          const right = card.right;
          cardEl.innerHTML = `
            <div class="comp-card ${left.variant}">
              <h4>${left.label[lang]}</h4>
              <ul>${left.items[lang].map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
            <div class="comp-card ${right.variant}">
              <h4>${right.label[lang]}</h4>
              <ul>${right.items[lang].map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
          `;
        }
        cardsDiv.appendChild(cardEl);
      });

      sec.appendChild(cardsDiv);
      content.appendChild(sec);
    });

    // Update complete button text
    const done = !!state.progress.lessons[lesson.id];
    const btn = document.getElementById('lesson-complete-btn');
    btn.textContent = done
      ? (lang === 'fr' ? '✅ Déjà complétée!' : '✅ Already completed!')
      : t('lesson.complete');

    navigateTo('lesson-detail');
  }

  function completLesson(lessonId) {
    if (!state.progress.lessons[lessonId]) {
      const lesson = APP_DATA.lessons.find(l => l.id === lessonId);
      state.progress.lessons[lessonId] = true;
      awardXP(lesson.xp);
      saveProgress();
      buildLessonsList();
      updateHomeStats();
      const btn = document.getElementById('lesson-complete-btn');
      const lang = getLang();
      btn.textContent = lang === 'fr' ? '✅ Déjà complétée!' : '✅ Already completed!';
      launchConfetti();
    }
    setTimeout(() => navigateTo('lessons'), 800);
  }

  /* ── QUIZ HUB ── */
  function buildQuizHub() {
    const lang = getLang();
    const container = document.getElementById('quiz-hub-grid');
    container.innerHTML = '';

    APP_DATA.quizzes.forEach(quiz => {
      const done = !!state.progress.quizzes[quiz.id];
      const el = document.createElement('div');
      el.className = `quiz-hub-item${done ? ' done' : ''}`;
      el.innerHTML = `
        <div class="quiz-hub-icon">${quiz.icon}</div>
        <h3>${quiz.title[lang]}</h3>
        <p>${quiz.desc[lang]}</p>
        <div style="margin-top:8px;font-size:.8rem;color:var(--accent-gold);">⭐ ${quiz.xp} ${lang === 'fr' ? 'étoiles' : 'stars'}${done ? ' ✅' : ''}</div>
      `;
      el.addEventListener('click', () => startQuiz(quiz));
      container.appendChild(el);
    });
  }

  /* ── ACTIVE QUIZ ── */
  function startQuiz(quiz) {
    state.currentQuiz = { ...quiz, questions: [...quiz.questions].sort(() => Math.random() - .5) };
    state.currentQuizQ = 0;
    state.currentQuizLives = 3;
    state.currentQuizScore = 0;
    state.currentQuizType = quiz.type;
    navigateTo('quiz-active');
    renderQuestion();
  }

  function renderQuestion() {
    const quiz = state.currentQuiz;
    const lang = getLang();
    const questions = quiz.questions;
    const idx = state.currentQuizQ;

    if (idx >= questions.length) {
      showResults({
        score: state.currentQuizScore,
        total: questions.length,
        xp: quiz.xp,
        type: 'quiz',
        id: quiz.id
      });
      return;
    }

    const q = questions[idx];
    const counter = document.getElementById('quiz-q-counter');
    counter.textContent = `${idx + 1}/${questions.length}`;

    const livesEl = document.getElementById('quiz-lives');
    livesEl.textContent = '❤️'.repeat(state.currentQuizLives) + '🖤'.repeat(Math.max(0, 3 - state.currentQuizLives));

    const area = document.getElementById('quiz-area');

    const progress = ((idx) / questions.length * 100).toFixed(0);

    if (quiz.type === 'vf') {
      area.innerHTML = `
        <div class="quiz-progress-bar"><div class="quiz-progress-inner" style="width:${progress}%"></div></div>
        <div class="quiz-question-card">
          <span class="quiz-question-icon">🤔</span>
          <p class="quiz-question-text">${q.q[lang]}</p>
        </div>
        <div class="vf-buttons">
          <button class="vf-btn vrai" id="btn-vrai">${t('quiz.true')}</button>
          <button class="vf-btn faux" id="btn-faux">${t('quiz.false')}</button>
        </div>
        <div id="quiz-fb"></div>
      `;
      area.querySelector('#btn-vrai').addEventListener('click', () => handleVF(true, q));
      area.querySelector('#btn-faux').addEventListener('click', () => handleVF(false, q));
    } else {
      const choices = q.choices[lang];
      area.innerHTML = `
        <div class="quiz-progress-bar"><div class="quiz-progress-inner" style="width:${progress}%"></div></div>
        <div class="quiz-question-card">
          <span class="quiz-question-icon">${q.icon || '❓'}</span>
          <p class="quiz-question-text">${q.q[lang]}</p>
        </div>
        <div class="quiz-choices" id="quiz-choices">
          ${choices.map((c, i) => `
            <button class="quiz-choice" data-idx="${i}">
              <div class="choice-letter">${'ABCD'[i]}</div>
              <span>${c}</span>
            </button>
          `).join('')}
        </div>
        <div id="quiz-fb"></div>
      `;
      area.querySelectorAll('.quiz-choice').forEach(btn => {
        btn.addEventListener('click', () => handleMCQ(parseInt(btn.dataset.idx), q));
      });
    }
  }

  function handleMCQ(chosenIdx, q) {
    const lang = getLang();
    const isCorrect = chosenIdx === q.correct;
    const area = document.getElementById('quiz-area');
    const buttons = area.querySelectorAll('.quiz-choice');
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === q.correct) b.classList.add('correct');
      if (i === chosenIdx && !isCorrect) b.classList.add('wrong');
    });

    const fb = area.querySelector('#quiz-fb');
    if (isCorrect) {
      state.currentQuizScore++;
      fb.innerHTML = `<div class="quiz-feedback correct">✅ ${q.explanation[lang]}</div>`;
      awardXP(5);
    } else {
      state.currentQuizLives--;
      fb.innerHTML = `<div class="quiz-feedback wrong">❌ ${q.explanation[lang]}</div>`;
      document.getElementById('quiz-lives').textContent = '❤️'.repeat(state.currentQuizLives) + '🖤'.repeat(3 - state.currentQuizLives);
    }

    fb.innerHTML += `<button class="btn btn-accent quiz-next-btn" id="next-q">
      ${state.currentQuizQ + 1 >= state.currentQuiz.questions.length ? t('quiz.finish') : t('quiz.next')}
    </button>`;
    fb.querySelector('#next-q').addEventListener('click', () => {
      state.currentQuizQ++;
      if (state.currentQuizLives <= 0) {
        showResults({ score: state.currentQuizScore, total: state.currentQuiz.questions.length, xp: 0, type: 'quiz', id: state.currentQuiz.id, failed: true });
      } else {
        renderQuestion();
      }
    });
  }

  function handleVF(chosen, q) {
    const lang = getLang();
    const isCorrect = chosen === q.correct;
    const area = document.getElementById('quiz-area');
    area.querySelector('#btn-vrai').disabled = true;
    area.querySelector('#btn-faux').disabled = true;

    const fb = area.querySelector('#quiz-fb');
    if (isCorrect) {
      state.currentQuizScore++;
      fb.innerHTML = `<div class="quiz-feedback correct">✅ ${q.explanation[lang]}</div>`;
      awardXP(5);
    } else {
      state.currentQuizLives--;
      fb.innerHTML = `<div class="quiz-feedback wrong">❌ ${q.explanation[lang]}</div>`;
      document.getElementById('quiz-lives').textContent = '❤️'.repeat(state.currentQuizLives) + '🖤'.repeat(3 - state.currentQuizLives);
    }

    fb.innerHTML += `<button class="btn btn-accent quiz-next-btn" id="next-q">
      ${state.currentQuizQ + 1 >= state.currentQuiz.questions.length ? t('quiz.finish') : t('quiz.next')}
    </button>`;
    fb.querySelector('#next-q').addEventListener('click', () => {
      state.currentQuizQ++;
      if (state.currentQuizLives <= 0) {
        showResults({ score: state.currentQuizScore, total: state.currentQuiz.questions.length, xp: 0, type: 'quiz', id: state.currentQuiz.id, failed: true });
      } else {
        renderQuestion();
      }
    });
  }

  /* ── GAMES ── */
  function buildGamesGrid() {
    const lang = getLang();
    const container = document.getElementById('games-grid');
    container.innerHTML = '';
    APP_DATA.games.forEach(game => {
      const done = !!state.progress.games[game.id];
      const el = document.createElement('div');
      el.className = 'game-item';
      el.innerHTML = `
        <div class="game-item-icon">${game.icon}</div>
        <h3>${game.title[lang]}</h3>
        <p>${game.desc[lang]}</p>
        <div class="game-stars">⭐ ${game.xp} ${lang === 'fr' ? 'étoiles' : 'stars'}${done ? ' ✅' : ''}</div>
      `;
      el.addEventListener('click', () => startGame(game));
      container.appendChild(el);
    });
  }

  function startGame(game) {
    const lang = getLang();
    document.getElementById('game-active-title').textContent = game.title[lang];
    const area = document.getElementById('game-area');
    area.innerHTML = '';

    navigateTo('game-active');

    if (game.id === 'g1') GAMES.initMatch(game, area);
    else if (game.id === 'g2') GAMES.initTimeline(game, area);
    else if (game.id === 'g3') GAMES.initScramble(game, area);
  }

  /* ── RESULTS ── */
  function showResults({ score, total, xp, type, id, failed = false }) {
    const lang = getLang();
    const pct = Math.round((score / total) * 100);
    let trophy, titleKey;

    if (failed) { trophy = '😅'; titleKey = 'results.tryagain'; }
    else if (pct === 100) { trophy = '🏆'; titleKey = 'results.perfect'; }
    else if (pct >= 70) { trophy = '🥇'; titleKey = 'results.great'; }
    else if (pct >= 50) { trophy = '🥈'; titleKey = 'results.good'; }
    else { trophy = '💪'; titleKey = 'results.keep-going'; }

    // Award XP if not failed and first time
    const progressBucket = type === 'quiz' ? state.progress.quizzes : state.progress.games;
    let earnedXP = 0;
    if (!failed && pct >= 50 && !progressBucket[id]) {
      progressBucket[id] = { score: pct };
      earnedXP = xp;
      awardXP(xp);
      saveProgress();
    }
    if (!failed && pct === 100) launchConfetti();

    const container = document.getElementById('results-container');
    container.innerHTML = `
      <div class="results-trophy">${trophy}</div>
      <h1 class="results-title">${t(titleKey)}</h1>
      <div class="results-score">${score}/${total}</div>
      <p class="results-message">${pct}% ${lang === 'fr' ? 'de bonnes réponses' : 'correct answers'}</p>
      ${earnedXP > 0 ? `<div class="results-xp">+${earnedXP} ⭐ ${lang === 'fr' ? 'étoiles gagnées!' : 'stars earned!'}</div>` : ''}
      <div class="results-actions">
        <button class="btn btn-outline" id="res-back">${t('results.back')}</button>
        <button class="btn btn-accent" id="res-retry">${t('results.retry')}</button>
      </div>
    `;

    navigateTo('results');
    updateHomeStats();
    buildQuizHub();
    buildGamesGrid();

    container.querySelector('#res-back').addEventListener('click', () => {
      navigateTo(type === 'quiz' ? 'quiz' : 'games');
    });
    container.querySelector('#res-retry').addEventListener('click', () => {
      if (type === 'quiz') {
        const quiz = APP_DATA.quizzes.find(q => q.id === id);
        if (quiz) startQuiz(quiz);
      } else {
        const game = APP_DATA.games.find(g => g.id === id);
        if (game) startGame(game);
      }
    });
  }

  /* ── GLOSSARY ── */
  function buildGlossary() {
    const lang = getLang();
    const container = document.getElementById('glossary-list');
    container.innerHTML = '';
    const sorted = [...APP_DATA.glossary].sort((a, b) => a.term.localeCompare(b.term));
    let lastLetter = '';
    sorted.forEach(item => {
      const first = item.term[0].toUpperCase();
      if (first !== lastLetter) {
        const header = document.createElement('div');
        header.className = 'glossary-letter-header';
        header.textContent = first;
        container.appendChild(header);
        lastLetter = first;
      }
      const el = document.createElement('div');
      el.className = 'glossary-item';
      el.innerHTML = `
        <div class="glossary-term">${item.term}</div>
        <div class="glossary-def">${item.def[lang]}</div>
      `;
      container.appendChild(el);
    });
  }

  function filterGlossary(query) {
    const lang = getLang();
    const lq = query.toLowerCase();
    const container = document.getElementById('glossary-list');
    container.querySelectorAll('.glossary-item').forEach(el => {
      const term = el.querySelector('.glossary-term').textContent.toLowerCase();
      const def  = el.querySelector('.glossary-def').textContent.toLowerCase();
      el.style.display = (!lq || term.includes(lq) || def.includes(lq)) ? '' : 'none';
    });
    container.querySelectorAll('.glossary-letter-header').forEach(el => {
      el.style.display = '';
    });
  }

  /* ── Rebuild after lang change ── */
  function rebuildAllScreens() {
    applyI18n();
    buildLessonsList();
    buildQuizHub();
    buildGamesGrid();
    buildGlossary();
    updateHomeStats();
    updateXPDisplay();
    // Also re-open detail views if active
    const active = document.querySelector('.screen.active');
    if (active && active.dataset.screen === 'lesson-detail') {
      const id = document.getElementById('lesson-detail-title').dataset.lessonId;
      const lesson = APP_DATA.lessons.find(l => l.id === id);
      if (lesson) openLesson(lesson);
    }
  }

  /* ── Persistence ── */
  function saveProgress() {
    localStorage.setItem('qc1905_progress', JSON.stringify({ xp: state.xp, progress: state.progress }));
  }

  function loadProgress() {
    const saved = localStorage.getItem('qc1905_progress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        state.xp = data.xp || 0;
        state.progress = data.progress || { lessons: {}, quizzes: {}, games: {} };
      } catch (e) {}
    }
  }

  // Service Worker registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  return { init, navigate: navigateTo, showResults, awardXP, launchConfetti };
})();

// Safe init — handles both early and late script loading
function safeInit() {
  try {
    APP.init();
  } catch(e) {
    console.error('APP init error:', e);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInit);
} else {
  safeInit();
}
