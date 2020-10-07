import * as classnames from "classnames"
import * as React from "react"

export function renderA (
  {
    children,
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>,
  bulmaClassName?: string,
) {
  return (
    <a
      className={classnames(
        bulmaClassName,
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}


export function renderDiv (
  {
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>,
  bulmaClassName?: string,
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
  {
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>,
  bulmaClassName?: string,
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
