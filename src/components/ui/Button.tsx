import type { ButtonHTMLAttributes } from 'react'
import { cx } from '../../lib/cx'

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'outline' | 'secondary-inverse' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'inline-flex shrink-0 items-center justify-center gap-2 rounded-pill font-sans font-extrabold whitespace-nowrap ' +
  'transition-colors duration-[120ms] ease-out cursor-pointer select-none ' +
  'focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus-ring ' +
  'disabled:cursor-not-allowed disabled:text-disabled-text'

// Each variant owns its disabled fill so no two classes fight over the same property.
const filledDisabled = 'disabled:bg-disabled-bg'

const variants: Record<ButtonVariant, string> = {
  primary: `bg-primary text-on-primary enabled:hover:bg-primary-hover enabled:active:bg-primary-pressed ${filledDisabled}`,
  accent: `bg-accent text-on-accent enabled:hover:bg-accent-pressed enabled:active:bg-accent-pressed ${filledDisabled}`,
  secondary:
    'border-2 border-text bg-transparent text-text enabled:hover:bg-disabled-bg enabled:active:bg-disabled-bg disabled:border-border',
  // Quieter secondary on a raised card, next to an accent or primary action (sign-in).
  outline:
    'border-2 border-border-strong bg-surface-raised text-text enabled:hover:bg-surface enabled:active:bg-surface disabled:border-border',
  // Outline button for dark bands (hero, footer) on surface-inverse.
  'secondary-inverse':
    'border-2 border-surface-inverse-text bg-transparent text-surface-inverse-text enabled:hover:bg-surface-inverse-text/10 disabled:border-border',
  ghost: 'bg-transparent text-primary enabled:hover:bg-primary-tint enabled:hover:text-primary-tint-text',
  danger: `bg-danger-solid text-white enabled:hover:brightness-90 enabled:active:brightness-75 ${filledDisabled}`,
}

const sizes: Record<ButtonSize, { text: string; icon: string }> = {
  sm: { text: 'h-10 px-[18px] text-sm', icon: 'size-10' },
  md: { text: 'h-12 px-6 text-base', icon: 'size-12' },
  lg: { text: 'h-14 px-8 text-lg', icon: 'size-14' },
}

export interface ButtonStyleOptions {
  variant?: ButtonVariant
  size?: ButtonSize
  /** Square icon-only button. Pass an `aria-label`. */
  iconOnly?: boolean
  fullWidth?: boolean
}

/** Class names for a button, for elements that are not <button>, such as router links. */
export function buttonClasses({ variant = 'primary', size = 'md', iconOnly, fullWidth }: ButtonStyleOptions = {}) {
  return cx(base, variants[variant], iconOnly ? sizes[size].icon : sizes[size].text, fullWidth && 'w-full')
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleOptions {}

/**
 * Pill action. `accent` is the one booking action per screen; `primary` is the default main action.
 * Medium (48px) by default; `sm` (40px) is for dense web tables only.
 */
export function Button({ variant, size, iconOnly, fullWidth, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cx(buttonClasses({ variant, size, iconOnly, fullWidth }), className)} {...props} />
}
