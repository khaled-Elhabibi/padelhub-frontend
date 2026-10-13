import { useTranslation } from 'react-i18next'
import { languages, useLanguage } from '../i18n'
import { cx } from '../lib/cx'

/** Switches between English and Arabic. Shows the other language's name, in that language. */
export function LanguageSwitch({ className }: { className?: string }) {
  const { t } = useTranslation()
  const [language, setLanguage] = useLanguage()
  const next = language === 'ar' ? 'en' : 'ar'

  return (
    <button
      type="button"
      lang={next}
      title={t('languageLabel')}
      onClick={() => setLanguage(next)}
      className={cx('flex h-11 cursor-pointer items-center rounded-sm bg-transparent px-3 font-sans text-base font-bold', className)}
    >
      {languages[next].name}
    </button>
  )
}
