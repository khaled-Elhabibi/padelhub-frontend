import { cx } from '../../lib/cx'

export interface BrandLockupProps {
  className?: string
}

/** Logo mark and "Padel Hub" wordmark, for use on a `primary` ground. Takes its color from `text-on-primary`. */
export function BrandLockup({ className }: BrandLockupProps) {
  return (
    <div className={cx('flex items-center gap-3 text-on-primary', className)}>
      <svg width="36" height="36" viewBox="0 0 32 32" aria-hidden="true" className="flex-none">
        <rect width="32" height="32" rx="8" className="fill-on-primary" />
        <g fill="none" className="stroke-primary">
          <rect x="8" y="5" width="16" height="22" strokeWidth="2" />
          <path d="M8 16h16M8 10h16M8 22h16M16 10v12" strokeWidth="1.5" />
        </g>
      </svg>
      <span className="font-display text-[32px] leading-8 font-extrabold uppercase italic">Padel Hub</span>
    </div>
  )
}
