Bookable start time shown as a small tile with a time and a short state or price line.

## States

- **Available:** `surface-raised` fill, 1.5 px `border-strong` edge, `text` time, `text-muted` price.
- **Selected:** `primary` fill and edge, `on-primary` text. Set `aria-pressed="true"`.
- **Peak:** `accent-tint` fill, `accent-edge` edge, `text` time and the word "Peak" in the second line.
- **Booked:** `disabled-bg` fill, `disabled-text`, struck-through time and the word "Booked". Disabled.

## Specs

- 56 px tall, `radius-md`, minimum 92 px wide. Time in `numeric-m` at 24 px with tabular numerals; second line 11 px weight 700.
- Lay out in a grid of three on a phone with an 8 px gap.
- State is always readable from text, not only from color.
