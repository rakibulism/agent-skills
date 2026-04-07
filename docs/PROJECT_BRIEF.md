# Project Brief — Agent Skills Platform

**Version:** 1.1  
**Author:** Rakibul (CAO, Panze LLC)  
**For:** Developer  
**Status:** Pre-Development / Direction Handoff  
**GitHub Repository:** `github.com/[your-org]/agent-skills`

---

## What We're Building

A public platform where developers, designers, and AI power users can **browse, search, and download agent skill files** — specifically `.prompt.md` files formatted for VS Code AI agents (GitHub Copilot, Continue, Cursor, etc.) and compatible agentic IDEs.

Think of it as an **"npm for AI agent skills"** — but beautifully designed, minimal, and curated.

There are three access surfaces:
1. **Website** — browse, search, preview, download via browser
2. **GitHub Packages** — install or run via terminal using `npx` or `npm install`
3. **Raw GitHub** — direct file URLs for power users who want to `curl` or `wget`

---

## The Core Idea

AI coding and creative tools are becoming agent-driven. But users lack high-quality, role-specific prompt instruction files that turn a generic AI into a specialist. We solve that by building a **free, public, open-access skill library** where each skill is a downloadable `.prompt.md` file that gives an AI agent a specific expert persona and behavior set.

---

## Skill Catalog (Initial List)

### Design
- UI Designer, UX Expert, Design System Architect, Component Designer
- Icon Artist, Logo Designer, Brand Identity Strategist, Creative Art Director
- Visual Designer, Motion Designer, Figma Specialist

### Development
- Frontend Developer (React), Frontend Developer (Vue), Frontend Developer (HTML/CSS/JS)
- Backend Developer (Node.js), Backend Developer (Python), Full Stack Engineer
- Mobile Developer (iOS/Swift), Mobile Developer (Android/Kotlin), Mobile Developer (React Native)
- DevOps Engineer, Database Architect, API Designer

### Product & Strategy
- Senior Product Manager, Product Strategist, Growth Hacker, Business Analyst, Startup Advisor

### Marketing & Content
- Copywriter, Content Strategist, SEO Expert, AEO Expert, GEO Expert
- Social Media Strategist, Email Marketing Specialist, Article Writer
- Technical Writer, LinkedIn Content Expert

### Creative
- Creative Thinker, Storyteller, Fiction Writer, Script Writer, Poet, Brand Voice Writer

### Research & Analysis
- Market Researcher, Competitive Analyst, User Researcher, Data Analyst

### Operations & Management
- Project Manager, Scrum Master, Operations Lead, Client Communication Expert, Hiring Manager

### Finance & Legal *(non-advisory tone)*
- Personal Finance Planner, Financial Analyst, Contract Reviewer, Legal Summarizer

---

## File Format Standard

Every skill file uses this frontmatter + body structure:

```markdown
---
name: ui-designer
title: UI Designer
category: design
tags: ui, interface, components, figma, visual
version: 1.0
author: agent-skills
compatible_with: vscode-copilot, cursor, continue, windsurf, claude-code
---

# UI Designer

[Short description — 1-2 lines]

---

## Role
[Who/what the AI becomes when this skill is active]

## Core Philosophy
[Guiding principles — 3 to 6 bullet points]

## Behavior Rules
[What the AI should always do / never do]

## Output Format
[Expected outputs, formats, tone]

## Anti-Patterns
[What to avoid]
```

Plain Markdown only. No binary formats. No dependencies.

---

## Platform Pages & Routes

| Route | Page |
|---|---|
| `/` | Homepage — hero, search, categories, featured skills |
| `/skills` | All skills — filterable, searchable grid |
| `/skills/[slug]` | Skill detail — preview, download, copy |
| `/categories` | Category index |
| `/categories/[slug]` | Skills filtered by category |
| `/search?q=` | Search results |
| `/about` | What this is and why it exists |
| `/changelog` | New skills and version history |
| `/submit` | Contribution form (future) |

No auth required. Everything is public and downloadable.

---

## Core Features (MVP)

**Search** — Full-text, instant (no page reload), across name + tags + category + description.

**Browse & Filter** — Filter by category, compatible tool, tags. Sort by newest / most downloaded / alphabetical. Grid and list view toggle.

**Skill Detail Page** — Name, category badge, compatible tools, rendered Markdown preview, one-click download as `.prompt.md`, copy-to-clipboard button, tags, version, author.

**Download** — Direct file download. No account. No modal. No email gate. File named `[slug].prompt.md`.

**Stats** — Anonymous download count per skill. No user tracking.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Content | Flat `.md` files in `/skills/` (no CMS) |
| Search | Fuse.js (client-side, zero infra) |
| Deployment | Vercel |
| Analytics | Plausible or Umami (privacy-first) |
| Download counts | Supabase (optional, lightweight) |
| Package Registry | GitHub Packages (+ npm public registry mirror) |

New skills = new `.md` file committed to `/skills/`. No CMS. No deploy needed for content updates.

---

## Repository Structure

```
agent-skills/                          ← GitHub repo name
│
├── skills/                            ← all skill files
│   ├── ui-designer.prompt.md
│   ├── ux-expert.prompt.md
│   ├── copywriter.prompt.md
│   └── ...
│
├── packages/
│   └── cli/                           ← the terminal package
│       ├── bin/
│       │   └── agent-skills.js        ← CLI entry point (executable)
│       ├── src/
│       │   ├── commands/
│       │   │   ├── get.js             ← handles `get [slug]`
│       │   │   ├── list.js            ← handles `list`
│       │   │   └── search.js          ← handles `search [query]`
│       │   └── utils/
│       │       ├── fetch.js           ← fetches from GitHub raw URL
│       │       └── write.js           ← writes file to disk
│       ├── package.json
│       └── README.md
│
├── web/                               ← Next.js website
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── ...
│
├── .github/
│   └── workflows/
│       ├── publish-package.yml        ← auto-publish CLI on GitHub Release
│       └── deploy-web.yml            ← auto-deploy site to Vercel on push
│
└── README.md
```

---

## CLI Package — `agent-skills`

### Registry
Primary: **GitHub Packages**
Mirror: **npm public registry** (recommended — see note below)

Package name: `@[your-org]/agent-skills`

---

### What Users Run

```bash
# Download a skill into current directory
npx @[your-org]/agent-skills get ui-designer

# Download into a specific folder
npx @[your-org]/agent-skills get ui-designer --output ./.github/instructions/

# List all skills
npx @[your-org]/agent-skills list

# Filter by category
npx @[your-org]/agent-skills list --category design

# Search by keyword
npx @[your-org]/agent-skills search "seo"
npx @[your-org]/agent-skills search "frontend react"
```

---

### How the CLI Works

Skills are **not bundled inside the package**. The CLI fetches them live from GitHub raw file URLs:

```
https://raw.githubusercontent.com/[your-org]/agent-skills/main/skills/[slug].prompt.md
```

Benefits:
- Package stays tiny — no skill content inside it
- Add a new skill to the repo → all CLI users get it instantly, no package update needed
- Users always get the latest skill version

---

### CLI `package.json`

```json
{
  "name": "@[your-org]/agent-skills",
  "version": "1.0.0",
  "description": "Download AI agent skill files from the agent-skills library",
  "bin": {
    "agent-skills": "./bin/agent-skills.js"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/[your-org]/agent-skills.git"
  },
  "license": "MIT"
}
```

---

### GitHub Actions — Auto Publish on Release

Create `.github/workflows/publish-package.yml`:

```yaml
name: Publish CLI to GitHub Packages

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://npm.pkg.github.com'
      - run: cd packages/cli && npm ci
      - run: cd packages/cli && npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Every time a new **GitHub Release** is created, the CLI auto-publishes. No manual `npm publish` needed.

---

### ⚠️ Important — GitHub Packages Auth Requirement

GitHub Packages requires authentication **even for public packages**. This means users need a GitHub Personal Access Token (PAT) with `read:packages` scope before they can install.

This creates friction for casual users. **Recommendation: also publish to the public npm registry** so `npx agent-skills get ui-designer` works for anyone without setup.

The GitHub Action can publish to both registries on release with a second step:

```yaml
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: cd packages/cli && npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Add `NPM_TOKEN` as a GitHub Actions secret (from npmjs.com account). This is standard practice — one release triggers both registries.

---

## Build Order (Recommended Sequence)

1. Set up monorepo (`agent-skills/`) with `/skills`, `/packages/cli`, `/web` folders
2. Commit first 20+ skill `.md` files to `/skills/`
3. Build and deploy the website (Next.js → Vercel)
4. Build the CLI (`packages/cli/`) and test locally with `npm link`
5. Create first GitHub Release → triggers auto-publish to GitHub Packages
6. (Recommended) Add npm public registry publish to the same workflow
7. Update README with install + usage instructions

---

## MVP Definition

A complete MVP includes:
1. Homepage with hero, search bar, and category grid
2. `/skills` browse page with filter and grid
3. `/skills/[slug]` detail page with download and copy
4. Minimum 20 skills across 5+ categories live in `/skills/`
5. Mobile responsive website
6. CLI package published and working via terminal
7. Anonymous download counter

---

## Out of Scope for MVP

- User accounts / authentication
- Ratings or reviews
- Community auto-publish (submission form is fine, manual review and merge)
- Monetization or gating
- VS Code extension

---

## Contributor Notes

- All skill files — MIT license
- Skills can be forked, modified, redistributed freely
- Credit shown as "by [author]" on the skill card and in file frontmatter

---

## Questions for Developer

1. **npm mirror** — Confirm we're publishing to both GitHub Packages and public npm registry for frictionless `npx`. Do you have an npmjs.com account, or should we create one under the org?
2. **GitHub org vs personal** — Is `agent-skills` under a personal account or an org? This determines the package scope (`@username` vs `@orgname`).
3. **Search** — Fuse.js (zero infra, sufficient for current scale) or Algolia for better fuzzy matching?
4. **Download counts** — Supabase lightweight table or skip for MVP?
5. **Domain** — Do we have one, or do we need to register?

---

*This brief is a living document. Bump version number on significant changes.*
