import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  ColorModifierProp,
  BooleanModifierProps,
  MainColor,
  colorClassName,
  modifier,
} from '../modifiers/index.js'

export type NotificationProps = HTMLAttributes<HTMLDivElement> &
  ColorModifierProp<MainColor> &
  Pick<BooleanModifierProps, 'isLight'>

export const Notification: FC<PropsWithChildren<NotificationProps>> = ({
  children,
  className,
  color,
  isLight,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('notification', colorClassName(color), modifier({ isLight }), className),
    [className, color, isLight]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
