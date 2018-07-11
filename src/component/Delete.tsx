import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isLarge?: boolean
  isMedium?: boolean
  isSmall?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class Delete extends React.Component<Props> {
  render() {
    const {
      isLarge,
      isMedium,
      isSmall,
      onClick
    } = this.props

    const className = classname(['content'], {
      'is-large': isLarge,
      'is-medium': isMedium,
      'is-small': isSmall
    })

    return (
      <button className="delete" onClick={onClick}/>
    )
  }
}
