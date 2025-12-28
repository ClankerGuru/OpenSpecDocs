// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://openspec.clanker.guru',
  integrations: [
    starlight({
      title: 'OpenSpec',
      description: 'Spec-driven development for AI coding assistants',
      logo: {
        light: './src/assets/logos/openspec_pixel_light.svg',
        dark: './src/assets/logos/openspec_pixel_dark.svg',
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/ClankerGuru/OpenSpec' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/Ac42KME7' },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap',
          },
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started' },
            { label: 'Installation', slug: 'installation' },
            { label: 'Quick Start', slug: 'quick-start' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Workflow', slug: 'concepts/workflow' },
            { label: 'Specs & Changes', slug: 'concepts/specs-and-changes' },
            { label: 'Why OpenSpec', slug: 'concepts/why-openspec' },
          ],
        },
        {
          label: 'CLI Reference',
          items: [
            { label: 'Overview', slug: 'cli' },
            { label: 'init', slug: 'cli/init' },
            { label: 'list', slug: 'cli/list' },
            { label: 'show', slug: 'cli/show' },
            { label: 'validate', slug: 'cli/validate' },
            { label: 'archive', slug: 'cli/archive' },
            { label: 'update', slug: 'cli/update' },
            { label: 'view', slug: 'cli/view' },
            { label: 'config', slug: 'cli/config' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'AI Integrations', slug: 'guides/integrations' },
            { label: 'Spec Format', slug: 'guides/spec-format' },
            { label: 'Change Proposals', slug: 'guides/change-proposals' },
            { label: 'Troubleshooting', slug: 'guides/troubleshooting' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'FAQ', slug: 'faq' },
            { label: 'Changelog', slug: 'changelog' },
          ],
        },
      ],
    }),
  ],
})
