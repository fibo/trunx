import {FC, HTMLAttributes, PropsWithChildren, ReactNode} from "react"
import {MainColor} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {ColorProp, } from "./commonProps.js"

export type PanelProps = HTMLAttributes<HTMLElement> &
  ColorProp<MainColor> &
  Partial<{heading: ReactNode}>

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
