# david-stojanovski

Personal portfolio site for David Stojanovski — Lead Software Engineer & Software Architect.
A modern, interactive single-page React app (no backend).

## Getting started

```bash
yarn
yarn dev                   # http://localhost:8080
```

Other scripts: `yarn build` (production build), `yarn preview` (serve the build),
`yarn lint` / `yarn lint:fix`, `yarn tsc` (type-check), `yarn test`.

## Stack

- **Vite** + React 19 + TypeScript strict
- **Tailwind CSS 3** + custom design tokens (indigo → violet → cyan brand gradient, light/dark themes)
- **shadcn/ui** primitives + hand-rolled UI (`shared/ui`)
- **TanStack Query v5** + **React Router v7** — wired up in `app/`, ready if dynamic data is ever added (the site is currently static content)
- **lucide-react** icons, **sonner** toasts
- **Jest + Testing Library** (unit/integration) · **Playwright** (E2E)

## Architecture — Feature-Sliced Design

Imports flow strictly top-down:

```
app → pages → features → entities → shared
```

- `app/` — providers, router, global styles
- `pages/` — thin route components, composition only (`home/`)
- `features/` — page sections & interactions (`hero`, `about`, `experience`, `skills`, `contact`, `site-nav`, `site-footer`, `theme-toggle`)
- `entities/` — business data (`profile/` — all portfolio content + types)
- `shared/` — logic-free reusables (`ui/`, `lib/`)

Every slice exposes its public API through `index.ts` only — never import from internal files directly.

## Editing content

- **All text, experience, skills, stats, socials, email** live in [`src/entities/profile/data.ts`](./src/entities/profile/data.ts).
- **CV** — replace [`public/david-stojanovski-cv.pdf`](./public) (keep the filename) and rebuild. Linked from the hero and contact sections.
- **Logo / favicon** — the isometric cube mark lives in [`src/shared/ui/logo.tsx`](./src/shared/ui/logo.tsx); standalone assets are `public/logo.svg` and `public/favicon.svg`.

## Key rules

- No Redux/Zustand — TanStack Query + `useState`/`useContext` is enough
- Files and folders `kebab-case`, components `PascalCase`
- Named exports only
- Use path aliases (`features/…`, `shared/…`), never cross-layer relative imports

For full conventions see [CLAUDE.md](./CLAUDE.md).
