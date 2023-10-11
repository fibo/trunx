import { FC, LabelHTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import { SizeModifierProp, sizeClassName } from "../modifiers/index.js"

export type LabelProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, "size"> &
  SizeModifierProp

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  className,
  size,
  ...props
}) => {
  const _class = classNames("label", sizeClassName(size), className)

  return (
    <label className={_class} {...props}>
      {children}
    </label>
  )
}
