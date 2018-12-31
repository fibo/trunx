import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassenames,
} from "./modifiers"

interface IFieldProps {
  hasAddons?: boolean
  hasAddonsCentered?: boolean
  isGrouped?: boolean
  isGroupedMultiline?: boolean
  isHorizontal?: boolean
}

interface IFieldLabelProps extends ISizeProps {}

class FieldBody extends React.Component {
  render() {
    return (
      <div className="field-body">{this.props.children}</div>
    )
  }
}

class FieldLabel extends React.Component<IFieldLabelProps> {
  render() {
    const className = classnames("field-label",
      sizePropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

export default class Field extends React.Component<IFieldProps> {
  static Body = FieldBody
  static Label = FieldLabel

  render() {
    const {
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      isHorizontal
    } = this.props

    const className = classnames("field", {
      "has-addons": hasAddons,
      "has-addons-centered": hasAddonsCentered,
      "is-grouped": isGrouped,
      "is-grouped-multiline": isGroupedMultiline,
      "is-horizontal": isHorizontal,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
