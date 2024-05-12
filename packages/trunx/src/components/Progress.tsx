import { ProgressHTMLAttributes, FC } from "react"
import { classnames } from "@trunx/classnames"
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
  return (
    <progress
      className={classnames(
        "progress",
        colorClassName(color),
        sizeClassName(size),
        className
      )}
      {...props}
    />
  )
}
