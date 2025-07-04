# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production (builds to subdirectory `/vanessa-noizet/`)
- `npm run preview` - Preview built site locally
- `npm run format` - Format code with Prettier

### Code Quality

Always run `npm run format` before committing to ensure consistent formatting.

## Project Architecture

### Content Collections System

This is an Astro-based academic portfolio site using a content collections architecture:

**Content Location**: All content lives in `/data/[collection]/*.md` (separate from `/src/`)

**Collections**:

- `articles` - Academic articles
- `expositions` - Exhibition information
- `hommages` - Tributes and honors
- `colloques` - Conference proceedings
- `ouvrages` - Published works
- `pages` - Static page content

**Schema**: All collections use `{ title: string, date: Date }` schema

**Dynamic Routing**: Uses `getStaticPathsFromCollection()` helper in `src/lib/routes.ts` to generate static paths from collections

### CSS Architecture

**Structure**: Follows ITCSS methodology with three layers:

1. **Global** (`src/style/global/`) - Variables, reset, base styles
2. **Composition** (`src/style/composition/`) - Layout primitives
3. **Utilities** - Generated on-demand by UnoCSS

**Design Tokens**: CSS Custom Properties as single source of truth:

- Colors: Open Color palette with semantic naming (`--clr-text`, `--clr-surface`, etc.)
- Typography: DM Serif fonts with fluid scale (`--fs--2` to `--fs-7`)
- Spacing: Fluid scale using clamp() (`--space-3xs` to `--space-3xl`)

**UnoCSS Integration**: Automatically generates utility classes from design tokens:

- Font sizes: `fs-6`, `fs--1` → uses `var(--fs-*)`
- Text colors: `text-base`, `text-accent` → uses `var(--clr-*)`
- Spacing: `mt-2xl`, `p-s`, `gap-l` → uses `var(--space-*)`
- Flow rhythm: `flow-m` → sets `--flow-space`

**Configuration**: `uno.config.ts` contains custom rules mapping CSS variables to utility classes

### Routing & Type Safety

**Import Alias**: Uses `#*` for `./src/*` (e.g., `import BaseLayout from '#layouts/Base.astro'`)

**Type-Safe Routing**: Uses `astro-typesafe-routes` for compile-time route validation

**URL Structure**:

- Static pages: `/a-propos/biographie`, `/recherche/memoire`
- Dynamic collections: `/ecrits/articles/[slug]`, `/expositions/[slug]`

### Development Patterns

**Adding Content**: Create markdown files in `/data/[collection]/` with frontmatter matching collection schema

**Styling**: Use UnoCSS utility classes first (generated from design tokens), add to appropriate CSS layer if needed

**New Pages**: Follow existing patterns in `/src/pages/` using content collections and type-safe routing

**Component Structure**: Use Astro components with frontmatter, leverage `#` import alias

### Deployment Configuration

- **Base path**: `vanessa-noizet` (configured for subdirectory deployment)
- **Static generation**: All pages are statically generated at build time
