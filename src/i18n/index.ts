import i18n from 'i18next'
import { useCallback } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'
import { ar } from './locales/ar'
import { en } from './locales/en'

export type Language = 'en' | 'ar'

export const languages: Record<Language, { name: string; dir: 'ltr' | 'rtl' }> = {
  en: { name: 'English', dir: 'ltr' },
  ar: { name: 'العربية', dir: 'rtl' },
}

// Keep the key and detection logic in sync with the inline script in index.html.
const STORAGE_KEY = 'padelhub-lang'

function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'ar'
}

/** Saved choice first, then the browser's languages, then English. */
export function detectLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLanguage(saved)) return saved
  } catch {
    // Storage can be blocked (private mode); fall back to the browser.
  }
  return navigator.languages.some((l) => l.toLowerCase().startsWith('ar')) ? 'ar' : 'en'
}

function applyLanguage(language: Language) {
  document.documentElement.lang = language
  document.documentElement.dir = languages[language].dir
}

i18n.on('languageChanged', (lng) => {
  if (isLanguage(lng)) applyLanguage(lng)
})

void i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, ar: { translation: ar } },
  lng: detectLanguage(),
  fallbackLng: 'en',
  supportedLngs: ['en', 'ar'],
  initAsync: false,
  keySeparator: false, // Keys are flat strings such as 'signIn.title'.
  interpolation: { escapeValue: false }, // React already escapes.
})

/** Current language plus a setter that persists it and updates `lang` and `dir` on <html>. */
export function useLanguage(): [Language, (language: Language) => void] {
  const { i18n: instance } = useTranslation()
  const current: Language = isLanguage(instance.resolvedLanguage) ? instance.resolvedLanguage : 'en'

  const update = useCallback(
    (next: Language) => {
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Ignore: the choice still applies for this visit.
      }
      void instance.changeLanguage(next)
    },
    [instance],
  )

  return [current, update]
}

export { i18n }
