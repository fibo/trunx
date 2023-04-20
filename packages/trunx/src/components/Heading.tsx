import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"

export type HeadingProps = HTMLAttributes<HTMLParagraphElement>

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({ children, className, ...props }) => {
  const _class = classNames("heading", className)
  return (
    <p className={_class} {...props}>
      {children}
    </p>
  )
}
