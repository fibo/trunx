import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {MainColor, colorClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {
  BooleanModifierProps,
  modifier,
} from "../modifiers/index.js"
import {ColorProp} from "./commonProps.js"

export type NotificationProps = HTMLAttributes<HTMLDivElement> &
  ColorProp<MainColor> &
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
        colorClass(color),
        modifier({isLight}),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
