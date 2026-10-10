Text input with a visible label, helper line and clear error state.

## Specs

- 52 px tall, `radius-md`, 16 px text, 16 px horizontal padding, fill `surface-raised`.
- Edge: 1.5 px `border-strong`. Focused: 2 px `primary` edge plus a 4 px `primary-tint` halo. Error: 2 px `danger` edge with an icon and message in `danger` below.
- Disabled: `disabled-bg` fill, `border` edge, `disabled-text`.
- The label sits above in the `label` style and is always visible; a placeholder never replaces it.
- Helper text uses `text-muted` at 13 px. Error text names the fix ("Enter a valid phone number").
- Use `<label>` wrapping a real `<input>`. Search fields add a leading search icon and a 52 px square filter button beside them.
