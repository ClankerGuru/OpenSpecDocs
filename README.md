# OpenSpec Documentation

Official documentation website for [OpenSpec](https://github.com/clanker-guru/OpenSpec) - a spec-driven development tool for AI coding assistants.

**Live site**: [openspec.clanker.guru](https://openspec.clanker.guru)

## Development

```bash
# Install dependencies
bun install

# Start dev server (localhost:4321)
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## Stack

- [Astro](https://astro.build) - Static site generator
- [Starlight](https://starlight.astro.build) - Documentation theme
- [Pagefind](https://pagefind.app) - Static search

## Structure

```
src/
├── content/docs/    # MDX documentation (22 pages)
├── pages/           # Custom landing page
├── styles/          # CSS overrides
└── assets/logos/    # OpenSpec pixel logos
```

## Documentation Sections

- **Getting Started** - Installation, quick start guide
- **Core Concepts** - Workflow, specs & changes, why OpenSpec
- **CLI Reference** - All 8 commands documented
- **Guides** - Integrations, spec format, change proposals
- **Resources** - FAQ, changelog

## Contributing

Documentation source is in `src/content/docs/`. Each `.mdx` file becomes a page.

## Deployment

Deploy to Cloudflare Pages:

```bash
# First time: authenticate with Cloudflare
bunx wrangler login

# Deploy
bun run deploy
```

Or connect the GitHub repo to Cloudflare Pages with:
- Build command: `bun run build`
- Build output directory: `dist`

## License

MIT
