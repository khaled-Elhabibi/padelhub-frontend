import { useTranslation } from 'react-i18next'
import { cx } from '../../lib/cx'
import { Avatar, OpenSpot, type AvatarTone } from './Avatar'
import { StatusBadge, Tag } from './Badge'
import { Button } from './Button'

export interface MatchPlayer {
  initials: string
  name?: string
  level: number
  tone?: AvatarTone
}

export interface MatchCardProps {
  /** e.g. "Tonight" or "Sunday" */
  dayLabel: string
  /** e.g. "19:30–21:00" */
  timeRange: string
  /** e.g. "Club name · Court 2 · Indoor" */
  venue: string
  /** e.g. "Level 3.0–4.0" */
  levelRange?: string
  /** Defaults to "Doubles". */
  format?: string
  players: MatchPlayer[]
  capacity?: number
  pricePerPlayer: number | string
  onJoin?: () => void
  joinLabel?: string
  className?: string
}

const toneCycle: AvatarTone[] = ['blue', 'ink', 'lime']

/** A match players can join. The Join button stays primary so the screen's booking action keeps the only accent. */
export function MatchCard({
  dayLabel,
  timeRange,
  venue,
  levelRange,
  format,
  players,
  capacity = 4,
  pricePerPlayer,
  onJoin,
  joinLabel,
  className,
}: MatchCardProps) {
  const { t } = useTranslation()
  const formatLabel = format ?? t('matchDoubles')
  const spotsLeft = Math.max(capacity - players.length, 0)
  const full = spotsLeft === 0

  return (
    <article className={cx('flex flex-col gap-3.5 rounded-lg bg-surface-raised p-5 text-text shadow-2', className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col">
          <span className="type-caption text-text-muted">{dayLabel}</span>
          <span className="font-display text-4xl leading-9 font-bold tabular-nums">{timeRange}</span>
        </div>
        {full ? (
          <StatusBadge status="full" />
        ) : spotsLeft === 1 ? (
          <StatusBadge status="almost-full">{t('matchSpotsLeft', { count: spotsLeft })}</StatusBadge>
        ) : (
          <StatusBadge status="open">{t('matchSpots', { count: spotsLeft })}</StatusBadge>
        )}
      </div>
      <p className="m-0 text-[15px] font-semibold text-text-body">{venue}</p>
      <div className="flex flex-wrap gap-2">
        {levelRange && <Tag tone="primary">{levelRange}</Tag>}
        {formatLabel && <Tag>{formatLabel}</Tag>}
      </div>
      <ul className="m-0 flex list-none gap-3 px-0 py-1.5" aria-label={t('matchPlayers')}>
        {players.map((p, i) => (
          <li key={`${p.initials}-${i}`} className="flex flex-col items-center gap-1.5 text-xs font-bold text-text-muted">
            <Avatar initials={p.initials} name={p.name} tone={p.tone ?? toneCycle[i % toneCycle.length]} />
            <span>{p.level.toFixed(1)}</span>
          </li>
        ))}
        {Array.from({ length: spotsLeft }, (_, i) => (
          <li key={`open-${i}`} className="flex flex-col items-center gap-1.5 text-xs font-bold text-text-muted">
            <OpenSpot />
            <span aria-hidden="true">{t('matchOpen')}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between gap-3 border-t-[1.5px] border-border pt-4">
        <p className="m-0 flex items-baseline gap-1">
          <span className="type-numeric-m leading-7">{pricePerPlayer}</span>
          <span className="text-xs font-bold text-text-muted">{t('matchPerPlayer')}</span>
        </p>
        <Button onClick={onJoin} disabled={full}>
          {full ? t('matchFull') : (joinLabel ?? t('matchJoin'))}
        </Button>
      </div>
    </article>
  )
}
