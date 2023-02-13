import classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames.js'
import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { HelpersProps, extractModifiersProps, modifierPropsToClassnamesObject } from './modifiers.js'

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    ErrorBoundaryProps,
    HelpersProps {
  is1by1?: boolean
  is1by2?: boolean
  is1by3?: boolean
  is2by1?: boolean
  is2by3?: boolean
  is3by1?: boolean
  is3by2?: boolean
  is3by4?: boolean
  is3by5?: boolean
  is4by3?: boolean
  is4by5?: boolean
  is5by3?: boolean
  is5by4?: boolean
  is9by16?: boolean
  is16x16?: boolean
  is24x24?: boolean
  is32x32?: boolean
  is48x48?: boolean
  is64x64?: boolean
  is96x96?: boolean
  is128x128?: boolean
  isSquare?: boolean
}

export class Image extends React.Component<ImageProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      {
        className,
        fallbackUI,
        is1by1,
        is1by2,
        is1by3,
        is2by1,
        is2by3,
        is3by1,
        is3by2,
        is3by4,
        is3by5,
        is4by3,
        is4by5,
        is5by3,
        is5by4,
        is9by16,
        is16x16,
        is24x24,
        is32x32,
        is48x48,
        is64x64,
        is96x96,
        is128x128,
        isSquare,
        ...props
      },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <figure
        className={classnames(
          bulmaClassName.image,
          className,
          modifierPropsToClassnamesObject(modifiersProps),
          trunxPropsToClassnamesObject({
            is1by1,
            is1by2,
            is1by3,
            is2by1,
            is2by3,
            is3by1,
            is3by2,
            is3by4,
            is3by5,
            is4by3,
            is4by5,
            is5by3,
            is5by4,
            is9by16,
            is16x16,
            is24x24,
            is32x32,
            is48x48,
            is64x64,
            is96x96,
            is128x128,
            isSquare,
          })
        )}
      >
        <img {...props} />
      </figure>
    )
  }
}
