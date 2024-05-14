import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {
  BooleanModifierProps,
  modifier,
} from "../modifiers/index.js"
import {SizeProp} from "./commonProps.js"

export type TabsProps = HTMLAttributes<HTMLElement> &
  SizeProp &
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
        sizeClass(size),
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
