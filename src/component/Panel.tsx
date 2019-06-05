import * as classnames from "classnames"
import * as React from "react"

interface IPanelBlockProps {
  isActive?: boolean
}

class PanelBlock extends React.Component<IPanelBlockProps> {
  render() {
    const {
      isActive,
    } = this.props

    const className = classnames("panel-block", {
        "is-active": isActive,
      }
    )

    return (
      <a className={className}>{this.props.children}</a>
    )
  }
}

class PanelHeading extends React.Component {
  render() {
    return (
      <p className="panel-heading">{this.props.children}</p>
    )
  }
}

class PanelIcon extends React.Component {
  render() {
    return (
      <span className="panel-icon">{this.props.children}</span>
    )
  }
}

class PanelTabs extends React.Component {
  render() {
    return (
      <p className="panel-tabs">{this.props.children}</p>
    )
  }
}

export default class Panel extends React.Component {
  static Block = PanelBlock
  static Heading = PanelHeading
  static Icon = PanelIcon
  static Tabs = PanelTabs

  render() {
    return (
      <nav className="panel">{this.props.children}</nav>
    )
  }
}
