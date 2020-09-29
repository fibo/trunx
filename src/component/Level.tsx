import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ILevelItemProps extends ITextColorHelpersProps {
  children?: React.ReactNode
  className?: string
  hasTextCentered?: boolean
}

interface ILevelLeftProps extends ITextColorHelpersProps {
  children?: React.ReactNode
  className?: string
}

interface ILevelProps extends ITextColorHelpersProps {
  children?: React.ReactNode
  className?: string
  isMobile?: boolean
}

interface ILevelRightProps extends ITextColorHelpersProps {
  children?: React.ReactNode
  className?: string
}

class LevelItem extends React.Component<ILevelItemProps> {
  render() {
    const {
      className,
      children,
      hasTextCentered,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "level-item",
          className,
          {
            "has-text-centered": hasTextCentered,
          },
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</div>
    )
  }
}

class LevelLeft extends React.Component<ILevelLeftProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "level-left",
          className,
          textColorHelpersPropsToClassnames(this.props),
        )}
      >{children}</div>
    )
  }
}

class LevelRight extends React.Component<ILevelRightProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "level-right",
          className,
          textColorHelpersPropsToClassnames(this.props),
        )}
      >{children}</div>
    )
  }
}

export default class Level extends React.Component<ILevelProps> {
  static Item = LevelItem
  static Left = LevelLeft
  static Right = LevelRight

  render() {
    const {
      children,
      className,
      isMobile,
    } = this.props

    return (
      <nav
        className={classnames(
          "level",
          className,
          {
            "is-mobile": isMobile,
          },
          textColorHelpersPropsToClassnames(this.props),
        )}
      >{children}</nav>
    )
  }
}
