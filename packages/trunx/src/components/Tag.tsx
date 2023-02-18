import { ButtonHTMLAttributes, FC, PointerEventHandler, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  ColorModifierProp,
  CommonModifierProps,
  MainColor,
  ShadeColor,
  SizeModifierProp,
  colorClassName,
  modifier,
  sizeClassName,
} from '../modifiers/index.js'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps, MainColorsProps, ShadeColorsProps, SizeProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export type TagProps = AnchorHTMLAttributes<HTMLAnchorElement> & Pick<CommonModifierProps, 'isLight'>

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
