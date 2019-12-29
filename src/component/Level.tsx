import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ILevelItemProps extends ITextColorHelpersProps {
  hasTextCentered?: boolean
}

interface ILevelLeftProps extends ITextColorHelpersProps {}

interface ILevelProps extends ITextColorHelpersProps {
  isMobile?: boolean
}

interface ILevelRightProps extends ITextColorHelpersProps {}

class LevelItem extends React.Component<ILevelItemProps> {
  render() {
    const {
      hasTextCentered
    } = this.props

    const className = classnames("level-item",
      {
        "has-text-centered": hasTextCentered,
      },
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class LevelLeft extends React.Component<ILevelLeftProps> {
  render() {
    const className = classnames("level-left",
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class LevelRight extends React.Component<ILevelRightProps> {
  render() {
    const className = classnames("level-right",
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

export default class Level extends React.Component<ILevelProps> {
  static Item = LevelItem
  static Left = LevelLeft
  static Right = LevelRight

  render() {
    const {
      isMobile,
    } = this.props

    const className = classnames("level",
      {
        "is-mobile": isMobile,
      },
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <nav className={className}>{this.props.children}</nav>
    )
  }
}
