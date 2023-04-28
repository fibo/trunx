import { FC, LabelHTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import { SizeModifierProp, sizeClassName } from "../modifiers/index.js"

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> &
  SizeModifierProp

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  className,
  size,
}) => {
  const _class = classNames("label", sizeClassName(size), className)

  return <label className={_class}>{children}</label>
}
