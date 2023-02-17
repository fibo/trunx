import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  colorClassName,
  ColorModifierProp,
  MainColor,
  sizeClassName,
  SizeModifierProp,
} from '../modifiers/index.js'

export type HeroProps = HTMLAttributes<HTMLDivElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Partial<{
    head: ReactNode
    foot: ReactNode

    isFullheight: boolean
    isFullheightWithNavbar: boolean
    isHalfheight: boolean
  }>

export const Hero: FC<PropsWithChildren<HeroProps>> = ({
  className,
  children,
  color,
  head,
  foot,
  isFullheight,
  isFullheightWithNavbar,
  isHalfheight,
  size,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'hero',
        colorClassName(color),
        sizeClassName(size),
        {
          // For the fullheight hero to work, you will also need a hero-head and a hero-foot.
          'is-fullheight': isFullheight && head && foot,
          'is-fullheight-with-navbar': isFullheightWithNavbar,
          'is-halfheight': isHalfheight,
        },
        className
      ),
    [className, color, isFullheight, isFullheightWithNavbar, isHalfheight, size]
  )
  return (
    <section className={_className} {...props}>
      {head ? <div className="hero-head">{head}</div> : null}
      <div className="hero-body">{children}</div>
      {foot ? <div className="hero-foot">{foot}</div> : null}
    </section>
  )
}
