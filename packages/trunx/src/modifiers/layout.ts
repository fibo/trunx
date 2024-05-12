import { classnames } from "@trunx/classnames"

export type Alignment = "centered" | "left" | "right"

export type FlexAlignContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "start"
  | "end"
  | "baseline"

export type FlexAlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "start"
  | "end"
  | "self-start"
  | "self-end"

export type FlexAlignSelf =
  | "auto"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch"

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"

export type FlexJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "end"
  | "left"
  | "right"

export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"

type FlexSpacing = 0 | 1 | 2 | 3 | 4 | 5

export type FlexModifierProps = Partial<{
  direction: FlexDirection
  align: FlexAlignContent
  alignItems: FlexAlignItems
  alignSelf: FlexAlignSelf
  justify: FlexJustifyContent
  wrap: FlexWrap
  grow: FlexSpacing
  shrink: FlexSpacing
}>

export const flexClassNames = ({
  direction,
  align,
  alignItems,
  alignSelf,
  justify,
  wrap,
  grow,
  shrink,
}: FlexModifierProps) =>
  classnames(
    "is-flex",
    direction && `is-flex-direction-${direction}`,
    justify && `is-justify-content-${justify}`,
    align && `is-align-content-${align}`,
    alignItems && `is-align-items-${alignItems}`,
    alignSelf && `is-align-self-${alignSelf}`,
    grow && `is-flex-grow-${grow}`,
    shrink && `is-flex-shrink-${shrink}`,
    wrap && `is-flex-wrap-${wrap}`
  )

export type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type SpacingKey =
  | "mx"
  | "my"
  | "mr"
  | "ml"
  | "mt"
  | "mb"
  | "px"
  | "py"
  | "pr"
  | "pl"
  | "pt"
  | "pb"

export type SpacingModifierProp = Partial<{
  spacing: Partial<{ [key in SpacingKey]: SpacingValue }>
}>

export const spacingClassNames = (arg: SpacingModifierProp["spacing"]) =>
  arg && !Array.isArray(arg) && typeof arg === "object"
    ? Object.entries(arg).map(([key, value]) => `${key}-${value}`)
    : undefined
