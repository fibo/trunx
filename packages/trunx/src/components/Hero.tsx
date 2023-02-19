import { FC, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  colorClassName,
  ColorModifierProp,
  BooleanModifierProps,
  MainColor,
  modifier,
  sizeClassName,
  SizeModifierProp,
} from '../modifiers/index.js'

export type HeroProps = HTMLAttributes<HTMLDivElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Pick<BooleanModifierProps, 'isFullheight' | 'isFullheightWithNavbar' | 'isHalfheight'> &
  Partial<{
    head: ReactNode
    foot: ReactNode
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
  const hasHeadAndFoot = useMemo(() => Boolean(head) && Boolean(foot), [head, foot])

  const _className = useMemo(
    () =>
      classNames(
        'hero',
        colorClassName(color),
        sizeClassName(size),
        modifier({
          // For the fullheight hero to work, you will also need a hero-head and a hero-foot.
          isFullheight: isFullheight && hasHeadAndFoot,
          isFullheightWithNavbar,
          isHalfheight,
        }),
        className
      ),
    [className, color, hasHeadAndFoot, isFullheight, isFullheightWithNavbar, isHalfheight, size]
  )

  return (
    <section className={_className} {...props}>
      {head ? <div className="hero-head">{head}</div> : null}
      <div className="hero-body">{children}</div>
      {foot ? <div className="hero-foot">{foot}</div> : null}
    </section>
  )
}
