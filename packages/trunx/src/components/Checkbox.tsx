import { FC, ChangeEventHandler, InputHTMLAttributes, PropsWithChildren } from 'react'

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({ children, ...props }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" {...props} />
      {children}
    </label>
  )
}

/**
 * Callback helper, alias for `React.ChangeEventHandler<HTMLInputElement>`.
 *
 * @example
 * ```ts
 * useCallback<CheckboxOnChange>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type CheckboxOnChange = ChangeEventHandler<HTMLInputElement>
