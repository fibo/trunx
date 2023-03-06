import { FC, HTMLAttributes, PropsWithChildren, useMemo } from "react"
import { classNames } from "../classNames.js"

export type BoxProps = HTMLAttributes<HTMLDivElement>

export const Box: FC<PropsWithChildren<BoxProps>> = ({ children, className, ...props }) => {
  const _className = useMemo(() => classNames("box", className), [className])
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}
