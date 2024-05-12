import { FC, LabelHTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import { SizeModifierProp, sizeClassName } from "../modifiers/index.js"

export type LabelProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, "size"> &
  SizeModifierProp

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <label
      className={classnames("label", sizeClassName(size), className)}
      {...props}
    >
      {children}
    </label>
  )
}
