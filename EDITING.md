# Editing the website – guide

All you need is a web browser and your GitHub account. Nothing has to be installed.

## How it works

1. Open **https://app.pagescms.org** and sign in with GitHub.
2. Choose the website. The menu on the left has **Concerts, Projects, Home page, About, …, Site settings**.
3. Make your changes and click **Save**.
4. After about **1–2 minutes** the change is live. If you don't see it, reload the page (Ctrl/Cmd + Shift + R to bypass the browser cache).

> Every save is stored with a date, so mistakes can always be undone. If in doubt, just ask.

**Note on language:** the website itself is in German. Fixed labels such as "Tickets", "Kommende Termine" or "Impressum" are set in German automatically, so please write page texts in German too. (The site can be switched to English if needed – ask your developer.)

---

## Common tasks

### Add a concert
**Concerts → Add an entry**
- Fill in **Date**, **Time** (24-hour format, e.g. `19:30`), **City** and **Venue**.
- **Programme / title** is optional, e.g. "Bach & Gegenwart".
- **Ticket link:** the full address, starting with `https://`.
- **Status:** choose *Sold out*, *Cancelled* or *Free entry* if needed.

Concerts that are over move down to "past concerts" automatically every night. You don't need to delete anything.

### Create a project (album, ensemble, programme …)
**Projects → Add an entry**. Everything except the title is optional, and only what you fill in is shown:

| Field | What it's for |
|---|---|
| Subtitle, Year | e.g. "Album · 2026" or "Duo with piano" |
| Order | Lower number = further up (overview and menu) |
| Header image | Large photo at the top, like on the other pages (see below) |
| Cover | Square image next to the text, e.g. the album cover |
| Text | Description, with headings, links, bold text etc. |
| Quotes | Press quotes, shown large and in italics |
| Buttons | e.g. "Tickets" → link |
| Bandcamp player | See the next section |
| YouTube video | Just paste the link to the video |
| Tracklist, Credits | For albums |
| Photos + Photo layout | The project's own photo gallery: *Grid*, *Masonry* or *Stacked with captions* |

New projects appear automatically in the overview and in the menu under "Projekte".

### Embed a Bandcamp player
1. On Bandcamp, open the album → **Share / Embed** → **Embed this album**.
2. Pick any player size and **copy the whole code** (it starts with `<iframe`).
3. Paste it into the project's **Bandcamp player** field. Done.

For privacy reasons, the player only loads after a visitor clicks "Inhalt laden" (load content). That's intentional.

### Photos in the gallery
**Gallery → Photos → +**
- Upload the **Photo**. The size doesn't matter, because the website resizes images automatically.
- **Image description** (required): what can be seen? This helps blind visitors and Google.
- **Photographer** (required): always credit the photographer.
- Change the order by **dragging**.

⚠ Only use photos you have **permission** to use. If **recognisable people** appear in them, you also need their consent.

### Change a page's header image
Every page has a **Header image** section:
- **Image:** choose or upload a photo. Leave empty for a plain heading without a photo.
- **Focus point:** which part of the photo stays visible. "Top" often works well for portraits.
- **Darken:** if the text on the photo is hard to read, increase the value (e.g. 40).
- **Text colour:** *Light* for dark photos, *Dark* for bright photos.
- **Height:** full screen, large, medium or small.

### Home page
Quotes, buttons and the number of upcoming concerts shown can be set under **Home page**. The large photo is the home page's header image.

### Contact
Under **Contact → Contacts** you can add as many contacts as you like (e.g. General, Booking, Press). Email addresses are automatically protected from spam robots.

---

## Site settings

### Name, menu, social media
- **Name:** shown at the top of every page. You can upload a **Logo** instead.
- **Menu:** rename, reorder or remove entries. Link examples: `/about/`, `/live/`, `/projects/`, `/gallery/`, `/contact/`. Tick "Show sub-pages as a drop-down menu" to list all pages of a section (used for Projekte).
- **Social media:** choose the platform and paste the address of your profile. The icon appears automatically.

### Colours
Colours are entered as a code, e.g. `#ffffff` for white or `#7a4b2a` for brown. Search for "color picker" online to find codes. Make sure **Text** and **Background** have enough contrast.

### Fonts
- Under **Fonts → Headings** and **→ Body text**, choose one of the included fonts.
- **Custom font:** choose "Custom font", give it a **name** (anything, e.g. `My Font`) and upload the file(s). **.woff2** works best. At least "Regular" is needed, "Bold" and "Italic" are optional.
- ⚠ Only use fonts whose **licence allows use on websites** (e.g. Open Font License fonts from fontsource.org, or purchased webfont licences).

### Newsletter
1. Create an account with a newsletter provider. A provider based in the EU is recommended, e.g. **Brevo** or **CleverReach**. Sign their **data processing agreement** (in German: AVV) and turn on **double opt-in**.
2. Create a sign-up form there and copy the **embed code** (HTML).
3. **Site settings → Newsletter:** paste the code and tick "Show newsletter sign-up".
4. Add the newsletter to the **privacy policy**.

---

## Legal (important!)

**This website template is not legal advice.** The site is run from Germany, so German law applies:

- **Legal notice (Impressum):** fill in all required fields (name, full postal address without a P.O. box, email). The website builds the legally required page (§ 5 DDG) from them.
- **Privacy policy (Datenschutz):** the included page is only an **outline with placeholders**. Before going live, create the real text with a generator such as e-recht24.de or datenschutz-generator.de, or have a lawyer check it, and paste it in. Facts the generator will ask about: hosting on **GitHub Pages**, **no cookies / no tracking**, **fonts hosted on the site itself**, **contact by email**, **Bandcamp** and possibly **YouTube embeds that load after a click**, and a **newsletter** if you use one.
- If you add something new (e.g. a different player), the privacy policy must be updated.
