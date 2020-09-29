import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  mainColorsPropsToClassnames,
} from "./modifiers"

interface INotificationProps extends IMainColorsProps {
  children?: React.ReactNode
  className?: string
}

export default class Notification extends React.Component<INotificationProps> {
  render() {
    const {
      className,
      children,
    } = this.props

    return (
      <div
        className={classnames(
          "notification",
          className,
          mainColorsPropsToClassnames(this.props),
        )}
      >{children}</div>
    )
  }
}
