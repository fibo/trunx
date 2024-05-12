import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
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
  return (
    <div
      className={classnames(
        "buttons",
        modifier({ isCentered }),
        pluralSizeClassName(size),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
