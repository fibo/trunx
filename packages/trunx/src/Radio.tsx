import classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps, extractModifiersProps, modifierPropsToClassnamesObject } from './modifiers.js'

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export class Radio extends React.Component<RadioProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [modifiersProps, { children, className, fallbackUI, ...props }] = extractModifiersProps(
      this.props
    )

    if (this.state.hasError) return fallbackUI

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
