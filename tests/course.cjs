// Optional browser checks. Requires Playwright and Chromium; no application dependencies.
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.SITE_URL || 'http://127.0.0.1:8000';
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(base);
    await page.evaluate(() => { localStorage.clear(); });
    await page.reload();
    const lessons = await page.evaluate(() => courseLessons);
    assert.equal(lessons.length, 12);
    assert.equal(lessons.filter(x => x.level === 'Pre-A1').length, 7);
    assert.equal(lessons.filter(x => x.level === 'Beginner A1').length, 5);
    const titles = new Set();
    let storiesChecked = 0, questionsChecked = 0;
    async function chooseAnswers(items) {
      for (const [i, item] of items.entries()) await page.locator(`input[name="c-${i}"][value="${item.a}"]`).check();
    }
    for (const lesson of lessons) {
      assert.equal(lesson.stories.length, 2);
      assert.ok(lesson.vocab.length >= 8 && lesson.vocab.length <= 12);
      await page.goto(`${base}/#course/${lesson.id}`);
      assert.equal(await page.locator('.lesson-top h1').textContent(), lesson.title);
      await page.locator('[data-c-tab="practice"]').click();
      await page.getByRole('button', { name: 'Проверить ответы', exact: true }).click();
      assert.match(await page.locator('#course-summary').textContent(), /0 из 3/);
      await chooseAnswers(lesson.practice);
      await page.getByRole('button', { name: 'Проверить ответы', exact: true }).click();
      assert.match(await page.locator('#course-summary').textContent(), /3 из 3/);
      for (let i = lesson.order[0].split(' ').length - 1; i >= 0; i--) await page.locator(`[data-c-word="${i}"]`).click();
      await page.locator('[data-c-action="check-order"]').click();
      assert.match(await page.locator('#course-order-status').textContent(), /Получилось/);
      for (let i = 0; i < 4; i++) {
        await page.locator(`[data-c-left="${i}"]`).click();
        await page.locator(`[data-c-right="${i}"]`).click();
        assert.ok(await page.locator(`[data-c-left="${i}"]`).isDisabled());
      }
      await page.locator('[data-c-tab="test"]').click();
      const wrong = (lesson.test[0].a + 1) % lesson.test[0].opts.length;
      await page.locator(`input[name="c-0"][value="${wrong}"]`).check();
      await page.getByRole('button', { name: 'Проверить мини-тест', exact: true }).click();
      assert.ok((await page.locator(`[id="c-feedback-${lesson.id}-test-0"]`).textContent()).includes(lesson.test[0].why));
      await chooseAnswers(lesson.test);
      await page.getByRole('button', { name: 'Проверить мини-тест', exact: true }).click();
      assert.match(await page.locator('#course-summary').textContent(), /5 из 5/);
      questionsChecked += 8;
      await page.locator('[data-c-tab="stories"]').click();
      for (const [index, story] of lesson.stories.entries()) {
        titles.add(story.title);
        assert.ok(story.sentences.length >= 20 && story.sentences.length <= 30);
        assert.ok(story.vocab.length >= 8 && story.vocab.length <= 12);
        assert.equal(story.questions.length, 5);
        assert.equal(story.tf.length, 5);
        assert.ok(story.sentences.every(row => row.length === 2 && row.every(x => x.length)));
        await page.locator(`[data-c-story="${index}"]`).click();
        await page.selectOption('#course-age', 'young');
        assert.equal(await page.locator('[data-c-sentence]').count(), 5);
        await page.locator('[data-c-sentence="0"]').click();
        assert.equal(await page.locator('.translation').textContent(), story.sentences[0][1]);
        if (await page.locator('[data-c-action="highlight"]').getAttribute('aria-pressed') === 'false') await page.locator('[data-c-action="highlight"]').click();
        await page.selectOption('#course-age', 'older');
        assert.equal(await page.locator('[data-c-sentence]').count(), 20);
        assert.ok(await page.locator('mark').count() > 0);
        const items = [...story.questions, ...story.tf.map(x => ({ ...x, a: x.a ? 0 : 1 }))];
        await chooseAnswers(items);
        await page.getByRole('button', { name: 'Проверить понимание' }).click();
        assert.match(await page.locator('#course-summary').textContent(), /10 из 10/);
        for (const item of items) assert.ok(story.sentences[item.evidence]);
        await page.locator('[data-c-action="read"]').click();
        await page.selectOption('#course-age', 'young');
        for (let n = 0; n < 3; n++) await page.locator('[data-c-action="next"]').click();
        assert.ok(await page.locator('[data-c-action="next"]').isDisabled());
        assert.equal(await page.locator('[data-c-sentence]').count(), 5);
        // Verify that speech receives only the visible part, without a remote API.
        await page.evaluate(() => { speechSynthesis.speak = u => { window.speechRequest = { text: u.text, lang: u.lang }; }; });
        await page.locator('[data-c-action="speak"]').click();
        assert.deepEqual(await page.evaluate(() => window.speechRequest), { text: story.sentences.slice(15).map(x => x[0]).join(' '), lang: 'en-GB' });
        await page.locator('[data-c-action="stop"]').click();
        assert.match(await page.locator('#course-status').textContent(), /остановлена/);
        storiesChecked++; questionsChecked += 10;
      }
    }
    assert.equal(titles.size, 24);
    const before = await page.locator('#points').textContent();
    await page.reload();
    assert.equal(await page.locator('#points').textContent(), before);
    assert.equal(await page.locator('.translation').count(), 0); // Last viewed part has no open translation.
    await page.locator('[data-c-action="prev"]').click();
    await page.locator('[data-c-action="prev"]').click();
    await page.locator('[data-c-action="prev"]').click();
    assert.equal(await page.locator('.translation').count(), 1);
    await page.getByRole('button', { name: 'Проверить понимание' }).click();
    assert.equal(await page.locator('#points').textContent(), before);
    await page.goto(`${base}/#lessons`);
    assert.equal(await page.locator('a.card').count(), 13);
    assert.equal(await page.locator('a.card[href="#course/have-got"]').textContent().then(s => s.includes('пройден')), true);
    // Both knowledge checks: different lengths and persistent answers.
    await page.goto(`${base}/#knowledge`);
    for (const level of ['pre', 'beginner']) {
      await page.selectOption('#knowledge-level', level);
      const ids = lessons.filter(l => l.level === (level === 'pre' ? 'Pre-A1' : 'Beginner A1'));
      const items = ids.flatMap(l => l.test.slice(0, 2));
      await chooseAnswers(items);
      await page.getByRole('button', { name: 'Проверить знания', exact: true }).click();
      assert.match(await page.locator('#course-summary').textContent(), new RegExp(`${items.length} из ${items.length}`));
      questionsChecked += items.length;
    }
    // All animal rounds.
    await page.goto(`${base}/#games`);
    for (const answer of ['cat', 'rabbit', 'fish', 'frog', 'duck', 'horse']) {
      await page.locator(`[data-game-animal="${answer}"]`).click();
      assert.match(await page.locator('#game-status').textContent(), /Верно/);
      const score = await page.locator('#points').textContent();
      await page.locator(`[data-game-animal="${answer}"]`).click();
      assert.equal(await page.locator('#points').textContent(), score);
      await page.locator('[data-c-action="game-next"]').click();
    }
    await page.locator('[data-game-mode="word"]').click();
    for (const board of [[[0,1,2],[4,5,6],[8,9,10],[12,13,14]], [[0,4,8,12],[1,5,9,13],[2,6,10],[3,7,11,15]]]) {
      for (const cells of board) {
        for (const cell of cells) await page.locator(`[data-game-cell="${cell}"]`).click();
        await page.locator('[data-c-action="game-check-word"]').click();
        assert.match(await page.locator('#game-status').textContent(), /Найдено/);
      }
      assert.match(await page.locator('#game-status').textContent(), /Все слова найдены/);
      await page.locator('[data-c-action="game-next"]').click();
    }
    await page.locator('[data-game-mode="sentence"]').click();
    for (const n of [3,5,4,4,5]) {
      for (let i = n - 1; i >= 0; i--) await page.locator(`[data-game-word="${i}"]`).click();
      await page.locator('[data-c-action="game-check-sentence"]').click();
      assert.match(await page.locator('#game-status').textContent(), /Верно/);
      await page.locator('[data-c-action="game-next"]').click();
    }
    // Parent progress and reset covers both old and new storage keys.
    await page.goto(`${base}/#parents`);
    assert.ok((await page.locator('#app').textContent()).includes('12 из 12'));
    assert.ok((await page.locator('#app').textContent()).includes('24 из 24'));
    await page.locator('[data-action="reset-progress"]').click();
    await page.locator('[data-action="confirm-reset"]').click();
    assert.equal(await page.locator('#points').textContent(), '0');
    assert.ok((await page.locator('#app').textContent()).includes('0 из 12'));
    await page.reload();
    assert.equal(await page.locator('#points').textContent(), '0');
    // Layout and direct hash access, including local script routes.
    for (const width of [360, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of ['home', 'lessons', 'course/alphabet', 'course/have-got', 'games', 'knowledge', 'parents']) {
        await page.goto(`${base}/#${route}`);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow ${width} ${route}`);
      }
    }
    await page.goto(`${base}/#course/to-be`);
    await page.locator('[data-c-tab="stories"]').click();
    await page.screenshot({ path: '/tmp/course-desktop.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: '/tmp/course-mobile.png', fullPage: true });
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ result: 'PASS', lessons: lessons.length, stories: storiesChecked, answeredQuestions: questionsChecked, games: '6 riddles, 8 word searches, 5 sentences', consoleErrors: errors }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
