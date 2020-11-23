import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export type MenuProps = React.HTMLAttributes<HTMLElement>

export type MenuLabelProps = React.HTMLAttributes<HTMLParagraphElement>

export type MenuListProps = React.HTMLAttributes<HTMLUListElement>

class MenuLabel extends React.Component<MenuLabelProps> {
  render(): React.ReactNode {
    return renderElement('p', this.props, bulmaClassName.menuLabel)
  }
}

class MenuList extends React.Component<MenuListProps> {
  render(): React.ReactNode {
    return renderElement('ul', this.props, bulmaClassName.menuList)
  }
}

export class Menu extends React.Component<MenuProps> {
  static Label = MenuLabel
  static List = MenuList

  render(): React.ReactNode {
    return renderElement('aside', this.props, bulmaClassName.menu)
  }
}
