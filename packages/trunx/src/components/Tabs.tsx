import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames(
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
  )

  return (
    <nav className={_class} {...props}>
      {children}
    </nav>
  )
}
