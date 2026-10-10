import { cx } from '../../lib/cx'

export type CourtTone = 'primary' | 'court-700' | 'court-900'

const fills: Record<CourtTone, string> = {
  primary: 'fill-primary',
  'court-700': 'fill-court-700',
  'court-900': 'fill-court-900',
}

export interface CourtArtProps {
  tone?: CourtTone
  /** Draw the net in lime instead of ink (reads better on the darkest court). */
  limeNet?: boolean
  className?: string
}

/** Top-down padel court: the system's only illustration style. Decorative. */
export function CourtArt({ tone = 'primary', limeNet = tone === 'court-900', className }: CourtArtProps) {
  return (
    <svg viewBox="0 0 368 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className={cx('block h-[150px] w-full', className)}>
      <rect width="368" height="150" className={fills[tone]} />
      <g fill="none" strokeWidth="2.5" className="stroke-white">
        <rect x="12" y="12" width="344" height="126" />
        <line x1="65" y1="12" x2="65" y2="138" />
        <line x1="303" y1="12" x2="303" y2="138" />
        <line x1="65" y1="75" x2="303" y2="75" />
      </g>
      <line x1="184" y1="6" x2="184" y2="144" strokeWidth="5" strokeLinecap="round" className={limeNet ? 'stroke-accent' : 'stroke-black'} />
    </svg>
  )
}
