import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import {
  flexClassNames,
  FlexModifierProps,
  SpacingModifierProp,
  spacingClassNames,
} from "../modifiers/index.js"

export type FlexProps = HTMLAttributes<HTMLDivElement> & FlexModifierProps & SpacingModifierProp

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
  const _class = classNames(
    flexClassNames({ align, alignItems, alignSelf, direction, grow, justify, shrink, wrap }),
    spacingClassNames(spacing),
    className
  )

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
