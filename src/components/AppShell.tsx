import { Link, Outlet, useMatches } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeToggle } from './ThemeToggle'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-surface-inverse-text no-underline">
      <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="20" className="fill-accent" />
        <path d="M8 9c7 4 7 18 0 22M32 9c-7 4-7 18 0 22" fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-on-accent" />
      </svg>
      <span className="font-display text-3xl font-extrabold tracking-[0.06em] uppercase italic">Padelhub</span>
    </Link>
  )
}

const navLink =
  'inline-flex min-h-11 items-center text-[15px] font-bold text-surface-inverse-text no-underline opacity-80 hover:opacity-100 [&.active]:opacity-100 [&.active]:underline [&.active]:decoration-accent [&.active]:decoration-[3px] [&.active]:underline-offset-8'

export function AppShell() {
  const { t } = useTranslation()
  const fullScreen = useMatches({ select: (matches) => matches.some((m) => m.staticData.fullScreen) })
  if (fullScreen) return <Outlet />

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-surface-inverse">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-3 sm:px-6">
          <Logo />
          <nav aria-label={t('navPrimary')} className="flex flex-wrap items-center gap-x-7">
            <Link to="/" className={navLink} activeOptions={{ exact: true }}>
              {t('navHome')}
            </Link>
            <Link to="/design" className={navLink}>
              {t('navDesign')}
            </Link>
            <Link to="/about" className={navLink}>
              {t('navAbout')}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitch className="text-surface-inverse-text" />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
