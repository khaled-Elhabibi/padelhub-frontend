import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cx } from '../../lib/cx'
import { Icon } from './Icon'

const inputBase =
  'h-[52px] w-full min-w-0 rounded-md bg-surface-raised px-4 font-sans text-base font-semibold text-text ' +
  'placeholder:text-text-muted outline-none transition-[border-color,box-shadow] duration-[120ms] ' +
  'disabled:cursor-not-allowed disabled:border-border disabled:bg-disabled-bg disabled:text-disabled-text'

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: ReactNode
  helper?: ReactNode
  /** Error message. Names the fix: "Enter a valid phone number". */
  error?: ReactNode
}

/** Text input with an always-visible label, a helper line and an error state. */
export function TextField({ label, helper, error, id, className, ...props }: TextFieldProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const noteId = `${inputId}-note`
  const hasNote = Boolean(error || helper)

  return (
    <div className={cx('flex min-w-0 flex-col gap-1.5', className)}>
      <label htmlFor={inputId} className="type-label text-text">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={hasNote ? noteId : undefined}
        className={cx(
          inputBase,
          error
            ? 'border-2 border-danger'
            : 'border-[1.5px] border-border-strong focus:border-2 focus:border-primary focus:shadow-[0_0_0_4px_var(--primary-tint)]',
        )}
        {...props}
      />
      {error ? (
        <span id={noteId} className="flex items-center gap-1.5 text-[13px] font-bold text-danger">
          <Icon name="alert" size={16} strokeWidth={2.4} />
          {error}
        </span>
      ) : helper ? (
        <span id={noteId} className="text-[13px] font-semibold text-text-muted">
          {helper}
        </span>
      ) : null}
    </div>
  )
}

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Accessible name, since a search field has no visible label. */
  label: string
}

export function SearchField({ label, className, placeholder, ...props }: SearchFieldProps) {
  return (
    <label
      className={cx(
        'flex h-[52px] min-w-0 items-center gap-2.5 rounded-md border-[1.5px] border-border-strong bg-surface-raised px-4 text-text',
        'focus-within:border-2 focus-within:border-primary focus-within:shadow-[0_0_0_4px_var(--primary-tint)]',
        className,
      )}
    >
      <Icon name="search" size={22} />
      <input
        type="search"
        aria-label={label}
        placeholder={placeholder ?? label}
        className="min-w-0 flex-1 border-0 bg-transparent font-sans text-base font-semibold text-text outline-none placeholder:text-text-muted"
        {...props}
      />
    </label>
  )
}
