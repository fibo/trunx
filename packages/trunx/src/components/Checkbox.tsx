import {
  FC,
  ChangeEventHandler,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react"
import { classNames } from "../classNames.js"

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  className,
  ...props
}) => {
  const _class = classNames("checkbox", className)

  return (
    <label className={_class}>
      <input type="checkbox" {...props} />

      {children}
    </label>
  )
}

/**
 * Callback helper, alias for `React.ChangeEventHandler<HTMLInputElement>`.
 *
 * @example
 *
 * ```ts
 * useCallback<CheckboxOnChange>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type CheckboxOnChange = ChangeEventHandler<HTMLInputElement>
