import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { SizeModifierProp, sizeClassName, textAlignClassName, TextAlignProp } from '../modifiers/index.js'

export type ContentProps = HTMLAttributes<HTMLDivElement> & SizeModifierProp & TextAlignProp

export const Content: FC<PropsWithChildren<ContentProps>> = ({
  children,
  className,
  hasText,
  size,
  ...props
}) => {
  const _className = useMemo(
    () => classNames(textAlignClassName(hasText), sizeClassName(size)),
    [hasText, size]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
