import { FC, InputHTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <label className={classnames("checkbox", className)}>
      <input type="checkbox" {...props} />

      {children}
    </label>
  )
}
