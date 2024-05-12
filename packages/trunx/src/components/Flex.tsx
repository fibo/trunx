import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  flexClassNames,
  FlexModifierProps,
  SpacingModifierProp,
  spacingClassNames,
} from "../modifiers/index.js"

export type FlexProps = HTMLAttributes<HTMLDivElement> &
  FlexModifierProps &
  SpacingModifierProp

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
}) => {
  return (
    <div
      className={classnames(
        flexClassNames({
          align,
          alignItems,
          alignSelf,
          direction,
          grow,
          justify,
          shrink,
          wrap,
        }),
        spacingClassNames(spacing),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
