import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  ColorModifierProp,
  BooleanModifierProps,
  MainColor,
  colorClassName,
  modifier,
} from "../modifiers/index.js"

export type NotificationProps = HTMLAttributes<HTMLDivElement> &
  ColorModifierProp<MainColor> &
  Pick<BooleanModifierProps, "isLight">

export const Notification: FC<PropsWithChildren<NotificationProps>> = ({
  children,
  className,
  color,
  isLight,
  ...props
}) => {
  return (
    <div
      className={classnames(
        "notification",
        colorClassName(color),
        modifier({ isLight }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
