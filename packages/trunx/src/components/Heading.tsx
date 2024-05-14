import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {classnames} from "@trunx/classnames"

export type HeadingProps = HTMLAttributes<HTMLParagraphElement>

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({
  children,
  className,
  ...props
}) => (
  <p className={classnames("heading", className)} {...props}>
    {children}
  </p>
)
