import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  mainColorsPropsToClassnames,
} from "./modifiers"

interface INotificationProps extends IMainColorsProps {
}

export default class Notification extends React.Component<INotificationProps> {
  render() {
    const className = classnames("notification",
      mainColorsPropsToClassnames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
