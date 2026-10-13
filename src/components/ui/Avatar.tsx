import { useTranslation } from 'react-i18next'
import { cx } from '../../lib/cx'
import { Icon } from './Icon'

export type AvatarTone = 'blue' | 'ink' | 'lime' | 'primary'
export type AvatarSize = 32 | 40 | 48 | 56 | 72

const tones: Record<AvatarTone, string> = {
  blue: 'bg-primary-tint text-primary-tint-text',
  ink: 'bg-surface-inverse text-surface-inverse-text',
  lime: 'bg-accent-tint text-text',
  primary: 'bg-primary text-on-primary',
}

const sizes: Record<AvatarSize, string> = {
  32: 'size-8 text-xs',
  40: 'size-10 text-sm',
  48: 'size-12 text-base',
  56: 'size-14 text-lg',
  72: 'size-[72px] text-2xl',
}

export interface AvatarProps {
  initials: string
  name?: string
  tone?: AvatarTone
  size?: AvatarSize
  /** Adds a ring in the surface color, for overlapping stacks. */
  ringed?: boolean
  className?: string
}

export function Avatar({ initials, name, tone = 'blue', size = 48, ringed, className }: AvatarProps) {
  return (
    <span
      role={name ? 'img' : undefined}
      aria-label={name}
      className={cx(
        'inline-flex shrink-0 items-center justify-center rounded-pill font-extrabold',
        tones[tone],
        sizes[size],
        ringed && 'ring-3 ring-surface-raised',
        className,
      )}
    >
      <span aria-hidden={name ? true : undefined}>{initials}</span>
    </span>
  )
}

export function OpenSpot({ size = 48, className }: { size?: AvatarSize; className?: string }) {
  const { t } = useTranslation()
  return (
    <span
      className={cx(
        'inline-flex shrink-0 items-center justify-center rounded-pill border-2 border-dashed border-border-strong text-text-body',
        sizes[size],
        className,
      )}
    >
      <Icon name="plus" size={size >= 48 ? 20 : 16} strokeWidth={2.4} />
      <span className="sr-only">{t('avatar.openSpot')}</span>
    </span>
  )
}
