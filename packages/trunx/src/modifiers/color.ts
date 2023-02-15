import { BulmaClassName } from '../bulma.js'

/**
 * @example
 * ```ts
 * type Props = { foo: boolean } & ColorProp<MainColor | ShadeColor>
 * ```
 */
export type ColorProp<Color> = Partial<{ color: Color }>

export type MainColor = 'danger' | 'link' | 'info' | 'primary' | 'success' | 'warning'

export type ShadeColor = 'black' | 'dark' | 'light' | 'white'

export const colorClassName = (
  color: MainColor | ShadeColor | undefined
):
  | Extract<
      BulmaClassName,
      | 'is-black'
      | 'is-danger'
      | 'is-danger'
      | 'is-dark'
      | 'is-info'
      | 'is-light'
      | 'is-link'
      | 'is-primary'
      | 'is-success'
      | 'is-warning'
      | 'is-white'
    >
  | undefined => (color ? `is-${color}` : undefined)
