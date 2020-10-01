import * as classnames from "classnames"
import * as React from "react"

interface IPanelProps {
  children?: React.ReactNode
  className?: string
}

interface IPanelBlockProps {
  children?: React.ReactNode
  className?: string
  isActive?: boolean
}

interface IPanelHeadingProps {
  children?: React.ReactNode
  className?: string
}

interface IPanelIconProps {
  children?: React.ReactNode
  className?: string
}

interface IPanelTabsProps {
  children?: React.ReactNode
  className?: string
}

class PanelBlock extends React.Component<IPanelBlockProps> {
  render() {
    const {
      children,
      className,
      isActive,
    } = this.props

    return (
      <a
        className={classnames(
          "panel-block",
          className,
          {
            "is-active": isActive,
          }
        )}
      >{children}</a>
    )
  }
}

class PanelHeading extends React.Component<IPanelHeadingProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <p
        className={classnames(
          "panel-heading",
          className,
        )}
      >{children}</p>
    )
  }
}

class PanelIcon extends React.Component<IPanelIconProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <span
        className={classnames(
          "panel-icon",
          className,
        )}
      >{children}</span>
    )
  }
}

class PanelTabs extends React.Component<IPanelTabsProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <p
        className={classnames(
          "panel-tabs",
          className,
        )}
      >{children}</p>
    )
  }
}

export default class Panel extends React.Component<IPanelProps> {
  static Block = PanelBlock
  static Heading = PanelHeading
  static Icon = PanelIcon
  static Tabs = PanelTabs

  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <nav
        className={classnames(
          "panel",
          className,
        )}
      >{children}</nav>
    )
  }
}
