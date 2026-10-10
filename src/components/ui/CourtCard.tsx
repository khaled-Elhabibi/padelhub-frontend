import { cx } from '../../lib/cx'
import { Button } from './Button'
import { CourtArt, type CourtTone } from './CourtArt'
import { Icon } from './Icon'
import { TimeSlot, type SlotState } from './TimeSlot'

export interface CourtSlot {
  time: string
  state?: SlotState
}

export interface CourtCardProps {
  clubName: string
  price: number | string
  /** e.g. "/ 90 min" */
  priceUnit?: string
  /** e.g. "1.2 km · 6 courts" */
  meta: string
  surface: 'Indoor' | 'Outdoor'
  courtTone?: CourtTone
  slots?: CourtSlot[]
  selectedTime?: string
  onSelectTime?: (time: string) => void
  onBook?: () => void
  bookLabel?: string
  /**
   * Use the lime accent for the book button. Only one accent per screen:
   * keep it on the first card in a list and pass `false` for the rest.
   */
  accent?: boolean
  className?: string
}

export function CourtCard({
  clubName,
  price,
  priceUnit = '/ 90 min',
  meta,
  surface,
  courtTone,
  slots = [],
  selectedTime,
  onSelectTime,
  onBook,
  bookLabel = 'Book court',
  accent = true,
  className,
}: CourtCardProps) {
  return (
    <article className={cx('flex flex-col overflow-hidden rounded-lg bg-surface-raised text-text shadow-2', className)}>
      <div className="relative">
        <CourtArt tone={courtTone ?? (surface === 'Indoor' ? 'court-900' : 'court-700')} />
        <span className="absolute top-3.5 left-3.5 rounded-pill bg-surface-raised px-3 py-1.5 text-xs font-extrabold tracking-[0.06em] text-text uppercase">
          {surface}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3.5 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="type-title-m m-0">{clubName}</h3>
          <p className="m-0 flex shrink-0 items-baseline gap-1">
            <span className="type-numeric-m leading-7">{price}</span>
            <span className="text-xs font-bold text-text-muted">{priceUnit}</span>
          </p>
        </div>
        <p className="m-0 flex items-center gap-2 text-sm font-semibold text-text-muted">
          <Icon name="pin" size={18} />
          {meta}
        </p>
        {slots.length > 0 && (
          <div className="flex gap-2" role="group" aria-label="Start times">
            {slots.map((slot) => (
              <TimeSlot
                key={slot.time}
                compact
                time={slot.time}
                state={slot.state}
                selected={slot.time === selectedTime}
                onClick={() => onSelectTime?.(slot.time)}
              />
            ))}
          </div>
        )}
        <Button variant={accent ? 'accent' : 'primary'} fullWidth className="mt-auto h-[52px]" onClick={onBook}>
          {bookLabel}
        </Button>
      </div>
    </article>
  )
}
