import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames("help", colorClassName(color), className)

  return <p className={_class}>{children}</p>
}
