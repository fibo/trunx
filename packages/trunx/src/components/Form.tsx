import { FC, FormEvent, FormHTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"

export type FormProps = FormHTMLAttributes<HTMLFormElement> &
  Partial<{ box: boolean }>

export const Form: FC<PropsWithChildren<FormProps>> = ({
  children,
  className,
  box,
  ...props
}) => {
  const _class = classNames(box && "box", className)

  return (
    <form className={_class} {...props}>
      {children}
    </form>
  )
}

/**
 * Form helper, get all values.
 *
 * @example
 *
 * ```ts
 * const fields = ["foo", "bar"] as const
 *
 * useCallback<FormOnSubmit>((event) => {
 *   event.preventDefault()
 *
 *   const { foo, bar } = formValues(event, fields)
 * })
 * ```
 */
export const formValues = (
  event: FormEvent<HTMLFormElement>,
  fields: ReadonlyArray<string>
) => {
  const eventTarget = event.target as EventTarget & {
    [key in (typeof fields)[number]]?: { value: unknown }
  }
  const fieldsObj = {} as { [key in (typeof fields)[number]]?: unknown }
  for (const field of fields) {
    fieldsObj[field] = eventTarget[field]?.value
  }
  return fieldsObj
}
