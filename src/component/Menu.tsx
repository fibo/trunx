import * as classnames from "classnames"
import * as React from "react"

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

export default class Menu extends React.Component {
  static Label = MenuLabel
  static List = MenuList

  render() {
    return (
      <aside className="menu">{this.props.children}</aside>
    )
  }
}
