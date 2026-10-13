import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cx } from '../../lib/cx'
import { Icon } from './Icon'

const boxBase = 'h-14 rounded-md border-2 bg-surface-raised text-lg font-extrabold text-text'

export interface PhoneFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'prefix'> {
  label: ReactNode
  /** Country code shown in the box before the input. Static for now. */
  countryCode?: string
  helper?: ReactNode
  /** Error message. Replaces the helper line. Names the fix: "Enter a valid phone number". */
  error?: ReactNode
}

/** Phone number input with a country-code box, a helper line and an error state. 56px tall. */
export function PhoneField({ label, countryCode = '+20', helper, error, id, className, ...props }: PhoneFieldProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const codeId = `${inputId}-code`
  const noteId = `${inputId}-note`
  const hasNote = Boolean(error || helper)

  return (
    <div className={cx('flex min-w-0 flex-col gap-2', className)}>
      <label htmlFor={inputId} className="type-label text-text">
        {label}
      </label>
      <div className="flex gap-2">
        <span id={codeId} dir="ltr" className={cx(boxBase, 'flex w-[76px] flex-none items-center justify-center border-border-strong tabular-nums')}>
          {countryCode}
        </span>
        <input
          id={inputId}
          type="tel"
          dir="ltr"
          inputMode="numeric"
          autoComplete="tel-national"
          aria-invalid={error ? true : undefined}
          aria-describedby={cx(codeId, hasNote && noteId)}
          className={cx(
            boxBase,
            'w-full min-w-0 flex-1 px-3.5 font-sans outline-none rtl:text-right transition-[border-color,box-shadow] duration-[120ms]',
            'placeholder:font-medium placeholder:text-text-muted',
            error ? 'border-danger' : 'border-border-strong focus:border-primary focus:shadow-[0_0_0_4px_var(--primary-tint)]',
          )}
          {...props}
        />
      </div>
      {error ? (
        <p id={noteId} className="m-0 flex items-center gap-1.5 text-sm font-bold text-danger">
          <Icon name="alert" size={16} strokeWidth={2.4} className="flex-none" />
          {error}
        </p>
      ) : helper ? (
        <p id={noteId} className="m-0 text-sm text-text-muted">
          {helper}
        </p>
      ) : null}
    </div>
  )
}
