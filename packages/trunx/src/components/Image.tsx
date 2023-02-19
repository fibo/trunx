import { classNames } from '../classNames.js'
import { FC, ImgHTMLAttributes, useMemo } from 'react'

type ImageDimension = '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128'

type ImageRatio =
  | 'square'
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
  Partial<{
    dimension: ImageDimension
    ratio: ImageRatio
  }>

export const Image: FC<ImageProps> = ({ className, dimension, ratio, ...props }) => {
  const _className = useMemo(
    () =>
      classNames(
        'image',
        dimension ? `is-${dimension}` : undefined,
        ratio ? `is-${ratio}` : undefined,
        className
      ),
    [className, dimension, ratio]
  )
  return (
    <figure className={_className}>
      <img {...props} />
    </figure>
  )
}
