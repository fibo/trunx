import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"

export type BlockProps = HTMLAttributes<HTMLDivElement>

export const Block: FC<PropsWithChildren<BlockProps>> = ({
  children,
  className,
  ...props
}) => (
  <div className={classnames("block", className)} {...props}>
    {children}
  </div>
)
