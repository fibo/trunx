import { FC, ImgHTMLAttributes } from "react"
import { classNames } from "../classNames.js"
import {
  ImageDimensionProp,
  ImageRatioProp,
  imageDimensionClassName,
  imageRatioClassName,
} from "../modifiers/index.js"

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
  ImageRatioProp &
  ImageDimensionProp

export const Image: FC<ImageProps> = ({
  className,
  dimension,
  ratio,
  ...props
}) => {
  const _class = classNames(
    "image",
    imageDimensionClassName(dimension),
    imageRatioClassName(ratio),
    className
  )

  return (
    <figure className={_class}>
      <img {...props} />
    </figure>
  )
}
