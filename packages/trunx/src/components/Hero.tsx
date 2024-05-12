import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classnames } from "@trunx/classnames"
import {
  colorClassName,
  ColorModifierProp,
  BooleanModifierProps,
  MainColor,
  modifier,
  sizeClassName,
  SizeModifierProp,
} from "../modifiers/index.js"

export type HeroProps = HTMLAttributes<HTMLDivElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Pick<
    BooleanModifierProps,
    "isFullheight" | "isFullheightWithNavbar" | "isHalfheight"
  > &
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
  return (
    <section
      className={classnames(
        "hero",
        colorClassName(color),
        sizeClassName(size),
        modifier({
          // For the fullheight hero to work, you will also need a hero-head and a hero-foot.
          isFullheight: isFullheight && Boolean(head) && Boolean(foot),
          isFullheightWithNavbar,
          isHalfheight,
        }),
        className
      )}
      {...props}
    >
      {head ? <div className="hero-head">{head}</div> : null}

      <div className="hero-body">{children}</div>

      {foot ? <div className="hero-foot">{foot}</div> : null}
    </section>
  )
}
