import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  Breakpoint,
  BooleanModifierProps,
  ColorModifierProp,
  MainColor,
  colorClassName,
  modifier,
} from "../modifiers/index.js"

type ContainerFullWidth = Extract<Breakpoint, "fullhd" | "widescreen">
type ContainerMaxWidth = Extract<Breakpoint, "desktop" | "widescreen">

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  ColorModifierProp<MainColor> &
  Pick<BooleanModifierProps, "isFluid"> &
  Partial<{
    fullWidth: ContainerFullWidth
    maxWidth: ContainerMaxWidth
  }>

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  color,
  isFluid,
  fullWidth,
  maxWidth,
}) => {
  return (
    <div
      className={classnames(
        "container",
        colorClassName(color),
        fullWidth ? `is-${fullWidth}` : undefined,
        maxWidth ? `is-max-${maxWidth}` : undefined,
        modifier({ isFluid }),
        className
      )}
    >
      {children}
    </div>
  )
}
