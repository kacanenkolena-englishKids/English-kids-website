const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.SITE_URL || 'http://127.0.0.1:8000';
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(base);
    const previous = { points: 15, awards: ['practice-0', 'read-0'], age: 'young', translations: { '0-0': true }, tab: 'stories' };
    await page.evaluate(value => localStorage.setItem('english-joy-v1', JSON.stringify(value)), previous);
    await page.reload();
    await page.goto(`${base}/#course/articles`);
    assert.equal(await page.locator('#points').textContent(), '15');
    await page.locator('[data-c-tab="stories"]').click();
    await page.locator('[data-c-action="read"]').click();
    assert.equal(await page.locator('#points').textContent(), '25');
    const restored = await page.evaluate(() => JSON.parse(localStorage.getItem('english-joy-v1')));
    assert.ok(restored.awards.includes('practice-0'));
    assert.ok(restored.awards.includes('read-0'));
    assert.equal(restored.translations['0-0'], true);
    await page.goto(`${base}/#lesson`);
    assert.equal(await page.locator('.translation').first().textContent(), 'Луна живёт в маленьком доме.');
    // Missing speech and disabled localStorage must not prevent learning.
    const fallback = await browser.newPage();
    fallback.on('pageerror', error => errors.push(error.message));
    await fallback.addInitScript(() => {
      for (const name of ['speechSynthesis', 'SpeechSynthesisUtterance']) {
        let owner = window;
        while (owner) {
          if (Object.prototype.hasOwnProperty.call(owner, name)) delete owner[name];
          owner = Object.getPrototypeOf(owner);
        }
      }
      Object.defineProperty(Storage.prototype, 'setItem', { value() { throw new DOMException('Disabled', 'SecurityError'); } });
      Object.defineProperty(Storage.prototype, 'getItem', { value() { throw new DOMException('Disabled', 'SecurityError'); } });
    });
    await fallback.goto(`${base}/#course/to-be`);
    // Availability checks use the existence of a real speech object.
    await fallback.locator('[data-c-tab="stories"]').click();
    await fallback.locator('[data-c-action="speak"]').click();
    assert.match(await fallback.locator('#course-status').textContent(), /недоступна/);
    await fallback.locator('[data-c-sentence="0"]').click();
    assert.equal(await fallback.locator('.translation').textContent(), 'Я Нора.');
    await fallback.locator('[data-c-tab="practice"]').click();
    await fallback.locator('input[name="c-0"][value="1"]').check();
    await fallback.getByRole('button', { name: 'Проверить ответы', exact: true }).click();
    assert.match(await fallback.locator('#course-summary').textContent(), /1 из 3/);
    assert.equal(await fallback.locator('#points').textContent(), '5');
    assert.deepEqual(errors, []);
    // A downloaded folder works with file:// and no server/fetch calls.
    const local = await browser.newPage();
    local.on('pageerror', error => errors.push(error.message));
    const { pathToFileURL } = require('node:url');
    const path = require('node:path');
    let localFile = 'PASS';
    try {
      await local.goto(pathToFileURL(path.resolve(__dirname, '../index.html')).href + '#course/greetings');
      assert.equal(await local.locator('.lesson-top h1').textContent(), 'Приветствия');
      await local.locator('[data-c-tab="practice"]').click();
      assert.equal(await local.locator('[data-c-form] .course-question').count(), 3);
    } catch (error) {
      if (!error.message.includes('ERR_BLOCKED_BY_ADMINISTRATOR')) throw error;
      localFile = 'SKIPPED: managed Chromium policy blocks file:// navigation';
    }
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ result: 'PASS', checks: ['retained Present Simple progress', 'blocked storage', 'unavailable speech'], localFile }));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
