import { Link } from '@tanstack/react-router'
import { buttonClasses } from '../components/ui'

export function HomePage() {
  return (
    <section className="bg-surface-inverse text-surface-inverse-text">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 pt-14 pb-24 sm:px-6">
        <span className="type-caption tracking-[0.16em] text-accent">Courts · Matches · Players</span>
        <h1 className="m-0 max-w-4xl font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.88] font-extrabold uppercase italic text-balance">
          Find your four.
          <br />
          <span className="text-accent">Book the court.</span>
        </h1>
        <p className="type-body-l m-0 max-w-[34rem] opacity-80">
          See live availability at clubs near you, open a match to players at your level and pay your share in a few taps.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/design" className={buttonClasses({ variant: 'accent', size: 'lg' })}>
            Book a court
          </Link>
          <Link to="/design" className={buttonClasses({ variant: 'secondary-inverse', size: 'lg' })}>
            See the design system
          </Link>
        </div>
      </div>
    </section>
  )
}
