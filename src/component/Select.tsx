import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import {
  MainColorsProps,
  SizeProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
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
    if (this.state.hasError) {
      return null
    }

    const [
      modifiersProps,
      {
        children,
        className,
        isFocused,
        isHovered,
        isLoading,
        isMultiple,
        ...props
      },
    ] = extractModifiersProps(this.props)

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
