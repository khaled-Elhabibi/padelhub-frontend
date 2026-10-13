import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { buttonClasses } from '../components/ui'

export function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-4 py-16 sm:px-6">
      <h1 className="type-display-l m-0">{t('notFound.title')}</h1>
      <p className="type-body-l m-0 text-text-body">{t('notFound.body')}</p>
      <Link to="/" className={buttonClasses()}>
        {t('notFound.back')}
      </Link>
    </section>
  )
}
