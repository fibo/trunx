import * as classnames from "classnames"
import * as React from "react"

interface ITabsProps {
  isBoxed?: boolean
  isCentered?: boolean
  isFullwidth?: boolean
  isLarge?: boolean
  isMedium?: boolean
  isRight?: boolean
  isSmall?: boolean
  isToggle?: boolean
  isToggleRounded?: boolean
}

interface ITabsItemProps {
  isActive?: boolean
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

class TabsItem extends React.Component<ITabsItemProps> {
  static defaultProps = {
    onClick: Function.prototype
  }

  render() {
    const {
      isActive,
      onClick,
    } = this.props

    if (isActive) {
      return (
        <li className="is-active">
          <a>{this.props.children}</a>
        </li>
      )
    } else {
      return (
        <li>
          <a onClick={onClick}>{this.props.children}</a>
        </li>
      )
    }
  }
}

class TabsNav extends React.Component<ITabsProps> {
  render() {
    const {
      isBoxed,
      isCentered,
      isFullwidth,
      isLarge,
      isMedium,
      isRight,
      isSmall,
      isToggle,
      isToggleRounded,
    } = this.props

    const className = classnames("tabs", {
      "is-boxed": isBoxed,
      "is-centered": isCentered,
      "is-fullwidth": isFullwidth,
      "is-large": isLarge,
      "is-medium": isMedium,
      "is-right": isRight,
      "is-small": isSmall,
      "is-toggle": isToggle,
      "is-toggle-rounded": isToggleRounded,
    })

    return (
      <nav className={className}>
        <div className="container">
          <ul>{this.props.children}</ul>
        </div>
      </nav>
    )
  }
}

export default class Tabs extends React.Component<ITabsProps> {
  static Item = TabsItem
  static Nav = TabsNav

  render() {
    const {
      isBoxed,
      isCentered,
      isFullwidth,
      isLarge,
      isMedium,
      isRight,
      isSmall,
      isToggle,
      isToggleRounded,
    } = this.props

    const className = classnames("tabs", {
      "is-boxed": isBoxed,
      "is-centered": isCentered,
      "is-fullwidth": isFullwidth,
      "is-large": isLarge,
      "is-medium": isMedium,
      "is-right": isRight,
      "is-small": isSmall,
      "is-toggle": isToggle,
      "is-toggle-rounded": isToggleRounded,
    })

    return (
      <div className={className}>
        <ul>{this.props.children}</ul>
      </div>
    )
  }
}
