import { FC, LabelHTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { SizeModifierProp, sizeClassName } from '../modifiers/index.js'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & SizeModifierProp

export const Label: FC<PropsWithChildren<LabelProps>> = ({ children, className, size }) => {
  const _className = useMemo(
    () => classNames('label', sizeClassName(size), className),
    [className, size, size]
  )
  return <label className={_className}>{children}</label>
}
