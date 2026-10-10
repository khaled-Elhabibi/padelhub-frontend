import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

export type MatchStatus = 'open' | 'full' | 'confirmed' | 'almost-full' | 'cancelled'

const statusStyles: Record<MatchStatus, { className: string; label: string }> = {
  open: { className: 'bg-primary-tint text-primary-tint-text', label: 'Open' },
  full: { className: 'bg-disabled-bg text-text', label: 'Full' },
  confirmed: { className: 'bg-success-bg text-success', label: 'Confirmed' },
  'almost-full': { className: 'bg-warning-bg text-warning', label: 'Almost full' },
  cancelled: { className: 'bg-danger-bg text-danger', label: 'Cancelled' },
}

export interface StatusBadgeProps {
  status: MatchStatus
  /** Overrides the default word, e.g. "1 spot left". A status always carries a word. */
  children?: ReactNode
  className?: string
}

export function StatusBadge({ status, children, className }: StatusBadgeProps) {
  const style = statusStyles[status]
  return (
    <span
      className={cx(
        'inline-flex shrink-0 items-center rounded-pill px-3 py-1.5 text-xs font-extrabold tracking-[0.06em] uppercase',
        style.className,
        className,
      )}
    >
      {children ?? style.label}
    </span>
  )
}

export interface LevelBand {
  name: string
  /** Inclusive lower bound. */
  min: number
  className: string
}

/** Sample 0–7 scale. Bands are configurable: pass your own to <LevelBadge bands={…}>. */
export const defaultLevelBands: LevelBand[] = [
  { name: 'Starter', min: 0, className: 'bg-disabled-bg text-text' },
  { name: 'Improver', min: 2, className: 'bg-primary-tint text-primary-tint-text' },
  { name: 'Mid', min: 3, className: 'bg-primary text-on-primary' },
  { name: 'Advanced', min: 4, className: 'bg-surface-inverse text-surface-inverse-text' },
  { name: 'Pro', min: 6, className: 'bg-accent text-on-accent' },
]

export function levelBand(level: number, bands: LevelBand[] = defaultLevelBands): LevelBand {
  return [...bands].reverse().find((b) => level >= b.min) ?? bands[0]
}

export interface LevelBadgeProps {
  level: number
  bands?: LevelBand[]
  size?: 'sm' | 'md'
  className?: string
}

/** Player level as a numeral in a pill, filled by band. Always shows the number, not only the color. */
export function LevelBadge({ level, bands, size = 'md', className }: LevelBadgeProps) {
  const band = levelBand(level, bands)
  return (
    <span
      title={band.name}
      className={cx(
        'inline-flex items-center rounded-pill font-display font-bold tabular-nums',
        size === 'md' ? 'px-3.5 py-0.5 text-2xl leading-7' : 'px-2.5 text-lg leading-6',
        band.className,
        className,
      )}
    >
      {level.toFixed(1)}
    </span>
  )
}

export interface TagProps {
  children: ReactNode
  tone?: 'primary' | 'neutral'
  className?: string
}

/** Small descriptive pill, such as "Level 3.0–4.0" or "Doubles". */
export function Tag({ children, tone = 'neutral', className }: TagProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-pill px-3 py-1.5 text-[13px] font-extrabold',
        tone === 'primary' ? 'bg-primary text-on-primary' : 'bg-disabled-bg text-text',
        className,
      )}
    >
      {children}
    </span>
  )
}
