import * as classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export class Checkbox extends React.Component<CheckboxProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    const [
      modifiersProps,
      { children, className, fallbackUI, ...props },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <label
        className={classnames(
          className,
          bulmaClassName.checkbox,
          modifierPropsToClassnamesObject(modifiersProps)
        )}
      >
        <input type='checkbox' {...props} />
        {' ' /* adding a space looks better */}
        {children}
      </label>
    )
  }
}
