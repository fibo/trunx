import * as React from "react"

interface IAnchorComponentProps {}

// Sync this interface with AnchorHTMLAttributes in @types/react but do not extend HTMLAttributes.
interface IAnchorHTMLAttributes {
  download?: any
  href?: string
  hrefLang?: string
  media?: string
  rel?: string
  target?: string
  type?: string
}

export interface IAnchorProps extends IAnchorHTMLAttributes {
  AnchorComponent?: React.ComponentClass<IAnchorComponentProps>,
  className?: string,
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
