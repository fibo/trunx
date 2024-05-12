import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import { BooleanModifierProps, modifier } from "../modifiers/index.js"

export type ControlProps = HTMLAttributes<HTMLDivElement> &
  Pick<
    BooleanModifierProps,
    "hasIconsLeft" | "hasIconsRight" | "isExpanded" | "isLoading"
  >

export const Control: FC<PropsWithChildren<ControlProps>> = ({
  children,
  className,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  isLoading,
  ...props
}) => {
  return (
    <div
      className={classnames(
        "control",
        modifier({ hasIconsLeft, hasIconsRight, isExpanded, isLoading }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
