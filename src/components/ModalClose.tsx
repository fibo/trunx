import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isLarge?: boolean
}

export default class ModalClose extends React.Component<Props> {
  public render() {
    const {
      isLarge
    } = this.props

    const className = classname(['modal-close'], {
      'is-large': isLarge,
    })

    return (
      <button
        aria-label="close"
        className={className}
      />
    )
  }
}
