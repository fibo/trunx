import * as classnames from 'classnames'
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

    const className = classnames('delete', {
      'is-large': isLarge,
      'is-medium': isMedium,
      'is-small': isSmall
    })

    return (
      <button aria-label="delete" className={className} onClick={onClick}/>
    )
  }
}
