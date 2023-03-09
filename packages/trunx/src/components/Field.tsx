import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames(
    "field",
    hasAddons ? (hasAddons === true ? "has-addons" : `has-addons-${hasAddons}`) : undefined,
    isGrouped !== undefined ? "is-grouped" : undefined,
    typeof isGrouped === "string" ? `is-grouped-${isGrouped}` : undefined,
    className
  )

  return (
    <div className={_class} {...props}>
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
  const _class = classNames("field", "is-horizontal", className)

  return (
    <div className={_class} {...props}>
      <div className="field-label">{label}</div>

      <div className="field-body">{children}</div>
    </div>
  )
}
