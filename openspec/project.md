# Project Context

## Purpose

Documentation website for OpenSpec - a spec-driven development tool for AI coding assistants. The site lives at openspec.clanker.guru and serves as the official documentation, showcasing the workflow, CLI commands, and integrations with AI tools like Claude Code, Cursor, and Cline.

## Tech Stack

- **Framework**: Astro 5.6 with Starlight 0.37 (official Astro docs theme)
- **Language**: TypeScript
- **Styling**: Starlight built-in styles + custom CSS overrides (no Tailwind)
- **Content**: MDX for enhanced markdown rendering
- **Fonts**: JetBrains Mono (code) via Google Fonts, system fonts for prose
- **Search**: Pagefind (included with Starlight, client-side static search)
- **Hosting**: Cloudflare Pages (planned)

## Project Structure

```
src/
├── assets/
│   ├── logos/           # OpenSpec pixel logos (light/dark SVG)
│   └── houston.webp     # Starlight mascot (unused)
├── content/
│   └── docs/            # MDX documentation (22 pages)
│       ├── getting-started.mdx
│       ├── installation.mdx
│       ├── quick-start.mdx
│       ├── faq.mdx
│       ├── changelog.mdx
│       ├── cli/         # CLI command reference (9 pages)
│       ├── concepts/    # Core concepts (3 pages)
│       └── guides/      # How-to guides (4 pages)
├── pages/
│   └── index.astro      # Custom landing page (bypasses Starlight)
└── styles/
    ├── custom.css       # Starlight theme overrides
    └── landing.css      # Landing page specific styles
```

## Key Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Starlight config: sidebar, logo, social links, fonts |
| `src/pages/index.astro` | Custom landing page with hero, features, FAQ |
| `src/styles/custom.css` | Dark mode, accent colors, font overrides |
| `src/content/docs/**` | All documentation content in MDX |

## Architecture Decisions

### Starlight Over Custom Build

Chose Starlight instead of building custom layouts because:
- Built-in sidebar, TOC, mobile nav, search (Pagefind)
- Accessible by default (WCAG 2.1 AA)
- Automatic sitemap generation
- Dark/light mode toggle included
- SEO optimized out of the box

### Custom Landing Page

The landing page (`src/pages/index.astro`) bypasses Starlight entirely to:
- Match openspec.dev aesthetic (pixel art, dark theme)
- Show feature grid, supported tools, FAQ accordion
- Provide different UX than doc pages

### No JavaScript for Docs

Core documentation reading requires no JavaScript:
- Static HTML generation
- CSS-only dark mode toggle
- Pagefind search is progressive enhancement

## Conventions

### Content

- MDX files use Starlight frontmatter (`title`, `description`, `sidebar`)
- Code blocks specify language for syntax highlighting
- Internal links use relative paths without `.mdx` extension

### Styling

- CSS custom properties for theming (defined in `custom.css`)
- Starlight's `--sl-*` variables for consistency
- Landing page uses separate `landing.css` to avoid conflicts

## Commands

```bash
bun install    # Install dependencies
bun dev        # Start dev server (localhost:4321)
bun build      # Build to ./dist/
bun preview    # Preview production build
```

## Content Mapping

Documentation sourced from OpenSpec repository:

| Source | Maps To |
|--------|---------|
| README.md | Landing page, getting started |
| openspec/AGENTS.md | Workflow guide, CLI reference |
| openspec/specs/*/spec.md | Feature documentation |
| CHANGELOG.md | Changelog page |

## Constraints

### Performance
- First Contentful Paint < 1.5s
- No JavaScript required for reading docs
- Images optimized via Astro's `sharp` integration

### Design
- Dark mode default
- Pixel art logo from OpenSpec repo
- JetBrains Mono for all code

### SEO
- OpenGraph meta tags configured in Starlight
- Sitemap auto-generated at `/sitemap-index.xml`
- Canonical URLs via `site` config
