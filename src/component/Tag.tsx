import * as React from 'react'

import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  SizeProps,
} from './modifiers'
import { renderElement } from './renderElement'

export interface TagProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps,
    Pick<SizeProps, 'isMedium' | 'isLarge'> {
  isDelete?: boolean
  isNormal?: boolean
  isRounded?: boolean
}

export class Tag extends React.Component<TagProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const {
      href,
      onClick,
      isDelete,
      isNormal,
      isRounded,
      ...props
    } = this.props

    const tag = href || onClick ? 'a' : 'span'

    return renderElement(tag, props, bulmaClassName.tag, {
      isDelete,
      isNormal,
      isRounded,
    })
  }
}
