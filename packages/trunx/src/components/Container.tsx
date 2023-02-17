import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    isFullhd: boolean
    isFluid: boolean
    isWidescreen: boolean
    isMaxDesktop: boolean
    isMaxWidescreen: boolean
  }>

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  className,
  isFluid,
  isFullhd,
  isWidescreen,
  isMaxWidescreen,
  isMaxDesktop,
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'container',
        {
          'is-fluid': isFluid,
          'is-fullhd': isFullhd,
          'is-widescreen': isWidescreen,
          'is-max-widescreen': isMaxWidescreen,
          'is-max-desktop': isMaxDesktop,
        },
        className
      ),
    [className, isFluid, isFullhd, isWidescreen, isMaxWidescreen, isMaxDesktop]
  )
  return <div className={_className}>{children}</div>
}
