import * as React from "react"

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface MenuProps extends React.HTMLAttributes<HTMLElement> {}

interface MenuLabelProps  extends React.HTMLAttributes<HTMLParagraphElement> {}

interface MenuListProps  extends React.HTMLAttributes<HTMLUListElement> {}

class MenuLabel extends React.Component<MenuLabelProps> {
  render() {
    return renderElement('p', this.props, bulmaClassName.menuLabel)
  }
}

class MenuList extends React.Component<MenuListProps> {
  render() {
    return renderElement('ul', this.props, bulmaClassName.menuList)
  }
}

export default class Menu extends React.Component<MenuProps> {
  static Label = MenuLabel
  static List = MenuList

  render() {
    return renderElement('aside', this.props, bulmaClassName.menu)
  }
}
