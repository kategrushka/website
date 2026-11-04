# Cellist website

A static website for a cellist. It's hosted for free on **GitHub Pages** and edited in the browser with **[Pages CMS](https://pagescms.org)**. Nobody needs to install any software.

- **Pages:** Home, Über mich, Termine (concerts), Projekte (overview + one page per project), Galerie, Kontakt, Impressum, Datenschutz
- **Built with:** [Hugo](https://gohugo.io) (runs only on GitHub's servers via GitHub Actions)
- **Privacy:** no cookies, no tracking, fonts are self-hosted, and Bandcamp/YouTube only load after a click. No cookie banner is needed.

The editor guide (German) is in **[EDITING.md](EDITING.md)**.

---

## One-time setup

### 1. Put the code on GitHub
Create a repository on github.com (it can be private on paid plans, public otherwise) and push this folder to the `main` branch.

### 2. Turn on GitHub Pages
Repository → **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.

Every push to `main` now runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes it. The first deploy takes about 1–2 minutes. The address is shown under Settings → Pages (e.g. `https://<user>.github.io/<repo>/`).

The workflow also runs **every night at 04:00 UTC**, so concerts that are over move automatically to "Vergangene Termine". You can also start it manually under **Actions → Website veröffentlichen → Run workflow**.

### 3. Connect Pages CMS
1. Go to **https://app.pagescms.org** and sign in with GitHub.
2. Install the Pages CMS GitHub app for this repository.
3. Open the repository in Pages CMS. The menu (Termine, Projekte, Startseite …) comes from [.pages.yml](.pages.yml).
4. To let the musician edit, invite them in Pages CMS (Settings → Collaborators) or add their GitHub account as a collaborator on the repository.

### 4. Custom domain (e.g. `vorname-nachname.de`)
1. Repository → **Settings → Pages → Custom domain** → enter `www.vorname-nachname.de` → Save.
2. At your domain provider, set these DNS records:

   | Type  | Name  | Value |
   |-------|-------|-------|
   | A     | @     | 185.199.108.153 |
   | A     | @     | 185.199.109.153 |
   | A     | @     | 185.199.110.153 |
   | A     | @     | 185.199.111.153 |
   | CNAME | www   | `<github-user>.github.io` |

3. Once the DNS check passes (minutes to a few hours), tick **Enforce HTTPS**.
4. Run the workflow once (Actions → Run workflow). The build picks up the domain automatically, so nothing needs to change in the code.

Recommended: verify the domain under your GitHub account settings → Pages to prevent domain takeover.

---

## How it fits together

| Folder / file | What it contains |
|---|---|
| `content/` | All texts. One file per page, one per concert (`content/live/`) and one per project (`content/projects/`) |
| `data/settings.yml` | Site name, menu, colours, fonts, social links, newsletter |
| `assets/images/` | Uploaded photos (Hugo creates resized WebP versions automatically) |
| `static/fonts/`, `static/files/` | Fonts and downloadable files (PDF) |
| `layouts/` | HTML templates (the design) |
| `assets/css/main.css` | Stylesheet |
| `i18n/de.yaml` | Fixed labels such as "Tickets", "Kommende Termine" (English versions in `en.yaml`) |
| `.pages.yml` | Pages CMS editing forms |

**Notes**
- **Images:** upload them in any size. The build creates 480–2400 px WebP versions with `srcset`, and gallery images get lightbox versions.
- **Concerts** don't get their own pages. They're listed on `/live/`, split into upcoming and past by date, with schema.org `MusicEvent` data for search engines.
- **Projects** are ordered by the "Reihenfolge" field (`weight`). Every block on a project page is optional: header image, cover, text, quotes, buttons, Bandcamp player, YouTube video, tracklist, credits, and a gallery (grid / masonry / stacked).
- **Menu drop-down:** a menu item with "Unterseiten als Untermenü zeigen" lists the pages of that section automatically (used for Projekte).
- **E-mail addresses** are base64-encoded in the HTML and decoded by a few lines of JS (simple protection against address harvesting).
- **Faircamp:** projects have a `faircamp_url` field. A Faircamp site could later be built in the workflow into e.g. `/music/` and linked there.

## Optional: preview locally (developers only)

```sh
# Hugo extended 0.168.0 or newer – https://gohugo.io/installation/
hugo server
# → http://localhost:1313
```

## Licences of bundled third-party files

- Fonts *Cormorant Garamond* and *Work Sans* (`static/fonts/`): SIL Open Font License 1.1 (licence texts included)
- PhotoSwipe 5 (`assets/vendor/photoswipe/`): MIT
- Brand icons from Simple Icons (`assets/icons/*.svg`, except `ui-*`): CC0. The brand names and logos remain trademarks of their owners.
- All placeholder texts and images were created for this project. Replace them with your own content.
