# Rebanta Gupta — Portfolio

A personal portfolio website built with **React + TypeScript + Vite**.

> **Live Demo →** [https://rebanta-gupta.github.io/Portfolio/](https://rebanta-gupta.github.io/Portfolio/)

## Tech Stack

- **React 19** — Component-based UI
- **TypeScript** — Type-safe development
- **Vite** — Fast build tooling
- **CSS** — Custom styling with glass-morphism effects

## Getting Started

### Prerequisites

- Node.js 18+
- npm 8+

### Install & Run

```bash
npm install
npm run dev
```

### Build for Production

```bash
npm install
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── images/            # Project images
├── src/
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   ├── vite-env.d.ts      # Vite type declarations
│   ├── content/
│   │   └── portfolioData.ts  # Typed portfolio content
│   ├── styles/
│   │   └── style.css      # Global styles
│   ├── types/
│   │   ├── index.ts
│   │   └── portfolio.ts   # TypeScript interfaces
│   ├── utils/
│   │   └── portfolio.ts   # Portfolio lookup helpers
│   ├── components/
│   │   ├── effects/
│   │   ├── layout/
│   │   ├── overlays/
│   │   ├── sections/
│   │   └── index.ts
│   └── hooks/
│       ├── useOverlayState.ts
│       ├── usePortfolioData.ts
│       └── useRevealOnScroll.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Customization

All content is centralized in `src/content/portfolioData.ts`. Edit the relevant key to update a section:

| Section | `portfolioData` key | What to change |
|---------|-----------------|---------------|
| Hero banner | `hero` | `greeting`, `name`, `highlight`, `tagline` |
| About | `about` | Array of paragraph strings |
| Experience | `experience` | Array of objects — `title`, `date`, `location`, `description`, `skills` |
| Projects | `projects` | Array of objects — `id`, `icon`, `title`, `brief`, `description`, `images`, `tags`, `link` |
| Hackathons | `hackathons` | Array of objects — `id`, `icon`, `title`, `brief`, `description`, `images`, `tags`, `link` |
| Skills | `skills` | Array of `{ category, items }` groups |
| Contact | `contact` | Array of `{ icon, label, value, url }` cards |
