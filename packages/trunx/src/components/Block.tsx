import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"

export type BlockProps = HTMLAttributes<HTMLDivElement>

export const Block: FC<PropsWithChildren<BlockProps>> = ({
  children,
  className,
  ...props
}) => {
  const _class = classNames("block", className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
