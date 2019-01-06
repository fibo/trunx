import * as React from "react"

export interface IAnchorProps {
  AnchorComponent: React.Component,
  className: string,
  href?: string,
  hrefProp: string,
}

export class Anchor extends React.Component<IAnchorProps> {
  static defaultProps = {
    hrefProp: "to" // Integrate with react-router-dom by default.
  }

  render() {
    if (this.props.AnchorComponent) {
      const {
        AnchorComponent,
        href,
        hrefProp,
        ...props
      } = this.props

      props[hrefProp] = href

      return (
        <AnchorComponent
          {...props}
        >
          {this.props.children}
        </AnchorComponent>
      )
    } else {
      const {
        className,
        href,
        ...props
      } = this.props

      return (
        <a
          className={className}
          href={href}
          {...props}
        >
          {this.props.children}
        </a>
      )
    }
  }
}
