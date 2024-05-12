import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classnames } from "@trunx/classnames"
import { Alignment } from "../modifiers/index.js"

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
}) => {
  return (
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
}

export type FieldHorizontalProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    label: ReactNode
  }>

export const FieldHorizontal: FC<PropsWithChildren<FieldHorizontalProps>> = ({
  children,
  label,
  className,
  ...props
}) => {
  return (
    <div className={classnames("field", "is-horizontal", className)} {...props}>
      <div className="field-label">{label}</div>

      <div className="field-body">{children}</div>
    </div>
  )
}
