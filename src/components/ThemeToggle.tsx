import { useTheme, type ThemePreference } from '../lib/theme'
import { Icon, SegmentedControl } from './ui'

export function ThemeToggle() {
  const [theme, setTheme] = useTheme()
  return (
    <SegmentedControl<ThemePreference>
      label="Theme"
      size="sm"
      value={theme}
      onChange={setTheme}
      options={[
        { value: 'light', label: <Icon name="sun" size={18} />, ariaLabel: 'Light theme' },
        { value: 'dark', label: <Icon name="moon" size={18} />, ariaLabel: 'Dark theme' },
        { value: 'system', label: 'Auto', ariaLabel: 'Match system theme' },
      ]}
    />
  )
}
