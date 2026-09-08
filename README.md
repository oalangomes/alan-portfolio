# Alan Gomes — Engineering Portfolio

**Software Architecture · AI Engineering · Developer Tooling · Product Engineering**

🌐 **Live portfolio:** https://oalangomes.github.io/alan-portfolio/

This repository contains the source code for my personal engineering portfolio. The site is intentionally organized around **selected projects and technical case studies**, not around a long gallery of technologies.

The goal is simple: show what I build, why it exists, the engineering decisions behind it, and what each project demonstrates.

## What this repository demonstrates

The portfolio itself is also an engineering project:

- React + TypeScript application built with Vite;
- bilingual UI in English and Brazilian Portuguese;
- persisted light/dark appearance and accent themes;
- lazy-loaded routes;
- automated tests and type checking;
- GitHub Actions CI;
- GitHub Pages deployment;
- initial JavaScript bundle budget;
- accessibility and failure-recovery safeguards.

## Current positioning

The published portfolio currently highlights representative work across:

- **RunnerOps** — open-source Linux operations layer for self-hosted GitHub Actions runners, with `runnerctl` as its public CLI;
- **AgentsOrchNext** — governed coding-agent and context-engineering R&D;
- **Sports Intelligence Lab** — predictive-analytics experiments focused on sports data, backtesting, evaluation and evidence-based decision support;
- **EA FC MANAGER MODE HUB** — data-driven football-management workspace with automation, dashboards and auditability;
- **NeuroTrack** — long-running multi-client product engineering ecosystem;
- **Caverna BJJ** — lightweight offline-first PWA built from a real personal use case.

Private work is presented as a case study rather than linked as if its source code were publicly inspectable.

## Stack

- React 18
- TypeScript
- Chakra UI
- React Router
- Vite
- Vitest / Testing Library

## Architecture and UX decisions

Routing uses hash-based URLs so navigation remains compatible with static hosting on GitHub Pages. Page routes are lazy-loaded to keep the initial bundle smaller.

The UI supports **English and Brazilian Portuguese**. English is the default language, and the selected language persists locally.

The visual system separates **light/dark appearance** from the portfolio accent identity. Accent surfaces, CTA states, header lighting and ambient glows use semantic design tokens, while project-specific colors remain independent.

Conceptual architecture diagrams live with project case studies, where they add context without exposing private implementation topology.

## Run locally

### Requirements

- Node.js 22.13 or newer
- npm

### Development

```bash
npm install
cp .env.example .env
npm run dev
```

The contact form uses EmailJS and expects:

```bash
VITE_EMAILJS_KEY=your_emailjs_public_key
```

Vite serves the application on the local URL printed in the terminal, normally `http://localhost:5173`.

## Validation

```bash
npm test
npm run typecheck
npm run build
npm run check:bundle-budget
```

The same test and production-build validation runs in GitHub Actions for pull requests and pushes to `master`. CI also enforces a 450 KB budget for the initial JavaScript bundle.

## Deployment

Production is built by Vite and published from `dist/` through the GitHub Pages workflow in `.github/workflows/pages.yml`.

The repository's GitHub Pages publishing source must be set to **GitHub Actions** under **Settings → Pages → Build and deployment → Source**.

Published site: https://oalangomes.github.io/alan-portfolio/

## Structure

```text
src/
├── components/       # reusable UI
├── data/             # portfolio project catalog
├── i18n/             # language state and persistence
├── pages/            # home, about, work, details and contact
└── __tests__/        # focused UI tests
```

## Content principles

- Prefer a few strong projects over a long list of unfinished demos.
- Explain architecture and trade-offs, not only technology names.
- Mark private work clearly instead of linking to inaccessible repositories.
- Keep the site professional without turning it into a copy of a résumé.
- Add projects when they strengthen the technical narrative, not just to increase project count.
- Never expose proprietary code, confidential architecture or internal information.

## Production safeguards

- hash-router-safe skip navigation;
- active-route semantics with `aria-current`;
- reduced-motion support;
- global 404 page and React error recovery boundary;
- guarded contact submission with a direct-email fallback;
- initial JavaScript bundle budget enforced in CI.

## Author

**Alan Gomes**  
Software Architect · AI Engineering · Developer Tooling

- Portfolio: https://oalangomes.github.io/alan-portfolio/
- GitHub: https://github.com/oalangomes
- LinkedIn: https://linkedin.com/in/oalangomes
