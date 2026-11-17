// Balance-Simulation: spielt Jagden im Schnelldurchlauf (Bannstrahl 3×/s auf einen Dämon, wie ein aktiver Spieler) und gibt Kreise pro Jagd aus.
// Aufruf: node test/sim.js [Jagden=60] [--asc] [--quiet]   (--asc: Aufstieg nach 6 Jagden ohne neuen Kreis-Rekord; --quiet: nur Tabelle) – braucht Playwright (npm i -D playwright, falls nicht global vorhanden)
// Bricht mit Fehlercode ab, wenn das Spiel dabei einen JS-Fehler wirft – dient damit auch als Rauchtest.
const { chromium } = require('playwright');
const path = require('path');
const runs = +process.argv[2] || 60, ASC = process.argv.includes('--asc'), QUIET = process.argv.includes('--quiet');
(async () => {
  const b = await chromium.launch(), p = await b.newPage(), errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.resolve(__dirname, '../index.html'));
  await p.waitForFunction(() => window.__DJ);
  const log = await p.evaluate(n => {
    const D = window.__DJ, out = [], W = { s: 'souls', b: 'brim', g: 'sig' };
    // kauft jeweils den relativ billigsten bezahlbaren Knoten: Schwurbaum (alle drei Währungen) und Jägerbaum des aktiven Jägers
    const buyAll = D => { let n = 0; for (;;) { let best = null, bc = 0;
      const cand = D.NODES.filter(x => !x.root && x.key !== 'unlock' && D.nodeAvail(x)).map(x => [x, D.nodeCost(x)])
        .concat(D.HT[D.save.hero].filter(D.htAvail).map(x => [x, Math.ceil(x.cost * Math.pow(x.gr, D.save.tree[x.id] || 0))]));
      for (const [x, c] of cand) { const w = W[x.cur], l = D.save.tree[x.id] || 0;
        if (!w || l >= x.max || c > D.save[w]) continue;
        if (!best || c / D.save[w] < bc / D.save[W[best.cur]]) { best = x; bc = c; } }
      if (!best) break; D.save[W[best.cur]] -= bc; D.save.tree[best.id] = (D.save.tree[best.id] || 0) + 1; n++; }
      D.computeStats(); return n; };
    const buyAsc = D => { for (;;) { const a = D.ASC.filter(a => D.al(a.id) < a.max && D.ascCost(a) <= D.save.frag).sort((a, b) => D.ascCost(a) - D.ascCost(b))[0];
      if (!a) break; D.save.frag -= D.ascCost(a); D.save.asc[a.id] = D.al(a.id) + 1; } D.computeStats(); };
    D.save.auto = true; // Auto-Jagd wählt Segnungen selbst
    for (let i = 0, c = 1, stall = 0, rec0 = 1; i < n.runs; i++) {
      D.save.circle = c; D.startRun();
      for (let k = 0; k < 20000 && !D.R.over; k++) {
        D.updateRun(0.05);
        const e = D.R.en.find(e => !e.dead);
        if (k % 7 === 0 && e && !D.R.over) D.smite(e.x, e.y - e.r / 2, true);
      }
      const R = D.R, rec = { i: i + 1, c: R.c, kills: R.kills, boss: R.bossDead, why: R.why || 'zeit', souls: Math.round(R.souls), bought: buyAll(D), max: D.save.maxCircle, asc: 0 };
      stall = D.save.maxCircle > rec0 ? 0 : stall + 1; rec0 = D.save.maxCircle;
      c = R.bossDead ? D.save.maxCircle : Math.max(1, Math.min(c, D.save.maxCircle - 2)); // nach Niederlage zwei Kreise unter dem Rekord farmen
      if (n.asc && stall >= 6 && D.fragGain() > 0) { rec.asc = D.fragGain(); rec.old = D.save.maxCircle; D.ascend(); rec.start = D.save.maxCircle; buyAsc(D); buyAll(D); c = rec0 = D.save.maxCircle; stall = 0; }
      out.push(rec);
    }
    return out;
  }, { runs, asc: ASC });
  if (!QUIET) for (const r of log) console.log(`Jagd ${String(r.i).padStart(3)}  Kreis ${String(r.c).padStart(3)}  Kills ${String(r.kills).padStart(4)}  Fürst ${r.boss ? '✔' : '✘'}  Ende ${r.why.padEnd(5)}  Seelen ${String(r.souls).padStart(10)}  Knoten +${r.bought}${r.asc ? '  AUFSTIEG +' + r.asc + ' Fragmente' : ''}`);
  const best = i => Math.max(...log.slice(0, i).map(r => r.max)), asc = i => log.slice(0, i).filter(r => r.asc).length;
  console.log('\nJagden | bester Kreis | Aufstiege');
  for (const k of [20, 40, 60, 100, 150, 200].filter(k => k <= runs)) console.log(`${String(k).padStart(6)} | ${String(best(k)).padStart(12)} | ${String(asc(k)).padStart(9)}`);
  // je Aufstieg: Startkreis dank „Erinnerung“ und wie viele Jagden bis zum Überholen des alten Rekords
  log.forEach((r, j) => { if (!r.asc) return; const k = log.findIndex((x, i) => i > j && x.max > r.old);
    console.log(`Aufstieg ${asc(j + 1)} nach Jagd ${r.i}: Rekord ${r.old} → Start Kreis ${r.start}, +${r.asc} Fragmente, Rekord ${k < 0 ? 'nicht überholt' : 'überholt nach ' + (k - j) + ' Jagden'}`); });
  console.log(`\nErgebnis: Kreis ${best(runs)} nach ${runs} Jagden (${(runs / Math.max(1, best(runs) - 1)).toFixed(2)} Jagden pro Kreis)`);
  await b.close();
  if (errs.length) { console.error('JS-Fehler im Spiel:\n' + [...new Set(errs)].join('\n')); process.exit(1); }
})();
