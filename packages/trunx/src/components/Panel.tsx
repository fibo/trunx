import {FC, HTMLAttributes, PropsWithChildren, ReactNode} from "react"
import {ColorArg, MainColor} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type PanelProps = HTMLAttributes<HTMLElement> &
  ColorArg<MainColor> &
  Partial<{heading: ReactNode}>

export const Panel: FC<PropsWithChildren<PanelProps>> = ({
  children,
  className,
  heading,
  ...props
}) => (
  <nav className={classnames("panel", className)} {...props}>
    {heading && <p className="panel-heading">{heading}</p>}

    {children}
  </nav>
)
