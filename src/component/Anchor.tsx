import * as React from "react"

export interface IAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Anchor({
  children,
  className,
  ...props
}: IAnchorProps) {
  return (
    <a {...props} className={className}>{children}</a>
  )
}
