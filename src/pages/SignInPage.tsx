import { useState, type FormEvent } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Trans, useTranslation } from 'react-i18next'
import { requestOtp, signInWithGoogle } from '../api/auth'
import { LanguageSwitch } from '../components/LanguageSwitch'
import { BrandLockup, Button, Icon, PhoneField } from '../components/ui'
import { toEgyptE164 } from '../lib/phone'

type Status = 'idle' | 'sending' | 'failed'

/** Decorative top-down court, clipped by the brand panel. Positions from the design reference. */
function BrandCourt() {
  const line = 'absolute bg-on-primary/50'
  return (
    <div aria-hidden="true" className="absolute inset-0 max-sm:hidden">
      <div className="absolute -end-20 top-[180px] h-[280px] w-[560px] border-[3px] border-on-primary/50" />
      <div className={`${line} end-[390px] top-[180px] h-[286px] w-[3px]`} />
      <div className={`${line} -end-20 top-[320px] h-[3px] w-[470px]`} />
      <div className="absolute end-[198px] top-[164px] h-[318px] w-[5px] bg-on-primary/85" />
    </div>
  )
}

export function SignInPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [showError, setShowError] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  const phoneE164 = toEgyptE164(phone)
  const sending = status === 'sending'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!phoneE164) {
      setShowError(true)
      return
    }
    setStatus('sending')
    try {
      await requestOtp(phoneE164)
      navigate({ to: '/verify', state: { phone: phoneE164 } })
    } catch {
      setStatus('failed')
    }
  }

  return (
    <main className="flex min-h-dvh flex-wrap">
      <section
        aria-label="Padel Hub"
        className="relative flex min-h-60 min-w-0 flex-[1_1_480px] flex-col justify-between gap-10 overflow-hidden bg-primary p-6 text-on-primary sm:min-h-[360px] sm:px-16 sm:py-10"
      >
        <BrandCourt />
        <BrandLockup className="relative" />
        <div className="relative flex flex-col gap-3">
          <p className="type-display-l sm:type-display-xl m-0">{t('signInHero')}</p>
          <p className="m-0 max-w-[420px] text-lg font-bold">{t('signInHeroLede')}</p>
        </div>
      </section>

      <section className="flex min-w-0 flex-[1_1_400px] flex-col px-4 pt-6 pb-10 sm:px-8">
        <div className="flex justify-end">
          <LanguageSwitch className="text-primary-tint-text hover:text-primary-hover" />
        </div>

        <div className="m-auto flex w-full max-w-[400px] flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="type-display-m m-0">{t('signInTitle')}</h1>
            <p className="type-body-m m-0 text-text-body">{t('signInIntro')}</p>
          </div>

          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-lg bg-surface-raised p-5 shadow-2 sm:p-6">
            <PhoneField
              label={t('signInPhoneLabel')}
              name="phone"
              placeholder={t('signInPhonePlaceholder')}
              helper={t('signInPhoneHelper')}
              error={showError && !phoneE164 ? t('signInPhoneInvalid') : undefined}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
                if (status === 'failed') setStatus('idle')
              }}
            />

            <div className="flex flex-col gap-2">
              <Button type="submit" variant="accent" size="lg" fullWidth disabled={sending} aria-busy={sending} className="tracking-[0.02em]">
                {sending ? t('signInSendingCode') : t('signInSendCode')}
              </Button>
              {status === 'failed' && (
                <p role="alert" className="m-0 flex items-center gap-1.5 text-sm font-bold text-danger">
                  <Icon name="alert" size={16} strokeWidth={2.4} className="flex-none" />
                  {t('signInSendFailed')}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
              <span className="type-caption text-text-muted">{t('signInOr')}</span>
            </div>

            <Button variant="outline" size="lg" fullWidth className="gap-3 tracking-[0.02em] max-sm:px-4" onClick={() => void signInWithGoogle()}>
              {/* TODO: replace this slot with Google's official "G" mark (per Google's branding guidelines). */}
              <span aria-hidden="true" className="size-6 flex-none rounded-pill border-2 border-dashed border-border-strong" />
              {t('signInGoogle')}
            </Button>
          </form>

          <p className="m-0 text-center text-sm text-text-muted">
            {/* TODO: point these at the Terms and Privacy policy routes once they exist. */}
            <Trans
              i18nKey="signInLegal"
              components={{
                terms: <a href="#" className="text-primary underline hover:text-primary-hover" />,
                privacy: <a href="#" className="text-primary underline hover:text-primary-hover" />,
              }}
            />
          </p>
        </div>
      </section>
    </main>
  )
}
