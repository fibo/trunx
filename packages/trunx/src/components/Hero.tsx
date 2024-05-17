import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import {
  BoolClassArg,
  ColorArg,
  MainColor,
  SizeArg,
  boolClass,
  colorClass,
  sizeClass,
} from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type HeroProps = HTMLAttributes<HTMLDivElement> &
  ColorArg<MainColor> &
  SizeArg &
  Pick<
    BoolClassArg,
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
}) => (
  <section
    className={classnames(
      "hero",
      colorClass(color),
      sizeClass(size),
      boolClass({
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
