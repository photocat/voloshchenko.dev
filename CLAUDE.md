# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm run lint      # Run ESLint
```

There are no tests in this project.

Prisma commands (when working on DB schema):
```bash
npx prisma migrate dev    # Apply migrations (does NOT auto-regenerate client in Prisma 7 — run generate after)
npx prisma generate       # Regenerate client (also runs on postinstall)
npx prisma studio         # Open Prisma Studio GUI
npx prisma db seed        # Seed DB from src/lib/constants (see prisma/seed.ts)
```

Requires Node `^20.19 || ^22.12 || ^24.0` (Prisma 7's minimum) — see `.nvmrc`. Connection config lives in `prisma.config.ts` (loaded by the Prisma CLI), not in `schema.prisma`'s `datasource` block — Prisma 7 rejects a `url` there.

## Architecture

Personal portfolio site for Andrii Voloshchenko — a single-page app built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

### Routing & Layout layers

There are two nested layouts:

1. `src/app/layout.tsx` — Root: sets up fonts (Bebas Neue, Manrope), `ThemeProvider`, and global metadata.
2. `src/app/(root)/layout.tsx` — Route group: wraps content with `<Header>` and `<Footer>`, injects header heights as CSS custom properties (`--app-header-mobile-height`, `--app-header-desktop-height`) used by child components for scroll offset.

The single page (`src/app/(root)/page.tsx`) renders four sections in order: `Intro → Projects → About → Contact`, each separated by `<Separator>`.

### Data layer

Projects are read from the database via Prisma. `src/lib/prisma.ts` exports a singleton `PrismaClient` (using `@prisma/adapter-pg`, required by Prisma 7 for direct, non-Accelerate connections — a bare `new PrismaClient()` without an adapter throws at runtime). `src/lib/project-service.ts` exposes `getProjects()` / `getProjectBySlug(slug)`, used by `ProjectList` (`src/components/shared/sections/projects/projects-list/index.tsx`), an async server component.

Everything else (navigation, about text, social links, theme options) still lives in **`src/lib/constants/index.ts`** — there are no DB models for those and none are planned. `PROJECTS` in that file is now only the seed source (`prisma/seed.ts`), not read by the UI.

The homepage (`src/app/(root)/page.tsx`) sets `export const revalidate = 3600` so the DB is queried at build time and then re-fetched in the background at most once an hour (ISR), rather than on every request or only once at build time.

### Component structure

- `src/components/shared/` — Page-level components: header (auto-hides on scroll down), footer, and one directory per section under `sections/`.
- `src/components/ui/` — shadcn/ui primitives (Button, Input, Label, Sheet, Textarea, DropdownMenu). Treat these as a library; prefer editing shared components over modifying ui primitives.

### Styling conventions

Tailwind CSS v4 with CSS custom properties for theming. Dark mode is handled via the `.dark` class on `<html>` (set by `next-themes`).

Reusable layout classes defined in `src/assets/styles/globals.css`:
- `.section` — standard section container with max-width (`90rem`), horizontal padding, and flex layout.
- `.title`, `.title-md`, `.title-sm` — heading styles using Bebas Neue.
- `.wrapper` — full-width flex column.

`SectionWrapper` (`src/components/shared/sections/section-wrapper/index.tsx`) applies `.section` and merges additional classNames — use it as the outer element for all page sections.

### Utilities

`src/lib/utils.ts` exports:
- `cn()` — combines clsx + tailwind-merge for conditional class names.
- `trySmoothScroll(href)` — scrolls to a hash target with header-height offset and updates the URL hash without a page jump. Used by navigation links.
