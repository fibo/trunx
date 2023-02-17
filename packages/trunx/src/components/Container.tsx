import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { Breakpoint, ColorModifierProp, MainColor, colorClassName } from '../modifiers/index.js'

type ContainerFullWidth = Extract<Breakpoint, 'fullhd' | 'widescreen'>
type ContainerMaxWidth = Extract<Breakpoint, 'desktop' | 'widescreen'>

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  ColorModifierProp<MainColor> &
  Partial<{
    fullWidth: ContainerFullWidth
    maxWidth: ContainerMaxWidth
    isFluid: boolean
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
        {
          'is-fluid': isFluid,
        },
        className
      ),
    [className, color, fullWidth, isFluid, maxWidth]
  )
  return <div className={_className}>{children}</div>
}
