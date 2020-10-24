import * as React from "react"

import { bulmaClassName } from "./classNames"
import { TextColorHelpersProps } from "./modifiers"
import { renderElement } from './renderElement'

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, TextColorHelpersProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
  isSpaced?: boolean
}

export class Title extends React.Component<TitleProps> {
  render() {
    const {
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
      isSpaced,
      ...props
    } = this.props

let tag= 'p'

if (is1) tag = 'h1'
if (is2) tag = 'h2'
if (is3) tag = 'h3'
if (is4) tag = 'h4'
if (is5) tag = 'h5'
if (is6) tag = 'h6'

return renderElement(tag, props, bulmaClassName.title, { is1, is2, is3, is4, is5, is6, isSpaced })
  }
}
