import * as React from "react"

interface IAnchorComponentProps {}

export interface IAnchorProps {
  AnchorComponent?: React.ComponentClass<IAnchorComponentProps>,
  className?: string,
  href?: string,
  hrefProp?: string,
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

      if (hrefProp && href) {
        props[hrefProp] = href
      }

      return (
        <AnchorComponent {...props}>{this.props.children}</AnchorComponent>
      )
    } else {
      const {
        className,
        href,
        ...props
      } = this.props

      return (
        <a {...props} className={className} href={href}>{this.props.children}</a>
      )
    }
  }
}
