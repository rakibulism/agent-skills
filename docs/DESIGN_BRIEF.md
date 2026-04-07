# Design Brief — AI Agent Skills Platform

**Version:** 1.0  
**Author:** Rakibul (CAO, Panze LLC)  
**For:** Developer  
**Status:** Design Direction Handoff

---

## Design Philosophy

**Clean. Minimal. Purposeful. No fluff.**

This platform exists to be useful, fast, and honest. The design should feel like a premium developer tool — not a marketing page. Think editorial restraint meets luxury precision. Nothing decorative unless it carries meaning.

> "Good design is what you remove, not what you add."

Every element earns its place. If it doesn't help the user find, understand, or download a skill — it doesn't exist on the page.

---

## Visual Identity

### Mode
**Light mode first.** Dark mode support is a v2 consideration. Light mode should be pristine — not sterile. Warm whites, soft shadows, intentional spacing.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#FAFAF9` | Page background (warm white, not pure) |
| `--color-surface` | `#FFFFFF` | Cards, modals, elevated surfaces |
| `--color-border` | `#E5E5E3` | Borders, dividers |
| `--color-text-primary` | `#0F0F0E` | Headings, primary labels |
| `--color-text-secondary` | `#6B6B67` | Subtext, meta info, descriptions |
| `--color-text-tertiary` | `#A3A3A0` | Placeholder, disabled states |
| `--color-accent` | `#1A1A1A` | Primary CTA buttons, active states |
| `--color-accent-subtle` | `#F0EFED` | Hover backgrounds, tag pills |
| `--color-highlight` | `#2563EB` | Links, active category, download action |
| `--color-highlight-subtle` | `#EFF6FF` | Link hover bg, selected state |
| `--color-success` | `#16A34A` | Copied! confirmation |
| `--color-category-design` | `#7C3AED` | Design category badge |
| `--color-category-dev` | `#0891B2` | Development category badge |
| `--color-category-marketing` | `#D97706` | Marketing category badge |
| `--color-category-creative` | `#DB2777` | Creative category badge |
| `--color-category-product` | `#059669` | Product category badge |
| `--color-category-ops` | `#DC2626` | Operations category badge |

No gradients on primary surfaces. Flat, intentional. Gradients reserved only for the hero section if used at all — and even then, very subtle.

---

## Typography

### Font Stack

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero | `DM Serif Display` | 400 | For hero headline only |
| Heading | `Geist` or `Instrument Sans` | 500, 600 | Crisp, modern, neutral |
| Body | `Geist` | 400 | Consistent with headings |
| Code / Skill Content | `Geist Mono` | 400 | For skill previews, `.prompt.md` blocks |
| Meta / Labels | `Geist` | 400, 500 | Category labels, tags |

Load via Google Fonts or Fontsource (npm).

### Type Scale

| Token | Size | Line Height | Usage |
|---|---|---|---|
| `--text-xs` | 11px | 1.5 | Tags, badges |
| `--text-sm` | 13px | 1.6 | Meta, timestamps, secondary |
| `--text-base` | 15px | 1.7 | Body copy |
| `--text-lg` | 17px | 1.6 | Card titles, sub-headings |
| `--text-xl` | 20px | 1.4 | Section headings |
| `--text-2xl` | 26px | 1.3 | Page headings |
| `--text-3xl` | 36px | 1.2 | Hero sub-headline |
| `--text-display` | 56–72px | 1.05 | Hero headline (DM Serif) |

---

## Spacing System

Base unit: `4px`

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Micro gaps |
| `--space-2` | 8px | Inner tight padding |
| `--space-3` | 12px | Tag gaps, icon padding |
| `--space-4` | 16px | Default internal padding |
| `--space-6` | 24px | Card padding, section spacing |
| `--space-8` | 32px | Component vertical gaps |
| `--space-12` | 48px | Section spacing |
| `--space-16` | 64px | Large section gaps |
| `--space-24` | 96px | Hero / landing padding |

---

## Layout & Grid

- Max content width: `1200px`
- Gutter: `24px` mobile, `32px` desktop
- Grid: 12-column flexible grid
- Card grid: 3 columns desktop, 2 tablet, 1 mobile

Generous whitespace. Let content breathe. No cramming.

---

## Component Specs

### Skill Card

```
┌─────────────────────────────────────┐
│  [Category Badge]                   │
│                                     │
│  Skill Title                        │
│  Short description — 1 line max     │
│                                     │
│  [Tag] [Tag] [Tag]                  │
│                                     │
│  ↓ Download        ⧉ Copy          │
└─────────────────────────────────────┘
```

- Border: `1px solid var(--color-border)`
- Border radius: `12px`
- Padding: `24px`
- Shadow: `0 1px 3px rgba(0,0,0,0.06)` default, `0 4px 12px rgba(0,0,0,0.10)` on hover
- Hover: subtle lift (translateY -2px), shadow upgrade
- Transition: `200ms ease`

### Category Badge
- Pill shape, `border-radius: 999px`
- Font: `--text-xs`, uppercase, letter-spacing `0.06em`
- Background: category-specific subtle color
- Example: `Design` → light purple background, dark purple text

### Download Button
- Primary action, full-width on card bottom
- Style: outlined/ghost on card, filled on detail page
- Icon: arrow-down-to-line (Lucide)
- On hover: fill with `--color-accent`, text goes white
- Click: triggers native file download

### Copy Button
- Icon only on card, icon + label on detail page
- On click: icon swaps to checkmark for 1.5s, shows "Copied!" tooltip
- Color: `--color-text-secondary` → `--color-success` on copied

### Search Input
- Full width on mobile, `480px` on desktop hero
- Height: `48px`
- Border: `1.5px solid var(--color-border)`, focus: `--color-highlight`
- Prefix: magnifying glass icon
- Suffix: `⌘K` shortcut hint (shows keyboard shortcut)
- Placeholder: `"Search skills — copywriter, ux expert, seo..."`
- Instant search — results as you type, no enter required

### Filter Pills
- Horizontal scroll on mobile
- Active state: `--color-accent` background, white text
- Inactive: `--color-accent-subtle` background, `--color-text-secondary` text

---

## Page-by-Page UX Direction

### Homepage `/`

Structure (top to bottom):
1. **Nav** — Logo left, Search center (or right), no extra links in MVP
2. **Hero** — Large headline, one-line description, search bar
3. **Stats row** — "X skills across Y categories" — keeps it credible
4. **Categories grid** — 6–8 category cards, icon + name + count
5. **Featured Skills** — Handpicked 6 cards, "New this week" or editorial label
6. **How it works** — 3 steps: Find → Preview → Download (horizontal, icon-led)
7. **Footer** — Links: GitHub, About, Submit a Skill, Changelog

**Hero copy:**
> *Expert agent skills.*  
> *Download. Drop in. Go.*

Keep it short. No paragraphs in the hero.

---

### Skills Page `/skills`

- Sticky filter bar at top (category, tool compatibility, sort)
- Infinite scroll or pagination (25 per page)
- Results count: "Showing 48 skills" updated on filter
- Empty state: friendly, no-results illustration + "Clear filters"
- Loading: skeleton cards (not spinners)

---

### Skill Detail Page `/skills/[slug]`

Structure:
1. **Breadcrumb** — Home > Design > UI Designer
2. **Header** — Skill name (large), category badge, compatible tools badges
3. **Description** — 2–3 sentences
4. **Action bar** — Download button (primary, filled, full-width or large), Copy button
5. **Preview** — Rendered Markdown of the skill content in a card/panel
6. **Tags** — Tag pills below preview
7. **Meta** — Version, author, last updated
8. **Related skills** — 3 cards below, same category

**No ads. No modals. No pop-ups. No email gate.**

---

## Motion & Interaction

Keep it fast and purposeful:

- Page transitions: fade-in on mount (`opacity 0 → 1`, `150ms`)
- Card hover: `translateY(-2px)` + shadow upgrade (`200ms ease`)
- Search results: staggered fade-in, cards appear `40ms` apart
- Download button: brief scale press `0.97` on click (`100ms`)
- Copied state: checkmark icon swap + green color (`150ms`)
- Filter pills: smooth background color transition (`150ms`)

No bouncing. No parallax. No scroll-jacking. Motion is functional, never decorative.

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | `< 640px` | 1-column grid, stacked nav |
| Tablet | `640–1024px` | 2-column grid |
| Desktop | `> 1024px` | 3-column grid, full nav |

---

## UX Principles

1. **Speed first.** Every interaction should feel instant. Skeleton states, not loaders.
2. **No friction to download.** Single click. No login. No modal. No email.
3. **Search is the primary action.** Keyboard shortcut `⌘K` / `Ctrl+K` opens search from anywhere.
4. **Content is the UI.** The skill content itself is the most important element on the detail page.
5. **Mobile = real usage.** Many users will be on mobile checking skills. Design mobile-first.
6. **No dark patterns.** No newsletter pop-ups. No "Are you sure you want to leave?" dialogs. No fake urgency.

---

## What NOT to Do

| ❌ Avoid | ✅ Instead |
|---|---|
| Purple gradient hero | Warm white with strong typographic hierarchy |
| Animated blob backgrounds | Clean flat or very subtle grain texture |
| Card carousels | Scannable grid with filters |
| Full-screen modals for previews | Inline expand or side panel |
| Sticky "Sign Up" banners | Nothing. Just the content. |
| 12 nav links | Logo + Search (+ GitHub icon) — that's it |
| Loading spinners | Skeleton screens |
| Emoji as decoration | None. This is a tool, not a social app. |

---

## Assets Needed

- Logo / wordmark (to be provided separately)
- Category icons — 8 icons, line style, Lucide-compatible or custom
- Favicon + OG image template
- Empty state illustration (minimal, SVG)

---

## Developer Notes

- Use `Lucide React` for all icons — consistent, clean, tree-shakeable
- All colors via CSS custom properties — no hardcoded hex values in components
- Build dark mode CSS variables now (even if hidden) so v2 is a switch flip
- Skeleton loaders via CSS animation, not a library
- Keep bundle size lean — no heavy animation libraries for MVP

---

*Raise any design questions via WhatsApp before building. Don't guess — ask.*
