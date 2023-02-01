import classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import {
  HelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface ButtonsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {
  areLarge?: boolean
  areMedium?: boolean
  areSmall?: boolean
}

export class Buttons extends React.Component<ButtonsProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    const [
      modifiersProps,
      {
        areLarge,
        areMedium,
        areSmall,
        children,
        className,
        fallbackUI,
        ...props
      },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <div
        className={classnames(
          bulmaClassName.buttons,
          className,
          modifierPropsToClassnamesObject(modifiersProps),
          trunxPropsToClassnamesObject({ areLarge, areMedium, areSmall })
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}
