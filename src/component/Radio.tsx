import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HelpersProps {}

export class Radio extends React.Component<RadioProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
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
          bulmaClassName.radio,
          className,
          modifierPropsToClassnamesObject(modifiersProps)
        )}
      >
        <input {...props} type='radio' />

        {children}
      </label>
    )
  }
}
