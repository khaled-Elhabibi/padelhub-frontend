import { Link, useRouterState } from '@tanstack/react-router'
import { buttonClasses } from '../components/ui'

/** Placeholder until the code-entry screen is designed. */
export function VerifyPage() {
  const phone = useRouterState({ select: (s) => s.location.state.phone })

  return (
    <main className="mx-auto flex min-h-dvh max-w-[400px] flex-col justify-center gap-4 px-4 py-16">
      <h1 className="type-display-m m-0">Enter the code</h1>
      <p className="type-body-m m-0 text-text-body">
        {phone ? (
          <>
            We sent a 6-digit code to <span className="font-bold whitespace-nowrap text-text">{phone}</span>.
          </>
        ) : (
          '[Phone number missing. Start from sign in.]'
        )}
      </p>
      <p className="type-body-m m-0 text-text-muted">[Code entry screen not designed yet.]</p>
      <Link to="/sign-in" className={buttonClasses({ variant: 'secondary' })}>
        Change number
      </Link>
    </main>
  )
}
