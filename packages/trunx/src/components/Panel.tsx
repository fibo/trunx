import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classnames } from "@trunx/classnames"
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
  return (
    <nav className={classnames("panel", className)} {...props}>
      {heading && <p className="panel-heading">{heading}</p>}

      {children}
    </nav>
  )
}
