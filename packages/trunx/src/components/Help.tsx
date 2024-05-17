import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { ColorArg, MainColor, colorClass } from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type HelpProps = HTMLAttributes<HTMLParagraphElement> &
  ColorArg<MainColor>

export const Help: FC<PropsWithChildren<HelpProps>> = ({
  children,
  className,
  color,
}) => (
  <p className={classnames("help", colorClass(color), className)}>{children}</p>
)
