import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  Breakpoint,
  BooleanModifierProps,
  ColorModifierProp,
  MainColor,
  colorClassName,
  modifier,
} from '../modifiers/index.js'

type ContainerFullWidth = Extract<Breakpoint, 'fullhd' | 'widescreen'>
type ContainerMaxWidth = Extract<Breakpoint, 'desktop' | 'widescreen'>

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  ColorModifierProp<MainColor> &
  Pick<BooleanModifierProps, 'isFluid'> &
  Partial<{
    fullWidth: ContainerFullWidth
    maxWidth: ContainerMaxWidth
  }>

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  color,
  isFluid,
  fullWidth,
  maxWidth,
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'container',
        colorClassName(color),
        fullWidth ? `is-${fullWidth}` : undefined,
        maxWidth ? `is-max-${maxWidth}` : undefined,
        modifier({ isFluid }),
        className
      ),
    [className, color, fullWidth, isFluid, maxWidth]
  )
  return <div className={_className}>{children}</div>
}
