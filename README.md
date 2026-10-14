# Dakata

Dakata is an admin dashboard built with **Angular 22**, **TypeScript** and **Tailwind CSS v4**, using standalone components, dark mode and RTL support.

## Requirements

- Node.js 22.x (see `.nvmrc`)
- Angular CLI (`npm install -g @angular/cli`)

## Getting Started

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

## Scripts

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm start`     | Start the dev server on `http://localhost:4200`  |
| `npm run build` | Create a production build in `dist/dakata`       |
| `npm run watch` | Rebuild in development mode on file changes      |
| `npm test`      | Run unit tests with Karma and Jasmine            |

## Deployment

The project ships with a `wrangler.jsonc` for Cloudflare. After `npm run build`, the static files are served from `dist/dakata/browser` with single-page-application fallback.

## Credits

Dakata is based on [TailAdmin Angular Free](https://github.com/TailAdmin/free-angular-tailwind-dashboard), released under the MIT License. See `LICENSE.md`.
