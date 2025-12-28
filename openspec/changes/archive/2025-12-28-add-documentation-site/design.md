# Design: OpenSpec Documentation Site

## Context

OpenSpecDocs is a documentation site for the OpenSpec project. It uses Astro with the Starlight documentation theme, but requires a custom landing page matching the openspec.dev aesthetic.

**Content source**: The OpenSpec repository at `/Users/slop/dev/OpenSpec`
**Target URL**: openspec.clanker.guru

## Goals / Non-Goals

### Goals
- Match openspec.dev visual design (dark mode, JetBrains Mono, pixel art logo)
- Provide comprehensive, searchable documentation
- Document all CLI commands with examples
- Cover all 20+ AI tool integrations
- Static site with no backend required

### Non-Goals
- Real-time content sync (manual updates are fine)
- User authentication or comments
- Analytics beyond Cloudflare Web Analytics
- Interactive playground or live demos

## Decisions

### 1. Site Architecture

**Decision**: Hybrid approach - custom landing page + Starlight for docs

**Rationale**: Starlight provides excellent docs features (search, sidebar, mobile nav) but its default landing page doesn't match the openspec.dev aesthetic. We'll use a custom Astro page for `/` and Starlight for `/docs/*`.

**Implementation**:
```
src/
├── pages/
│   └── index.astro          # Custom landing page
├── content/
│   └── docs/                 # Starlight content
│       ├── index.mdx         # Docs home
│       ├── getting-started/
│       ├── workflow/
│       ├── cli/
│       └── ...
├── components/
│   └── landing/              # Landing page components
├── styles/
│   └── landing.css           # Landing page styles
└── assets/
    └── logos/                # OpenSpec branding
```

### 2. Design System

**Decision**: Dark mode default with light mode toggle

**Colors** (from openspec.dev):
- Background: `#0a0a0a`
- Text: `#e5e5e5`
- Accent/Highlight: `#22c55e` (green)
- Border: `#262626`
- Muted: `#737373`

**Typography**:
- Primary: JetBrains Mono (monospace)
- Fallback: system monospace

**Spacing**:
- Border width: 1px
- Container max-width: 800px
- Section padding: 2rem

### 3. Content Structure

**Decision**: Logical grouping by user journey

```
/docs/
├── getting-started.mdx       # Quick start (5 min)
├── workflow.mdx              # Three-stage process
├── concepts.mdx              # Specs, changes, deltas
├── cli/
│   ├── index.mdx             # Command overview
│   ├── init.mdx
│   ├── list.mdx
│   ├── show.mdx
│   ├── validate.mdx
│   ├── archive.mdx
│   ├── update.mdx
│   ├── view.mdx
│   └── config.mdx
├── guides/
│   ├── integrations.mdx      # AI tool setup
│   ├── spec-format.mdx       # Writing specs
│   ├── change-proposals.mdx  # Creating changes
│   └── troubleshooting.mdx
├── faq.mdx
└── changelog.mdx
```

### 4. Landing Page Sections

Matching openspec.dev structure:
1. **Hero**: Logo, tagline, features grid (Universal, Open Source, No API Keys, No MCP)
2. **Install**: Get Started link + copy-able install command
3. **Links**: GitHub (with star count), Discord
4. **Tools**: Supported AI tools grid (Native + AGENTS.md categories)
5. **Coming Soon**: Workspaces teaser (optional - may omit for docs site)
6. **FAQ**: Accordion with common questions
7. **Footer**: Copyright, GitHub, Discord links

### 5. Content Sourcing

**Decision**: Manual content authoring, not automated sync

**Rationale**: 
- Docs need to be human-readable, not raw spec files
- CLI reference should include examples and context beyond spec requirements
- One-time effort with occasional updates when OpenSpec changes

**Process**:
1. Use OpenSpec README for getting started content
2. Use AGENTS.md for workflow guide base
3. Transform spec files into user-friendly CLI docs
4. Use CHANGELOG.md directly for changelog page

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Content gets out of sync with OpenSpec | Add note about OpenSpec version in docs footer |
| Custom landing page increases maintenance | Keep landing page minimal, match openspec.dev exactly |
| Starlight updates break customizations | Pin @astrojs/starlight version |

## Open Questions

1. Should the site include the "Workspaces" coming soon section, or is that only for openspec.dev?
2. Should we include the email signup form, or keep this docs-only?
3. Do we need Cloudflare analytics, or skip for now?
