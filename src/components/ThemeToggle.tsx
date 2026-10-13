import { useTranslation } from 'react-i18next'
import { useTheme, type ThemePreference } from '../lib/theme'
import { Icon, SegmentedControl } from './ui'

export function ThemeToggle() {
  const { t } = useTranslation()
  const [theme, setTheme] = useTheme()
  return (
    <SegmentedControl<ThemePreference>
      label={t('themeLabel')}
      size="sm"
      value={theme}
      onChange={setTheme}
      options={[
        { value: 'light', label: <Icon name="sun" size={18} />, ariaLabel: t('themeLight') },
        { value: 'dark', label: <Icon name="moon" size={18} />, ariaLabel: t('themeDark') },
        { value: 'system', label: t('themeAuto'), ariaLabel: t('themeSystem') },
      ]}
    />
  )
}
