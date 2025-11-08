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

This is an Astro-based academic portfolio site using a feature-based architecture with content collections.

### Source Organization

**Feature-Based Structure**: Code is organized by feature domains in `src/features/[feature]/`:

```
src/features/
└── navigation/
    ├── components/
    │   ├── index.ts          # Barrel export
    │   ├── desktop-nav.astro # Public component
    │   └── _dropdown.astro   # Private component (prefix with _)
    └── config/
        └── nav-links.ts      # Feature-specific configuration
```

**Import Pattern**: Features export components via barrel files:
```typescript
// In feature's index.ts
export { DesktopNav } from './desktop-nav.astro'

// Usage in pages
import { DesktopNav } from '#features/navigation/components'
```

**Core Directories**:
- `src/features/` - Feature modules with colocated components and config
- `src/lib/` - Shared utilities and constants
- `src/layouts/` - Page layout templates
- `src/pages/` - Astro file-based routing
- `src/style/` - Global styles following ITCSS methodology

**Import Alias**: Uses `#*` for `./src/*` (configured in `package.json` imports field)

### Content Collections System

**Separation of Concerns**: Content lives in `/data/[collection]/*.md` (outside `/src/`)

**Collections** (defined in `src/content.config.ts`):
- `articles`, `expositions`, `hommages`, `colloques`, `ouvrages`
- All use schema: `{ title: string, date: Date }`
- Loaded via `glob` loader from `data/[collection]/` directories

**Dynamic Routing**: Use `getStaticPathsFromCollection()` helper from `src/lib/routes.ts` to generate static paths

### Type Safety

**astro-typesafe-routes**: Provides compile-time route validation
- Use `<Link to="/path">` instead of `<a href>`
- Routes typed based on `src/pages/` structure
- Route references use `RouteOptions<keyof Routes>['to']` for type safety

### CSS Architecture

**ITCSS Layers**:
1. **Global** (`src/style/global/`) - CSS Custom Properties, reset, base styles
2. **Composition** (`src/style/composition/`) - Layout primitives like `.container`
3. **Utilities** - Generated on-demand by UnoCSS from design tokens

**Design Tokens** (CSS Custom Properties):
- Colors: `--clr-text`, `--clr-surface`, `--clr-accent`, etc. (Open Color palette)
- Typography: `--fs--2` to `--fs-7` (fluid scale)
- Spacing: `--space-3xs` to `--space-3xl` (fluid scale using clamp)

**UnoCSS Integration** (`uno.config.ts`):
- Automatically generates utilities from CSS variables
- Font sizes: `fs-6`, `fs--1`
- Text colors: `text-base`, `text-accent`
- Spacing: `mt-2xl`, `p-s`, `gap-l`
- Flow rhythm: `flow-m` (sets `--flow-space`)

**Styling Workflow**: Use UnoCSS utilities first, add to appropriate CSS layer only when needed

### Development Patterns

**Adding Content**: Create markdown files in `/data/[collection]/` with frontmatter `{ title, date }`

**New Features**: Follow feature-based structure:
1. Create `src/features/[feature]/` directory
2. Add `components/` for UI components (prefix private ones with `_`)
3. Add `config/` for feature-specific constants and configuration
4. Create `components/index.ts` barrel export
5. Import via `#features/[feature]/components`

**Feature Constants**: Colocate feature-specific config in `src/features/[feature]/config/` (e.g., `nav-links.ts` in navigation feature)

**Shared Constants**: Add truly shared utilities and constants to `src/lib/` when used across multiple features

### Deployment Configuration

- **Base path**: `vanessa-noizet` (subdirectory deployment)
- **Static generation**: All pages pre-rendered at build time
