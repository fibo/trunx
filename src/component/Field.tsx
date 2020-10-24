import * as React from 'react'

import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  SizeProps
} from './modifiers'
import { renderElement } from './renderElement'

interface FieldProps extends React.HTMLAttributes<HTMLDivElement>, HelpersProps, SizeProps {
  hasAddons?: boolean;
  hasAddonsCentered?: boolean;
  isGrouped?: boolean;
  isGroupedMultiline?: boolean;
  isHorizontal?: boolean;
}

type FieldBodyProps = React.HTMLAttributes<HTMLDivElement>

type FieldLabelProps = React.HTMLAttributes<HTMLDivElement>

class FieldBody extends React.Component<FieldBodyProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.fieldBody)
  }
}

class FieldLabel extends React.Component<FieldLabelProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.fieldLabel)
  }
}

export class Field extends React.Component<FieldProps> {
  static Body = FieldBody
  static Label = FieldLabel

  render (): React.ReactNode {
    const {
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      isHorizontal,
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.fieldLabel, {
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      isHorizontal
    })
  }
}
