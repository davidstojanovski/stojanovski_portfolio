# cs-app

Internal admin panel for the Surfe Customer Support team. Allows CS agents to view and manage customer accounts — settings, feature flags, trial end dates, credits, and more.

## Getting started

```bash
yarn
yarn dev                   # http://localhost:5173
```

## Stack

- **Vite** + React 19 + TypeScript strict
- **Tailwind CSS 3** + **shadcn/ui** for UI components (color pallete and design from 'design' folder in this directory)
- **TanStack Query v5** — all server state
- **React Router v7**
- **Jest + Testing Library** — unit/integration tests
- **Playwright** — E2E tests

## Architecture — Feature-Sliced Design

Imports flow strictly top-down:

```
app → pages → features → entities → shared
```

- `app/` — providers, router
- `pages/` — thin route components, composition only
- `features/` — user actions (`edit-credits`, `toggle-feature-flag`)
- `entities/` — business objects and data fetching (`customer`, `credits`, `plan`)
- `shared/` — logic-free reusables (`api/`, `ui/`, `routes/`, `lib/`)

Every slice exposes its public API through `index.ts` only — never import from internal files directly.

## Testing pyramid

- **Unit** (many) — pure functions, hooks, utilities
- **Integration** (some) — feature components with user interaction, mock HTTP at `shared/api` boundary
- **E2E** (few) — critical user journeys only

## Key rules

- No Redux/Zustand — TanStack Query + useState is enough
- HTTP through `authRequest` from `shared/api` only, no axios
- Files and folders `kebab-case`, components `PascalCase`
- Named exports only
- No raw TODO comments — open a Linear ticket instead

For full details see [CLAUDE.md](./CLAUDE.md).
