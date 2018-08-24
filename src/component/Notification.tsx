import * as classnames from "classnames"
import * as React from "react"

interface INotificationProps {
  isDanger?: boolean
  isLink?: boolean
  isInfo?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}

export default class Notification extends React.Component<INotificationProps> {
  render() {
    const {
      isDanger,
      isLink,
      isInfo,
      isPrimary,
      isSuccess,
      isWarning,
    } = this.props

    const className = classnames("notification", {
      "is-danger": isDanger,
      "is-info": isInfo,
      "is-link": isLink,
      "is-primary": isPrimary,
      "is-success": isSuccess,
      "is-warning": isWarning,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
