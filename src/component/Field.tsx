import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  ISizeProps,
  helpersPropsToClassnames,
  sizePropsToClassnames,
} from "./modifiers"

interface IFieldProps extends IHelpersProps {
  children?: React.ReactNode
  className?: string
  hasAddons?: boolean
  hasAddonsCentered?: boolean
  isGrouped?: boolean
  isGroupedMultiline?: boolean
  isHorizontal?: boolean
}

interface IFieldBodyProps {
  children?: React.ReactNode
  className?: string
}

interface IFieldLabelProps extends ISizeProps {
  children?: React.ReactNode
  className?: string
}

class FieldBody extends React.Component<IFieldBodyProps> {
  render() {
    const {
      children,
      className
    } = this.props

    return (
      <div
        className={classnames(
          "field-body",
          className,
        )}
      >{children}</div>
    )
  }
}

class FieldLabel extends React.Component<IFieldLabelProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "field-label",
          className,
          sizePropsToClassnames(props),
        )}
      >{children}</div>
    )
  }
}

export default class Field extends React.Component<IFieldProps> {
  static Body = FieldBody
  static Label = FieldLabel

  render() {
    const {
      children,
      className,
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      isHorizontal,
      isInvisible,
      isMarginLess,
      isPaddingLess,
      isSrOnly,
    } = this.props

    return (
      <div
        className={classnames(
          "field",
          className,
          {
            "has-addons": hasAddons,
            "has-addons-centered": hasAddonsCentered,
            "is-grouped": isGrouped,
            "is-grouped-multiline": isGroupedMultiline,
            "is-horizontal": isHorizontal,
          },
          helpersPropsToClassnames({
            isInvisible,
            isMarginLess,
            isPaddingLess,
            isSrOnly,
          }),
        )}
      >{children}</div>
    )
  }
}
