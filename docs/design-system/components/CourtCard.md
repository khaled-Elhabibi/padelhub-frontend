Card for a club's court: court art, name, price, distance and quick start times, ending in one booking action.

## Anatomy

1. Court art, 150 px tall, white court lines on `primary` (outdoor courts may use `court-700`, indoor courts `court-900`) with an Indoor or Outdoor chip on `surface-raised`.
2. Title (`title-m`) and price (`numeric-m`, `/ 90 min` in `caption`-sized `text-muted`).
3. Distance and court count with a pin icon in `text-muted`.
4. Up to three time slots (see TimeSlot).
5. One `accent` Book court button, 52 px, full width.

## Specs

- Fill `surface-raised`, `radius-lg`, `shadow-2`, 20 px padding, 14 px gap.
- Only one accent button per screen: when several court cards are listed, keep `accent` on the first card and use primary on the rest.
