import 'i18next'
import type { en } from './locales/en'

// Typed keys: t('signInTitle') autocompletes, and a missing key is a type error.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    keySeparator: false
    resources: { translation: typeof en }
  }
}
