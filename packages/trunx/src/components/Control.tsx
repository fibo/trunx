import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { CommonModifierProps, modifier } from '../modifiers/index.js'

export type ControlProps = HTMLAttributes<HTMLDivElement> &
  Pick<CommonModifierProps, 'isLoading'> &
  Partial<{
    hasIconsLeft: boolean
    hasIconsRight: boolean
    isExpanded: boolean
  }>

export const Control: FC<PropsWithChildren<ControlProps>> = ({
  children,
  className,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  isLoading,
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'control',
        modifier({ isLoading }),
        {
          'is-expanded': isExpanded,
          'has-icons-left': hasIconsLeft,
          'has-icons-right': hasIconsRight,
        },
        className
      ),
    [className, hasIconsLeft, hasIconsRight, isExpanded, isLoading]
  )
  return <div className={_className}>{children}</div>
}
