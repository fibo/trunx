import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {BoolClassArg, SizeArg, boolClass, pluralSizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type ButtonsProps = HTMLAttributes<HTMLDivElement> &
  SizeArg<"small" | "medium" | "large"> &
  Pick<BoolClassArg, "isCentered">

export const Buttons: FC<PropsWithChildren<ButtonsProps>> = ({
  children,
  className,
  isCentered,
  size,
  ...props
}) => (
  <div
    className={classnames(
      "buttons",
      boolClass({isCentered}),
      pluralSizeClass(size),
      className
    )}
    {...props}
  >
    {children}
  </div>
)
