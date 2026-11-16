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
- v0.42: Glutregen-Meteore treffen auch Dämonen im Einschlagradius (3× Jägerschaden)
- v0.43: Siebtes Reliquien-Set „Eisenwall“ (Eisernes Herz, Dornenmantel, Engelsfeder): +40% Leben, +50% Rüstung (mind. +10), +2% Leben/s Regeneration
- v0.44: 8 neue Erfolge „Bezwinger: <Modifikator>“ – je einen Fürsten unter jedem Höllenkreis-Modifikator besiegen (+3 Siegel, +2% Schaden/Seelen)
- v0.45: Glutregen-Feuerflächen verbrennen auch Dämonen, die darin stehen (alle 0,5 s halber Jägerschaden); Feuerspuren brennender Elite bleiben nur für den Jäger gefährlich
- v0.46: Fürsten-Intro – glühende Bodenrisse mit Lichtsäule und Funken, der Fürst steigt langsam aus dem Riss, kurzer Kamerazoom (Klicks bleiben treffsicher)
- v0.47: Erfolg „Unzerstörbar“ (alle Reliquien-Sets gleichzeitig aktiv, +10 Fragmente); Statistik zählt Fürsten-Siege pro Kreis-Modifikator
- v0.48: Neues Elite-Affix ab Kreis 30 – Schildträger (halbiert den Schaden an Dämonen im Umkreis, goldene Schildblase und gestrichelter Schutzradius)
- v0.49: Fürsten-Tod – Todesstoß in Zeitlupe (0,5 s mit Viertel-Tempo) und kurzer Kamerazoom auf den Fürsten
- v0.50: Erfolg „Allbezwinger“ – unter jedem Kreis-Modifikator 10 Fürsten besiegen (+15 Fragmente)
- v0.51: Hexenjägerin-Armbrust als eigenes Sprite – reißt beim Schuss hoch, kippt zum Nachladen nach unten, Sehne wird sichtbar zurückgezogen, dann zurück in Anschlag
- v0.52: Erfolg „Schildbrecher“ (100 Schildträger-Elite, +300 Schwefel); Kills werden jetzt pro Elite-Affix gezählt
- v0.53: Statistik zeigt Elite-Kills pro Affix
- v0.54: 9 neue Affix-Erfolge (Windfänger, Panzerknacker, Sprengmeister, Pfähler, Bannbrecher, Spiegelscherbe, Geisterfänger, Frostbrecher, Glutlöscher) – je 100 Elite eines Affixes, +300 Schwefel
- v0.55: Schildträger zeigen einen pulsierenden goldenen Verbindungsstrahl zu jedem Dämon, den sie gerade schützen
- v0.56: Schemen packen mit einem leuchtenden Geistergriff zu, Kultisten beschwören vor jedem Feuerball eine rotierende Feuer-Glyphe; Fix: Effekte verschoben sich seit v0.46 gegenseitig (fehlendes ctx.save)
- v0.57: Neuer Kreis-Modifikator ab Kreis 40 – Seelenfrost (getötete Dämonen hinterlassen Eisflächen, die den Jäger verlangsamen, +40% Siegel)
- v0.58: Fällt eine Doppel-Affix-Elite, blitzt es kurz auf und ein Seelenwirbel steigt auf
- v0.59: Kultisten-Feuerbälle ziehen einen glühenden Schweif mit Glutfunken und zerstieben beim Einschlag (oder per Bannstrahl) in Funken
- v0.60: Neuer Kreis-Modifikator ab Kreis 45 – Seelenbann (alle 10 s wird ein Dämon zum Seelenträger mit blauer Aura und Seelenfunken, sein Tod bringt 5× Seelen); eigener Bezwinger-Erfolg, zählt für Allbezwinger
- v0.61: Seelenträger fliehen vor dem Jäger (hält Abstand unter 220 px, 75% Tempo) – Bannstrahl oder Fernkampf lohnt sich
- v0.62: Pestarzt trägt einen Phiolen-Gürtel (eigenes Sprite) – nach dem Wurf fehlt eine Phiole, dann greift er sichtbar die nächste aus dem Gürtel
- v0.63: Gebannte Seelenträger werden in der Statistik gezählt, Erfolg „Seelenfänger“ (100 Seelenträger, +5 Siegel)
- v0.64: 10 gestufte Affix-Erfolge „Erz…“ (z. B. Erzschildbrecher) – je 1000 Elite eines Affixes, +5 Siegel
- v0.65: Bannstrahl auf einen Schildträger zerbricht seine Schutzverbindungen (goldene Splitter, Klang) – 2 s lang kein Schutz
- v0.66: Fürsten-Tod – großer Seelenwirbel, Siegel fallen als 8 Kugeln und fliegen sichtbar zur Siegel-Anzeige (die kurz aufploppt); gehen auch bei Rundenende nicht verloren
- v0.67: Schildbrüche werden in der Statistik gezählt, Erfolg „Schildspalter“ (100 Brüche, +5 Siegel)
- v0.68: Fürsten-Feuernova – größere Kugeln in der Farbe des Fürsten (z. B. Eiskönig eisblau) mit langem, flackerndem Schweif und flimmerndem Hitzering
- v0.69: Templerin-Schild als eigenes Sprite – bei eingehenden Treffern reißt sie ihn nach vorn oben, er leuchtet auf und goldene Funken sprühen
- v0.70: Chronik – Erfolge nach 8 Kategorien gruppiert und einklappbar (mit Fortschritt je Kategorie, Auf/Zu bleibt beim Tab-Wechsel erhalten)
- v0.71: Fürsten-Tod – 24 Seelen-Kugeln schießen als Fontäne hoch, fallen mit Schatten zurück, springen einmal auf und werden erst nach der Landung eingesammelt
- v0.72: Neuer Dämon ab Kreis 50 – Knochenwurm (eigenes Sprite): gräbt sich ein, wühlt als Erdhügel unverwundbar zum Jäger und bricht mit Erdfontäne direkt neben ihm hervor
- v0.73: Erfolg „Wurmfänger“ (200 Knochenwürmer, +60 Schwefel); Bannstrahl auf den Erdhügel treibt den Knochenwurm sofort heraus, fern vom Jäger
- v0.74: Bannstrahl auf eine Fürsten-Nova-Kugel lässt sie in Fürsten-Farbe zerplatzen (Ring, Splitterregen, eigener Klang); etwas größerer Trefferradius
- v0.75: Chronik – offene Zähler-Erfolge zeigen einen Fortschrittsbalken (z. B. 640 / 1000)
- v0.76: Templerin-Schildstoß – der Schild schnellt beim Angriff sichtbar vor und leuchtet, goldene Stoßwelle und Funkenregen
- v0.77: Fürsten-Fontäne – jede 6. Seelen-Kugel ist golden (doppelter Wert) und klingelt beim Aufprall hell
- v0.78: Statistik zählt zerplatzte Fürsten-Nova-Kugeln, Erfolg „Novabrecher“ (100 Kugeln, +5 Siegel)
- v0.79: Elite-Knochenwurm schleudert beim Hervorbrechen einen Knochensplitter-Ring (1,5× Schaden im Umkreis)
- v0.80: Chronik markiert Erfolgs-Kategorien mit „● fast geschafft“, wenn ein Erfolg darin ≥90% erreicht hat
- v0.81: Templerin – Heiliger Wall als goldene Kuppel mit kreisenden Runen, die bei abgewehrten Treffern aufflackert und kurz anschwillt
- v0.82: Goldene Seelen-Kugeln lassen sich per Klick in der Luft fangen (+50% Wert, Funkeln, „+50%“-Anzeige)
- v0.83: Statistik zählt in der Luft gefangene Goldkugeln, Erfolg „Luftfänger“ (100 Kugeln, +5 Siegel)
- v0.84: Neuer Fürst Knochenkönig (ab Kreis 50 jeder 5. Kreis): ruft Knochenwürmer, Knochenspeere mit Warnkreis
- v0.85: Bestiarium zeigt Elite-Sonderfähigkeiten (sobald eine Elite der Art erlegt wurde)
- v0.86: Chronik-Knopf leuchtet grün, wenn ein Auftrag oder Erfolg zu ≥90% geschafft ist
- v0.87: Neue Arena: Rückwand mit Säulen und flackernden Fackeln, Deko je Höllenkreis (Knochen, Gräber, Pilze, Eiskristalle, Dornen, Schlote), glühende Pfützen, Vignette; neues HUD mit Porträt, dickem Lebensbalken mit Schadens-Nachlauf und Kreisname
- v0.88: Segnungen – Kills füllen eine Leiste, dann 1 von 3 Segnungen für die Jagd wählen (13 Arten, 15% geweiht mit doppelter Wirkung), Auto-Jagd wählt selbst

## Als Nächstes
B. Schreine in der Arena (Blutaltar, Seelenbrunnen, Truhe/Mimic)
C. Sprites detaillierter überarbeiten (Jäger, Dämonen, Fürst)
86. Pestarzt: Seuchenwolken-Ultimate lässt getroffene Dämonen grünlich verfärben und Blasen werfen
88. Fürsten-Fontäne: Tooltip/Hinweis beim ersten Fürsten-Kill, dass goldene Kugeln in der Luft fangbar sind
89. Knochenkönig: eigener Erfolg „Gebeinbrecher“ (Knochenkönig 5× besiegen)
90. Weitere Elite-Sonderfähigkeiten (z. B. Elite-Kultist wirft Dreifach-Feuerball, Elite-Sukkubus hinterlässt Lustnebel) – im Bestiarium per BEST_EL eintragen
91. Chronik-Aufträge-Tab: fast geschaffte Aufträge ebenfalls grün markieren
D. Segnungen: Synergien (z. B. 2× Kettenblitz → Gewitter), Schwurbaum-Knoten für mehr Auswahl/Neuwürfeln
