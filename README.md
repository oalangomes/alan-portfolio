# Alan Gomes — Portfolio

Personal engineering portfolio focused on **software architecture, AI engineering, developer tooling and product engineering**.

This repository is intentionally more than a gallery of technologies. The portfolio is organized around selected projects and short case studies that explain the problem, the engineering decisions and what each project demonstrates.

## Current positioning

The portfolio highlights five representative fronts:

- **runnerctl** — open-source local control plane for self-hosted GitHub Actions runners;
- **AgentsOrchNext** — governed coding-agent and context-engineering R&D;
- **EA FC MANAGER MODE HUB** — data-driven football-management workspace with automation, dashboards and auditability;
- **NeuroTrack** — long-running multi-client product engineering ecosystem;
- **Caverna BJJ** — lightweight offline-first PWA built from a real personal use case.

## Stack

- React 18
- TypeScript
- Chakra UI
- React Router
- Vite
- Vitest / Testing Library

The project uses Vite for development and production builds. Routing uses hash-based URLs so navigation remains compatible with static hosting on GitHub Pages. Page routes are lazy-loaded to keep the initial bundle smaller.

The UI supports **English and Brazilian Portuguese**. English is the default language, the header shows the active language, and a manual switch persists the selected preference locally.

The Home hero includes a deliberately abstract **conceptual architecture constellation**. It communicates the portfolio themes — product, context, knowledge, evidence, runtime and guardrails — without representing or exposing any private project topology.

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

The contact form uses EmailJS and expects:

```bash
VITE_EMAILJS_KEY=your_emailjs_public_key
```

Vite serves the local app on the URL printed in the terminal, normally `http://localhost:5173`.

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

The repository's GitHub Pages publishing source must be set to **GitHub Actions** under **Settings → Pages → Build and deployment → Source**. This is a one-time repository setting; publishing directly from the `master` branch would send the Vite source files through the legacy Jekyll pipeline instead of deploying the compiled application.

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
- Keep the public portfolio professional without turning it into a copy of a résumé.
- Evolve the site incrementally and keep deployment simple.

## Production safeguards

- hash-router-safe skip navigation;
- active-route semantics with `aria-current`;
- reduced-motion support;
- global 404 page and React error recovery boundary;
- guarded contact submission with a direct-email fallback;
- initial JavaScript bundle budget enforced in CI.

## Next technical improvements

- add automated axe accessibility scans;
- add full Lighthouse score budgets to deployment validation;
- replace the generic OpenGraph image with a dedicated social preview asset.

## Author

**Alan Gomes**  
Software Architect • Hands-on Engineer • Digital Innovation

- GitHub: https://github.com/oalangomes
- LinkedIn: https://linkedin.com/in/oalangomes
