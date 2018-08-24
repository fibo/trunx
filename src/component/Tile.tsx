import * as classnames from 'classnames'
import * as React from 'react'

interface TileProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
  is7?: boolean
  is8?: boolean
  is9?: boolean
  is10?: boolean
  is11?: boolean
  is12?: boolean
  isParent?: boolean
  isVertical?: boolean
}

interface TileChildNotificationProps {
  isDanger?: boolean
  isLink?: boolean
  isInfo?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}

class TileAncestor extends React.Component {
  render() {
    return (
      <div className="tile is-ancestor">{this.props.children}</div>
    )
  }
}

class TileChildBox extends React.Component {
  render() {
    return (
      <article className="tile is-child box">{this.props.children}</article>
    )
  }
}

class TileChildNotification extends React.Component<TileChildNotificationProps> {
  render() {
    const {
      isDanger,
      isLink,
      isInfo,
      isPrimary,
      isSuccess,
      isWarning,
    } = this.props

    const className = classnames('tile is-child notification', {
      'is-danger': isDanger,
      'is-info': isInfo,
      'is-link': isLink,
      'is-primary': isPrimary,
      'is-success': isSuccess,
      'is-warning': isWarning
    })

    return (
      <article className={className}>{this.props.children}</article>
    )
  }
}

class TileChild extends React.Component {
  static Box = TileChildBox
  static Notification = TileChildNotification

  render() {
    return (
      <div className="tile is-child">{this.props.children}</div>
    )
  }
}

export default class Tile extends React.Component<TileProps> {
  static Ancestor = TileAncestor
  static Child = TileChild

  render() {
    const {
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
      is7,
      is8,
      is9,
      is10,
      is11,
      is12,
      isParent,
      isVertical,
    } = this.props

    const className = classnames('tile', {
      'is-1': is1,
      'is-2': is2,
      'is-3': is3,
      'is-4': is4,
      'is-5': is5,
      'is-6': is6,
      'is-7': is7,
      'is-8': is8,
      'is-9': is9,
      /* tslint:disable object-literal-sort-keys */
      'is-10': is10,
      'is-11': is11,
      'is-12': is12,
      /* tslint:enable object-literal-sort-keys */
      'is-parent': isParent,
      'is-vertical': isVertical,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
