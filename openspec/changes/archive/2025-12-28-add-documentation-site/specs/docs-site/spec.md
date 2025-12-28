# Delta for Docs Site

## ADDED Requirements

### Requirement: Landing Page

The documentation site SHALL provide a custom landing page matching the openspec.dev visual design.

#### Scenario: Displaying hero section

- **WHEN** a user visits the root URL
- **THEN** display the OpenSpec pixel logo
- **AND** show tagline "A lightweight spec-driven framework"
- **AND** display features grid: Universal, Open Source, No API Keys, No MCP

#### Scenario: Displaying install command

- **WHEN** viewing the landing page
- **THEN** display "Get Started" link pointing to docs
- **AND** show install command `bunx @clanker-guru/openspec`
- **AND** provide copy-to-clipboard functionality

#### Scenario: Displaying tool support

- **WHEN** viewing the landing page
- **THEN** display grid of natively supported AI tools
- **AND** group tools by integration type (Native vs AGENTS.md)

### Requirement: Documentation Structure

The site SHALL provide structured documentation using Starlight with logical navigation.

#### Scenario: Navigating documentation

- **WHEN** a user accesses /docs/
- **THEN** display sidebar with documentation sections
- **AND** provide search functionality via Pagefind
- **AND** support keyboard navigation

#### Scenario: Viewing CLI reference

- **WHEN** a user navigates to CLI documentation
- **THEN** display individual pages for each command
- **AND** include command syntax, options, and examples
- **AND** link to related commands

### Requirement: Dark Mode Design

The site SHALL use dark mode as the default theme with optional light mode toggle.

#### Scenario: Loading with dark mode

- **WHEN** a user first visits the site
- **THEN** display dark mode theme by default
- **AND** use JetBrains Mono as primary font
- **AND** apply openspec.dev color scheme

#### Scenario: Toggling theme

- **WHEN** a user clicks the theme toggle
- **THEN** switch between dark and light modes
- **AND** persist preference in local storage

### Requirement: Responsive Layout

The site SHALL be fully responsive and usable on mobile devices.

#### Scenario: Viewing on mobile

- **WHEN** a user accesses the site on a mobile device
- **THEN** display mobile-optimized layout
- **AND** provide hamburger menu for navigation
- **AND** maintain readability of code blocks

### Requirement: SEO and Social Sharing

The site SHALL be optimized for search engines and social sharing.

#### Scenario: Sharing on social media

- **WHEN** a page URL is shared on social media
- **THEN** display OpenGraph meta tags with title, description, and image
- **AND** use appropriate Twitter card format

#### Scenario: Search engine indexing

- **WHEN** search engines crawl the site
- **THEN** provide semantic HTML structure
- **AND** generate sitemap.xml
- **AND** include canonical URLs
