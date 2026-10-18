# Kanithi Satya Sathvik — Portfolio

Personal portfolio of an AI engineer and SDE intern: projects, skills, experience and contact.

**Live site:** https://sathvik-portfolio-black.vercel.app

## Stack

- React 19 + TypeScript, built with Vite
- Tailwind CSS with CSS-variable design tokens (colors, spacing, container)
- Framer Motion for animation (reduced-motion aware)
- Lucide icons

## Design

- Navy digital-studio look: layered navy surfaces, cobalt primary, cyan as a supporting accent. A separately
  designed light theme follows the system setting on first visit, then remembers your choice.
- Space Grotesk for headings, Inter for body text, and one set of tokens for spacing, surfaces and motion.
- Bento layouts for the hero, skills and featured projects; a timeline for experience.
- Lucide icons throughout, staggered reveals, hover and arrow interactions, a scroll-progress bar and a few
  small details (a terminal panel and a cat). Reduced-motion settings are respected.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run lint
```

## Project structure

```
src/
  components/         Hero, About, Skills, Projects, Experience, Certifications, Contact, Navbar
  data/portfolio.ts   all portfolio content (projects, skills, timeline, certifications)
  lib/links.ts        outbound links, read from the data file
  lib/motion.ts       shared easing and durations
  index.css           design tokens and layout primitives
public/               resume PDF and certificates
legacy/               the previous full-stack version of this portfolio (Express + Vite)
```

## Editing content

Everything shown on the site comes from `src/data/portfolio.ts`. Change a project, skill, link or
timeline entry there. Colors, spacing and motion timing are defined once at the top of `src/index.css`.

## Deployment

Deployed on Vercel as a static Vite build (`npm run build`, output `dist/`). The `legacy/` folder is
excluded from uploads via `.vercelignore`.

```bash
vercel --prod
```

## Legacy app

The earlier version, with an Express backend and contact form, is preserved in [`legacy/`](legacy/).
It has its own `package.json` and README and runs independently.
