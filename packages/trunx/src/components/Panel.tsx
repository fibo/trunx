import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { ColorModifierProp, MainColor } from '../modifiers/index.js'

export type PanelProps = HTMLAttributes<HTMLElement> &
  ColorModifierProp<MainColor> &
  Partial<{ heading: ReactNode }>

export const Panel: FC<PropsWithChildren<PanelProps>> = ({ children, className, heading, ...props }) => {
  const _className = useMemo(() => classNames('panel', className), [className])
  return (
    <nav className={_className} {...props}>
      {heading ? <p className="panel-heading">{heading}</p> : null}
      {children}
    </nav>
  )
}
