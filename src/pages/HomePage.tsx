import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { buttonClasses } from '../components/ui'

export function HomePage() {
  const { t } = useTranslation()
  return (
    <section className="bg-surface-inverse text-surface-inverse-text">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 pt-14 pb-24 sm:px-6">
        <span className="type-caption tracking-[0.16em] text-accent">{t('home.eyebrow')}</span>
        <h1 className="m-0 max-w-4xl font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.88] font-extrabold uppercase italic text-balance">
          {t('home.titleLine1')}
          <br />
          <span className="text-accent">{t('home.titleLine2')}</span>
        </h1>
        <p className="type-body-l m-0 max-w-[34rem] opacity-80">
          {t('home.lede')}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/design" className={buttonClasses({ variant: 'accent', size: 'lg' })}>
            {t('home.bookCourt')}
          </Link>
          <Link to="/design" className={buttonClasses({ variant: 'secondary-inverse', size: 'lg' })}>
            {t('home.seeDesign')}
          </Link>
        </div>
      </div>
    </section>
  )
}
