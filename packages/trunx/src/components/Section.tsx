import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { SizeModifierProp, Size, sizeClassName } from '../modifiers/index.js'

export type SectionProps = HTMLAttributes<HTMLElement> &
  SizeModifierProp<Extract<Size, 'isLarge' | 'isMedium'>>

export const Section: FC<PropsWithChildren<SectionProps>> = ({ className, children, size, ...props }) => {
  const _className = useMemo(() => classNames('section', sizeClassName(size), className), [className, size])
  return (
    <section className={_className} {...props}>
      {children}
    </section>
  )
}
