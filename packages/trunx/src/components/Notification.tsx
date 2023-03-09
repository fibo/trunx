import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames("notification", colorClassName(color), modifier({ isLight }), className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
