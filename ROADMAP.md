# Roadmap (Claude arbeitet das der Reihe nach ab)

Artifact: https://claude.ai/artifact/FEtxyjH99APZBeaM9dwG1s (slug 7350a289-1ff1-40fb-87a6-b7aae9e10d7e)

## Erledigt
- v0.1: Jagd-Loop, Loot-Sog, Bannstrahl (Klick), Fürsten-Boss, Höllenkreise, Schwurbaum (~100 Knoten), 5 Jäger, Speichern, Auto-Jagd

- v0.2: Schwurbaum auf 210 Knoten erweitert (äußere Pfade, Brücken-Ring, neue Mechaniken: Raserei, Zeitfresser, Bonus pro Höllenkreis, mehrfache Wiederbelebung)
- Windows-EXE per Electron + GitHub Actions (Releases bei jedem Push)
- v0.3: Ultimates (Urteil, Silberhagel, Heilige Flamme, Blutmond, Runensturm) + Jägerbaum mit 8 Knoten pro Jäger
- v0.4: Aufstieg (Prestige ab Kreis 5) mit Höllenfragmenten und 16 dauerhaften Aufstiegsknoten inkl. Auto-Kauf
- v0.5: Sukkubus (Zickzack, Lebensentzug), Golem (zäh), Kultist (Feuerbälle, per Bannstrahl zerstörbar), 10 Fürsten-Varianten mit Ansturm/Beschwörung/Feuernova
- v0.6: Laufzyklen (2 Frames), Flügelschlag, Angriffs-Neigung für Jäger und Dämonen, Atmen, Todesanimationen, Fürsten-Tod mit Explosionskette
- v0.7: Chronik mit 3 rotierenden Aufträgen, 39 Erfolgen (+2% Schaden/Seelen je Erfolg) und Statistik-Seite
- v0.8: Musik (Moll-Arpeggio, in der Jagd treibender), Master-Lautstärke, Einstellungen: Lautstärke, Musik, Schadenszahlen, Bildschirmwackeln
- v0.9: Offline-Fortschritt (25% der zuletzt erjagten Seelen/s, max. 8 h) mit Willkommens-Dialog
- v0.10: Pestarzt (Giftwolken, Ultimate Schwarzer Tod) und Templerin (Schildstoß, 30% Schadensreduktion, Ultimate Heiliger Wall)
- v0.11: Schnellreise – Klick auf die Kreis-Anzeige öffnet eine Liste aller erreichten Höllenkreise
- v0.12: Reliquien – 8 handgepixelte Artefakte als Fürsten-Beute (Elite 2%), Stufen 1–10, eigener Chronik-Reiter, bleiben beim Aufstieg
- v0.13: Tastenkürzel im Hub (Leertaste = Jagd, H = Jäger, C = Chronik, ←/→ = Kreis wechseln), Hinweise als Tooltips
- v0.14: Elite-Dämonen ab Kreis 3 mit Affixen – Flink (×1,8 Tempo), Gepanzert (×5 Leben, −40% Schaden außer Krits), Explosiv (Todesexplosion trifft den Jäger) – mit Aura, Namensschild und Elite-Beute
- v0.15: Reliquien fallen als leuchtende Beute-Kugel (mit Sprite) und werden eingesammelt, eigener Glocken-Sound; nicht eingesammelte gehen am Rundenende nicht verloren
- v0.16: Esc schließt Dialoge im Hub und pausiert/fortsetzt die Jagd (Pause-Overlay, Zeit steht still)
- v0.17: 3 neue Reliquien ab Kreis 10 – Kettenblitz-Rune (+Kettenblitz/Kettenschaden), Dornenmantel (+Dornen), Fürstenschädel (+Schaden gegen Fürsten & Elite); Chronik zeigt „Erst ab Kreis 10“
- v0.18: Automatische Pause, wenn das Fenster den Fokus verliert (Einstellung „Pause bei Fensterwechsel“)
- v0.19: Neue Elite-Affixe ab Kreis 8 – Vampirisch (regeneriert, heilt sich bei Treffern), Beschwörer (ruft alle 4 s Wichte), Spiegelnd (wirft Schaden auf den Jäger zurück) + Erfolge „Elitejäger“/„Elitenschreck“, Elite-Zähler in der Statistik
- v0.20: Seelen-Schmiede – sind alle erreichbaren Reliquien auf Stufe 10, werden neue Reliquien zu Höllenfragmenten geschmolzen (1 + 1 je 10 Kreise); Zähler in der Statistik
- v0.21: Bestiarium in der Chronik – alle Dämonenarten mit Sprite, Beschreibung, Werten und Kill-Zähler; unbekannte als Silhouette
- v0.22: Höllenkreis-Modifikatoren ab Kreis 12 – Blutnebel (Regeneration), Horde (doppelt so viele Dämonen, +50% Fürsten-Quote), Raserei (+30% Tempo, +50% Schwefel), Seelensturm (+50% Seelen); Anzeige in Kreis-Leiste, Schnellreise und Jagd-Banner
- v0.23: Bestiarium-Meilensteine – ab 100 und 1000 Kills einer Dämonenart je dauerhaft +5% Schaden gegen sie (Hinweis beim Erreichen, Anzeige im Bestiarium)
- v0.24: Elite-Affix-Kombinationen ab Kreis 15 – 35% der Elite tragen zwei Affixe (×1,5 Leben, größer), doppelte Seelen-Kugeln und Schwefel, doppelte Reliquien-Chance
- v0.25: Reliquien-Set-Boni – 4 Sets (Blutpakt, Seelenhandel, Gewitter des Richters, Fürstenmord), aktiv wenn alle drei Reliquien Stufe 5 erreichen; Übersicht im Reliquien-Reiter, Hinweis beim Freischalten
- v0.27: Set-Bonus-Stufe 2 (alle drei Reliquien auf Stufe 10 → Set-Effekt wirkt doppelt), Erfolge „Sammler“ (erster Set-Bonus) und „Vollendeter Sammler“ (Set Stufe 2); Bestiarium-Meilenstein 10000 Kills (+5% Seelen von dieser Art)
- v0.26: Neues Elite-Affix ab Kreis 18 – Teleportierend (springt alle 3 s mit violettem Portal-Ring und Klang direkt neben den Jäger)
- v0.28: Neue Kreis-Modifikatoren ab Kreis 20 – Finsternis (Sicht nur rund um den Jäger, +25% Seelen) und Fluch (Heilung/Lebensraub halbiert, +25% Schwefel)
- v0.29: Neues Elite-Affix ab Kreis 22 – Frostig (Treffer verlangsamen die Angriffe des Jägers 2 s lang um 60%, Frost-Aura mit Schneeflocken am Jäger)
- v0.30: Fünftes Reliquien-Set „Gewittermantel“ (Kettenblitz-Rune, Dornenmantel, Sanduhr): +1 Kettenblitz, +50% Kettenschaden, +50% Dornen, +2s Jagdzeit
- v0.31: Statistik zeigt „Aktive Boni“ – alle aktiven Reliquien-Sets und Bestiarium-Boni auf einen Blick
- v0.32: Bestiarium zählt Elite-Kills pro Dämonenart und zeigt sie neben dem Kill-Zähler
- v0.33: Grafik & Animation – Nahkampfwaffen (Schwert, Sense, Hammer, Templer-Klinge) als eigenes Sprite: ausholen, durchziehen, Nachzieh-Spur, Hiebbogen im Schlagmoment; Dämonen springen beim Angriff auf den Jäger zu; neuer Bannstrahl (Lichtsäule vom Himmel, Einschlag-Glühen, Runenkreis, Strahlen, Funken, leichtes Wackeln); Fackelschein um den Jäger und aufsteigende Glut in der Jagd

- v0.34: Neuer Kreis-Modifikator ab Kreis 30 – Siegelflut (doppelte Siegel vom Fürsten, Fürst mit +50% Leben)
- v0.35: Neues Elite-Affix ab Kreis 26 – Brennend (hinterlässt eine flackernde Feuerspur, die den Jäger verbrennt)
- v0.36: Sechstes Reliquien-Set „Seelenfürst“ (Seelenlaterne, Sündenauge, Fürstenschädel): +25% Seelen, +5% Krit, +40% Fürsten-Beute
- v0.37: Erfolge „Forscher“ (alle Arten entdeckt), „Meister des Bestiariums“ (jede Art 1000 Kills) und „Elite-Kenner“ (jede Art 10 Elite)
- v0.38: Bestiarium listet alle Elite-Affixe und Höllenkreis-Modifikatoren mit Beschreibung und Freischalt-Kreis (noch gesperrte ausgegraut)
- v0.39: Neuer Kreis-Modifikator ab Kreis 35 – Glutregen (Meteore mit Warnkreis stürzen vom Himmel, hinterlassen Feuer, +40% Schwefel)
- v0.40: Fernkampf-Animationen – Armbrust-Rückstoß mit Mündungsblitz (Hexenjägerin), heiliges Aufleuchten beim Pulsen (Exorzistin), Wurfbewegung mit im Bogen fliegender Giftphiole, Wolke entsteht beim Aufschlag (Pestarzt)
- v0.41: Dämonen-Angriffe – Krallenhiebe (Imp, Sukkubus, Nachtmahr), Höllenhund-Biss mit zuschnappenden Zähnen, Faustschlag mit Staub-Schockwelle und Wackeln (Golem, Hornbestie); Dämonen zucken bei Treffern zurück (stärker bei Krits)

## Als Nächstes
39. Fürsten-Intro: Bodenriss und Kamerazoom beim Erscheinen des Fürsten
42. Siebtes Set „Eisenwall“ (Eisernes Herz, Dornenmantel, Engelsfeder) mit Fokus auf Überleben
43. Erfolge für Kreis-Modifikatoren: je einen Fürsten unter jedem Modifikator besiegt
44. Glutregen-Meteore treffen auch Dämonen (Schaden skaliert mit dem Jäger)
45. Elite-Affix „Schildträger“ ab Kreis 30 (schützt nahe Dämonen mit einem Schild)
46. Hexenjägerin: sichtbare Armbrust als eigenes Sprite mit Nachlade-Animation
47. Schemen und Kultist: eigene Angriffs-Effekte (Geistergriff, Beschwörungs-Glyphe beim Feuerball)
