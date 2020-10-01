import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  mainColorsPropsToClassnames,
} from "./modifiers"

interface ITileProps extends React.HTMLAttributes<HTMLDivElement> {
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

interface ITileAncestorProps {
  children?: React.ReactNode
  className?: string
}

interface ITileChildProps {
  children?: React.ReactNode
  className?: string
}

interface ITileChildBoxProps {
  children?: React.ReactNode
  className?: string
}
interface ITileChildNotificationProps extends IMainColorsProps {
  children?: React.ReactNode
  className?: string
}


class TileAncestor extends React.Component<ITileAncestorProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "tile is-ancestor",
          className,
        )}
      >{children}</div>
    )
  }
}

class TileChildBox extends React.Component<ITileChildBoxProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "tile is-child box",
          className,
        )}
      >{children}</div>
    )
  }
}

class TileChildNotification extends React.Component<ITileChildNotificationProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <article
        className={classnames(
          "tile is-child notification",
          className,
          mainColorsPropsToClassnames(this.props),
        )}
      >{children}</article>
    )
  }
}

class TileChild extends React.Component<ITileChildProps> {
  static Box = TileChildBox
  static Notification = TileChildNotification

  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "tile is-child",
          className,
        )}
      >{children}</div>
    )
  }
}

export default class Tile extends React.Component<ITileProps> {
  static Ancestor = TileAncestor
  static Child = TileChild

  render() {
    const {
      children,
      className,
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
      ...props
    } = this.props

    return (
      <div
        {...props}
        className={classnames(
          "tile",
          className,
          {
            "is-1": is1,
            "is-2": is2,
            "is-3": is3,
            "is-4": is4,
            "is-5": is5,
            "is-6": is6,
            "is-7": is7,
            "is-8": is8,
            "is-9": is9,
            "is-10": is10,
            "is-11": is11,
            "is-12": is12,
            "is-parent": isParent,
            "is-vertical": isVertical,
          }
        )}
      >{children}</div>
    )
  }
}
