import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

export interface SegmentedOption<T extends string> {
  value: T
  label: ReactNode
  /** Accessible name when the label is an icon. */
  ariaLabel?: string
}

export interface SegmentedControlProps<T extends string> {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  /** Names the group for screen readers. */
  label: string
  size?: 'sm' | 'md'
  fullWidth?: boolean
  className?: string
}

/** Pill group with one choice, e.g. Indoor / Outdoor / Any or 60 / 90 / 120 min. */
export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  label,
  size = 'md',
  fullWidth,
  className,
}: SegmentedControlProps<T>) {
  return (
    <div role="group" aria-label={label} className={cx('inline-flex gap-1 rounded-pill bg-disabled-bg p-1', fullWidth ? 'flex w-full' : 'w-fit', className)}>
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={active}
            aria-label={opt.ariaLabel}
            onClick={() => onChange(opt.value)}
            className={cx(
              'inline-flex items-center justify-center gap-1.5 rounded-pill font-sans font-extrabold transition-colors duration-[120ms] cursor-pointer',
              size === 'md' ? 'h-11 px-6 text-[15px]' : 'h-9 px-3.5 text-sm',
              fullWidth && 'flex-1',
              active ? 'bg-surface-inverse text-surface-inverse-text' : 'bg-transparent text-text-body hover:text-text',
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
