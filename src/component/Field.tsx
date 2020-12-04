import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps,
    SizeProps {
  hasAddons?: boolean
  hasAddonsCentered?: boolean
  isGrouped?: boolean
  isGroupedMultiline?: boolean
  isHorizontal?: boolean
}

type FieldBodyProps = React.HTMLAttributes<HTMLDivElement>

interface FieldLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SizeProps {
  isNormal?: boolean
}

class FieldBody extends React.Component<FieldBodyProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.fieldBody)
  }
}

class FieldLabel extends React.Component<FieldLabelProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isNormal, ...props } = this.props

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
    if (this.state.hasError) {
      return null
    }

    const {
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      isHorizontal,
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.field, {
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      isHorizontal,
    })
  }
}
