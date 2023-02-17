import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { CommonModifierProps, SizeModifierProp, modifier, pluralSizeClassName } from '../modifiers/index.js'

export type ButtonsProps = HTMLAttributes<HTMLDivElement> &
  SizeModifierProp &
  Pick<CommonModifierProps, 'isCentered'>

export const Buttons: FC<PropsWithChildren<ButtonsProps>> = ({
  children,
  className,
  isCentered,
  size,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('buttons', modifier({ isCentered }), pluralSizeClassName(size), className),
    [className, isCentered, size]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
