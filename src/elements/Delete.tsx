import * as React from 'react'

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class Delete extends React.Component<Props> {
  public render() {
    const {
      onClick
    } = this.props

    return (
      <button
        className="delete"
        onClick={onClick}
      />
    )
  }
}
