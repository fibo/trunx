import * as classname from 'classname'
import * as React from 'react'

interface Props {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
  isSpaced?: boolean
}

export default class Title extends React.Component<Props> {
  public render() {
    const {
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
      isSpaced,
    } = this.props

    const className = classname(['title'], {
      'is-1': is1,
      'is-2': is2,
      'is-3': is3,
      'is-4': is4,
      'is-5': is5,
      'is-6': is6,
      'is-spaced': isSpaced,
    })

    if (is1) {
      return (<h1 className={className}>{this.props.children}</h1>)
    } else if (is2) {
      return (<h2 className={className}>{this.props.children}</h2>)
    } else if (is3) {
      return (<h3 className={className}>{this.props.children}</h3>)
    } else if (is4) {
      return (<h4 className={className}>{this.props.children}</h4>)
    } else if (is5) {
      return (<h5 className={className}>{this.props.children}</h5>)
    } else if (is6) {
      return (<h6 className={className}>{this.props.children}</h6>)
    } else {
      return (<p className={className}>{this.props.children}</p>)
    }
  }
}
