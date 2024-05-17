import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { BoolClassArg, boolClass } from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type ControlClassArg = Pick<
  BoolClassArg,
  "hasIconsLeft" | "hasIconsRight" | "isExpanded" | "isLoading"
>

export type ControlProps = HTMLAttributes<HTMLDivElement> & ControlClassArg

export const Control: FC<PropsWithChildren<ControlProps>> = ({
  children,
  className,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  isLoading,
  ...props
}) => (
  <div
    className={classnames(
      "control",
      boolClass({ hasIconsLeft, hasIconsRight, isExpanded, isLoading }),
      className
    )}
    {...props}
  >
    {children}
  </div>
)
