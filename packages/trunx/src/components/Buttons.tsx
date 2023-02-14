import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { bulma } from '../bulma.js'
import { CenteredProp, SizeProp, centeredClassName, pluralSizeClassName } from '../modifiers/index.js'

export type ButtonsProps = HTMLAttributes<HTMLDivElement> & CenteredProp & SizeProp

export const Buttons: FC<PropsWithChildren<ButtonsProps>> = ({ children, className, centered, size }) => {
  const _className = useMemo(
    () => classNames(bulma('buttons', centeredClassName(centered), pluralSizeClassName(size)), className),
    [className, size]
  )
  return <div className={_className}>{children}</div>
}
