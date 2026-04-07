# Agent Skills Platform

Public platform to browse, preview, and download `.prompt.md` agent skills.

## Monorepo Structure

- `web/` - Next.js app (App Router) for skill discovery
- `skills/` - Flat markdown skill packages (`*.prompt.md`)
- `packages/cli/` - CLI to list/search/get skills

## Run Web

```bash
npm install
npm run dev:web
```

## CLI Usage

```bash
node packages/cli/bin/agent-skills.js list
node packages/cli/bin/agent-skills.js search "seo"
node packages/cli/bin/agent-skills.js get ui-designer --output ./tmp
```
