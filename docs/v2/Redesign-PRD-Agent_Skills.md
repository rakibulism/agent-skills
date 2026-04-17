# Product Requirements Document
## aigentskills.vercel.app — Full Platform Redesign

**Project:** Agent Skills Platform — Visual & UX Redesign  
**Author:** Rakibul (Panze LLC / Rakibulism)  
**Version:** 1.0  
**Date:** April 17, 2026  
**Audience:** Designer  

---

## 1. Background

**aigentskills.vercel.app** is an open-source platform to browse, preview, and download `.prompt.md` agent skill files — pre-built instruction sets that supercharge AI coding tools like Claude Code, Cursor, Windsurf, and VS Code.

The core value proposition is three words on the homepage: **"Download. Drop in. Go."**

The platform currently works. The content is real. The product idea is strong. But the design has zero personality — it looks like a developer threw up a Next.js project in an afternoon and shipped it. For a product that lives in the AI developer ecosystem alongside tools like Vercel, Linear, and Raycast, this is a credibility problem. The design needs to match the sharpness of the idea.

**Live URL:** https://aigentskills.vercel.app  
**GitHub:** https://github.com/rakibulism/agent-skills

---

## 2. What We're Redesigning

This is a **visual and UX redesign** — not a feature rebuild. The underlying data model, routing, and content stay the same. We're redesigning how it looks and how it feels to move through it.

**Pages in scope:**
1. Homepage (`/`)
2. Skills catalog (`/skills`)
3. Skill detail (`/skills/[slug]`)
4. Categories (`/categories`)
5. Providers (`/providers`)

---

## 3. Current State Audit — What's Wrong

### Homepage
- The hero is literally just an `<h1>` and a tagline. No visual identity. No atmosphere.
- "Featured Skills" below the fold is the exact same card grid as the skills page — no reason to exist separately.
- Nothing communicates the product's context: what AI tools are supported, who it's for, why it matters.
- No social proof (GitHub star count is buried in the nav).

### Skills Catalog
- Search is a bare HTML form with two text inputs and an "Apply" button. Looks like a 2012 admin panel.
- Cards show `# Backend Developer Node` as the description — it's pulling the raw markdown heading. This is broken UX, not a content issue.
- No visual distinction between skill cards. Engineering, design, marketing, thinking — all look identical.
- Tags look like plain text spans with a `#` prefix. No visual treatment.

### Skill Detail Page
- Not audited live but based on the structure: it likely renders the raw markdown. Needs a proper layout with download/copy CTA front and center, provider compatibility badges, and a readable code preview.

### Categories Page
- Currently just a list of 8 text links. Should feel like an entry point into a curated space.

### Providers Page
- Not audited. Presumably lists Claude Code, Cursor, Windsurf, VS Code. This is a high-value trust signal and needs to be treated as such.

### Global
- No brand personality. The logo is plain lowercase text.
- The color system is undefined — basic gray and white.
- Typography is system-ui default.
- No dark mode (this is a developer tool — dark mode is expected).

---

## 4. Target Users

**Primary:** Developers using AI coding tools who want to extend or supercharge their agents with pre-built skills. They know what Claude Code, Cursor, and Windsurf are. They're used to documentation sites like Vercel Docs, Raycast, and Linear — clean, fast, information-dense.

**Secondary:** Founders and solo builders who discovered the platform through the Substack article or social content. They're evaluating whether to add skills to their workflow. Less technical but design-sensitive.

**Persona in one sentence:** A developer who respects their tools and immediately judges yours by how it looks.

---

## 5. Design Direction

### Aesthetic
**Dark, minimal, technical.** Think Vercel + Raycast + a developer's terminal. Not aggressive dark mode — refined dark mode. Deep near-black backgrounds, subtle surface layering, sharp typographic hierarchy, accent color used sparingly and with intention.

This product sits in the agentic AI space. The design should feel like it belongs there — cutting-edge but disciplined. No decorative gradients, no rounded pill shapes everywhere, no cheerful illustrations. Everything should feel like it was built by someone who cares about craft.

### Color System
```
Background:         #0A0A0A  (near-black, not pure black)
Surface:            #111111
Card surface:       #161616
Border subtle:      #1F1F1F
Border visible:     #2A2A2A
Body text:          #E8E8E8
Secondary text:     #888888
Muted/caption:      #555555
Accent (primary):   #5B6EF5  (indigo-blue — signals intelligence, tools, code)
Accent hover:       #7B8CF7
Success:            #22C55E
Tag bg:             #1A1A2E
Tag text:           #7B8CF7
```

> **Note to designer:** The accent color is a recommendation. If you have a stronger direction, propose it. The constraint is: one accent color, used sparingly, never decoratively.

### Typography
```
Display / Hero:     Geist Mono OR JetBrains Mono (monospaced for the tech feel)
                    — use for the hero headline and skill names
Headings:           Geist Sans OR DM Sans  
Body / UI:          Geist Sans OR DM Sans
Code/preview:       Geist Mono (for skill file previews)
```

> Geist is Vercel's open-source font family and appropriate here — developer-native, clean, no personality baggage. If Geist feels too borrowed, use IBM Plex Sans + IBM Plex Mono as an alternative pairing.

### Tone
The product already has a great tagline: **"Download. Drop in. Go."** — keep that energy throughout. Copy is direct, dry, and technical. No marketing fluff.

---

## 6. Page-by-Page Specifications

---

### 6.1 — Global Navigation

**Layout:** Fixed top nav, full-width, 60px height, dark surface with subtle bottom border.

**Left:** Logo — `agent-skills` in monospaced font, with a small terminal cursor or bracket motif. Keep it text-based, no icon.

**Center nav links:** Skills · Providers · Categories

**Right:**  
- GitHub star badge (styled, not the raw shields.io image — make it a custom chip with the star icon and count)
- Author on X (icon only, no label)

**States:** Active link has accent color underline. Hover has text color shift.

---

### 6.2 — Homepage (`/`)

**Goal:** One screen should communicate: what this is, who it's for, and how to get started. Every element earns its place.

#### Hero Section
**Layout:** Full viewport height. Centered content, max-width 720px.

**Content — top to bottom:**

1. **Eyebrow label** (optional): `Open source · 20 skills · 8 categories`  
   — small caps, muted color, tight tracking

2. **Headline (H1):**  
   ```
   Expert agent skills.
   ```
   — Large, monospaced, bold. 56–72px. White.

3. **Tagline:**  
   ```
   Download. Drop in. Go.
   ```
   — Slightly smaller, accent color, medium weight.

4. **Body text (1–2 lines):**  
   ```
   Pre-built .prompt.md skill files for Claude Code, Cursor, Windsurf, and VS Code.
   ```

5. **CTAs (2 buttons):**
   - Primary: `Browse Skills` → `/skills`
   - Secondary (ghost/outline): `View on GitHub` → GitHub URL  
   
   Buttons sit side-by-side, 44px height, 8px gap.

6. **Provider logos row** (below CTAs):  
   Small monochrome logos or wordmarks for: Claude Code, Cursor, Windsurf, VS Code.  
   Label: `Works with` in muted caption text above.

**Background treatment:** Near-black `#0A0A0A`. Optionally, a very subtle grid pattern or noise texture overlay — no gradient, no glow blobs.

---

#### Stats Row
Below the hero, before "Featured Skills":  
A horizontal row of 3–4 stats:

| Stat | Value |
|------|-------|
| Skills | 20 |
| Categories | 8 |
| Providers | 4 |
| Open Source | MIT |

Each stat: large number (32px, white), label below (12px, muted). Separated by subtle vertical dividers.

---

#### Featured Skills Section
**Title:** `Featured Skills`  
**Subtitle:** `Handpicked across all categories`

Show 6 skill cards in a 3-column grid (desktop). See Card component spec in Section 7.

**CTA below grid:** `View all 20 skills →` (text link, accent color)

---

#### Category Row
**Title:** `Browse by category`

8 category chips in a horizontal scrollable row or 4×2 grid:
- Engineering · Writing · Design · Thinking
- Product · Analysis · Ops · Marketing

Each chip: dark surface card, category name, skill count (e.g., `Engineering · 6`), category icon (optional — subtle, line style).

---

#### Footer
Minimal. Two lines:
- `© 2026 Rakibulism` | Links: GitHub · X · Substack
- `Built by Panze LLC`

---

### 6.3 — Skills Catalog (`/skills`)

**Goal:** Help the user find and download a skill in under 30 seconds.

#### Header
```
All Skills
20 skills across 8 categories
```

#### Filter Bar
Horizontal filter bar, sticky below the nav when scrolling.

**Controls:**
- Search input (left): `Search skills...` — 300px wide, dark surface, subtle border, Geist Mono font for the placeholder
- Category filter (right of search): chip-style tabs for each category — All, Engineering, Writing, Design, Thinking, Product, Analysis, Ops, Marketing
- Count label: `Showing 20 skills` — auto-updates when filtered, muted text

> No "Apply" button. Filtering happens live on keystroke/click. The current form-submit model goes away — this is a design direction note for the developer handoff.

#### Skills Grid
3-column grid (desktop), 2-column (tablet), 1-column (mobile).  
Gap: 16px.

See Skill Card spec in Section 7.

#### Empty State (when no search results)
Centered:
- Icon: a magnifying glass with a question mark
- Text: `No skills match "your query"`
- Sub-text: `Try a different search or browse by category`
- Link: `Clear search`

---

### 6.4 — Skill Detail Page (`/skills/[slug]`)

**Goal:** Give the user everything they need to decide if this skill is right for them — and make it effortless to download or copy.

#### Layout: 2-column (70/30 split on desktop)

**Left column (main content):**

1. **Breadcrumb:** `Skills / Engineering / Backend Developer Node`

2. **Skill header:**
   - Category badge (colored by category — see Section 8 for category color mapping)
   - Skill name (H1): `Backend Developer Node`
   - Tags row: `#node` `#api` `#backend` `#express`

3. **Description block:**  
   A 2–3 sentence plain-language description of what the skill does. Currently this data doesn't exist on the cards (the card shows the raw `# Heading`). This is a content gap — for the redesign, either the developer adds description fields to the skill files, or we derive them for the 20 existing skills. Flag this to Rakibul.

4. **Skill file preview:**  
   A code block (dark surface, Geist Mono, syntax-highlighted or at minimum monospaced) showing the first 30–40 lines of the `.prompt.md` file. Below it: `View full file →` link.

**Right column (sidebar — sticky):**

1. **Download CTA block:**  
   - Primary button: `↓ Download .prompt.md` (full width, accent color)
   - Secondary: `Copy CLI command` — shows `npx @rakibulism/agent-skills get backend-node` in a copyable code input

2. **Compatible with:**  
   Provider compatibility chips — Claude Code, Cursor, Windsurf, VS Code. These are icon + label chips, muted by default.

3. **Metadata:**  
   - Category: Engineering
   - Version: 1.0.1
   - License: MIT

4. **Share:**  
   Copy link icon. That's it — no social buttons.

---

### 6.5 — Categories Page (`/categories`)

**Goal:** Orient the user and help them jump to a category quickly.

**Layout:** 2×4 grid of category cards (desktop), full-width stacked on mobile.

Each category card:
- Category name (H2): `Engineering`
- Skill count: `6 skills`
- Short descriptor (1 line): e.g., `Backend, frontend, devops, database & more`
- Category-specific accent color (subtle left border or top bar)
- CTA: `Browse →`

Below the grid: a flat list of all skills grouped by category (optional — consider progressive disclosure).

---

### 6.6 — Providers Page (`/providers`)

**Goal:** Build trust with developers by showing exactly how to integrate skills with their tool.

**Layout:** Stacked sections, one per provider.

**Providers:** Claude Code · Cursor · Windsurf · VS Code

Each provider section:
- Provider logo + name (H2)
- 1-sentence integration description
- Installation steps — numbered, code blocks where applicable
- A real usage example (the `npx` or drop-in path)

**Header section:**
```
Works with your AI tools
Drop .prompt.md skills directly into your workflow.
```

**CLI section (bottom of page):**
Highlight the CLI:
```bash
npx @rakibulism/agent-skills list
npx @rakibulism/agent-skills search "seo"
npx @rakibulism/agent-skills get ui-designer --output ./tmp
```
Three command examples in a tabbed or stacked code block. This is a strong differentiator — give it proper visual weight.

---

## 7. Component Specifications

### Skill Card

```
Container:
  Background:   #161616
  Border:       1px solid #1F1F1F
  Border-radius: 8px
  Padding:       20px
  Hover state:  border-color → #2A2A2A, subtle shadow elevation 1

Header row:
  Category badge (left-aligned)
  Skill name: 16px / 600 / #E8E8E8

Description (NEW — replaces the raw `# Heading` text):
  2 lines max, 13px / 400 / #888888
  Currently missing — flag as content gap

Tags row:
  Each tag: 11px monospaced, bg #1A1A2E, color #7B8CF7, 
            padding 4px 8px, radius 4px, spacing 6px gap

Actions row (bottom):
  Layout:       space-between
  Preview link: ghost style, 13px, secondary color → accent on hover
  Download button: primary, compact 32px height, accent bg
```

### Category Badge (on cards)

```
Size:     11px / 500 / uppercase / letter-spacing 0.06em
Colors by category:
  engineering: #1A2E1A / #4ADE80   (dark green bg / green text)
  design:      #1A1A2E / #7B8CF7   (dark indigo bg / indigo text)
  writing:     #2E1A1A / #F87171   (dark red bg / red text)
  thinking:    #2E2A1A / #FBBF24   (dark amber bg / amber text)
  product:     #1A2A2E / #38BDF8   (dark cyan bg / cyan text)
  analysis:    #251A2E / #C084FC   (dark purple bg / purple text)
  ops:         #2E2E1A / #A3E635   (dark lime bg / lime text)
  marketing:   #2E1A24 / #FB923C  (dark orange bg / orange text)
```

### Filter Chip (category filter)
```
Default:  bg #161616, border 1px #2A2A2A, text #888888, radius 20px, px 12px py 6px, 12px 500
Active:   bg #1A1A2E, border 1px #5B6EF5, text #7B8CF7
Hover:    border-color #3A3A4A, text #BBBBBB
```

### Code Block (for skill preview & CLI commands)
```
Background:   #0F0F0F
Border:       1px solid #1F1F1F
Border-radius: 8px
Padding:      16px 20px
Font:         Geist Mono, 13px
Line-height:  1.7
Color:        #E8E8E8
Copy button:  top-right corner, 24px icon button, shows "Copied!" on click
```

### Primary Button
```
Height:       40px
Padding:      0 20px
Background:   #5B6EF5
Text:         #FFFFFF, 14px, 500
Border-radius: 6px
Hover:        bg #7B8CF7
Active:       scale(0.98)
```

### Ghost / Outline Button
```
Height:       40px
Padding:      0 20px
Background:   transparent
Border:       1px solid #2A2A2A
Text:         #888888, 14px, 500
Border-radius: 6px
Hover:        border-color #5B6EF5, text #E8E8E8
```

---

## 8. States to Design

For each major component, design all relevant states:

| Component | States |
|-----------|--------|
| Skill card | Default · Hover · (Focus for keyboard) |
| Primary button | Default · Hover · Active · Disabled · Loading |
| Filter chip | Default · Active · Hover |
| Search input | Default · Focused · With value · Error |
| Download button | Default · Hover · Copied/Success |
| Skills catalog | Populated · Loading · Empty state |
| Skill detail | Full content · Loading skeleton |

---

## 9. Responsive Breakpoints

```
Mobile:   < 640px   — 1 column grid, stacked nav, hamburger if needed
Tablet:   640–1024px — 2 column grid
Desktop:  > 1024px  — 3 column grid, standard layout
Wide:     > 1280px  — max-width 1280px, centered
```

---

## 10. What's Out of Scope

These are **not** part of this design sprint:

- Adding new features (authentication, user accounts, skill submission)
- Changing the data model or adding descriptions to skills (flag this as a follow-up with the developer)
- Dark/light mode toggle (dark mode only for now)
- Mobile app
- Animations and micro-interactions (nice to have in V2 — keep interactions minimal for now)

---

## 11. Deliverables Expected from Designer

1. **Design system file (Figma):**  
   - Color tokens, typography scale, spacing system
   - Core components: Button, Input, Badge, Card, Code block, Chip, Tag
   - All component states

2. **Page designs (Figma frames):**  
   - Homepage — desktop + mobile
   - Skills catalog — desktop + mobile (with filter states)
   - Skill detail page — desktop + mobile
   - Categories page — desktop
   - Providers page — desktop

3. **Developer handoff annotations:**  
   - Spacing values, color tokens, font specs on all key components
   - Interaction notes (hover states, filter behavior, copy-to-clipboard)

4. **Optional (P2):** Loading skeleton states for the skills grid.

---

## 12. Design References (Aesthetic Direction Only)

These are reference points for the vibe — not for copying:

- **Vercel.com** — Dark, minimal, monospaced type, sharp hierarchy
- **Raycast.com** — Developer tool with strong brand personality
- **Linear.app** — Product discipline, clean dark mode, typography-first
- **npmjs.com** — A developer directory done well (but we go darker and sharper)

---

## 13. Open Questions for Designer

1. Do you want to propose an alternative accent color? The indigo-blue `#5B6EF5` is a starting point — bring your own direction if you have one.
2. How do you want to handle the description gap on skill cards? Options: (a) use the category as the sub-text, (b) use the tags row as the second line, (c) flag to developer to add description fields.
3. Should the hero headline be in monospaced or a sans-serif? Suggest mocking both.

---

## 14. Timeline Expectation

| Milestone | Target |
|-----------|--------|
| Design system + tokens | 2 days |
| Homepage + Skills catalog frames | 3 days |
| Skill detail + Categories + Providers | 2 days |
| Revisions round 1 | 1 day |
| Final handoff-ready frames | Day 8 |

---

*Questions? Reach out before you go deep on any page. Let's align on direction before execution.*

**— Rakibul**
