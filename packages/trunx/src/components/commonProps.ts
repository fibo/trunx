import {Color, Spacing, TextAlignment} from "@trunx/bulma"

/**
 * @example
 *
 * ```ts
 * type Props = { foo: boolean } & ColorProp<MainColor | ShadeColor>
 * ```
 */
export type ColorProp<Color> = Partial<{color: Color}>

export type SpacingProp = Partial<{
	spacing: Spacing
}>

export type TextAlignProp = Partial<{
	hasText: TextAlignment
}>
