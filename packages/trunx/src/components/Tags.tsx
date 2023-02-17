import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { SizeModifierProp, pluralSizeClassName } from '../modifiers/index.js'

export type TagsProps = HTMLAttributes<HTMLDivElement> & SizeModifierProp & Partial<{ hasAddons: boolean }>

export const Tags: FC<PropsWithChildren<TagsProps>> = ({
  children,
  className,
  hasAddons,
  size,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('tags', pluralSizeClassName(size), { 'has-addons': hasAddons }, className),
    [className, size]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
