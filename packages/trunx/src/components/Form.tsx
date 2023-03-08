import { FC, FormEventHandler, FormHTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"

export type FormProps = FormHTMLAttributes<HTMLFormElement> & Partial<{ box: boolean }>

export const Form: FC<PropsWithChildren<FormProps>> = ({ children, className, box, ...props }) => {
  const _class = classNames(box && "box", className)

  return (
    <form className={_class} {...props}>
      {children}
    </form>
  )
}

/**
 * Callback helper, alias for `React.FormEventHandler<HTMLFormElement>`.
 *
 * @example
 * ```ts
 * useCallback<FormOnSubmit>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type FormOnReset = FormEventHandler<HTMLFormElement>

/**
 * Callback helper, alias for `React.FormEventHandler<HTMLFormElement>`.
 *
 * @example
 * ```ts
 * useCallback<FormOnReset>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type FormOnSubmit = FormEventHandler<HTMLFormElement>
