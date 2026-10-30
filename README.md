# Harsha Vivek, Portfolio

React + Vite + Framer Motion. System fonts only, no external requests at runtime.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serves the production build
```

## Deploy

**Vercel** (simplest): push this folder to GitHub, import the repo on vercel.com. The framework is detected as Vite; build command `npm run build`, output directory `dist`.

**Netlify**: same settings, or drag the `dist/` folder into the Netlify dashboard.

**GitHub Pages** (sub-path): set `base: './'` in `vite.config.js`, run `npm run build`, and publish `dist/`.

## Editing content

Everything you read on the page lives in `src/data.js` (experience, projects, skills, links). Replace `public/Harsha_Vivek_Resume.pdf` whenever your resume changes.

## Structure

- `src/components/Hero.jsx`, `Ship.jsx`, `Wave.jsx`: the animated ocean scene (sun, clouds, birds, ship, waves, mouse parallax)
- `src/components/About.jsx`, `Journey.jsx`, `Projects.jsx`, `Skills.jsx`, `Logbook.jsx`, `Contact.jsx`: page sections
- `src/styles.css`: all styling and keyframe animations (respects `prefers-reduced-motion`)
