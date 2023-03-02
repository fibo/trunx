import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  ColorModifierProp,
  MainColor,
  ShadeColor,
  SizeModifierProp,
  colorClassName,
  sizeClassName,
} from '../modifiers/index.js'

export type MessageProps = HTMLAttributes<HTMLElement> &
  ColorModifierProp<MainColor | ShadeColor> &
  SizeModifierProp &
  Partial<{
    header: ReactNode
  }>

export const Message: FC<PropsWithChildren<MessageProps>> = ({
  children,
  className,
  color,
  header,
  size,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('message', colorClassName(color), sizeClassName(size), className),
    [className, color, size]
  )
  return (
    <article className={_className} {...props}>
      {header ? <div className="message-header">{header}</div> : null}
      <div className="message-body">{children}</div>
    </article>
  )
}
