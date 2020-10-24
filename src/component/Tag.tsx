import * as React from "react"

import { bulmaClassName } from "./classNames"
import { MainColorsProps, ShadeColorsProps, SizeProps } from "./modifiers"
import { renderElement } from './renderElement'

interface TagProps extends React.HTMLAttributes<HTMLSpanElement>,
MainColorsProps,
                            ShadeColorsProps,
                            Pick<SizeProps, "isMedium" | "isLarge"> {
  isDelete?: boolean
  isNormal?: boolean
  isRounded?: boolean
}

export default class Tag extends React.Component<TagProps> {
  render() {
    const {
      href,
      onClick,
      isDelete,
      isNormal,
      isRounded,
      ...props
    } = this.props

    const tag = (href || onClick) ? 'a' : 'span'

    return renderElement(tag, props, bulmaClassName.tag, {
      isDelete,
      isNormal,
      isRounded,
    })
  }
}
