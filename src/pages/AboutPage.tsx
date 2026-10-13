import { useTranslation } from 'react-i18next'

export function AboutPage() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-16 sm:px-6">
      <h1 className="type-display-l m-0">{t('about.title')}</h1>
      <p className="type-body-l m-0 max-w-[40rem] text-text-body">{t('about.body')}</p>
    </section>
  )
}
