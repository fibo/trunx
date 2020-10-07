import * as classnames from "classnames"
import * as React from "react"


export function renderDiv (
  bulmaClassName: string,
  {
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      className={classnames(
        bulmaClassName,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function renderHeader (
  bulmaClassName: string,
  {
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>,
) {
  return (
    <header
      className={classnames(
        bulmaClassName,
        className,
      )}
      {...props}
    >
      {children}
    </header>
  )
}
