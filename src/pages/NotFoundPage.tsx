import { Link } from '@tanstack/react-router'
import { buttonClasses } from '../components/ui'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-4 py-16 sm:px-6">
      <h1 className="type-display-l m-0">Out of bounds</h1>
      <p className="type-body-l m-0 text-text-body">This page doesn’t exist.</p>
      <Link to="/" className={buttonClasses()}>
        Back to home
      </Link>
    </section>
  )
}
