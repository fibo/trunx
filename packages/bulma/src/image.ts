import {classnames} from "@trunx/classnames"
import {BulmaClass} from "./bulma.js"

export type ImageRatio =
  | "square"
  | "1by1"
  | "5by4"
  | "4by3"
  | "3by2"
  | "5by3"
  | "16by9"
  | "2by1"
  | "3by1"
  | "4by5"
  | "3by4"
  | "2by3"
  | "3by5"
  | "9by16"
  | "1by2"
  | "1by3"

export const imageRatioClass = (
  ratio: ImageRatio | undefined
):
  | Extract<
    BulmaClass,
    | "is-square"
    | "is-1by1"
    | "is-5by4"
    | "is-4by3"
    | "is-3by2"
    | "is-5by3"
    | "is-16by9"
    | "is-2by1"
    | "is-3by1"
    | "is-4by5"
    | "is-3by4"
    | "is-2by3"
    | "is-3by5"
    | "is-9by16"
    | "is-1by2"
    | "is-1by3"
  >
  | undefined => (ratio ? `is-${ratio}` : undefined)

export type ImageDimension =
  | "16x16"
  | "24x24"
  | "32x32"
  | "48x48"
  | "64x64"
  | "96x96"
  | "128x128"

export const imageDimensionClass = (
  dimension: ImageDimension | undefined
):
  | Extract<
    BulmaClass,
    | "is-16x16"
    | "is-24x24"
    | "is-32x32"
    | "is-48x48"
    | "is-64x64"
    | "is-96x96"
    | "is-128x128"
  >
  | undefined => (dimension ? `is-${dimension}` : undefined)

export type ImageClassArg = Partial<{
  dimension: ImageDimension
  ratio: ImageRatio
}>

export const imageClass = ({dimension, ratio}: ImageClassArg) =>
  classnames("image", imageDimensionClass(dimension), imageRatioClass(ratio))
