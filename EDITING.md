# Website bearbeiten – Anleitung

Du brauchst nur einen Browser und dein GitHub-Konto. Nichts muss installiert werden.

## So funktioniert's

1. Öffne **https://app.pagescms.org** und melde dich mit GitHub an.
2. Wähle die Website aus. Links siehst du das Menü: **Termine, Projekte, Startseite, Über mich, …, Website-Einstellungen**.
3. Ändern → **Speichern**.
4. Nach etwa **1–2 Minuten** ist die Änderung online. Falls nicht: Seite im Browser neu laden (bei hartnäckigem Cache: Strg/Cmd + Shift + R).

> Jede Speicherung wird mit Datum gesichert. Ein Fehler lässt sich also immer rückgängig machen. Frag im Zweifel einfach nach.

---

## Häufige Aufgaben

### Ein Konzert eintragen
**Termine → „Add an entry“ / „Neu“**
- **Datum**, **Uhrzeit** (z. B. `19:30`), **Stadt** und **Ort** ausfüllen.
- **Programm / Titel** ist optional, z. B. „Bach & Gegenwart“.
- **Ticket-Link:** die komplette Adresse, beginnend mit `https://`.
- **Status:** *Ausverkauft*, *Abgesagt* oder *Eintritt frei* nach Bedarf.

Vergangene Konzerte rutschen jede Nacht automatisch nach unten zu „Vergangene Termine“. Du musst nichts löschen.

### Ein Projekt anlegen (Album, Ensemble, Programm …)
**Projekte → Neu**. Alles außer dem Titel ist optional. Es erscheint nur, was ausgefüllt ist:

| Feld | Wofür |
|---|---|
| Untertitel, Jahr | z. B. „Album · 2026“ oder „Duo mit Klavier“ |
| Reihenfolge | Kleinere Zahl = weiter vorne (Übersicht und Menü) |
| Titelbild | Großes Foto oben, wie bei den anderen Seiten (siehe unten) |
| Cover | Quadratisches Bild links neben dem Text, z. B. das Album-Cover |
| Text | Beschreibung, mit Überschriften, Links, Fettdruck usw. |
| Zitate | Pressestimmen, groß und kursiv dargestellt |
| Knöpfe | z. B. „Tickets“ → Link |
| Bandcamp-Player | Siehe nächster Abschnitt |
| YouTube-Video | Einfach den Link zum Video einfügen |
| Titelliste, Mitwirkende | Für Alben |
| Fotos + Darstellung | Eigene Bildergalerie für das Projekt, als *Raster*, *Mauerwerk* oder *untereinander mit Bildunterschrift* |

Neue Projekte erscheinen automatisch in der Übersicht und im Menü unter „Projekte“.

### Bandcamp-Player einbinden
1. Bei Bandcamp das Album öffnen → **Share / Embed** → **Embed this album**.
2. Eine beliebige Player-Größe wählen und den **ganzen Code kopieren** (beginnt mit `<iframe`).
3. Im Projekt in das Feld **Bandcamp-Player** einfügen. Fertig.

Der Player wird aus Datenschutzgründen erst geladen, wenn Besucher*innen auf „Inhalt laden“ klicken. Das ist so gewollt.

### Fotos in der Galerie
**Galerie → Fotos → „Add an entry“ / „+“**
- **Foto** hochladen. Die Größe ist egal, die Website verkleinert die Bilder automatisch.
- **Bildbeschreibung** (Pflicht): Was ist zu sehen? Das hilft blinden Menschen und bei Google.
- **Fotograf*in** (Pflicht): Bildrechte immer angeben.
- Die Reihenfolge änderst du durch **Ziehen**.

⚠ Nur Fotos verwenden, für die du eine **Nutzungserlaubnis** hast. Wenn darauf **erkennbare Personen** zu sehen sind, brauchst du auch deren Einverständnis.

### Titelbild einer Seite ändern
Auf jeder Seite gibt es den Bereich **Titelbild**:
- **Bild:** Foto auswählen oder hochladen. Leer lassen = schlichte Überschrift ohne Foto.
- **Bildausschnitt:** Welcher Teil des Fotos sichtbar bleibt. Bei Porträts ist oft „Oben“ gut.
- **Abdunkeln:** Wenn der Text auf dem Foto schlecht lesbar ist, den Wert erhöhen (z. B. 40).
- **Schriftfarbe:** *Hell* für dunkle Fotos, *Dunkel* für helle Fotos.
- **Höhe:** Ganzer Bildschirm, groß, mittel oder klein.

### Startseite
Zitate, Knöpfe und die Anzahl der angezeigten kommenden Termine sind unter **Startseite** einstellbar. Das große Foto ist das Titelbild der Startseite.

### Kontakt
Unter **Kontakt → Ansprechpartner** kannst du beliebig viele Kontakte anlegen (z. B. Allgemein, Booking, Presse). E-Mail-Adressen werden automatisch vor Spam-Robotern geschützt.

---

## Website-Einstellungen

### Name, Menü, Social Media
- **Name:** steht oben auf jeder Seite. Alternativ kannst du ein **Logo** hochladen.
- **Menü:** Einträge umbenennen, umsortieren oder entfernen. Link-Beispiele: `/about/`, `/live/`, `/projects/`, `/gallery/`, `/contact/`.
- **Social Media:** Plattform auswählen und die Adresse deines Profils einfügen. Das Icon erscheint automatisch.

### Farben
Farben werden als Code eingegeben, z. B. `#7a4b2a`. Einen Farbwähler findest du z. B. mit der Suche „color picker“. Achte darauf, dass **Text** und **Hintergrund** genug Kontrast haben.

### Schriften
- Unter **Schriften → Überschriften** und **→ Fließtext** eine der mitgelieferten Schriften wählen.
- **Eigene Schrift:** „Eigene Schrift“ wählen, einen **Namen** vergeben (beliebig, z. B. `Meine Schrift`) und die Datei(en) hochladen. Am besten im Format **.woff2**, mindestens „normal“, optional „fett“ und „kursiv“.
- ⚠ Nur Schriften verwenden, deren **Lizenz die Nutzung auf Websites erlaubt** (z. B. Open-Font-License-Schriften von fontsource.org oder gekaufte Webfont-Lizenzen).

### Newsletter
1. Bei einem Newsletter-Anbieter ein Konto anlegen. Empfehlung: ein Anbieter aus der EU, z. B. **Brevo** oder **CleverReach**. Den **Auftragsverarbeitungsvertrag (AVV)** abschließen und **Double-Opt-in** aktivieren.
2. Dort ein Anmeldeformular erstellen und den **Einbettungscode** (HTML) kopieren.
3. **Website-Einstellungen → Newsletter:** Code einfügen und „Newsletter-Anmeldung anzeigen“ anhaken.
4. Den Newsletter in der **Datenschutzerklärung** ergänzen.

---

## Rechtliches (wichtig!)

**Diese Website-Vorlage ersetzt keine Rechtsberatung.**

- **Impressum:** Unter **Impressum** alle Pflichtfelder ausfüllen (Name, vollständige Anschrift ohne Postfach, E-Mail). Die Website baut daraus die Seite nach § 5 DDG.
- **Datenschutzerklärung:** Die mitgelieferte Seite ist nur eine **Gliederung mit Platzhaltern**. Bitte vor dem Livegang einen richtigen Text erstellen, z. B. mit einem Generator wie e-recht24.de oder datenschutz-generator.de, oder anwaltlich prüfen lassen. Dann unter **Datenschutzerklärung** einfügen.
  Für den Generator relevant: Hosting bei **GitHub Pages**, **keine Cookies/kein Tracking**, **lokal eingebundene Schriften**, **Kontakt per E-Mail**, **Bandcamp-** und ggf. **YouTube-Einbindung nach Klick**, ggf. **Newsletter**.
- Wenn du etwas Neues einbindest (z. B. einen anderen Player), muss die Datenschutzerklärung ergänzt werden.
