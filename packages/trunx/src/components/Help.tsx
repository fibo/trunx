import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  ColorModifierProp,
  MainColor,
  colorClassName,
} from "../modifiers/index.js"

export type HelpProps = HTMLAttributes<HTMLParagraphElement> &
  ColorModifierProp<MainColor>

export const Help: FC<PropsWithChildren<HelpProps>> = ({
  children,
  className,
  color,
}) => {
  return (
    <p className={classnames("help", colorClassName(color), className)}>
      {children}
    </p>
  )
}
