# Dakata

A logistics operations dashboard built with **Angular 22**, **TypeScript** and **Tailwind CSS v4**. It covers shipments, fleet, warehouses, invoicing and reporting, with a fully responsive layout, light/dark themes and first-class RTL (Persian) support.

**Live demo:** https://dakata.erfjs.com

## Highlights

- Standalone components with modern Angular control flow (`@if`, `@for`) and strict TypeScript
- Tailwind CSS v4 design tokens defined in `src/styles.css` — no config file
- Light/dark theme persisted per user, with no flash on load
- RTL layout built on CSS logical properties; Persian typography via self-hosted Vazirmatn
- Charts (ApexCharts), calendar scheduling (FullCalendar) and date pickers (Flatpickr)
- Self-hosted fonts and assets; no external requests at runtime

## Project structure

```
src/app/
├── pages/            Route-level views (dashboard, schedule, invoices, reports, profile, auth)
└── shared/
    ├── components/   Reusable UI and feature components
    ├── layout/       App shell: sidebar, header, backdrop
    └── services/     Theme, sidebar and modal state
```

## Getting started

Requires Node.js 22 (see `.nvmrc`).

```bash
npm install
npm start        # http://localhost:4200
```

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm start`     | Dev server with live reload          |
| `npm run build` | Production build into `dist/dakata`  |
| `npm test`      | Unit tests (Karma + Jasmine)         |

## Deployment

The build output in `dist/dakata/browser` is a static single-page app. `netlify.toml` and `wrangler.jsonc` are included for Netlify and Cloudflare, both with SPA fallback routing.

## License

MIT — see [`LICENSE.md`](LICENSE.md).
