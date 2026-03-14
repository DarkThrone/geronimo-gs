# CLAUDE.md — The DarkThrone (geronimo.gs)

## Project Overview

Personal blog and website for Geronimo Garcia Sgritta, hosted at https://geronimo.gs. Recently migrated from Next.js to **Zola** (a Rust-based static site generator). The site is deployed via GitHub Pages.

## Tech Stack

- **Static Site Generator**: Zola v0.19.2
- **Templating**: Tera (Zola's template engine)
- **Styling**: SCSS (compiled by Zola) + TailwindCSS v2
- **Legacy Code**: Next.js 12 / React 17 / TypeScript (components/, pages/, lib/ — being phased out)
- **Package Manager**: Yarn v4.9.2
- **Node Version**: 14.17.1 (via Volta)

## Directory Structure

```
content/           # Zola markdown content (blog posts, pages)
  blog/            # Blog posts in Markdown with TOML front matter
  _index.md        # Homepage content
  uses.md          # Uses/equipment page
templates/         # Tera HTML templates
  base.html        # Master layout
  index.html       # Homepage template
  page.html        # Generic page template
  blog/            # Blog-specific templates (list.html, page.html)
  partials/        # Reusable components (nav, footer, newsletter)
sass/              # SCSS stylesheets (Zola compiles automatically)
static/            # Static assets (images, favicons, SVGs)
  assets/          # Blog images and icons
  favicon/         # Favicon variants
components/        # Legacy React components (from Next.js era)
lib/               # Legacy TypeScript utilities
pages/             # Legacy Next.js pages
scripts/           # Build utilities (RSS, sitemap generation)
.github/workflows/ # CI/CD pipelines
```

## Build & Development

### Zola (primary)

```bash
zola serve          # Dev server with live reload (default: localhost:1111)
zola build          # Production build (outputs to public/)
zola check          # Validate site (broken links, etc.)
```

### Legacy Node.js scripts

```bash
yarn test           # Run Jest tests
yarn lint           # ESLint with auto-fix (.ts, .tsx, .js)
yarn typecheck      # TypeScript type checking
yarn pretty-quick   # Prettier formatting
yarn cypress:run    # Run Cypress E2E tests headless
yarn cypress:open   # Open Cypress interactive runner
```

## Deployment

- **Production**: Pushes to `main` trigger `zola-deploy.yaml` → builds with Zola → deploys to `gh-pages` branch → GitHub Pages
- **PR Previews**: PRs trigger `zola-preview.yaml` → builds preview at `/pr/{PR_NUMBER}/` → deploys to `gh-pages` subpath → posts preview link as PR comment

## Content Conventions

### Blog posts

Blog posts live in `content/blog/` as Markdown files with TOML front matter:

```markdown
+++
title = "Post Title"
date = 2024-01-01
description = "Short description for SEO and feeds"
[taxonomies]
tags = ["tag1", "tag2"]
[extra]
author = "Geronimo Garcia Sgritta"
cover_image = "/assets/blog/post-slug/cover.jpg"
+++

Post content in Markdown...
```

### Templates

Templates use Tera syntax. Use `get_url()` for all internal links (never hardcode absolute paths). Partials go in `templates/partials/`.

## Code Style

- **Prettier**: trailing commas, 2-space indent, semicolons, single quotes, bracket spacing
- **ESLint**: Airbnb config + React + TypeScript + Jest + Cypress + Prettier
- **Pre-commit hooks**: Husky runs `lint-staged` (Prettier + ESLint on staged files)
- **SCSS**: Zola compiles `sass/style.scss` automatically; follow existing naming conventions

## Key Configuration Files

| File | Purpose |
|------|---------|
| `config.toml` | Zola site config (base_url, feeds, markdown, extras) |
| `package.json` | Node dependencies and legacy build scripts |
| `.eslintrc.json` | ESLint rules |
| `.prettierrc.json` | Prettier formatting rules |
| `tailwind.config.js` | TailwindCSS theme customization |
| `jest.config.js` | Jest test configuration |
| `cypress.json` | Cypress E2E config (base URL: localhost:3000) |

## Important Notes

- The site was recently migrated from Next.js to Zola. Files in `components/`, `pages/`, `lib/`, and `types/` are legacy and may be removed in the future.
- All new content and template work should use Zola/Tera conventions, not React/Next.js.
- The `config.toml` `base_url` must stay `https://geronimo.gs` for production builds.
- HTML minification is enabled (`minify_html = true` in config.toml).
- RSS feeds are generated as `atom.xml` by Zola's built-in feed system.
- Syntax highlighting uses the `base16-ocean-dark` theme.
