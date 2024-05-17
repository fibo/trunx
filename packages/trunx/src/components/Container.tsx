import { FC, HTMLAttributes, PropsWithChildren } from "react"
import {
  BoolClassArg,
  Breakpoint,
  ColorArg,
  MainColor,
  boolClass,
  colorClass,
} from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type ContainerClassArg = ColorArg<MainColor> &
  Pick<BoolClassArg, "isFluid"> &
  Partial<{
    fullWidth: Extract<Breakpoint, "fullhd" | "widescreen">
    maxWidth: Extract<Breakpoint, "desktop" | "widescreen">
  }>

export type ContainerProps = HTMLAttributes<HTMLDivElement> & ContainerClassArg

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  color,
  isFluid,
  fullWidth,
  maxWidth,
}) => (
  <div
    className={classnames(
      "container",
      colorClass(color),
      fullWidth ? `is-${fullWidth}` : undefined,
      maxWidth ? `is-max-${maxWidth}` : undefined,
      boolClass({ isFluid }),
      className
    )}
  >
    {children}
  </div>
)
