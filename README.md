# Ishika Srivastava — Portfolio

A modern, dark-first personal developer portfolio for **Ishika Srivastava** — a
software engineer working across software engineering, data engineering,
distributed systems, and machine learning.

**Live site:** https://ishikasri06.github.io/PORTFOLIO/

---

## Features

- Cohesive single-page portfolio: Hero, About, Experience, Projects, Skills,
  Education & Achievements, Contact, and Footer.
- Project case-study modals with real screenshots, problem statements,
  implementation notes, engineering challenges, and outcomes.
- Dark-first theme with a clean light/dark toggle (persisted, no flash on load).
- Responsive layout for desktop, tablet, and mobile with a mobile navigation menu.
- Accessible: semantic HTML, keyboard navigation, visible focus states, a skip
  link, focus-managed and Escape-dismissible modal, and reduced-motion support.
- SEO metadata, Open Graph / Twitter preview image, custom favicon, and a custom
  `404.html`.
- No backend, database, API keys, or paid services — it is a fully static site.

## Tech stack

| Layer          | Technology                                    |
| -------------- | --------------------------------------------- |
| UI             | React 18                                      |
| Build tooling  | Vite 6 (`@vitejs/plugin-react`)               |
| Styling        | Hand-written CSS with custom-property theming |
| Icons          | Inline SVG components (no icon dependency)    |
| Linting        | ESLint 9 (flat config)                        |
| Hosting        | GitHub Pages via GitHub Actions               |

## Requirements

- Node.js 18+ (Node 20 recommended) and npm

## Local development

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173/PORTFOLIO/)
npm run dev

# Lint
npm run lint

# Production build (outputs to dist/)
npm run build

# Preview the production build locally (http://localhost:4173/PORTFOLIO/)
npm run preview
```

The site is built with the base path `/PORTFOLIO/` (see `vite.config.js`) so that
asset and navigation URLs resolve correctly under the GitHub Pages repository
sub-path.

## Resume

The **Download Resume** buttons link to:

```
public/resume/Ishika_Srivastava_Resume.pdf
```

Place your resume PDF at that exact path (keep the file name) and the buttons
will work on both the local preview and the deployed site. No other change is
required. This file is intentionally not committed by the author of this
project because the source resume was not available in the repository.

## Editing content

All editable content lives in plain data modules under `src/data/`, separate
from the UI components:

| File                     | Contents                                   |
| ------------------------ | ------------------------------------------ |
| `src/data/profile.js`    | Name, headline, intro, social links, resume |
| `src/data/experience.js` | Work experience                            |
| `src/data/projects.js`   | Featured projects and case studies          |
| `src/data/skills.js`     | Skill categories                            |
| `src/data/education.js`  | Education and achievements                  |
| `src/data/nav.js`        | Navigation sections                         |

Project screenshots live in `public/projects/`.

## Deployment (GitHub Pages)

Deployment is automated with the official GitHub Pages workflow in
`.github/workflows/deploy.yml`. On every push to `main` (or a manual
`workflow_dispatch`) it installs dependencies, runs `npm run build`, and
publishes the `dist/` output to GitHub Pages.

### One-time manual step (requires your GitHub account)

GitHub repository settings cannot be changed by tooling without your
authorization, so enable Pages once:

1. Open the repository **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will then be published at
**https://ishikasri06.github.io/PORTFOLIO/**.

## Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment
├── public/
│   ├── 404.html                   # Custom not-found page
│   ├── favicon.svg
│   ├── og.png / og.svg            # Social preview image
│   ├── projects/                  # Real project screenshots
│   └── resume/                    # Place the resume PDF here
├── src/
│   ├── components/                # UI components
│   ├── data/                      # Editable content
│   ├── hooks/                     # Theme, scroll-spy, reveal
│   ├── utils/asset.js             # Base-path helper
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css                 # Design system
├── index.html
├── vite.config.js
└── package.json
```

## License

Personal project. Content and screenshots belong to Ishika Srivastava.
