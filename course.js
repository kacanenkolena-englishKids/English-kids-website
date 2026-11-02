/* Дополнительные уровни используют оформление первого этапа.
   Урок Present Simple и его ключи прогресса остаются в app.js. */
'use strict';
(() => {
  const courseById = new Map(courseLessons.map(lesson => [lesson.id, lesson]));
  const stateKey = 'english-joy-course-v1';
  let courseStorageOK = true;
  let state = { answers: {}, checked: {}, tabs: {}, stories: {}, parts: {}, translations: {}, read: {}, completed: {} };
  try {
    const stored = JSON.parse(localStorage.getItem(stateKey));
    if (stored && typeof stored === 'object') {
      for (const key of Object.keys(state)) {
        if (stored[key] && typeof stored[key] === 'object' && !Array.isArray(stored[key])) state[key] = stored[key];
      }
    }
  } catch { courseStorageOK = false; }
  let activeLesson = null;
  let selectedMatch = null;
  let sentenceWords = [];
  let matchedWords = new Set();
  let highlighted = false;
  let playingUtterance = null;
  let gameRound = 0;
  let gameMode = 'animal';
  let gameOrder = [];
  let searchFound = new Set();
  let selectedQuiz = 'pre';
  const originalRender = render;
  const originalParents = parents;
  const originalHome = home;
  const quizPresets = {
    pre: { title: 'Pre-A1 · первые слова', ids: ['alphabet', 'numbers', 'colours', 'animals', 'family', 'toys', 'greetings'] },
    beginner: { title: 'Beginner A1 · первые предложения', ids: ['pronouns', 'to-be', 'articles', 'plurals', 'have-got'] }
  };
  const persistCourse = () => {
    try { localStorage.setItem(stateKey, JSON.stringify(state)); } catch { courseStorageOK = false; }
  };
  const cButton = (label, action, extra = '') => `<button type="button" class="btn ${extra}" data-c-action="${action}">${label}</button>`;
  const agePicker = () => `<label class="age">Возрастной режим<select id="course-age"><option value="young" ${saved.age === 'young' ? 'selected' : ''}>5–7 лет · читаем по частям</option><option value="older" ${saved.age === 'older' ? 'selected' : ''}>8–11 лет · весь текст</option></select></label>`;
  const currentStory = () => activeLesson.stories[Number(state.stories[activeLesson.id]) || 0];
  const storyKey = () => `${activeLesson.id}-story-${Number(state.stories[activeLesson.id]) || 0}`;
  function courseStop() {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    playingUtterance = null;
  }
  function announce(text, good = false, id = 'course-status') { feedback(id, text, good); }
  function layoutAge() { return saved.age === 'young' ? 5 : 20; }
  function sliceStory() {
    const story = currentStory();
    const size = layoutAge();
    const max = Math.ceil(story.sentences.length / size) - 1;
    const part = Math.max(0, Math.min(Number(state.parts[storyKey()]) || 0, max));
    return { story, size, part, max, sentences: story.sentences.slice(part * size, (part + 1) * size) };
  }
  function speakCourse(text, status = 'course-status') {
    courseStop();
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
      announce('Озвучка недоступна в этом браузере. Текст и упражнения продолжают работать.', false, status); return;
    }
    playingUtterance = new SpeechSynthesisUtterance(text);
    playingUtterance.lang = 'en-GB'; playingUtterance.rate = saved.age === 'young' ? .7 : .82;
    const voice = speechSynthesis.getVoices().find(v => v.lang.startsWith('en'));
    if (voice) playingUtterance.voice = voice;
    playingUtterance.onend = () => announce('Готово! Можно послушать ещё раз.', true, status);
    playingUtterance.onerror = event => {
      if (!['canceled', 'interrupted'].includes(event.error)) announce('Английский голос недоступен. Проверь голоса и звук в настройках устройства.', false, status);
    };
    announce('Слушаем…', false, status);
    speechSynthesis.speak(playingUtterance);
  }
  function drawCatalog() {
    return `<div class="trail"><a href="#home">Главная</a> / Уроки</div><h1>Мир английского</h1><p>Начни с первых слов или выбери знакомую тему. Занимайся в своём темпе.</p>${['Pre-A1', 'Beginner A1'].map(level => `<div class="section-head"><h2>${level === 'Pre-A1' ? '🌈 Pre-A1 · первые слова' : '🌱 Beginner A1 · первые предложения'}</h2><span>${level === 'Pre-A1' ? '7 тем для знакомства' : '5 грамматических тем'}</span></div><div class="grid course-grid">${courseLessons.filter(l => l.level === level).map(l => `<a href="#course/${l.id}" class="card card-link"><span class="icon">${l.icon}</span><h3>${esc(l.title)}</h3><span class="badge">${l.level}</span><p>${l.stories.length} истории · практика · мини-тест</p><p>${state.completed[l.id] ? '✓ Мини-тест пройден' : 'Открыть урок →'}</p></a>`).join('')}</div>`).join('')}<div class="section-head"><h2>🌳 Elementary A1</h2><span>Уже знакомый урок</span></div><div class="grid course-grid"><a class="card card-link" href="#lesson"><span class="icon">🌿</span><h3>Present Simple</h3><span class="badge">ELEMENTARY A1</span><p>Объяснения, 3 истории, упражнения и мини-тест.</p><p>Открыть урок →</p></a></div><p style="margin-top:24px">Остальные темы Elementary A1 и A2 — следующий этап после вашего подтверждения.</p>`;
  }
  function lessonShell(lesson) {
    const selectedTab = ['theory', 'practice', 'stories', 'test'].includes(state.tabs[lesson.id]) ? state.tabs[lesson.id] : 'theory';
    return `<div class="trail"><a href="#lessons">Уроки</a> / ${lesson.level} / ${esc(lesson.title)}</div><section class="lesson-top"><div><span class="badge">${lesson.level.toUpperCase()}</span><h1>${esc(lesson.title)}</h1><p>${esc(lesson.intro)}</p></div>${agePicker()}</section><div class="tabs" role="group" aria-label="Разделы урока">${[['theory', '💡 Разбираемся'], ['practice', '✏️ Тренируемся'], ['stories', '📖 Читаем истории'], ['test', '🏆 Мини-тест']].map(([id, label]) => `<button data-c-tab="${id}" class="${id === selectedTab ? 'selected' : ''}" aria-pressed="${id === selectedTab}">${label}</button>`).join('')}</div><section class="panel">${selectedTab === 'theory' ? courseTheory() : selectedTab === 'practice' ? coursePractice() : selectedTab === 'stories' ? courseReading() : courseTest()}</section>${!courseStorageOK || !storageOK ? '<p class="notice">Хранилище браузера недоступно. Прогресс может исчезнуть после закрытия страницы.</p>' : ''}`;
  }
  function vocabHTML(words, audio = false) {
    return `<div class="vocab">${words.map(([en, ru]) => `<div><b lang="en">${esc(en)}</b> <span>— ${esc(ru)}</span>${audio ? ` <button type="button" class="choice audio-word" data-c-say="${esc(en)}" aria-label="Послушать: ${esc(en)}">🔊</button>` : ''}</div>`).join('')}</div>`;
  }
  function courseTheory() {
    const l = activeLesson;
    return `<span class="eyebrow">Новая тема — маленькими шагами</span><h2>${l.icon} ${esc(l.title)}</h2><div class="rule-grid">${l.rules.map((text, i) => `<div class="rule"><h3>${['Знакомимся', 'Замечаем', 'Пробуем'][i]}</h3><p>${esc(text)}</p></div>`).join('')}</div><h3>Примеры с переводом</h3>${l.examples.map(([en, ru]) => `<div class="exercise"><span lang="en"><b>${esc(en)}</b></span><p>${esc(ru)}</p><button class="btn secondary small" type="button" data-c-say="${esc(en)}">🔊 Послушать пример</button></div>`).join('')}${l.id === 'alphabet' ? `<h3 style="margin-top:24px">Все 26 букв</h3><p>Нажми на пару букв: прозвучит название большой буквы. Написание рядом показывает её маленькую пару.</p><div class="alphabet-grid">${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => `<button class="choice" type="button" data-c-say="${c}"><span lang="en">${c} ${c.toLowerCase()}</span></button>`).join('')}</div>` : ''}${l.id === 'numbers' ? `<h3 style="margin-top:24px">Считаем до двадцати</h3><div class="alphabet-grid">${'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'.split(' ').map((n, i) => `<button class="choice" data-c-say="${n}" type="button">${i + 1}<br><span lang="en">${n}</span></button>`).join('')}</div>` : ''}<p id="course-status" aria-live="polite" class="feedback"></p><h3>Наш словарик</h3>${vocabHTML(l.vocab, true)}<div class="notice" style="margin-top:20px">🌱 5–7 лет: выбери несколько слов, повтори вслух и сделай перерыв. В историях текст разбит на части по 5 предложений. Можно заниматься вместе со взрослым.</div><div class="actions">${cButton('Попробуем сами →', 'practice')}</div>`;
  }
  function formQuestions(items, key, offset = 0) {
    const answers = state.answers[key] || {};
    return items.map((x, position) => {
      const i = offset + position;
      return `<fieldset class="course-question exercise"><legend>${position + 1}. ${esc(x.q)}</legend><div class="choices">${x.opts.map((option, j) => `<label class="choice"><input type="radio" name="c-${i}" value="${j}" data-c-answer="${key}" data-c-index="${i}" ${answers[i] === j ? 'checked' : ''}> <span>${esc(option)}</span></label>`).join('')}</div><p class="feedback ${state.checked[key] && answers[i] === x.a ? 'good' : ''}" id="c-feedback-${key}-${i}" aria-live="polite">${state.checked[key] ? answerMessage(x, answers[i]) : ''}</p></fieldset>`;
    }).join('');
  }
  function answerMessage(item, answer) {
    if (answer === undefined) return 'Выбери ответ.';
    if (answer === item.a) return 'Верно!';
    return `Попробуй ещё раз. ${item.why || `Верный ответ: ${item.opts[item.a]}.`}`;
  }
  function coursePractice() {
    const l = activeLesson;
    const words = l.order[0].split(' ');
    // Reversed word bank is deterministic; every token has its own index.
    return `<h2>Потренируемся вместе ✏️</h2><p>Выбирай ответ, составляй предложение и находи пары. За каждое верно выполненное задание — баллы.</p><h3>1. Выбери ответ</h3><form data-c-form="${l.id}-practice">${formQuestions(l.practice, `${l.id}-practice`)}<div class="actions"><button class="btn" type="submit">Проверить ответы</button></div><p id="course-summary" aria-live="polite"></p></form><div class="exercise"><h3>2. Собери предложение</h3><p>${esc(l.order[1])} Нажимай слова по порядку. Чтобы убрать слово, нажми на него в ответе.</p><div class="choices">${[...words].reverse().map((word, i) => `<button class="word" data-c-word="${i}" type="button">${esc(word)}</button>`).join('')}</div><div class="answer-zone" id="course-order-zone" aria-label="Твоё предложение"></div><div class="actions">${cButton('Проверить предложение', 'check-order', 'small')}${cButton('Начать заново', 'reset-order', 'secondary small')}</div><p class="feedback" id="course-order-status" aria-live="polite"></p></div><div class="exercise"><h3>3. Найди перевод</h3><p>Сначала выбери английское слово, затем его перевод.</p><div class="choices">${l.vocab.slice(0, 4).map(([en], i) => `<button class="choice" data-c-left="${i}" type="button">${esc(en)}</button>`).join('')}</div><div class="choices" style="margin-top:12px">${[2, 0, 3, 1].map(i => `<button class="choice" data-c-right="${i}" type="button">${esc(l.vocab[i][1])}</button>`).join('')}</div><p class="feedback" id="course-match-status" aria-live="polite"></p></div><div class="actions">${cButton('Читать истории →', 'stories')}</div>`;
  }
  function highlightText(text) {
    if (!highlighted) return esc(text);
    const pattern = new RegExp(activeLesson.pattern, 'gi');
    let result = '', previous = 0;
    for (const match of text.matchAll(pattern)) {
      result += esc(text.slice(previous, match.index)) + `<mark>${esc(match[0])}</mark>`;
      previous = match.index + match[0].length;
    }
    return result + esc(text.slice(previous));
  }
  function storyQuestions(story) {
    const explanation = evidence => `Подсказка из текста: «${story.sentences[evidence][0]}» — ${story.sentences[evidence][1]}`;
    return [...story.questions.map(item => ({ ...item, why: explanation(item.evidence) })), ...story.tf.map(item => ({ q: item.q, opts: ['True — правда', 'False — неверно'], a: item.a ? 0 : 1, why: explanation(item.evidence) }))];
  }
  function courseReading() {
    const l = activeLesson, { story, part, max, sentences, size } = sliceStory();
    const key = storyKey();
    const questions = storyQuestions(story);
    return `<div class="story-select" role="group" aria-label="Выбор истории">${l.stories.map((s, i) => `<button data-c-story="${i}" aria-pressed="${currentStory() === s}" class="${currentStory() === s ? 'selected' : ''}">${s.icon} История ${i + 1}</button>`).join('')}</div><span class="eyebrow">Оригинальная история · ${story.sentences.length} предложений</span><h2>${story.icon} ${esc(story.title)}</h2><p>Нажми на предложение, чтобы увидеть перевод. Кнопка озвучивания читает текущую часть текста.</p><div class="actions"><button class="btn secondary small" data-c-action="highlight" aria-pressed="${highlighted}">${highlighted ? 'Скрыть выделение' : l.level === 'Pre-A1' ? 'Показать слова темы' : 'Показать грамматику'}</button>${cButton('🔊 Слушать текст', 'speak', 'small')}${cButton('Остановить', 'stop', 'secondary small')}</div><p id="course-status" class="feedback" aria-live="polite"></p>${max > 0 ? `<span class="badge">Часть ${part + 1} из ${max + 1} · 5 коротких предложений</span>` : ''}<div class="reading">${sentences.map(([en, ru], i) => {
      const index = part * size + i, shown = !!state.translations[`${key}-${index}`];
      return `<button class="sentence" data-c-sentence="${index}" aria-expanded="${shown}"><span lang="en">${highlightText(en)}</span>${shown ? `<span class="translation">${esc(ru)}</span>` : ''}</button>`;
    }).join('')}</div>${max > 0 ? `<div class="actions"><button class="btn secondary small" data-c-action="prev" ${part === 0 ? 'disabled' : ''}>← Назад</button><button class="btn small" data-c-action="next" ${part === max ? 'disabled' : ''}>Следующая часть →</button></div>` : ''}<div class="actions">${cButton(state.read[key] ? '✓ История прочитана' : 'Отметить: я прочитал историю', 'read', 'secondary small')}</div><p id="course-read-status" class="feedback" aria-live="polite"></p><h3>Словарик истории</h3>${vocabHTML(story.vocab, true)}<h3 style="margin-top:28px">Поговорим об истории</h3><p>Пять вопросов по тексту. После них — пять заданий True/False (правда или неверно).</p><form data-c-form="${key}">${formQuestions(questions.slice(0, 5), key)}<h3 style="margin-top:24px">Правда или выдумка?</h3>${formQuestions(questions.slice(5), key, 5)}<div class="actions"><button class="btn" type="submit">Проверить понимание</button></div><p id="course-summary" aria-live="polite"></p></form>`;
  }
  function courseTest() {
    const l = activeLesson;
    return `<span class="eyebrow">Маленькая проверка</span><h2>Что ты уже умеешь? 🏆</h2><p>Пять вопросов по теме «${esc(l.title)}». Попробуй ответить самостоятельно. После проверки можно исправить ошибки.</p><form data-c-form="${l.id}-test">${formQuestions(l.test, `${l.id}-test`)}<div class="actions"><button class="btn" type="submit">Проверить мини-тест</button></div><p id="course-summary" aria-live="polite">${state.completed[l.id] ? '✓ Мини-тест уже пройден. Можно повторить без дополнительных баллов за те же задания.' : ''}</p></form>`;
  }
  function checkCourseForm(key, items) {
    const answers = state.answers[key] || {};
    state.checked[key] = true;
    let correct = 0, added = 0;
    items.forEach((item, i) => {
      if (answers[i] === item.a) {
        correct++;
        const id = `course:${key}:${i}`;
        if (!saved.awards.includes(id)) { award(id); added += 5; }
      }
    });
    if (activeLesson && key === `${activeLesson.id}-test` && correct === items.length) state.completed[activeLesson.id] = true;
    persistCourse();
    items.forEach((item, i) => feedback(`c-feedback-${key}-${i}`, answerMessage(item, answers[i]), answers[i] === item.a));
    const perfect = correct === items.length;
    announce(`Верно: ${correct} из ${items.length}. ${perfect ? 'Отличная работа!' : 'Прочитай подсказки и попробуй ещё раз.'}${added ? ` +${added} баллов!` : ''}`, perfect, 'course-summary');
  }
  function restorePracticeUI() {
    if (!activeLesson || state.tabs[activeLesson.id] !== 'practice') return;
    drawCourseOrder();
    document.querySelectorAll('[data-c-left], [data-c-right]').forEach(b => {
      const value = Number(b.dataset.cLeft ?? b.dataset.cRight);
      b.disabled = matchedWords.has(value);
      b.classList.toggle('chosen', matchedWords.has(value) || (b.hasAttribute('data-c-left') && value === selectedMatch));
    });
  }
  function drawCourseOrder() {
    const zone = document.querySelector('#course-order-zone');
    if (!zone) return;
    const bank = activeLesson.order[0].split(' ').reverse();
    zone.innerHTML = sentenceWords.map(i => `<button class="word" data-c-remove="${i}" type="button">${esc(bank[i])}</button>`).join('');
    document.querySelectorAll('[data-c-word]').forEach(b => b.disabled = sentenceWords.includes(Number(b.dataset.cWord)));
  }
  function quizItems() {
    return quizPresets[selectedQuiz].ids.flatMap(id => {
      const l = courseById.get(id);
      return l.test.slice(0, 2).map(q => ({ ...q, q: `${l.title}: ${q.q}` }));
    });
  }
  function knowledgePage() {
    const items = quizItems(), key = `knowledge-${selectedQuiz}`;
    return `<div class="trail"><a href="#home">Главная</a> / Проверить знания</div><section class="panel"><h1 style="font-size:38px">Проверить знания 🏆</h1><p>Это учебная проверка освоенных тем, а не официальный экзамен или определение уровня CEFR. Здесь нет таймера и штрафов.</p><label for="knowledge-level">Что повторим?</label> <select class="course-select" id="knowledge-level">${Object.entries(quizPresets).map(([id, q]) => `<option value="${id}" ${selectedQuiz === id ? 'selected' : ''}>${q.title}</option>`).join('')}</select><p style="margin-top:16px">${items.length} вопросов. Ответы сохраняются в этом браузере.</p><form data-c-form="${key}">${formQuestions(items, key)}<div class="actions"><button class="btn" type="submit">Проверить знания</button></div><p id="course-summary" aria-live="polite"></p></form><div class="feature"><div><h3>Повторим Present Simple?</h3><p>Мини-тест первого урока тоже доступен.</p></div><a class="btn secondary" href="#test">Открыть мини-тест →</a></div></section>`;
  }
  const animals = [
    { clue: 'Я мяукаю и люблю греться на солнышке.', emoji: '🐱', answer: 'cat', options: ['cat', 'duck', 'horse'], why: 'Cat — кот или кошка.' },
    { clue: 'У меня длинные уши, я люблю прыгать.', emoji: '🐰', answer: 'rabbit', options: ['fish', 'rabbit', 'bear'], why: 'Rabbit — кролик.' },
    { clue: 'У меня плавники, я живу в воде.', emoji: '🐟', answer: 'fish', options: ['bird', 'dog', 'fish'], why: 'Fish — рыба.' },
    { clue: 'Я зелёная, прыгаю и квакаю у пруда.', emoji: '🐸', answer: 'frog', options: ['frog', 'fox', 'cat'], why: 'Frog — лягушка.' },
    { clue: 'Я крякаю и плаваю по пруду.', emoji: '🦆', answer: 'duck', options: ['horse', 'duck', 'rabbit'], why: 'Duck — утка.' },
    { clue: 'Я большая, у меня грива и копыта.', emoji: '🐴', answer: 'horse', options: ['cat', 'frog', 'horse'], why: 'Horse — лошадь.' }
  ];
  const wordBoards = [
    { letters: ['C', 'A', 'T', 'X', 'R', 'E', 'D', 'X', 'D', 'O', 'G', 'X', 'B', 'A', 'G', 'X'], words: [{ text: 'CAT', ru: 'кот', cells: [0, 1, 2] }, { text: 'RED', ru: 'красный', cells: [4, 5, 6] }, { text: 'DOG', ru: 'собака', cells: [8, 9, 10] }, { text: 'BAG', ru: 'сумка', cells: [12, 13, 14] }] },
    { letters: ['B', 'F', 'C', 'B', 'O', 'I', 'A', 'L', 'A', 'S', 'R', 'U', 'T', 'H', 'X', 'E'], words: [{ text: 'BOAT', ru: 'лодка', cells: [0, 4, 8, 12] }, { text: 'FISH', ru: 'рыба', cells: [1, 5, 9, 13] }, { text: 'CAR', ru: 'машинка', cells: [2, 6, 10] }, { text: 'BLUE', ru: 'синий', cells: [3, 7, 11, 15] }] }
  ];
  const gameSentences = [
    { en: 'I am happy', ru: 'Я счастлив.', why: 'С I используем am, затем happy.' },
    { en: 'She has got a kite', ru: 'У неё есть воздушный змей.', why: 'С she используем has got, затем a kite.' },
    { en: 'They are my friends', ru: 'Они мои друзья.', why: 'С they используем are, my friends — «мои друзья».' },
    { en: 'This is an apple', ru: 'Это яблоко.', why: 'This is — «Это». Перед apple ставим an.' },
    { en: 'We have got two cats', ru: 'У нас есть два кота.', why: 'С we используем have got, после two — cats во множественном числе.' }
  ];
  let selectedCells = [];
  function drawGames() {
    return `<div class="trail"><a href="#home">Главная</a> / Игры</div><section class="panel"><h1 style="font-size:38px">Играем с английским 🧩</h1><p>Три игры по изученным темам. За каждое новое решение — 5 баллов. Ошибки помогают учиться!</p><div class="tabs" role="group" aria-label="Выбор игры">${[['animal', '🐾 Угадай животное'], ['word', '🔎 Найди слово'], ['sentence', '✏️ Собери предложение']].map(([id, label]) => `<button data-game-mode="${id}" aria-pressed="${gameMode === id}" class="${gameMode === id ? 'selected' : ''}">${label}</button>`).join('')}</div><div id="game-area">${gameMode === 'animal' ? animalGame() : gameMode === 'word' ? wordGame() : sentenceGame()}</div><p class="feedback" id="game-status" aria-live="polite"></p><p class="feedback" id="game-speech" aria-live="polite"></p></section>`;
  }
  function animalGame() {
    const a = animals[gameRound % animals.length];
    return `<h2>Угадай животное</h2><span class="badge">Загадка ${gameRound % animals.length + 1} из ${animals.length}</span><p style="margin-top:16px">${a.clue}</p><div class="choices">${a.options.map(option => `<button class="choice" data-game-animal="${option}" type="button">${option}</button>`).join('')}</div><div class="actions">${cButton('Следующая загадка →', 'game-next', 'secondary small')}</div>`;
  }
  function wordGame() {
    const board = wordBoards[gameRound % wordBoards.length];
    return `<h2>Найди слово</h2><p>Нажимай буквы по порядку слева направо или сверху вниз. Повторный клик убирает последнюю букву. Найди: ${board.words.map(w => `${w.ru} (${w.text.length} буквы)`).join(', ')}.</p><div class="word-search" role="group" aria-label="Поле букв">${board.letters.map((c, i) => `<button class="choice search-cell ${board.words.some(w => searchFound.has(w.text) && w.cells.includes(i)) ? 'found' : ''}" type="button" data-game-cell="${i}" aria-label="Ряд ${Math.floor(i / 4) + 1}, столбец ${i % 4 + 1}, буква ${c}" aria-pressed="false">${c}</button>`).join('')}</div><p>Выбрано: <b id="search-current">—</b></p><p id="search-found">Найдено: ${[...searchFound].join(', ') || 'пока ни одного'}</p><div class="actions">${cButton('Проверить слово', 'game-check-word', 'small')}${cButton('Очистить выбор', 'game-clear-word', 'secondary small')}${cButton('Другое поле →', 'game-next', 'secondary small')}</div>`;
  }
  function sentenceGame() {
    const s = gameSentences[gameRound % gameSentences.length];
    return `<h2>Собери предложение</h2><span class="badge">Предложение ${gameRound % gameSentences.length + 1} из ${gameSentences.length}</span><p style="margin-top:16px">${s.ru} Нажимай слова в правильном порядке. Слово в ответе можно убрать нажатием.</p><div class="choices">${s.en.split(' ').reverse().map((w, i) => `<button class="word" data-game-word="${i}" type="button">${w}</button>`).join('')}</div><div class="answer-zone" id="game-order-zone" aria-label="Твоё предложение"></div><div class="actions">${cButton('Проверить предложение', 'game-check-sentence', 'small')}${cButton('Сбросить слова', 'game-clear-sentence', 'secondary small')}${cButton('Другое предложение →', 'game-next', 'secondary small')}</div>`;
  }
  function drawGameOrder() {
    const bank = gameSentences[gameRound % gameSentences.length].en.split(' ').reverse();
    document.querySelector('#game-order-zone').innerHTML = gameOrder.map(i => `<button class="word" data-game-remove="${i}" type="button">${bank[i]}</button>`).join('');
    document.querySelectorAll('[data-game-word]').forEach(b => b.disabled = gameOrder.includes(Number(b.dataset.gameWord)));
  }
  home = () => originalHome().replace('href="#test"', 'href="#knowledge"');
  lessons = drawCatalog;
  games = drawGames;
  parents = () => originalParents().replace('На первом этапе доступен урок Present Simple. Это демонстрация будущего курса, а не полная программа Pre-A1–A2.', 'Сейчас доступны 7 тем Pre-A1, 5 тем Beginner A1 и урок Present Simple. Остальные темы Elementary A1 и A2 будут добавлены после проверки текущего этапа.').replace('<h3>Прогресс остаётся', `<h3>Как проходить курс</h3><p>Начните с алфавита и приветствий, затем переходите к числам, цветам, животным, семье и игрушкам. В Beginner A1 порядок такой: местоимения → to be → a/an → множественное число → have got/has got. После этого попробуйте Present Simple.</p><p>Один урок можно разделить на несколько дней: объяснение и слова, затем практика, затем по одной истории. Перевод открывается нажатием на предложение. Для младших детей новые истории разбиты на части по 5 предложений. В игре «Найди слово» буквы выбирают слева направо или сверху вниз.</p><h3>Ваши отметки</h3><p>Пройдено мини-тестов новых уроков: ${Object.keys(state.completed).filter(k => state.completed[k]).length} из 12. Прочитано новых историй: ${Object.keys(state.read).filter(k => state.read[k]).length} из 24. Это отметки выполненных заданий, а не оценка способностей ребёнка.</p><div class="actions"><a class="btn secondary" href="#knowledge">Проверить знания</a><a class="btn secondary" href="#lessons">Выбрать урок</a></div><h3>Прогресс остаётся`);
  let previousRoute = '';
  render = () => {
    courseStop();
    const route = location.hash.slice(1);
    if (route !== previousRoute) { sentenceWords = []; matchedWords.clear(); selectedMatch = null; if (route === 'games') resetGameRound(); previousRoute = route; }
    const id = route.startsWith('course/') ? route.slice(7) : null;
    activeLesson = courseById.get(id) || null;
    if (id) {
      app.innerHTML = activeLesson ? lessonShell(activeLesson) : '<section class="panel"><h2>Урок не найден</h2><a href="#lessons" class="btn">К списку уроков</a></section>';
      document.querySelectorAll('nav a').forEach(a => a.classList.toggle('active', a.hash === '#lessons'));
      restorePracticeUI(); persist();
    } else if (route === 'knowledge') {
      app.innerHTML = knowledgePage();
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      persist();
    } else originalRender();
  };
  function rerenderKeepScroll() { const y = scrollY; render(); scrollTo(0, y); }
  app.addEventListener('change', event => {
    const el = event.target;
    if (el.dataset.cAnswer) {
      const key = el.dataset.cAnswer;
      if (!state.answers[key]) state.answers[key] = {};
      state.answers[key][el.dataset.cIndex] = Number(el.value);
      // Rechecking remains explicit: editing a radio clears stale feedback for that question.
      const message = document.getElementById(`c-feedback-${key}-${el.dataset.cIndex}`);
      if (message) { message.textContent = ''; message.classList.remove('good'); }
      persistCourse();
    } else if (el.id === 'course-age') {
      saved.age = el.value; persist(); persistCourse(); rerenderKeepScroll();
    } else if (el.id === 'knowledge-level') {
      selectedQuiz = el.value; rerenderKeepScroll();
    }
  });
  app.addEventListener('submit', event => {
    const form = event.target;
    const key = form.dataset.cForm;
    if (!key) return;
    event.preventDefault();
    const items = activeLesson ? key.endsWith('-practice') ? activeLesson.practice : key.endsWith('-test') ? activeLesson.test : storyQuestions(currentStory()) : quizItems();
    checkCourseForm(key, items);
  });
  app.addEventListener('click', event => {
    const b = event.target.closest('button');
    if (!b) return;
    if (b.dataset.action === 'confirm-reset') {
      state = { answers: {}, checked: {}, tabs: {}, stories: {}, parts: {}, translations: {}, read: {}, completed: {} };
      persistCourse(); selectedMatch = null; matchedWords.clear(); sentenceWords = []; gameRound = 0; gameOrder = []; searchFound.clear(); selectedCells = [];
      render(); feedback('parent-status', 'Прогресс всех уроков и игр сброшен.'); return;
    }
    if (b.dataset.cSay !== undefined) { speakCourse(b.dataset.cSay); return; }
    if (b.dataset.cTab) {
      state.tabs[activeLesson.id] = b.dataset.cTab;
      sentenceWords = []; selectedMatch = null; matchedWords.clear();
      persistCourse(); render(); return;
    }
    if (b.dataset.cStory !== undefined) { state.stories[activeLesson.id] = Number(b.dataset.cStory); persistCourse(); render(); return; }
    if (b.dataset.cSentence !== undefined) {
      const key = `${storyKey()}-${b.dataset.cSentence}`;
      state.translations[key] = !state.translations[key]; persistCourse(); rerenderKeepScroll(); return;
    }
    if (b.dataset.cWord !== undefined) { sentenceWords.push(Number(b.dataset.cWord)); drawCourseOrder(); return; }
    if (b.dataset.cRemove !== undefined) { sentenceWords = sentenceWords.filter(i => i !== Number(b.dataset.cRemove)); drawCourseOrder(); return; }
    if (b.dataset.cLeft !== undefined) {
      selectedMatch = Number(b.dataset.cLeft); restorePracticeUI(); return;
    }
    if (b.dataset.cRight !== undefined) {
      if (selectedMatch === null) { announce('Сначала выбери английское слово.', false, 'course-match-status'); return; }
      const ok = selectedMatch === Number(b.dataset.cRight);
      if (ok) { matchedWords.add(selectedMatch); announce('Отличная пара!'+award(`course:${activeLesson.id}:match:${selectedMatch}`), true, 'course-match-status'); selectedMatch = null; restorePracticeUI(); }
      else announce('Пока не совпало. Посмотри словарик и попробуй другой перевод.', false, 'course-match-status');
      return;
    }
    if (b.dataset.gameMode) { gameMode = b.dataset.gameMode; gameRound = 0; resetGameRound(); render(); return; }
    if (b.dataset.gameAnimal) {
      const a = animals[gameRound % animals.length];
      if (b.dataset.gameAnimal === a.answer) {
        announce(`${a.emoji} Верно! ${a.why}${award(`game:animal:${gameRound % animals.length}`)}`, true, 'game-status');
        speakCourse(a.answer, 'game-speech');
      } else announce('Попробуй ещё раз. '+a.clue, false, 'game-status');
      return;
    }
    if (b.dataset.gameWord !== undefined) { gameOrder.push(Number(b.dataset.gameWord)); drawGameOrder(); return; }
    if (b.dataset.gameRemove !== undefined) { gameOrder = gameOrder.filter(i => i !== Number(b.dataset.gameRemove)); drawGameOrder(); return; }
    if (b.dataset.gameCell !== undefined) {
      const i = Number(b.dataset.gameCell);
      if (selectedCells[selectedCells.length - 1] === i) selectedCells.pop();
      else if (!selectedCells.includes(i)) selectedCells.push(i);
      document.querySelectorAll('[data-game-cell]').forEach(b => { const selected = selectedCells.includes(Number(b.dataset.gameCell)); b.classList.toggle('chosen', selected); b.setAttribute('aria-pressed', selected); });
      const board = wordBoards[gameRound % wordBoards.length];
      document.querySelector('#search-current').textContent = selectedCells.map(i => board.letters[i]).join('') || '—'; return;
    }
    const action = b.dataset.cAction;
    if (!action) return;
    if (['practice', 'stories'].includes(action)) { state.tabs[activeLesson.id] = action; persistCourse(); render(); }
    else if (action === 'highlight') { highlighted = !highlighted; rerenderKeepScroll(); }
    else if (action === 'speak') speakCourse(sliceStory().sentences.map(x => x[0]).join(' '));
    else if (action === 'stop') { courseStop(); announce('Озвучка остановлена.'); }
    else if (action === 'prev' || action === 'next') {
      const data = sliceStory(); state.parts[storyKey()] = data.part + (action === 'next' ? 1 : -1); persistCourse(); render();
    } else if (action === 'read') {
      state.read[storyKey()] = true; persistCourse();
      announce('История отмечена.'+award(`course:${storyKey()}:read`, 10), true, 'course-read-status'); b.textContent = '✓ История прочитана';
    } else if (action === 'check-order') {
      const bank = activeLesson.order[0].split(' ').reverse();
      const ok = sentenceWords.map(i => bank[i]).join(' ') === activeLesson.order[0];
      announce(ok ? 'Получилось! '+activeLesson.order[0]+'.'+award(`course:${activeLesson.id}:order`) : `Пока не получилось. Подсказка: ${activeLesson.order[0]}. Собери слова в этом порядке.`, ok, 'course-order-status');
    } else if (action === 'reset-order') { sentenceWords = []; drawCourseOrder(); announce('Попробуй заново.', false, 'course-order-status'); }
    else if (action === 'game-next') { gameRound++; resetGameRound(); render(); }
    else if (action === 'game-clear-sentence') { gameOrder = []; drawGameOrder(); announce('Слова сброшены.', false, 'game-status'); }
    else if (action === 'game-check-sentence') {
      const s = gameSentences[gameRound % gameSentences.length], bank = s.en.split(' ').reverse();
      const ok = gameOrder.map(i => bank[i]).join(' ') === s.en;
      announce(ok ? 'Верно! '+s.en+'.'+award(`game:sentence:${gameRound % gameSentences.length}`) : 'Попробуй ещё раз. '+s.why, ok, 'game-status');
      if (ok) speakCourse(s.en, 'game-speech');
    } else if (action === 'game-clear-word') { selectedCells = []; render(); }
    else if (action === 'game-check-word') {
      const board = wordBoards[gameRound % wordBoards.length];
      const word = board.words.find(w => w.cells.join(',') === selectedCells.join(','));
      if (word) {
        searchFound.add(word.text); selectedCells = []; render();
        announce(`Найдено ${word.text} — ${word.ru}!${award(`game:word:${gameRound % wordBoards.length}:${word.text}`)}${searchFound.size === board.words.length ? ' Все слова найдены!' : ''}`, true, 'game-status');
        speakCourse(word.text.toLowerCase(), 'game-speech');
      } else announce('Пока не получилось. Проверь буквы и направление: слева направо или сверху вниз.', false, 'game-status');
    }
  });
  function resetGameRound() { gameOrder = []; selectedCells = []; searchFound = new Set(); }
  window.addEventListener('pagehide', courseStop);
  render();
})();
