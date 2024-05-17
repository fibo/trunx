import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {BoolClassArg, SizeArg, boolClass, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type TabsProps = HTMLAttributes<HTMLElement> &
  SizeArg &
  Pick<
    BoolClassArg,
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
}) => (
  <nav
    className={classnames(
      "tabs",
      sizeClass(size),
      boolClass({
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
