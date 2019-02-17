import * as React from "react"

export interface IAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className: string
}

export class Anchor extends React.Component<IAnchorProps> {
  render() {
    const {
      className,
      ...props
    } = this.props

    return (
      <a {...props} className={className}>{this.props.children}</a>
    )
  }
}
