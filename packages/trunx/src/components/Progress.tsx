import {ProgressHTMLAttributes, FC} from "react"
import {MainColor, colorClass, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {ColorProp, SizeProp} from "./commonProps.js"

export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> &
  ColorProp<MainColor> &
  SizeProp

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
        colorClass(color),
        sizeClass(size),
        className
      )}
      {...props}
    />
  )
}
