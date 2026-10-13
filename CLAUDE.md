# Padelhub frontend

Vite + React 19 + TypeScript + TanStack Router + Tailwind CSS v4.

## Commands

- `pnpm start` — dev server on port 5173
- `pnpm build` — typecheck and production build
- `pnpm typecheck` — TypeScript only
- `pnpm tokens` — regenerate `src/styles/tokens.css` from `docs/design-system/tokens.json`

## Design system (read before any UI work)

The Padel design system lives in `docs/design-system/`:

- `README.md` — voice, color rules, type, shape, spacing, layout, icons. Read it first.
- `tokens.json` — the single source of truth for colors (light and dark), type styles, radii and shadows.
- `components/*.md` — guidelines for each component.

`src/styles/tokens.css` is GENERATED. Never edit it by hand: change `tokens.json`, then run `pnpm tokens`.

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

### Languages (English and Arabic)

- Every visible string, `aria-label` and `title` goes through i18next: `const { t } = useTranslation()` then `t('signInTitle')`. Never hard-code UI copy.
- Locales live in `src/i18n/locales/`. Keys are **flat camelCase** with the screen or component as prefix (`signInTitle`, `matchSpots_one`). No dots, no nesting. `en.ts` is the source: add the key there first, then to `ar.ts` (the types fail if Arabic is missing a key).
- Copy with links or markup uses `<Trans i18nKey="…" components={{ … }} />` with named tags in the string (`<terms>Terms</terms>`).
- Counts use plural keys (`_one`, `_other`; Arabic also `_zero`, `_two`, `_few`, `_many`) and `t('key', { count })`.
- Arabic sets `<html dir="rtl">`. Use logical utilities only: `ms-*`/`me-*`, `ps-*`/`pe-*`, `start-*`/`end-*`, `text-start`/`text-end`, `rounded-s-*`/`rounded-e-*`. Never `ml-*`, `left-*`, `text-left` and the like. Phone numbers, codes and other LTR data get `dir="ltr"`.
- `ar.ts` is a draft until a native speaker reviews it.

### Components

Reuse `src/components/ui` (import from `../components/ui`) before writing new markup:

Button (`buttonClasses()` for router links), StatusBadge, LevelBadge, Tag, TextField, SearchField, TimeSlot, SegmentedControl, Avatar, OpenSpot, CourtArt, CourtCard, MatchCard, Icon.

New shared components go in `src/components/ui`, follow the same token rules, get a guideline in `docs/design-system/components/`, and appear on the `/design` page.

`/design` renders every component in the current theme; check it in light and dark after UI changes.
