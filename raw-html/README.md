# Raw HTML — Legacy Static Site (No Framework)

This folder contains the **original static site** before Svelte/minimal migration. No build step — open `index.html` in a browser or serve with a static server. The minimal Svelte framework lives at `../src/` (see `../README.md`).

## Contents
- `index.html` + `index.css` — Home (Mission/Vision/Core)
- `home.html` + `home.css` — Alternate home heroes
- `aboutus.html` + `aboutus.css` — About / Motto
- `service.html` + `service.css` — Services
- `clients.html` + `clients.css` — Clients
- `practices.html` + `practice.css` — Practices
- `testimony.html` + `testimony.css` — Testimony videos
- `photos.html` + `photo.css` — Activity galleries
- `areacoverage.html` + `areacoverage.css` — Area Coverage
- `communityservice.html` + `communityservice.css` — Community Service
- `contact.html` + `contact.css` — Contact
- Assets: `bg/`, `case/`, `client/`, `coverage/`, `img/`, `photo/`, `mp4/`, `MDC.webp`, `12.webp`, `Z1.webp`, `newbuilding.webp`

## Run (Raw)
```bash
# from this folder
npx serve .
# or
python -m http.server 8000
# then open http://localhost:8000 or :3000
```
Or double-click `index.html`.

> Gold theme `#d4af37` retained in framework version but this raw version keeps original glass/gradient styling. Framework minimal redesign is in `../src/app.css`.
