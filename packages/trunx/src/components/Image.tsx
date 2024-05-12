import { FC, ImgHTMLAttributes } from "react"
import { ImageClassArg, imageClass } from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & ImageClassArg

export const Image: FC<ImageProps> = ({
  className,
  dimension,
  ratio,
  ...props
}) => {
  return (
    <figure className={classnames(imageClass({ dimension, ratio }), className)}>
      <img {...props} />
    </figure>
  )
}
