import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  pluralSizeClassName,
} from "../modifiers/index.js"

export type ButtonsProps = HTMLAttributes<HTMLDivElement> &
  SizeModifierProp<"small" | "medium" | "large"> &
  Pick<BooleanModifierProps, "isCentered">

export const Buttons: FC<PropsWithChildren<ButtonsProps>> = ({
  children,
  className,
  isCentered,
  size,
  ...props
}) => {
  const _class = classNames("buttons", modifier({ isCentered }), pluralSizeClassName(size), className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
