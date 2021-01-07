import * as classnames from 'classnames'
import * as React from 'react'

import { trunxPropsToClassnamesObject } from './classNames'
import { HelpersProps } from './modifiers'

export interface LiProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    HelpersProps {
  isActive?: boolean
}

export class Li extends React.Component<LiProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { children, className, isActive, ...props } = this.props

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
