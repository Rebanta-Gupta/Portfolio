# Rebanta Gupta - Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

Live demo: https://rebanta-gupta.github.io/Portfolio/

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- GSAP + OGL (visual effects)
- ESLint (flat config)
- Vitest + Testing Library

## Prerequisites

- Node.js 18+
- npm 8+

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Vite will print the local URL (usually `http://localhost:5173` or the next free port).

## Quality Checks

```bash
npm run lint
npm run test
npm run build
```

Optional fixes/watch mode:

```bash
npm run lint:fix
npm run test:watch
```

## Production

Build:

```bash
npm run build
```

Preview built output:

```bash
npm run preview
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

```
.
├── public/
│   └── images/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── effects/
│   │   ├── layout/
│   │   ├── overlays/
│   │   ├── sections/
│   │   └── index.ts
│   ├── content/
│   │   └── portfolioData.ts
│   ├── hooks/
│   │   ├── usePortfolioData.ts
│   │   └── useRevealOnScroll.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── ProjectDetailsPage.tsx
│   ├── styles/
│   │   └── style.css
│   ├── test/
│   │   └── setup.ts
│   ├── types/
│   │   ├── index.ts
│   │   └── portfolio.ts
│   └── utils/
│       └── portfolio.ts
├── eslint.config.js
├── vitest.config.ts
├── index.html
├── package.json
└── vite.config.ts
```

## Content Editing

All portfolio content is centralized in `src/content/portfolioData.ts`.

Update these keys to edit sections:

- `hero`: greeting, name, highlight, tagline
- `about`: paragraph list
- `experience`: work history items
- `projects`: project cards + detail page data
- `hackathons`: hackathon cards + detail page data
- `skills`: grouped skills
- `contact`: contact methods and links

## Notes

- Routing uses hash-based URLs for GitHub Pages compatibility.
- Project detail pages are route-based (`/projects/:projectId`) with modal image lightbox support.
