Phone number input with a country-code box, used on sign-in.

## Specs

- Country-code box 76 × 56 px, then the input filling the rest of the row, 8 px apart.
- Both are 56 px tall, `radius-md`, fill `surface-raised`, 2 px `border-strong` edge, 18 px text at weight 800. The placeholder drops to weight 500 in `text-muted`.
- The country code is static for now (`+20`, Egypt).
- Focused: 2 px `primary` edge plus a 4 px `primary-tint` halo. Error: 2 px `danger` edge, and the helper line is replaced by an alert icon and the message in `danger`.
- Label in the `label` style above, always visible. Helper and error text are 14/20.
- The input is `type="tel"`, `inputmode="numeric"`, `autocomplete="tel-national"`, and is described by the country code and the helper or error line.

This is larger than the generic Field (52 px, 1.5 px edge) on purpose: phone entry is the whole job of the sign-in screen.
