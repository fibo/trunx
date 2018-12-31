import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  mainColorsPropsToClassenames,
} from "./modifiers"

interface INotificationProps extends IMainColorsProps {
}

export default class Notification extends React.Component<INotificationProps> {
  render() {
    const className = classnames("notification",
      mainColorsPropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
