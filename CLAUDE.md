# Padelhup frontend

Vite + React 19 + TypeScript + TanStack Router + Tailwind CSS v4.

## Commands

- `npm run dev` — dev server on port 5173
- `npm run build` — typecheck and production build
- `npm run typecheck` — TypeScript only
- `npm run tokens` — regenerate `src/styles/tokens.css` from `docs/design-system/tokens.json`

## Design system (read before any UI work)

The Padel design system lives in `docs/design-system/`:

- `README.md` — voice, color rules, type, shape, spacing, layout, icons. Read it first.
- `tokens.json` — the single source of truth for colors (light and dark), type styles, radii and shadows.
- `components/*.md` — guidelines for each component.

`src/styles/tokens.css` is GENERATED. Never edit it by hand: change `tokens.json`, then run `npm run tokens`.

### Rules

- **Tokens only.** Never hard-code a hex, rgb or Tailwind palette color. The default Tailwind palette is disabled; only design-system colors exist (`bg-surface`, `bg-surface-raised`, `text-text`, `text-text-body`, `text-text-muted`, `border-border`, `border-border-strong`, `bg-primary text-on-primary`, `bg-accent text-on-accent`, `bg-primary-tint text-primary-tint-text`, status pairs `text-success bg-success-bg` etc.).
- **Dark mode is automatic.** Colors are CSS variables that switch on `<html data-theme="dark">`. Don't use `dark:` variants for colors; pick the right semantic token instead.
- **Type uses the `type-*` utilities:** `type-display-xl|l|m` (Barlow Condensed italic, uppercase), `type-numeric-l|m` (tabular numerals for times, prices, scores, levels), `type-title-l|m`, `type-body-l|m`, `type-label`, `type-caption`.
- **Shape:** `rounded-pill` for buttons, chips, badges, avatars; `rounded-md` (14px) for inputs, slots, rows; `rounded-lg` (22px) for cards and sheets. Shadows: `shadow-1` rows, `shadow-2` cards, `shadow-3` sheets.
- **Spacing:** Tailwind's 4px scale matches the tokens (`p-4` = `space-4` = 16px). Phone margin `px-4`, web card padding `p-5`/`p-6`, sections `py-16`.
- **Lime (`accent`) once per screen**, always as a fill with `text-on-accent`. Never lime text on a light ground.
- **Touch targets ≥ 44px.** Buttons are 48px by default; `size="sm"` (40px) only in dense web tables.
- **Accessibility:** real `<button>`, `<a>`/`<Link>`, `<label>` + `<input>`; `aria-label` on icon-only buttons; selected states use `aria-pressed` and change more than color.
- **Copy:** sentence case, 24-hour times, durations like `90 min`, verbs that say what happens ("Book court", "Join match"). Missing facts go in `[brackets]`, never invented.

### Components

Reuse `src/components/ui` (import from `../components/ui`) before writing new markup:

Button (`buttonClasses()` for router links), StatusBadge, LevelBadge, Tag, TextField, SearchField, TimeSlot, SegmentedControl, Avatar, OpenSpot, CourtArt, CourtCard, MatchCard, Icon.

New shared components go in `src/components/ui`, follow the same token rules, get a guideline in `docs/design-system/components/`, and appear on the `/design` page.

`/design` renders every component in the current theme; check it in light and dark after UI changes.
