import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { Alignment } from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type FieldProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    hasAddons: boolean | Alignment
    isGrouped: boolean | Alignment | "multiline"
  }>

export const Field: FC<PropsWithChildren<FieldProps>> = ({
  children,
  className,
  hasAddons,
  isGrouped,
  ...props
}) => (
  <div
    className={classnames(
      "field",
      hasAddons
        ? hasAddons === true
          ? "has-addons"
          : `has-addons-${hasAddons}`
        : undefined,
      isGrouped !== undefined ? "is-grouped" : undefined,
      typeof isGrouped === "string" ? `is-grouped-${isGrouped}` : undefined,
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export type FieldHorizontalProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    label: ReactNode
  }>

export const FieldHorizontal: FC<PropsWithChildren<FieldHorizontalProps>> = ({
  children,
  label,
  className,
  ...props
}) => (
  <div className={classnames("field", "is-horizontal", className)} {...props}>
    <div className="field-label">{label}</div>

    <div className="field-body">{children}</div>
  </div>
)
