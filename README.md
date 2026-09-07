# Alan Gomes — Portfolio

Personal engineering portfolio focused on **software architecture, AI engineering, developer tooling and product engineering**.

This repository is intentionally more than a gallery of technologies. The portfolio is organized around selected projects and short case studies that explain the problem, the engineering decisions and what each project demonstrates.

## Current positioning

The portfolio highlights four representative fronts:

- **AgentsOrchNext** — governed coding-agent and context-engineering R&D;
- **runnerctl** — open-source local control plane for self-hosted GitHub Actions runners;
- **NeuroTrack** — long-running multi-client product engineering ecosystem;
- **Caverna BJJ** — lightweight offline-first PWA built from a real personal use case.

## Stack

- React 18
- TypeScript
- Chakra UI
- React Router
- Jest / Testing Library

The project still uses Create React App. The current refresh intentionally improves content, positioning and information architecture before introducing a framework migration.

## Run locally

```bash
npm install
cp .env.example .env
npm start
```

The contact form uses EmailJS and expects:

```bash
REACT_APP_EMAILJS_KEY=your_emailjs_public_key
```

Then open `http://localhost:3000`.

## Validation

```bash
npm test -- --watchAll=false
npm run build
```

The same validation runs in GitHub Actions for pull requests and pushes.

## Structure

```text
src/
├── components/       # reusable UI
├── data/             # portfolio project catalog
├── pages/            # home, about, work, details and contact
└── __tests__/        # focused UI tests
```

## Content principles

- Prefer a few strong projects over a long list of unfinished demos.
- Explain architecture and trade-offs, not only technology names.
- Mark private work clearly instead of linking to inaccessible repositories.
- Keep the public portfolio professional without turning it into a copy of a résumé.
- Evolve the site incrementally and keep deployment simple.

## Next technical improvements

- migrate from Create React App to a maintained build stack;
- add metadata/SEO and social preview cards;
- improve automated accessibility checks;
- add a lightweight PT-BR / EN content strategy;
- add Lighthouse budgets to deployment validation.

## Author

**Alan Gomes**  
Software Architect • Hands-on Engineer • Digital Innovation

- GitHub: https://github.com/oalangomes
- LinkedIn: https://linkedin.com/in/oalangomes
