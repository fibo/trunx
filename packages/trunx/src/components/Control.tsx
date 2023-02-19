import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { CommonModifierProps, modifier } from '../modifiers/index.js'

export type ControlProps = HTMLAttributes<HTMLDivElement> &
  Pick<CommonModifierProps, 'isExpanded' | 'isLoading'> &
  Partial<{
    hasIconsLeft: boolean
    hasIconsRight: boolean
  }>

export const Control: FC<PropsWithChildren<ControlProps>> = ({
  children,
  className,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  isLoading,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'control',
        modifier({ isExpanded, isLoading }),
        {
          'has-icons-left': hasIconsLeft,
          'has-icons-right': hasIconsRight,
        },
        className
      ),
    [className, hasIconsLeft, hasIconsRight, isExpanded, isLoading]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
