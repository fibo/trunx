import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from './classNames.js'
import { bulma } from './bulma.js'
import { CenteredProp, SizeProp } from './modifiers.js'
import { centeredClassName, pluralSizeClassName } from './helpers.js'

type Props = HTMLAttributes<HTMLDivElement> & CenteredProp & SizeProp

export const Buttons: FC<PropsWithChildren<Props>> = ({ children, className, centered, size }) => {
  const _className = useMemo(
    () => classNames(bulma('buttons', centeredClassName(centered), pluralSizeClassName(size)), className),
    [className, size]
  )
  return <div className={_className}>{children}</div>
}
