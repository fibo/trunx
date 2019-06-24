import * as React from "react"

interface IMenuProps extends React.HTMLAttributes<HTMLElement> {}

class MenuLabel extends React.Component {
  render() {
    return (
      <p className="menu-label">{this.props.children}</p>
    )
  }
}

class MenuList extends React.Component {
  render() {
    return (
      <ul className="menu-list">{this.props.children}</ul>
    )
  }
}

export default class Menu extends React.Component<IMenuProps> {
  static Label = MenuLabel
  static List = MenuList

  render() {
    const {
      children,
      ...props
    } = this.props

    return (
      <aside {...props} className="menu">{children}</aside>
    )
  }
}
