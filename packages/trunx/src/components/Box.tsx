import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"

export type BoxProps = HTMLAttributes<HTMLDivElement>

export const Box: FC<PropsWithChildren<BoxProps>> = ({
  children,
  className,
  ...props
}) => {
  const _class = classNames("box", className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
