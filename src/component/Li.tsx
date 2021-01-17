import * as classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { trunxPropsToClassnamesObject } from './classNames'
import { HelpersProps } from './modifiers'

export interface LiProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isActive?: boolean
}

export class Li extends React.Component<LiProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { children, className, fallbackUI, isActive, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return (
      <li
        className={classnames(
          className,
          trunxPropsToClassnamesObject({ isActive })
        )}
        {...props}
      >
        {children}
      </li>
    )
  }
}
