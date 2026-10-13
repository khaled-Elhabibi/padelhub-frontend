# Padel

Design system for the Padel mobile app and website: finding a court, filling a match and playing at the right level. One system, light and dark, tuned for booking in a few taps on a phone and for browsing clubs on a laptop.

## Content fundamentals

- **Voice:** short, direct and physical. Say what happens: "Book court", "Join match", "Spot reserved". Never "Submit" or "Confirm selection".
- **Person:** speak to the player as "you" and about their group as "your four" or "your match". Clubs are named, never "the venue".
- **Casing:** sentence case in the interface. Uppercase is reserved for display headlines (Barlow Condensed italic) and the `caption` style.
- **Numbers carry the screen:** times (`19:30`), prices (`280`), scores (`6–4`) and levels (`3.4`) use the numeric styles with tabular numerals. Write times in 24-hour form, durations as `90 min`, and drop currency symbols from big numbers; state the currency once in the label.
- **Padel vocabulary:** court, match, doubles, left side, right side, level, peak. Use "match" for a booked game that others can join and "court" for the physical space.
- **Errors:** say what is wrong and how to fix it: "Enter a valid phone number". No apologies.
- **Placeholders:** where a fact is missing (currency, cancellation window, brand name) write it in square brackets, such as `[cancellation window]`, instead of inventing it.

## Visual foundations

- **Two colors do the work.** `primary` (court blue) leads every screen. `accent` (ball lime) is the one spark per screen, reserved for the main booking action, a peak-hour highlight or the top level badge. Everything else is cool ink neutrals tinted toward the blue.
- **Lime is a fill, never text.** `accent` on a light ground is 1.3:1. Put `on-accent` text on it, or use it as a shape.
- **Status colors** (`success`, `warning`, `danger`) always sit beside a word or icon, never alone, and have their own `-bg` fills.
- **Type:** Barlow Condensed (`display` family) for headlines and numerals, Manrope (`sans` family) for everything else. Display styles are italic and uppercase; numerals are upright, 700 and tabular. Arabic text uses Bahij TheSansArabic (second in both stacks, so it only renders Arabic characters); it stays upright because it has no italic.
- **Shape:** buttons, chips, badges and avatars are pills (`radius-pill`). Inputs, time slots and list rows use `radius-md`. Cards, sheets and hero panels use `radius-lg`.
- **Depth:** `shadow-1` for rows, `shadow-2` for cards, `shadow-3` for sheets and modals. In dark mode lean on `surface-raised` against `surface` instead of shadows.
- **Spacing:** a 4 px base. Phone screens use `space-4` margins, web cards use `space-5` padding, web sections use `space-8`.
- **Layout:** phone 390 wide with 4 columns, 16 margin and 12 gutter. Tablet 768 with 8 columns. Desktop 1280 and up with 12 columns, 80 margin, 24 gutter and a 1200 content cap.
- **Touch targets:** at least 44 px. Primary buttons are 48 px (56 px for the bottom action bar); a 40 px small button is for dense web tables only.
- **Motion:** 120 ms for taps and toggles, 200 ms for cards and sheets, 320 ms for page and modal changes, all ease-out. No bounce.
- **Court art:** a top-down padel court (outer rectangle, two service lines, a center line, a net) in white on `primary`, `court-700` or `court-900`, with a `accent` ball. It is the only illustration style.

## Iconography

Icons are inline SVG on a 24 px grid with a 2 px round stroke in `currentColor`. The set in use: home, calendar, pin, clock, users, search, bell, filter, check, plus, chevron, racket. Draw new icons to the same rules. No emoji, no filled icons.

## Using the tokens

| Need | Token |
| --- | --- |
| Screen background | `surface` |
| Card or input background | `surface-raised` |
| Main action | `primary` with `on-primary` text |
| The one booking spark | `accent` with `on-accent` text |
| Selected chip or row | `primary-tint` with `primary-tint-text` |
| Peak-hour slot | `accent-tint` with `accent-edge` border |
| Input edge | `border-strong` |
| Divider | `border` |
| Booked or disabled | `disabled-bg` with `disabled-text` and a visible word |
| Keyboard focus | 2 px `focus-ring`, 3 px gap |

Rules:

- Use `accent` once per screen.
- Text on `surface` and `surface-raised` is `text`, `text-body` or `text-muted`. Do not use `disabled-text` for meaning.
- A selected state changes both fill and weight or icon, never color alone.
- Level badges are shown by band: Starter on `disabled-bg`, Improver on `primary-tint`, Mid on `primary`, Advanced on `surface-inverse`, Pro on `accent`. The 0–7 scale and band edges are a sample and configurable.

## Components

Button, Badge, Field, TimeSlot, CourtCard and MatchCard have guidelines and live previews. They are specified as markup plus tokens, so build them in your own stack from the previews.
