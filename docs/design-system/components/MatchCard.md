Card for a match players can join: when, where, level, who is in and what each player pays.

## Anatomy

1. Day label (`caption`, `text-muted`) over the time range in `numeric-l` scaled to 36 px, with a status badge at the right (for example Almost full on `warning-bg`).
2. Club, court and surface in `text-body`.
3. Level range badge in `primary` and a format badge (Doubles) on `disabled-bg`.
4. Player avatars at 48 px with level numbers under them; open spots are dashed circles with a plus.
5. Footer after a `border` rule: price per player in `numeric-m` and a primary Join match button.

## Specs

- Fill `surface-raised`, `radius-lg`, `shadow-2`, 20 px padding.
- Avatars are pills filled from `primary-tint`, `surface-inverse` or `accent-tint`; initials only, no photos required.
- When a spot is the last one, use the Almost full badge. Do not use `accent` on the Join button here; it stays `primary` so the booking action elsewhere keeps the single spark.
