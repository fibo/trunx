import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  sizeClassName,
} from "../modifiers/index.js"

export type TabsProps = HTMLAttributes<HTMLElement> &
  SizeModifierProp &
  Pick<
    BooleanModifierProps,
    | "isBoxed"
    | "isCentered"
    | "isFullwidth"
    | "isRight"
    | "isToggle"
    | "isToggleRounded"
  >

export const Tabs: FC<PropsWithChildren<TabsProps>> = ({
  children,
  className,
  isBoxed,
  isCentered,
  isFullwidth,
  isRight,
  isToggle,
  isToggleRounded,
  size,
  ...props
}) => {
  return (
    <nav
      className={classnames(
        "tabs",
        sizeClassName(size),
        modifier({
          isBoxed,
          isCentered,
          isFullwidth,
          isRight,
          isToggle,
          isToggleRounded,
        }),
        className
      )}
      {...props}
    >
      {children}
    </nav>
  )
}
