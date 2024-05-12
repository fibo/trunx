import { BulmaClassname } from "../bulma.js"

/**
 * @example
 *
 * ```ts
 * type Props = { foo: boolean } & ColorModifierProp<MainColor | ShadeColor>
 * ```
 */
export type ColorModifierProp<Color> = Partial<{ color: Color }>

export type MainColor =
  | "danger"
  | "link"
  | "info"
  | "primary"
  | "success"
  | "warning"

export type ShadeColor = "black" | "dark" | "light" | "white"

export type OtherColor = "text" | "ghost"

export const colorClassName = (
  color: MainColor | ShadeColor | OtherColor | undefined
):
  | Extract<
      BulmaClassname,
      | "is-black"
      | "is-danger"
      | "is-danger"
      | "is-dark"
      | "is-ghost"
      | "is-info"
      | "is-light"
      | "is-link"
      | "is-primary"
      | "is-success"
      | "is-text"
      | "is-warning"
      | "is-white"
    >
  | undefined => (color ? `is-${color}` : undefined)
