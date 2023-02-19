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
  grow,
  shrink,
  alignSelf,
  direction,
  justify,
  wrap,
  spacing,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        flexClassNames({ direction, justify, align, alignItems, alignSelf, wrap, grow, shrink }),
        spacingClassNames(spacing),
        className
      ),
    [className, direction, justify, wrap, grow, shrink, align, alignItems]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
