import { FC, HTMLAttributes, PropsWithChildren } from "react"
import {
  BoolClassArg,
  ColorArg,
  MainColor,
  boolClass,
  colorClass,
} from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type NotificationProps = HTMLAttributes<HTMLDivElement> &
  ColorArg<MainColor> &
  Pick<BoolClassArg, "isLight">

export const Notification: FC<PropsWithChildren<NotificationProps>> = ({
  children,
  className,
  color,
  isLight,
  ...props
}) => (
  <div
    className={classnames(
      "notification",
      colorClass(color),
      boolClass({ isLight }),
      className
    )}
    {...props}
  >
    {children}
  </div>
)
