import {ProgressHTMLAttributes, FC} from "react"
import {ColorArg, MainColor, SizeArg, colorClass, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> &
  ColorArg<MainColor> &
  SizeArg

export const Progress: FC<ProgressProps> = ({
  className,
  color,
  size,
  ...props
}) => (
  <progress
    className={classnames(
      "progress",
      colorClass(color),
      sizeClass(size),
      className
    )}
    {...props}
  />
)
