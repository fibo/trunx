import { classNames } from "../classNames.js"
import { FC, ImgHTMLAttributes, useMemo } from "react"
import {
  ImageDimensionProp,
  ImageRatioProp,
  imageDimensionClassName,
  imageRatioClassName,
} from "../modifiers/index.js"

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & ImageRatioProp & ImageDimensionProp

export const Image: FC<ImageProps> = ({ className, dimension, ratio, ...props }) => {
  const _className = useMemo(
    () => classNames("image", imageDimensionClassName(dimension), imageRatioClassName(ratio), className),
    [className, dimension, ratio]
  )

  return (
    <figure className={_className}>
      <img {...props} />
    </figure>
  )
}
