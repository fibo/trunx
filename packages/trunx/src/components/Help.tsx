import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { ColorModifierProp, MainColor, colorClassName } from '../modifiers/index.js'

export type HelpProps = HTMLAttributes<HTMLParagraphElement> & ColorModifierProp<MainColor>

export const Help: FC<PropsWithChildren<HelpProps>> = ({ children, className, color }) => {
  const _className = useMemo(() => classNames('help', colorClassName(color), className), [className, color])
  return <p className={_className}>{children}</p>
}
