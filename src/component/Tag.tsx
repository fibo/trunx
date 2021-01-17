import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
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
    ErrorBoundaryProps,
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
    const { fallbackUI, isDelete, isNormal, isRounded, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    const tag = props.href || props.onClick ? 'a' : 'span'

    return renderElement(tag, props, bulmaClassName.tag, {
      isDelete,
      isNormal,
      isRounded,
    })
  }
}
