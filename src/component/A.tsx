import * as classnames from 'classnames'
import * as React from 'react'

import { trunxPropsToClassnamesObject } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import {
  HelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface AProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
ErrorBoundaryProps,
    HelpersProps {
  isActive?: boolean
}

export class A extends React.Component<AProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      { children, className, fallbackUI, isActive, ...props },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <a
        className={classnames(
          className,
          trunxPropsToClassnamesObject({ isActive }),
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
}
