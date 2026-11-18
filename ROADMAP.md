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
- v0.89: Schreine in der Arena (anklicken): Blutaltar (−30% Leben, +40% Schaden), Seelenbrunnen (Heilung, +3s), Truhe (Seelenschatz oder Mimic), Segensstein (sofort Segnung)
- v0.90: Neu gepixelte Dämonen: Imp, Fledermaus, Höllenhund, Geist, Knochenwurm, Sukkubus (mehr Schattierung, Krallen, Schwänze, Augenhöhlen)
- v0.91: Alle 7 Jäger neu gepixelt in 20×22 (Hutkrempen, Mantelfalten, Plattenrüstung, Schnabelmaske mit Brillengläsern …), Waffen-Drehpunkte, Armbrustsehne, Phiolengürtel und Schild angepasst
- v0.92: Kombo-System – Kills in Folge (3s Fenster) geben bis +100% Seelen, Stufen Gemetzel/Blutrausch/Höllensturm/Apokalypse/Götterdämmerung mit Ansage, 3 Erfolge, beste Kombo in der Statistik
- v0.93: Seelendieb – in 40% der Jagden ab Kreis 2 flieht ein Dämon mit Seelensack, entkommt nach 8 s durch ein Portal; gefangen regnet es 20 Beutekugeln. Bestiarium-Eintrag, 2 Erfolge, Statistik
- v0.94: Hub als Ordenshalle: Spitzbogenfenster mit Höllenhimmel, Ordensbanner, flackernde Kerzenständer, roter Läufer
- v0.95: Fürsten-Wutphase unter 50% Leben: „… TOBT!“, +40% Tempo, Fähigkeiten 40% häufiger plus Feuerring, pulsierende Aura
- v0.96: Neu gepixelt: Hornbestie (18×22, glühender Bauch, Hufe), Golem (Lava-Kern, Moos, Steinkanten), Kultist (Kapuze mit Goldsaum, Feuer in beiden Händen), Fürst (26×24, Krone mit Juwelen, Zahnmaul, Gürtel – alle 10 Varianten)
- v0.97: Erfolg „Gebeinbrecher“ (Knochenkönig 5× besiegen, +5 Siegel), Knochenkönig-Siege in der Statistik
- v0.98: Beim ersten Fürsten-Sieg erscheint ein Tipp, dass goldene Seelen-Kugeln in der Luft fangbar sind
- v0.99: Knopf „Beenden“ in der Jagd (auch Taste B, im Pausenbild angezeigt) – Auto-Jagd startet danach nicht neu; Jagdverlängerung durch Kills (Zeitfresser & Co.) höchstens +100% der Grund-Jagdzeit
- v0.100: Jeder Fürst hat eine eigene Gestalt statt Umfärbung: Klagende Herrin (Banshee), Blutgraf (Vampir mit Stehkragen), Pestfürst (aufgedunsen, Pusteln), Eiskönig (Eiskrone, Bart), Schwefelherzog (Widderhörner, Ketten), Leerenwandler (vieläugiges Schattenwesen), Dornenkönig (Geweih, Rinde), Glutkoloss (Lavagestein), Abgrundfürst (Schlund mit Zahnreihen), Knochenkönig (Skelett mit Krone)
- v0.101: Balance – Dämonen-Leben +65% statt +55% pro Kreis; jede gekaufte Baum-Stufe verteuert Seelen-/Schwefel-Knoten um 1% (Siegel ausgenommen), Anzeige „Teuerung“ in der Seitenleiste und beim Schwur. Per Simulation geprüft: vorher 1 Kreis pro Jagd bis ~Kreis 50, jetzt ~2 Jagden pro Kreis mit echten Wänden
- v0.102: Schwarzer Tod verfärbt getroffene Dämonen grünlich (gecachte Seuchen-Silhouette) und lässt Blasen aufsteigen
- v0.103: Elite-Kultist wirft drei Feuerbälle im Fächer, Elite-Sukkubus hinterlässt rosa Lustnebel (verlangsamt den Jäger) – beides im Bestiarium
- v0.104: Chronik-Aufträge: fast geschaffte Aufträge (≥90%) grün umrandet mit „● fast geschafft“, grüner Punkt am Aufträge-Reiter
- v0.105: Elite-Golem stampft alle 4 s eine Schockwelle (110 px), Elite-Höllenhund heult und ruft ein Rudel aus drei Höllenhunden – beides im Bestiarium
- v0.106: Hub – grüner Punkt am Chronik-Knopf, wenn ein Auftrag fast geschafft ist (erledigte Aufträge lassen ihn nicht mehr fälschlich leuchten)
- v0.107: Elite-Imp zerplatzt beim Tod in zwei kleine Wichte, Elite-Schemen verschwindet alle 5 s für 1,5 s (unverwundbar), Elite-Nachtmahr stößt im Sturzflug zu – alles im Bestiarium
- v0.108: Hub – grüner Punkt am Knopf „Jäger & Ultimates“, wenn ein Jägerbaum-Knoten des aktiven Jägers bezahlbar ist (der Schwurbaum hebt bezahlbare Knoten schon selbst hervor)
- v0.109: Ereignis „Blutmond“ – 7% der Jagden ab Kreis 3: doppelte Dämonen, dreifache Seelen und Schwefel, Fürst braucht 50% mehr Kills; roter Himmel mit Krater-Mond, Banner, Statistik, 2 Erfolge
- v0.110: Knochenkönig zerfällt beim Tod in einen Knochenregen – 60 Knochen und der Schädel fliegen auseinander, danach regnen sechs Wellen Knochen vom Himmel
- v0.111: Blutmond – Fürsten lassen doppelte Siegel fallen; neuer Schwurbaum-Knoten „Mondanbeter“ (Gier-Pfad, Schwefel, 5 Stufen, je +2% Blutmond-Chance)
- v0.112: Reliquie „Knochenkrone“ – fällt nur vom Knochenkönig (ab Kreis 50, jeder Sieg garantiert), +2 Rüstung und +10% Siegel pro Stufe, eigenes Sprite, Hinweis in der Chronik
- v0.113: Segnungs-Synergien – 8 Paare (Gewitter, Hinrichtung, Blutrausch, Klingensturm, Seelenfeuer, Feuerkette, Ewigkeit, Unsterblichkeit) geben einmal pro Jagd einen Zusatzbonus; Angebot zeigt „⚡ Synergie“ an, Auto-Jagd bevorzugt sie; 2 Erfolge, Statistik
- v0.114: Schwurbaum-Knoten „Gebetskette“ (Bann-Pfad, Schwefel, 3 Stufen): Segnungs-Angebote pro Jagd neu würfeln (Knopf oder Taste R)
- v0.115: Chronik › Bestiarium listet alle Segnungs-Synergien mit Zutaten und Wirkung; schon ausgelöste leuchten in ihrer Farbe mit Zähler
- v0.116: Schwurbaum-Knoten Vierte Gabe (4 Segen zur Auswahl); Synergien lösen einen Blitzring (5× Schaden im Umkreis) mit eigenem Klang aus
- v0.117: Seltener Fluchschrein ab Kreis 3 (Dämonen +50% Leben/Schaden, doppelte Beute), 7 Schrein-Erfolge (Schreine, Mimics, Flüche)
- v0.118: Verfluchte Segen (Blutpakt, Seelenwucher, Glasklinge, Wahnsinn) – 12% Chance auf eine Fluch-Option mit starkem Bonus und Nachteil; Auto-Jagd meidet sie
- v0.119: Segen-Leiste im Jagd-HUD: gewählte Segen als Symbole plus offene Synergien mit fehlendem Partner
- v0.120: Verfluchte Segen in der Chronik (Bestiarium) nachschlagbar, Statistik-Zeile, Erfolge „Teufelspakt“ und „Mit dem Teufel im Bunde“ (3 Flüche in einer Jagd)
- v0.121: Mimic mit eigenem Sprite (Truhe mit Augen, Zahnreihen, Zunge, Beinen – schnappt beim Laufen zu); Chronik › Bestiarium listet alle Schreine mit Zähler und den Mimic; Schwurbaum-Knoten „Pilgerpfad“ (Gier-Pfad, Schwefel, 5 Stufen, je +15% Schrein-Häufigkeit)
- v0.122: Knappe Fürsten-Niederlage (Fürst ≤25% Leben bei Jagdende) gibt einen Siegel-Trostpreis (¼ der Fürsten-Siegel); sonst Hinweis mit Rest-Leben des Fürsten und Tipp zum Farmen/Aufsteigen
- v0.123: Balance-Simulation `node test/sim.js [Jagden]` (Playwright, Bannstrahl 3×/s, Auto-Kauf der Seelen-Knoten, farmt nach Niederlage) – zugleich Rauchtest, bricht bei JS-Fehlern ab. Befund: frischer Spielstand braucht ~25 Jagden bis zum ersten Fürsten (Kreis 1: 17–20 Kills bei Quote 22)
- v0.124: Schnellerer Einstieg – Fürsten-Quote in Kreis 1/2 auf 70%/85% (ab Kreis 3 unverändert). Simulation: erster Fürst nach ~9 statt ~29 Jagden, Kreis 13 nach 30 Jagden
- v0.125: test/sim.js kauft Knoten in allen drei Währungen (relativ billigster zuerst). Befund: ab Kreis ~13 ein Kreis pro Jagd, Kreis 42 nach 60 Jagden, keine Wand

- v0.126: Spätspiel-Wand – Dämonen-Leben wächst ab Kreis 15 zusätzlich ×1,35 pro Kreis (GROW.late). Simulation: Kreis 15 nach ~26 Jagden, danach ~1,8 Jagden pro Kreis, ab Kreis 27 ~2,5; Kreis 34 nach 60 Jagden

- v0.127: test/sim.js simuliert Jägerbaum (aktiver Jäger) und mit `--asc` den Aufstieg (nach 6 Jagden ohne neuen Rekord, kauft Aufstiegsknoten); `--quiet` gibt nur die Tabelle „bester Kreis nach 20/40/60/100 Jagden“ aus. Befund: ohne Aufstieg Kreis 41 nach 100 Jagden; mit Aufstieg bei Kreis ~31 (+230 Fragmente) danach ~1 Kreis pro Jagd, alter Rekord nach ~36 Jagden überholt, Kreis 43 nach 100

- v0.128: Schnellabstieg – Aufstiegsknoten „Erinnerung“ startet nach dem Aufstieg bei Stufe/15 des alten Rekords (Stufe 5 ≈ ⅓, z. B. Rekord 31 → Kreis 10, Rekord 60 → Kreis 20), mindestens wie bisher Kreis 1+Stufe
- v0.129: Achtes Reliquien-Set „Gebeinthron“ (Knochenkrone, Fürstenschädel, Eisernes Herz): +5 Rüstung, +40% Siegel, +20% Schaden gegen Fürsten & Elite
- v0.130: Fürsten-eigene Reliquien – Bansheeschleier (Klagende Herrin, +10% Bannstrahl-Schaden/Stufe), Grafenzahn (Blutgraf, Lebensraub + Krit-Schaden), Eissplitter (Eiskönig, +10% Ultimate-Schaden/Stufe); 30% Chance beim Fürsten-Sieg, sonst zufällige Reliquie; Chronik zeigt den Fürsten als Quelle
- v0.131: Neuntes Reliquien-Set „Fürstengruft“ (Bansheeschleier, Grafenzahn, Eissplitter): +25% Schaden gegen Fürsten & Elite, +3% Lebensraub, +20% Ultimate-Schaden; Erfolg „Gruftwächter“ (alle Fürsten-Reliquien gefunden)
- v0.132: test/sim.js listet je Aufstieg Rekord, Startkreis („Erinnerung“), Fragmente und Jagden bis zum Überholen des alten Rekords. Befund (200 Jagden, --asc): Aufstieg 1 bei Rekord 37 → Start 1, überholt nach 37 Jagden; Aufstieg 2 bei Rekord 50 → Start 13, überholt nach 38; Aufstieg 3 bei Rekord 55 → Start 18; Kreis 55 nach 200 Jagden
- v0.133: Sieben weitere Fürsten-Reliquien – Aschekohle (Aschefürst), Pestmaske (Pestfürst), Schwefelsiegel (Schwefelherzog), Leerenkristall (Leerenwandler), Dornenzweig (Dornenkönig), Glutkern (Glutkoloss), Schlundsplitter (Abgrundfürst), jede mit eigenem Sprite; zehntes Set „Höllenschmiede“ (Aschekohle, Glutkern, Schwefelsiegel): +20% Schaden, +20% Leben, +25% Schwefel. Jeder Fürst hat jetzt eine eigene Reliquie
- v0.134: Aufstiegsknoten „Erinnerung“ startet bei Stufe/10 des alten Rekords (Stufe 5 = ½, z. B. Rekord 50 → Kreis 25). Simulation (200 Jagden, --asc): Rekord 50 nach 29 statt 38 Jagden überholt, 5 statt 3 Aufstiege
- v0.135: Aufstiegsknoten „Ahnenmacht“ (max 5): ×(1+3%·Stufe) Schaden & Leben je bisherigem Aufstieg, geometrisch (Stufe 5 = ×1,15 pro Aufstieg). Simulation (200 Jagden, --asc): Kreis 55 statt 54, Überholen weiter ~29–36 Jagden – Effekt liegt in der Streuung, da er erst ab dem 2.–3. Aufstieg greift
- v0.136: Elftes Reliquien-Set „Pestgruft“ (Pestmaske, Dornenzweig, Leerenkristall): +75% Dornen, +15% Leben, +2s Jagdzeit, +15% Seelen (Erfolg „Unzerstörbar“ für alle Set-Boni gab es schon)
- v0.137: Chronik › Reliquien nach Herkunft gruppiert (Überall / Tiefe Kreise ab 10 / Fürsten-Reliquien) mit Fund-Zähler je Gruppe
- v0.138: Blutmond-Fürst „Mondschlächter“ – eigener gehörnter Schlächter mit blutiger Schürze und Mondsichel-Klinge (wechselt Ansturm/Fledermaus-Beschwörung/Nova), ersetzt bei Blutmond den Kreis-Fürsten (außer Knochenkönig); Erfolge „Mondfinsternis“ (1×) und „Schlächter des Schlächters“ (10×), Statistik
- v0.139: Neuer Schrein „Spiegel der Gier“ (goldgerahmter Spiegel, erscheint erst, wenn man Seelen gesammelt hat): 55% Seelen dieser Jagd verdoppeln, 45% die Hälfte verlieren; Erfolg „Gierschlund“ (10 Gewinne)
- v0.140: Fürsten-Reliquie „Mondsichel“ vom Mondschlächter (nur bei Blutmond, 30%): +5% Schaden und +1% Blutmond-Chance je Stufe; zählt für „Gruftwächter“
- v0.141: Zwölftes Reliquien-Set „Blutmond“ (Mondsichel, Grafenzahn, Blutkelch): +5% Blutmond-Chance, +3% Lebensraub, +50% Fürsten-Siegel bei Blutmond (Stufe 2: ×2,25)

- v0.142: Blutmond-Kalender in der Chronik › Statistik: aktuelle Blutmond-Chance aufgeschlüsselt nach Grundchance, Schwurbaum, Reliquie Mondsichel und Set Blutmond
- v0.143: Mondschlächter wirft als vierten Angriff eine rotierende Mondsichel (Bumerang): fliegt zum Jäger, kehrt zum Schlächter zurück und trifft auf Hin- und Rückweg; ab Kreis 25 zwei Sicheln, per Bannstrahl zerstörbar
- v0.144: Neuer Schrein „Opferstock“ (Holzkasten mit Glut, nur wenn Schwefel gesammelt): tauscht allen Schwefel der Jagd gegen die halben Siegel eines Fürsten; Erfolg „Ablasshändler“ (10×); Spiegel der Gier zerspringt beim Verlust in Scherben
- v0.145: Mimic peitscht ab 260 px mit der Zunge (Schaden und zieht sich zum Jäger heran) und lässt beim Tod eine hüpfende goldene Truhe fallen (16 Seelen-Kugeln + ein Viertel Fürsten-Siegel)

- v0.146: Neuer Schrein „Seelenwaage“ (Waage mit Seelen- und Schwefelschale, ab Kreis 2, nur wenn Seelen gesammelt): tauscht die Hälfte der Seelen der Jagd gegen Schwefel wie von drei Fürsten; Erfolg „Waagemeister“ (10×), im Bestiarium

- v0.147: test/sim.js `--seed N` – ersetzt Math.random im Spiel durch einen festen Zufallsgenerator (mulberry32); gleicher Seed ergibt exakt denselben Verlauf, damit Balance-Vergleiche nicht in der Streuung untergehen
- v0.148: Neuer Schrein „Zeitsanduhr“ (goldene Sanduhr, nur bei über 60% Leben): opfert 40% Leben für +8s Jagdzeit; Erfolg „Zeitdieb“ (10×), im Bestiarium
- v0.149: Schwurbaum-Knoten „Teufelsbund“ (Bann-Pfad hinter Vierte Gabe, Schwefel, 5 Stufen): je +4% Chance auf einen verfluchten Segen in der Auswahl
- v0.150: Fluch-Synergien – je zwei verfluchte Segen heben einen Fluch auf (Seelenhandel, Kristallgier, Splitterwahn, Blutwahn); ein Segen kann jetzt mehrere Synergien zugleich auslösen; Erfolg „Fluchbrecher“ (alle 4)
- v0.151: Zwei neue verfluchte Segen – Dornenblut (+150% Dornen, Fluch: Dämonen +30% Schaden) und Gier (doppelte Seelen-Beute, Fluch: neue Dämonen +50% Leben); Fluch-Synergien Blutdornen und Dornengier, „Fluchbrecher“ jetzt für alle 6
- v0.152: Neuer Schrein „Teufelsaltar“ (ab Kreis 3, gehörnter Altar): bietet sofort eine Auswahl nur aus verfluchten Segen an (Neu-Würfeln bleibt verflucht); Auto-Jagd nimmt Flüche nur, wenn sie dadurch sofort eine Fluch-Synergie auslöst
- v0.153: Teufelsaltar mit flackernden Hornflammen; Erfolg „Paktmeister“ (10× Teufelsaltar)
- v0.154: Teufelsaltar-Pakt-Preis – nach der Wahl erscheint ein Elite-Paktwächter (Hornbestie) mit 20s-Countdown; rechtzeitig erlegt, fällt der Fluch weg (gemeinsamer Fluch-Aufheber `liftCurse` auch für Fluch-Synergien, nie doppelt); Erfolg „Paktbrecher“ (5×)
- v0.155: Zeitsanduhr-Schrein mit rieselndem Sand (animierte Körner im Hals)
- v0.156: Paktwächter als eigener gehörnter Teufel mit goldenem Dreizack (handgepixelt, Laufanimation); Auto-Jagd wählt am Teufelsaltar Flüche, wenn der Wächter in ~10 s fällt
- v0.157: Paktwächter sticht mit dem Dreizack zu (goldener Stoß mit Funken) und hat einen Eintrag im Bestiarium (Schreine) mit Zähler
- v0.158: Erzwächter – ab Kreis 30 ist der Paktwächter ein Erzwächter (+50% Leben, größer): sticht doppelt zu und wirft aus der Ferne (bis 340 px) alle 4 s seinen Dreizack; Auto-Jagd rechnet das Mehrleben ein; Bestiarium-Text ergänzt
- v0.159: Erzwächter-Sprite – eigene handgepixelte Variante (dunkle Haut, goldene Hörner mit Krone, glühende Augen); beim Dreizackwurf hält er kurz nichts in der Hand
- v0.160: Erzwächter im Bestiarium mit eigenem Bild und eigenem Zähler (getrennt vom Paktwächter, Hinweis „ab Kreis 30“)
- v0.161: Fürsten-Gestaltanimationen – Klagende Herrin kreischt (drei violette Schallwellen), Blutgraf zerstiebt bei der Nova in einen Blutschwarm, Glutkoloss stampft beim Ansturm (Bodenring, Staub, starkes Beben)
- v0.162: Weitere Fürsten-Gestaltanimationen – Eiskönig sprengt bei der Nova Eissplitter aus seiner Krone, Schwefelherzog stößt beim Ansturm eine gelbe Schwefelwolke aus, Dornenkönig lässt acht Dornenranken ringförmig aus dem Boden wachsen
- v0.163: Restliche Fürsten-Gestaltanimationen – Aschefürst wirbelt beim Ansturm Asche und Glut, Pestfürst lässt bei der Beschwörung Pusteln platzen, Leerenwandler öffnet einen Schattenriss („Die Leere sieht dich!“), Abgrundfürst reißt bei der Nova den Schlund auf und saugt Partikel ein. Jeder Fürst hat jetzt eine eigene Angriffsanimation
- v0.164: Eigene Klänge zu den Fürsten-Gestaltanimationen – Aschewirbel-Rauschen, schrilles Kreischen, Fledermaus-Zirpen, platzende Pusteln, Eisklirren, Schwefelzischen, tiefes Leeren-Dröhnen, knackende Ranken, dumpfes Stampfen, Schlund-Brüllen (Synthese, keine Fremd-Assets)
- v0.165: Seelendieb neu gepixelt (18×17 statt 14×13) – Kapuze mit Schatten und gelben Augen, roter Schal, Dolch, Gürtelschnalle und prall gefüllter Seelensack mit leuchtenden Seelen über der Schulter
- v0.166: Seelendieb-Laufanimation – der Seelensack ist ein eigenes Sprite und wippt beim Fliehen gegen den Schritt; aus dem Sack fallen Seelen-Funken, die kurz als leuchtende Spur am Boden liegen bleiben
- v0.167: HUD-Porträt als Brustbild – Kopf und Oberkörper des Jägers (ohne Waffe, auf die Figur zugeschnitten) groß im Rahmen, Rahmen in der Jägerfarbe
- v0.168: HUD-Porträt reagiert – färbt sich bei Treffern kurz rot, wird bei unter 25% Leben blass und zittert
- v0.169: Seelendieb-Spur – die Seelen-Funken lassen sich per Mausberührung (Touch: Finger) als Mini-Seelen einsammeln (je 1/80 der Diebes-Seelen)
- v0.170: HUD-Porträt leuchtet beim Zünden der Ultimate kurz hell in Jägerfarbe auf (Lichtkranz um den Rahmen)
- v0.171: HUD-Porträt pulsiert sanft in Jägerfarbe, solange die Ultimate bereit ist
- v0.172: Erfolg „Funkensammler“ (500 Seelendieb-Funken mit der Maus eingesammelt) und Zähler „Seelendieb-Funken“ in der Statistik
- v0.173: HUD-Porträt zeigt die Ultimate-Ladung als Konturbalken in Jägerfarbe, der sich im Uhrzeigersinn um das Bild füllt
- v0.174: Eingesammelte Seelendieb-Funken fliegen mit Lichtspur zum Seelen-Zähler im HUD und werden erst dort gutgeschrieben (Zähler hüpft); Jagdende schreibt fliegende Funken trotzdem gut
- v0.175: HUD-Porträt blitzt kurz in Jägerfarbe auf und ein Glockenklang ertönt, sobald die Ultimate-Ladung voll ist
- v0.176: Ist die Ultimate bereit, zeigen der Porträt-Ring (golden) und ein dünner Balken unter dem Ultimate-Button die Restzeit bis zum Auto-Zünden (2,5 s)
- v0.177: Einstellung „Ultimate automatisch zünden“ im Menü (aus = Ultimate wartet auf Leertaste/Klick, Restzeit-Anzeige entfällt)
- v0.178: Auto-Zünd-Verzögerung der Ultimate im Menü wählbar (1 / 2,5 / 5 s); mit dem Zeiger eingesammelte Beute (Seelen, Schwefel, Siegel) fliegt zum HUD-Zähler, abschaltbar per „Eingesammelte Beute fliegt zur Anzeige“; Jagdende schreibt fliegenden Schwefel jetzt korrekt als Schwefel gut
- v0.179: Fliegt Beute zur HUD-Anzeige, erscheint kurz „+N“ unter dem Zähler (Beute innerhalb 1 s wird summiert)
- v0.180: Einstellungen im Menü in Gruppen Klang, Anzeige und Kampf gegliedert
- v0.181: Einstellung „Beute sofort einsammeln“ (ab Aufstieg 1): Beute fliegt nach 0,15 s statt nach der Sog-Verzögerung zum Jäger
- v0.182: Mit dem Zeiger eingesammelte Reliquien fliegen zu einem eigenen Reliquien-Platz im HUD (erscheint ab der ersten Reliquie der Jagd, zählt mit, Sprite blitzt auf, Name wird kurz eingeblendet)
- v0.183: Reliquien-Platz im HUD zeigt beim Überfahren alle in dieser Jagd gefundenen Reliquien mit Anzahl und neuer Stufe
- v0.184: Reliquien-Platz im HUD zählt alle Reliquien der Jagd – auch die, die der Jäger selbst einsammelt (blitzt dann ebenfalls auf)

## Als Nächstes
L11. Balance: Überholen nach Aufstieg dauert noch ~29–36 Jagden (Ziel ≤25; „Ahnenmacht“ allein reicht nicht). Nächster Versuch: Fragment-Ausbeute früher Aufstiege erhöhen oder Spätspiel-Wachstum GROW.late von 1,35 auf 1,3 senken – Spätspiel-Klettern ab Kreis ~35 (2,5 Jagden pro Kreis) ist der Engpass; z. B. Aufstiegsknoten mit geometrischer Wirkung pro Aufstieg (×1,15 Schaden & Leben je Aufstieg) testen, Simulation mehrmals laufen lassen (starke Streuung)
L12. test/sim.js: Laufzeit (~14 min für 200 Jagden) verkürzen (z. B. Zeichnen im Sim-Modus abschalten, größere Zeitschritte); Balance-Vergleiche L11 mit `--seed 1..5` mitteln
L9. Simulation mit mehreren Jägern (Jäger-Freischaltung mitkaufen) und Vergleich der Jäger per `--hero <id>`
M. Elite-Kultist/Elite-Fledermaus-Varianten für Fürsten-Beschwörungen; Elite-Seelendieb mit Lockvögeln
E6. Mimic-Varianten ab Kreis 15: Reliquien-Mimic (verkleidet als Beute-Kugel, flieht) und Fürsten-Mimic im Knochenthron
E7. Schrein-Wahl per Schwurbaum-Knoten beeinflussen (Lieblingsschrein öfter)
K14. Reliquien-Platz: geschmiedete Reliquien (Seelen-Schmiede) als „+N Fragmente“ unter dem Platz anzeigen
I12. „Beute sofort einsammeln“ als Schwurbaum- oder Aufstiegsknoten statt reiner Einstellung prüfen (Balance: Beute-Sog-Knoten verlieren sonst an Wert)
