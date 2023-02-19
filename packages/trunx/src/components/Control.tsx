import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { BooleanModifierProps, modifier } from '../modifiers/index.js'

export type ControlProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, 'hasIconsLeft' | 'hasIconsRight' | 'isExpanded' | 'isLoading'>

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
      classNames('control', modifier({ hasIconsLeft, hasIconsRight, isExpanded, isLoading }), className),
    [className, hasIconsLeft, hasIconsRight, isExpanded, isLoading]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
