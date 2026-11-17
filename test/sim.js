// Balance-Simulation: spielt Jagden im Schnelldurchlauf (Bannstrahl 3×/s auf einen Dämon, wie ein aktiver Spieler) und gibt Kreise pro Jagd aus.
// Aufruf: node test/sim.js [Jagden=60]   – braucht Playwright (npm i -D playwright, falls nicht global vorhanden)
// Bricht mit Fehlercode ab, wenn das Spiel dabei einen JS-Fehler wirft – dient damit auch als Rauchtest.
const { chromium } = require('playwright');
const path = require('path');
const runs = +process.argv[2] || 60;
(async () => {
  const b = await chromium.launch(), p = await b.newPage(), errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.resolve(__dirname, '../index.html'));
  await p.waitForFunction(() => window.__DJ);
  const log = await p.evaluate(n => {
    const D = window.__DJ, out = [];
    D.save.auto = true; // Auto-Jagd wählt Segnungen selbst
    for (let i = 0, c = 1; i < n; i++) {
      D.save.circle = c; D.startRun();
      for (let k = 0; k < 20000 && !D.R.over; k++) {
        D.updateRun(0.05);
        const e = D.R.en.find(e => !e.dead);
        if (k % 7 === 0 && e && !D.R.over) D.smite(e.x, e.y - e.r / 2, true);
      }
      const R = D.R; out.push({ i: i + 1, c: R.c, kills: R.kills, boss: R.bossDead, why: R.why || 'zeit', souls: Math.round(R.souls), bought: D.autoBuy(), max: D.save.maxCircle });
      c = R.bossDead ? D.save.maxCircle : Math.max(1, Math.min(c, D.save.maxCircle - 2)); // nach Niederlage zwei Kreise unter dem Rekord farmen
    }
    return out;
  }, runs);
  for (const r of log) console.log(`Jagd ${String(r.i).padStart(3)}  Kreis ${String(r.c).padStart(3)}  Kills ${String(r.kills).padStart(4)}  Fürst ${r.boss ? '✔' : '✘'}  Ende ${r.why.padEnd(5)}  Seelen ${String(r.souls).padStart(10)}  Knoten +${r.bought}`);
  const last = log[log.length - 1];
  console.log(`\nErgebnis: Kreis ${last.max} nach ${runs} Jagden (${(runs / Math.max(1, last.max - 1)).toFixed(2)} Jagden pro Kreis)`);
  await b.close();
  if (errs.length) { console.error('JS-Fehler im Spiel:\n' + [...new Set(errs)].join('\n')); process.exit(1); }
})();
