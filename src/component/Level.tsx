import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
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
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class LevelLeft extends React.Component<ILevelLeftProps> {
  render() {
    const className = classnames("level-left",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class LevelRight extends React.Component<ILevelRightProps> {
  render() {
    const className = classnames("level-right",
      textColorHelpersPropsToClassenames(this.props),
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
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <nav className={className}>{this.props.children}</nav>
    )
  }
}
