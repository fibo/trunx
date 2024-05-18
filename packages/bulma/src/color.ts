import { BulmaClass } from "./bulma.js"

export type MainColor =
  | "danger"
  | "link"
  | "info"
  | "primary"
  | "success"
  | "warning"

export type ShadeColor = "black" | "dark" | "light" | "white"

export type OtherColor = "text" | "ghost"

type Color = MainColor | ShadeColor | OtherColor

export type ColorArg<C extends Color = Color> = Partial<{ color: C }>

export type ColorClass = Extract<BulmaClass, `is-${Color}`>

export const colorClass = (color: Color | undefined): ColorClass | undefined =>
  color ? `is-${color}` : undefined
