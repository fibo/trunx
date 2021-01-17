import * as classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import {
  HelpersProps,
  MainColorsProps,
  SizeProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    ErrorBoundaryProps,
    HelpersProps,
    MainColorsProps,
    SizeProps {
  isFocused?: boolean
  isHovered?: boolean
  isLoading?: boolean
  isMultiple?: boolean
}

export class Select extends React.Component<SelectProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      {
        children,
        className,
        fallbackUI,
        isFocused,
        isHovered,
        isLoading,
        isMultiple,
        ...props
      },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <div
        className={classnames(
          bulmaClassName.select,
          className,
          modifierPropsToClassnamesObject(modifiersProps),
          trunxPropsToClassnamesObject({
            isFocused,
            isHovered,
            isLoading,
            isMultiple,
          })
        )}
      >
        <select {...props} multiple={isMultiple}>
          {children}
        </select>
      </div>
    )
  }
}
