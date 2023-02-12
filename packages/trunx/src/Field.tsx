import * as React from 'react'

import { bulmaClassName } from './classNames.js'
import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { HelpersProps, SizeProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, SizeProps {
  hasAddons?: boolean
  hasAddonsCentered?: boolean
  isGrouped?: boolean
  isGroupedMultiline?: boolean
  isHorizontal?: boolean
}

export interface FieldBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface FieldLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps,
    SizeProps {
  isNormal?: boolean
}

class FieldBody extends React.Component<FieldBodyProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.fieldBody)
  }
}

class FieldLabel extends React.Component<FieldLabelProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, isNormal, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.fieldLabel, { isNormal })
  }
}

export class Field extends React.Component<FieldProps> {
  static Body = FieldBody
  static Label = FieldLabel

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const {
      fallbackUI,
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      isHorizontal,
      ...props
    } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.field, {
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      isHorizontal,
    })
  }
}
