import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { Breakpoint } from '../modifiers/index.js'

type ContainerFullWidth = Extract<Breakpoint, 'fullhd' | 'widescreen'>
type ContainerMaxWidth = Extract<Breakpoint, 'desktop' | 'widescreen'>

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    fullWidth: ContainerFullWidth
    maxWidth: ContainerMaxWidth
    isFluid: boolean
  }>

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  isFluid,
  fullWidth,
  maxWidth,
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'container',
        fullWidth ? `is-${fullWidth}` : undefined,
        maxWidth ? `is-max-${maxWidth}` : undefined,
        {
          'is-fluid': isFluid,
        },
        className
      ),
    [className, fullWidth, isFluid, maxWidth]
  )
  return <div className={_className}>{children}</div>
}
