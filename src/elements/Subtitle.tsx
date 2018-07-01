import * as classname from 'classname'
import * as React from 'react'

interface Props {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
}

export default class Subtitle extends React.Component<Props> {
  public render() {
    const {
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
    } = this.props

    const className = classname(['subtitle'], {
      'is-1': is1,
      'is-2': is2,
      'is-3': is3,
      'is-4': is4,
      'is-5': is5,
      'is-6': is6,
    })

    if (is1 || is2 || is3 || is4 || is5 || is6) {
      return (
        <h1 className={className}>{this.props.children}</h1>
      )
    } else {
      return (
        <p className="subtitle">{this.props.children}</p>
      )
    }
  }
}
