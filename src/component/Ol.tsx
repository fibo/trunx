import * as classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { trunxPropsToClassnamesObject } from './classNames'
import { HelpersProps } from './modifiers'

export interface OlProps
  extends React.OlHTMLAttributes<HTMLOListElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isActive?: boolean
}

export class Ol extends React.Component<OlProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { children, className, fallbackUI, isActive, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return (
      <ol
        className={classnames(
          className,
          trunxPropsToClassnamesObject({ isActive })
        )}
        {...props}
      >
        {children}
      </ol>
    )
  }
}
