import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import { BooleanModifierProps, modifier } from "../modifiers/index.js"

export type ControlProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, "hasIconsLeft" | "hasIconsRight" | "isExpanded" | "isLoading">

export const Control: FC<PropsWithChildren<ControlProps>> = ({
  children,
  className,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  isLoading,
  ...props
}) => {
  const _class = classNames(
    "control",
    modifier({ hasIconsLeft, hasIconsRight, isExpanded, isLoading }),
    className
  )

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
