import { ProgressHTMLAttributes, FC } from "react"
import { classNames } from "../classNames.js"
import {
  ColorModifierProp,
  MainColor,
  SizeModifierProp,
  colorClassName,
  sizeClassName,
} from "../modifiers/index.js"

export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp

export const Progress: FC<ProgressProps> = ({
  className,
  color,
  size,
  ...props
}) => {
  const _class = classNames(
    "progress",
    colorClassName(color),
    sizeClassName(size),
    className
  )

  return <progress className={_class} {...props} />
}
