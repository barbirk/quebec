/**
 * QUÉBEC 1905 – MINI-GAMES LOGIC
 */

const GAMES = {

  /* ── MATCHING GAME ── */
  initMatch(gameData, container) {
    const lang = getLang();
    let selected = null;
    let matchedCount = 0;
    const totalPairs = gameData.pairs.length;
    let score = 0;

    const terms = gameData.pairs.map((p, i) => ({ id: `t${i}`, text: p.term[lang], pairIndex: i, side: 'term' }));
    const defs  = gameData.pairs.map((p, i) => ({ id: `d${i}`, text: p.def[lang],  pairIndex: i, side: 'def'  }));

    // Shuffle defs
    const shuffleDefs = [...defs].sort(() => Math.random() - .5);

    container.innerHTML = `
      <div class="game-instructions">${t('match.instructions')}</div>
      <div class="match-score">
        <span class="scramble-score">🔗 <span id="match-count">0</span>/${totalPairs}</span>
      </div>
      <div class="match-columns">
        <div>
          <div class="match-col-title">${lang === 'fr' ? 'Termes' : 'Terms'}</div>
          <div class="match-items" id="terms-col"></div>
        </div>
        <div>
          <div class="match-col-title">${lang === 'fr' ? 'Définitions' : 'Definitions'}</div>
          <div class="match-items" id="defs-col"></div>
        </div>
      </div>
      <div id="match-result" style="text-align:center;margin-top:20px;"></div>
    `;

    const termsCol = container.querySelector('#terms-col');
    const defsCol  = container.querySelector('#defs-col');

    terms.forEach(item => {
      const el = document.createElement('div');
      el.className = 'match-item';
      el.textContent = item.text;
      el.dataset.id = item.id;
      el.dataset.pair = item.pairIndex;
      el.dataset.side = item.side;
      el.addEventListener('click', () => handleClick(el, item));
      termsCol.appendChild(el);
    });

    shuffleDefs.forEach(item => {
      const el = document.createElement('div');
      el.className = 'match-item';
      el.textContent = item.text;
      el.dataset.id = item.id;
      el.dataset.pair = item.pairIndex;
      el.dataset.side = item.side;
      el.addEventListener('click', () => handleClick(el, item));
      defsCol.appendChild(el);
    });

    function handleClick(el, item) {
      if (el.classList.contains('matched-correct')) return;

      if (!selected) {
        el.classList.add('selected');
        selected = { el, item };
        return;
      }

      if (selected.el === el) {
        el.classList.remove('selected');
        selected = null;
        return;
      }

      // Same side – swap selection
      if (selected.item.side === item.side) {
        selected.el.classList.remove('selected');
        el.classList.add('selected');
        selected = { el, item };
        return;
      }

      // Try to match
      if (selected.item.pairIndex === item.pairIndex) {
        // Correct!
        selected.el.classList.remove('selected');
        selected.el.classList.add('matched-correct');
        el.classList.add('matched-correct');
        selected.el.style.pointerEvents = 'none';
        el.style.pointerEvents = 'none';
        matchedCount++;
        score += 10;
        document.getElementById('match-count').textContent = matchedCount;
        selected = null;

        if (matchedCount === totalPairs) {
          setTimeout(() => {
            APP.showResults({ score: matchedCount, total: totalPairs, xp: gameData.xp, type: 'game', id: gameData.id });
          }, 600);
        }
      } else {
        // Wrong
        selected.el.classList.remove('selected');
        el.classList.add('matched-wrong');
        selected.el.classList.add('matched-wrong');
        setTimeout(() => {
          el.classList.remove('matched-wrong');
          selected && selected.el.classList.remove('matched-wrong');
          selected = null;
        }, 700);
        selected = null;
      }
    }
  },

  /* ── TIMELINE GAME ── */
  initTimeline(gameData, container) {
    const lang = getLang();
    const events = [...gameData.events].sort(() => Math.random() - .5);
    const sorted = [...gameData.events].sort((a, b) => a.year - b.year);

    container.innerHTML = `
      <div class="game-instructions">${t('timeline.instructions')}</div>
      <div class="timeline-cards" id="timeline-cards"></div>
      <div style="text-align:center;margin-top:16px;">
        <button class="btn btn-accent" id="check-timeline">${t('timeline.check')}</button>
      </div>
      <div id="timeline-feedback" style="margin-top:12px;"></div>
    `;

    const cardsContainer = container.querySelector('#timeline-cards');
    let dragSrc = null;
    let touchDragSrc = null;
    let touchClone = null;
    let touchStartY = 0;
    let touchStartX = 0;

    function getCardAtTouch(touch) {
      // Temporarily hide the clone to detect element underneath
      if (touchClone) touchClone.style.visibility = 'hidden';
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (touchClone) touchClone.style.visibility = 'visible';
      return target ? target.closest('.timeline-card') : null;
    }

    function render(list) {
      cardsContainer.innerHTML = '';
      list.forEach((ev, i) => {
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.draggable = true;
        card.dataset.id = ev.id;
        card.innerHTML = `<div class="tc-num">${i + 1}</div><span>${ev.label[lang]}</span>`;

        // Mouse drag and drop events
        card.addEventListener('dragstart', e => {
          dragSrc = card;
          card.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        });
        card.addEventListener('dragend', () => { card.classList.remove('dragging'); });
        card.addEventListener('dragover', e => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; });
        card.addEventListener('drop', e => {
          e.preventDefault();
          if (dragSrc && dragSrc !== card) {
            const fromIdx = [...cardsContainer.children].indexOf(dragSrc);
            const toIdx   = [...cardsContainer.children].indexOf(card);
            const arr = events.splice(0);
            const [moved] = arr.splice(fromIdx, 1);
            arr.splice(toIdx, 0, moved);
            events.length = 0;
            arr.forEach(x => events.push(x));
            render(events);
          }
        });

        // Touch events for mobile/tablet support
        card.addEventListener('touchstart', e => {
          const touch = e.touches[0];
          touchDragSrc = card;
          touchStartX = touch.clientX;
          touchStartY = touch.clientY;
          
          // Create visual clone for dragging
          touchClone = card.cloneNode(true);
          touchClone.style.position = 'fixed';
          touchClone.style.zIndex = '1000';
          touchClone.style.opacity = '0.9';
          touchClone.style.width = card.offsetWidth + 'px';
          touchClone.style.pointerEvents = 'none';
          touchClone.style.left = (touch.clientX - card.offsetWidth / 2) + 'px';
          touchClone.style.top = (touch.clientY - card.offsetHeight / 2) + 'px';
          touchClone.classList.add('dragging');
          document.body.appendChild(touchClone);
          
          card.classList.add('dragging');
        }, { passive: false });

        card.addEventListener('touchmove', e => {
          if (!touchDragSrc || !touchClone) return;
          e.preventDefault(); // Prevent scrolling while dragging
          
          const touch = e.touches[0];
          touchClone.style.left = (touch.clientX - touchClone.offsetWidth / 2) + 'px';
          touchClone.style.top = (touch.clientY - touchClone.offsetHeight / 2) + 'px';
          
          // Highlight potential drop target
          const targetCard = getCardAtTouch(touch);
          cardsContainer.querySelectorAll('.timeline-card').forEach(c => c.classList.remove('drop-target'));
          if (targetCard && targetCard !== touchDragSrc) {
            targetCard.classList.add('drop-target');
          }
        }, { passive: false });

        card.addEventListener('touchend', e => {
          if (!touchDragSrc) return;
          
          const touch = e.changedTouches[0];
          const targetCard = getCardAtTouch(touch);
          
          // Clean up visual elements
          if (touchClone) {
            touchClone.remove();
            touchClone = null;
          }
          touchDragSrc.classList.remove('dragging');
          cardsContainer.querySelectorAll('.timeline-card').forEach(c => c.classList.remove('drop-target'));
          
          // Perform swap if dropped on another card
          if (targetCard && targetCard !== touchDragSrc) {
            const fromIdx = [...cardsContainer.children].indexOf(touchDragSrc);
            const toIdx   = [...cardsContainer.children].indexOf(targetCard);
            const arr = events.splice(0);
            const [moved] = arr.splice(fromIdx, 1);
            arr.splice(toIdx, 0, moved);
            events.length = 0;
            arr.forEach(x => events.push(x));
            render(events);
          }
          
          touchDragSrc = null;
        });

        card.addEventListener('touchcancel', e => {
          if (touchClone) {
            touchClone.remove();
            touchClone = null;
          }
          if (touchDragSrc) {
            touchDragSrc.classList.remove('dragging');
            touchDragSrc = null;
          }
          cardsContainer.querySelectorAll('.timeline-card').forEach(c => c.classList.remove('drop-target'));
        });

        cardsContainer.appendChild(card);
      });
    }

    render(events);

    container.querySelector('#check-timeline').addEventListener('click', () => {
      const cards = [...cardsContainer.querySelectorAll('.timeline-card')];
      let correct = 0;
      cards.forEach((card, i) => {
        const id = parseInt(card.dataset.id);
        if (id === sorted[i].id) { card.classList.add('correct'); correct++; }
        else { card.classList.add('wrong'); }
      });

      const feedback = container.querySelector('#timeline-feedback');
      if (correct === sorted.length) {
        feedback.innerHTML = `<div class="quiz-feedback correct">🎉 ${lang === 'fr' ? 'Parfait! Tous les événements sont dans le bon ordre!' : 'Perfect! All events are in the right order!'}</div>`;
        setTimeout(() => {
          APP.showResults({ score: correct, total: sorted.length, xp: gameData.xp, type: 'game', id: gameData.id });
        }, 1500);
      } else {
        feedback.innerHTML = `<div class="quiz-feedback wrong">⚠️ ${lang === 'fr' ? `${correct}/${sorted.length} dans le bon ordre. Essaie encore!` : `${correct}/${sorted.length} in the right order. Try again!`}</div>`;
        setTimeout(() => {
          cards.forEach(c => c.classList.remove('correct', 'wrong'));
          feedback.innerHTML = '';
        }, 2000);
      }
    });
  },

  /* ── WORD SCRAMBLE ── */
  initScramble(gameData, container) {
    const lang = getLang();
    const words = [...gameData.words].sort(() => Math.random() - .5);
    let currentIdx = 0;
    let score = 0;

    function scramble(word) {
      const arr = word.split('');
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr.join('');
    }

    function renderWord() {
      if (currentIdx >= words.length) {
        APP.showResults({ score, total: words.length, xp: gameData.xp, type: 'game', id: gameData.id });
        return;
      }
      const w = words[currentIdx];
      let sc = scramble(w.word);
      while (sc === w.word && w.word.length > 1) sc = scramble(w.word); // re-scramble if same

      container.innerHTML = `
        <div class="scramble-score">⭐ ${score}/${words.length}</div>
        <div class="game-instructions">${t('scramble.instructions')}</div>
        <div class="scramble-word">${sc}</div>
        <div class="scramble-hint">💡 ${w.hint[lang]}</div>
        <div class="scramble-input-row">
          <input type="text" class="scramble-input" id="sc-input" placeholder="${lang === 'fr' ? 'Ta réponse…' : 'Your answer…'}" maxlength="20" autocomplete="off" />
          <button class="btn btn-accent" id="sc-check">${t('game.check')}</button>
        </div>
        <div id="sc-feedback" style="text-align:center;margin-top:8px;min-height:40px;"></div>
        <div style="text-align:center;margin-top:12px;">
          <button class="btn btn-outline" id="sc-skip" style="font-size:.8rem;">${lang === 'fr' ? 'Passer ce mot' : 'Skip this word'}</button>
        </div>
      `;

      const input = container.querySelector('#sc-input');
      const feedback = container.querySelector('#sc-feedback');
      input.focus();

      function checkAnswer() {
        const val = input.value.trim().toUpperCase().replace('Â','A').replace('Ê','E').replace('Î','I').replace('Ô','O').replace('Û','U').replace('É','E').replace('È','E').replace('À','A').replace('Ç','C');
        const answer = w.word.replace('Â','A').replace('Ê','E').replace('Î','I').replace('Ô','O').replace('Û','U').replace('É','E').replace('È','E').replace('À','A').replace('Ç','C');
        if (val === answer || input.value.trim().toUpperCase() === w.word) {
          input.classList.add('correct');
          feedback.innerHTML = `<span style="color:var(--accent-green);font-weight:800;">✅ ${lang === 'fr' ? 'Bravo! C\'est ça!' : 'Well done! That\'s it!'}</span><br><small>${w.word}</small>`;
          score++;
          APP.awardXP(5);
          setTimeout(() => { currentIdx++; renderWord(); }, 1200);
        } else {
          input.classList.add('wrong');
          feedback.innerHTML = `<span style="color:var(--accent-red);font-weight:800;">❌ ${lang === 'fr' ? 'Essaie encore!' : 'Try again!'}</span>`;
          setTimeout(() => { input.classList.remove('wrong'); input.value=''; input.focus(); feedback.innerHTML=''; }, 1000);
        }
      }

      container.querySelector('#sc-check').addEventListener('click', checkAnswer);
      input.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
      container.querySelector('#sc-skip').addEventListener('click', () => {
        feedback.innerHTML = `<span style="color:var(--text-muted);font-size:.85rem;">${lang === 'fr' ? `La réponse était: ${w.word}` : `The answer was: ${w.word}`}</span>`;
        setTimeout(() => { currentIdx++; renderWord(); }, 1200);
      });
    }

    renderWord();
  }
};
