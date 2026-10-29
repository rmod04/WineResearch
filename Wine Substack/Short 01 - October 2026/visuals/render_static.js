// Renders the Short 01 static images from a scratch copy that sits beside
// chart.umd.min.js, fonts.css and fonts/ (plus Montserrat 700 for the boxes).
const { chromium } = require('playwright');
const path = require('path');
const R = process.argv[2], OUT = process.argv[3];
(async () => {
  const browser = await chromium.launch();
  const visual = async (file, out, setup) => {
    const p = await browser.newPage({ viewport: { width: 920, height: 200 }, deviceScaleFactor: 2 });
    const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('requestfailed', r => errs.push('FAILED ' + r.url()));
    await p.goto('file://' + path.join(R, file));
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(1200);
    if (setup) { await p.evaluate(setup); await p.waitForTimeout(800); }
    // Strip interaction chrome: toggle buttons, focus and tooltips.
    await p.addStyleTag({ content: '.toggle-row,.hint{display:none!important}' });
    await p.evaluate(() => { if (window.Chart) Object.values(Chart.instances).forEach(c => { c.options.animation = false; c.resize(); c.update('none'); }); });
    await p.mouse.move(0, 0); await p.waitForTimeout(500);
    // Full width, cut 28 px below the card so no stray space trails the footer.
    const bottom = await p.evaluate(() => Math.ceil(document.querySelector('.container').getBoundingClientRect().bottom + window.scrollY));
    await p.setViewportSize({ width: 920, height: bottom + 28 });
    await p.waitForTimeout(300);
    await p.screenshot({ path: path.join(OUT, out), clip: { x: 0, y: 0, width: 920, height: bottom + 28 } });
    if (errs.length) console.log(file, errs);
    await p.close();
  };
  await visual('visual_name_premium.html', 'visual_name_premium.png');
  await visual('visual_name_premium.html', 'visual_name_premium_medians.png', () => setView('median'));
  await visual('visual_older_vintages.html', 'visual_older_vintages.png');
  await visual('visual_price_ladder.html', 'visual_price_ladder.png');
  await visual('visual_vintage_multiple.html', 'visual_vintage_multiple.png');
  const p = await browser.newPage({ viewport: { width: 960, height: 200 }, deviceScaleFactor: 2 });
  await p.goto('file://' + path.join(R, 'boxes.html'));
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
  for (const id of await p.$$eval('.frame', els => els.map(e => e.id))) {
    await p.locator('#' + id).screenshot({ path: path.join(OUT, 'boxes', id + '.png') });
  }
  await browser.close();
})();
