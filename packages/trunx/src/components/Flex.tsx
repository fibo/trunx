import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  flexClassNames,
  FlexModifierProps,
  SpacingModifierProp,
  spacingClassNames,
} from '../modifiers/index.js'

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
  const _className = useMemo(
    () =>
      classNames(
        flexClassNames({ align, alignItems, alignSelf, direction, grow, justify, shrink, wrap }),
        spacingClassNames(spacing),
        className
      ),
    [className, align, alignItems, alignSelf, direction, justify, grow, shrink, spacing, wrap]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
