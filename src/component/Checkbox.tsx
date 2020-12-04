import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HelpersProps {}

export class Checkbox extends React.Component<CheckboxProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    if (this.state.hasError) {
      return null
    }

    const [
      modifiersProps,
      { children, className, ...props },
    ] = extractModifiersProps(this.props)

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
