import * as classnames from "classnames"
import * as React from "react"

interface ILevelProps {
  isMobile?: boolean
}

interface ILevelItemProps {
  hasTextCentered?: boolean
}

class LevelItem extends React.Component<ILevelItemProps> {
  render() {
    const {
      hasTextCentered
    } = this.props

    const className = classnames("level-item", {
      "has-text-centered": hasTextCentered,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class LevelLeft extends React.Component {
  render() {
    return (
      <div className="level-left">{this.props.children}</div>
    )
  }
}

class LevelRight extends React.Component {
  render() {
    return (
      <div className="level-right">{this.props.children}</div>
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

    const className = classnames("level", {
      "is-mobile": isMobile,
    })

    return (
      <nav className={className}>{this.props.children}</nav>
    )
  }
}
