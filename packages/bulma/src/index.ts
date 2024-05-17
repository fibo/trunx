import { ClassnamesArg, classnames } from "@trunx/classnames"

import type BulmaClassname from './bulma.js'

  export const bulma = (...args: ClassnamesArg<BulmaClassname>[]) => classnames<BulmaClassname>(...args)

export type {default as BulmaClass} from "./bulma.js"

export type {BoolClassArg} from "./bool.js"
export {boolClass} from "./bool.js"
export type {ColorArg, MainColor, ShadeColor, OtherColor} from "./color.js"
export {colorClass} from "./color.js"
export type {ImageClassArg, ImageDimension, ImageRatio} from "./image.js"
export {imageClass} from "./image.js"
export type {Alignment, FlexAlignItems, FlexAlignSelf, FlexClassArg, FlexDirection, FlexJustifyContent, FlexWrap, SpacingArg} from "./layout.js"
export {flexClass, spacingClass} from "./layout.js"
export type {Dozen, Fraction, HalfDozen} from "./number.js"
export type {Breakpoint, BreakpointsMap} from "./responsiveness.js"
export {breakpoints} from "./responsiveness.js"
export type {Size, SizeArg} from "./size.js"
export {pluralSizeClass, sizeClass} from "./size.js"
export type {TextAlignment, TextAlignArg, TextColor} from "./typography.js"
export {textAlignClass, textColorClass} from "./typography.js"
