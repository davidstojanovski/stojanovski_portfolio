# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`admin-app` is an internal admin panel for the Surfe Internal team. It allows CS agents to view and manage customer accounts — settings, feature flags, trial end dates, credits, and more.

This is a React SPA (no server-side rendering).

## Commands

```bash
yarn dev          # Start Vite dev server
yarn build        # Production build
yarn preview      # Preview production build locally
yarn lint         # Run ESLint
yarn lint:fix     # Run ESLint with auto-fix
yarn tsc          # TypeScript type-check (no emit)
yarn prettier     # Format TS/TSX files
yarn test         # Run Jest with coverage
yarn test:watch   # Run Jest in watch mode
```

To run a single test file:
```bash
yarn test path/to/file.spec.ts
```

## Stack

| Category | Choice |
|---|---|
| Bundler | Vite |
| Language | TypeScript (strict) |
| Styles | Tailwind CSS 3 |
| UI components | shadcn/ui
| Server state | TanStack Query v5 |
| Routing | React Router v7 |
| HTTP | Native `fetch` via `authRequest` wrapper (`shared/api`) |
| Testing | Jest + Testing Library |
| Code quality | ESLint v10 (flat config) + Prettier + Husky + lint-staged |

### Deliberately excluded

- **Redux / Zustand / Jotai** — TanStack Query handles server state; `useState`/`useContext` is enough for local state
- **react-hook-form / formik** — add only if forms become complex enough to justify it
- **zod / yup** — add only if schema validation is genuinely needed
- **i18n** — write English strings directly in components

## Architecture: Feature-Sliced Design (FSD)

The codebase follows [Feature-Sliced Design](https://feature-sliced.design/). Imports flow strictly top-down — a layer may only import from layers below it.

```
src/app/       →  initialisation only (providers, router, global styles)
src/pages/     →  route-level components — thin, compose features/entities
src/features/  →  user actions (edit-credits, toggle-feature-flag, update-trial)
src/entities/  →  business objects and their data (customer, credits, plan)
src/shared/    →  reusable code with no business logic
```

### Layer rules

| Layer | Can import from | Cannot import from |
|---|---|---|
| `app` | pages, features, entities, shared | — |
| `pages` | features, entities, shared | app |
| `features` | entities, shared | app, pages |
| `entities` | shared | app, pages, features |
| `shared` | — | anything above |

### Slice structure

Every slice (feature or entity) exposes a single public API via `index.ts`. Never import from internal files directly.

```
entities/customer/
  api.ts            # raw HTTP calls
  queries.ts        # TanStack Query hooks (useCustomer, useUpdateCustomer...)
  query-keys.ts     # query key factory
  types.ts          # TypeScript types for this entity
  index.ts          # public API — only export what other layers need
```

```
features/edit-credits/
  ui/
    EditCreditsForm.tsx
  model/
    use-edit-credits.ts   # mutation hook + local logic
  index.ts                # public API
```

### shared/ layout

```
shared/
  api/      # authRequest, request, APIError — HTTP primitives
  ui/       # shadcn/ui components and custom UI elements (ADD - npx shadcn@latest add <component>)
  routes/   # route path constants
  lib/      # pure utilities (no business logic, no side effects)
```

### Where to put new code

| What | Where |
|---|---|
| New page / route | `pages/<route-name>/` |
| New user action (form, mutation) | `features/<action-name>/` |
| New data domain (queries, types) | `entities/<domain-name>/` |
| Reusable UI with no business logic | `shared/ui/` |
| HTTP helper | `shared/api/` |
| Pure utility | `shared/lib/` |

## Conventions

- **Files and folders**: `kebab-case`
- **Components**: `PascalCase`
- **Hooks**: `use-kebab-case.ts` (files), `useCamelCase` (function names)
- **Booleans**: prefix with `is`, `has`, or `should`
- **Constants**: `UPPER_SNAKE_CASE` for primitives; `PascalCase` object with `UPPER_SNAKE_CASE` keys for grouped constants
- **Exports**: named exports only — no default exports except where required
- **No raw `TODO` comments** — track in Linear instead
- **Branch naming**: `feature/cs-123-short-description` — always from a Linear ticket
- **Imports**: use path aliases, never relative paths that cross layers — `import { Foo } from 'entities/customer'`, not `../../entities/customer`

## Testing

We follow the **testing pyramid**: many unit tests, fewer integration tests, few E2E tests.

```
        /\
       /E2E\        ← few — critical user journeys only
      /------\
     / Integr \     ← some — feature-level, user interactions
    /----------\
   /    Unit    \   ← many — pure logic, hooks, utilities
  /--------------\
```

### Unit tests (Jest + Testing Library)

**Write when:** testing pure functions, custom hooks, isolated utilities, or entity logic.

**Do not write when:** the only thing you'd be testing is React rendering wiring or TanStack Query internals.

```
shared/lib/format-date.spec.ts        ✓ pure function
entities/customer/queries.spec.ts     ✓ query hook logic
features/edit-credits/model/use-edit-credits.spec.ts  ✓ mutation logic
```

- Tests are colocated next to the file they test: `foo.spec.ts` / `foo.spec.tsx`
- Global setup lives in `tests/`
- Use `renderHook` from `@testing-library/react` for hook tests

### Integration tests (Jest + Testing Library)

**Write when:** testing a feature component that involves user interaction, form submission, or multiple entities working together.

**Do not write when:** the scenario requires a real browser, real navigation, or real network.

```
features/edit-credits/ui/EditCreditsForm.spec.tsx    ✓ user fills form, submits, sees result
pages/customer-detail/CustomerDetailPage.spec.tsx    ✓ page renders correct data from mocked queries
```

- Mock HTTP at the `shared/api` boundary, not at the query level
- Use `@testing-library/user-event` for interactions, not `fireEvent`

## Component structure — ENFORCED

Every component has its own file. No exceptions.

**Page components** (`src/pages/`) contain ONLY:
- Import statements
- A single return with layout/composition
- No logic, no hooks, no inline JSX beyond layout structure

**When creating any feature**, split into:
- `ui/` — pure presentational components, no data fetching
- `model.ts` — types, constants, business logic
- `api.ts` — all data fetching
- `index.ts` — public API export only

**Hard limits:**
- Max 150 lines per file — if you exceed this, stop and split first
- Max 1 hook per component file — extract the rest to `hooks/`
- No inline components — never define a component inside another component
- No anonymous components — every component is a named export

**Before writing any component ask:**
1. Does this already exist and can be reused?
2. Can any piece of this be its own component?
3. Is this page doing anything a child component should own?
