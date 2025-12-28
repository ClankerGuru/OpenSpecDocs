# Change: Add OpenSpec Documentation Site

## Why

The OpenSpec project needs comprehensive documentation beyond the README. Currently, users must piece together information from README.md, AGENTS.md, and individual spec files. A dedicated documentation site will:

- Provide a professional landing page matching the openspec.dev aesthetic
- Offer structured, searchable documentation for all CLI commands
- Explain the spec-driven workflow with examples
- Document all 20+ AI tool integrations
- Serve as the canonical reference at openspec.clanker.guru

## What Changes

- **Landing page**: Custom Astro page matching openspec.dev design (dark mode, JetBrains Mono, pixel art logo)
- **Documentation structure**: Starlight-powered docs with sidebar navigation
- **Content pages**:
  - Getting Started guide
  - Workflow explanation (three-stage process)
  - Core concepts (specs, changes, deltas, archive)
  - CLI reference (one page per command)
  - AI tool integrations guide
  - Spec format reference
  - FAQ section
  - Changelog
- **Design system**: Dark mode default, monospace typography, consistent with openspec.dev branding
- **Assets**: Copy logo SVGs from OpenSpec repo

## Impact

- Affected specs: New `docs-site` capability
- Affected code: Complete Astro/Starlight site structure
- Content source: `/Users/slop/dev/OpenSpec` (README, AGENTS.md, specs/, CHANGELOG)
