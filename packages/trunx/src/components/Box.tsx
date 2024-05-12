import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"

export type BoxProps = HTMLAttributes<HTMLDivElement>

export const Box: FC<PropsWithChildren<BoxProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classnames("box", className)} {...props}>
      {children}
    </div>
  )
}
