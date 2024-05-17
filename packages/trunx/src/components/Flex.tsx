import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { FlexClassArg, SpacingArg, flexClass, spacingClass } from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type FlexProps = HTMLAttributes<HTMLDivElement> &
  FlexClassArg &
  SpacingArg

export const Flex: FC<PropsWithChildren<FlexProps>> = ({
  children,
  className,
  align,
  alignItems,
  alignSelf,
  direction,
  grow,
  justify,
  shrink,
  spacing,
  wrap,
  ...props
}) => (
  <div
    className={classnames(
      flexClass({
        align,
        alignItems,
        alignSelf,
        direction,
        grow,
        justify,
        shrink,
        wrap,
      }),
      spacingClass(spacing),
      className
    )}
    {...props}
  >
    {children}
  </div>
)
