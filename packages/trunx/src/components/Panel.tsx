import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classNames } from "../classNames.js"
import { ColorModifierProp, MainColor } from "../modifiers/index.js"

export type PanelProps = HTMLAttributes<HTMLElement> &
  ColorModifierProp<MainColor> &
  Partial<{ heading: ReactNode }>

export const Panel: FC<PropsWithChildren<PanelProps>> = ({
  children,
  className,
  heading,
  ...props
}) => {
  const _class = classNames("panel", className)

  return (
    <nav className={_class} {...props}>
      {heading && <p className="panel-heading">{heading}</p>}

      {children}
    </nav>
  )
}
