Pill-shaped action control in five variants: primary, accent, secondary, ghost and danger.

## When to use

- **Primary** (`primary`, `on-primary`): the main action on a card or form, such as Join match or Pay now.
- **Accent** (`accent`, `on-accent`): the single booking action on a screen, such as Book court. Once per screen.
- **Secondary** (2 px `text` outline): a second action next to a primary, such as Invite.
- **Ghost** (`primary` text, no fill): low-emphasis actions such as See all.
- **Danger** (`danger-solid`, white text): destructive actions such as Cancel match. Confirm in a sheet first.

## Specs

- Sizes: large 56 px (bottom action bar, 17–18 px label), medium 48 px (default, 16 px label), small 40 px (web tables only).
- Padding 24 px horizontal (32 px on large), `radius-pill`, label weight 800.
- States: hover steps to `primary-hover` or `accent-pressed`; pressed to `primary-pressed`; disabled is `disabled-bg` with `disabled-text`; focus is a 2 px `focus-ring` with a 3 px gap.
- Icon-only buttons are 48 px circles and need an `aria-label`.
- Use a real `<button>` or `<a>`, never a styled `<div>`.
