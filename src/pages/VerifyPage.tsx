import { Link, useRouterState } from '@tanstack/react-router'
import { Trans, useTranslation } from 'react-i18next'
import { buttonClasses } from '../components/ui'

/** Placeholder until the code-entry screen is designed. */
export function VerifyPage() {
  const { t } = useTranslation()
  const phone = useRouterState({ select: (s) => s.location.state.phone })

  return (
    <main className="mx-auto flex min-h-dvh max-w-[400px] flex-col justify-center gap-4 px-4 py-16">
      <h1 className="type-display-m m-0">{t('verify.title')}</h1>
      <p className="type-body-m m-0 text-text-body">
        {phone ? (
          <Trans
            i18nKey="verify.sentTo"
            values={{ phone }}
            components={{ phone: <span dir="ltr" className="font-bold whitespace-nowrap text-text" /> }}
          />
        ) : (
          t('verify.missingPhone')
        )}
      </p>
      <p className="type-body-m m-0 text-text-muted">{t('verify.notDesigned')}</p>
      <Link to="/sign-in" className={buttonClasses({ variant: 'secondary' })}>
        {t('verify.changeNumber')}
      </Link>
    </main>
  )
}
