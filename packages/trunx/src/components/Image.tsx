import { FC, ImgHTMLAttributes } from "react"
import { classnames } from "@trunx/classnames"
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
  return (
    <figure
      className={classnames(
        "image",
        imageDimensionClassName(dimension),
        imageRatioClassName(ratio),
        className
      )}
    >
      <img {...props} />
    </figure>
  )
}
