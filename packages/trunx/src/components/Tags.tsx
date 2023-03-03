import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  pluralSizeClassName,
} from '../modifiers/index.js'

export type TagsProps = HTMLAttributes<HTMLDivElement> &
  SizeModifierProp<'small' | 'medium' | 'large'> &
  Pick<BooleanModifierProps, 'hasAddons'>

export const Tags: FC<PropsWithChildren<TagsProps>> = ({
  children,
  className,
  hasAddons,
  size,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('tags', pluralSizeClassName(size), modifier({ hasAddons }), className),
    [className, hasAddons, size]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
