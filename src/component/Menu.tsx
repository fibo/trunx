import * as classnames from "classnames"
import * as React from "react"

interface IMenuProps extends React.HTMLAttributes<HTMLElement> {}

interface IMenuLabelProps {
  children?: React.ReactNode
  className?: string
}

interface IMenuListProps {
  children?: React.ReactNode
  className?: string
}

class MenuLabel extends React.Component<IMenuLabelProps> {
  render() {
    const {
      className,
      children,
    } = this.props

    return (
      <p
        className={classnames(
          "menu-label",
          className,
        )}
      >{children}</p>
    )
  }
}

class MenuList extends React.Component<IMenuListProps> {
  render() {
    const {
      className,
      children,
    } = this.props

    return (
      <ul
        className={classnames(
          "menu-list",
          className,
        )}
      >{children}</ul>
    )
  }
}

export default class Menu extends React.Component<IMenuProps> {
  static Label = MenuLabel
  static List = MenuList

  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <aside
        className={classnames(
          "menu",
          className,
        )}
        {...props}
      >{children}</aside>
    )
  }
}
