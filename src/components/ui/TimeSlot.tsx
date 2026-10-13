import type { ButtonHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { cx } from '../../lib/cx'

export type SlotState = 'available' | 'peak' | 'booked'

export interface TimeSlotProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** 24-hour start time, e.g. "19:30". */
  time: string
  state?: SlotState
  selected?: boolean
  /** Second line, e.g. a price. Defaults to the state word so state never relies on color alone. */
  note?: string
  /** Single-line compact form (48px) used inside cards. */
  compact?: boolean
}

const defaultNote = { available: 'slot.available', peak: 'slot.peak', booked: 'slot.booked' } as const

/** Bookable start time. Selected uses aria-pressed; booked is disabled and struck through. */
export function TimeSlot({ time, state = 'available', selected = false, note, compact, className, ...props }: TimeSlotProps) {
  const { t } = useTranslation()
  const booked = state === 'booked'
  const label = selected && !note ? t('slot.selected') : (note ?? t(defaultNote[state]))

  const tone = booked
    ? 'border-disabled-bg bg-disabled-bg text-disabled-text cursor-not-allowed'
    : selected
      ? 'border-primary bg-primary text-on-primary'
      : state === 'peak'
        ? 'border-accent-edge bg-accent-tint text-text hover:border-text'
        : 'border-border-strong bg-surface-raised text-text hover:border-text'

  return (
    <button
      type="button"
      disabled={booked}
      aria-pressed={booked ? undefined : selected}
      className={cx(
        'flex flex-col items-center justify-center rounded-md border-[1.5px] px-3.5 transition-colors duration-[120ms] cursor-pointer',
        compact ? 'h-12 min-w-0 flex-1' : 'h-14 min-w-[92px]',
        tone,
        className,
      )}
      {...props}
    >
      <span className={cx('font-display font-bold tabular-nums', compact ? 'text-[22px] leading-6' : 'text-2xl leading-6', booked && 'line-through')}>
        {time}
      </span>
      {!compact && (
        <span className={cx('text-[11px] font-bold', state === 'peak' && !selected && 'font-extrabold', !selected && !booked && state === 'available' && 'text-text-muted')}>
          {label}
        </span>
      )}
      {compact && <span className="sr-only">{label}</span>}
    </button>
  )
}
