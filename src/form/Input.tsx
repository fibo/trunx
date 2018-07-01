import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isDanger?: boolean
  isInfo?: boolean,
  isLarge?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}

export default class Input extends React.Component<Props> {
  public render() {
    const {
      isDanger,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      ...props
    } = this.props

    const className = classname(['input'], {
      'is-danger': isDanger,
      'is-info': isInfo,
      'is-large': isLarge,
      'is-medium': isMedium,
      'is-primary': isPrimary,
      'is-small': isSmall,
      'is-success': isSuccess,
      'is-warning': isWarning
    })

    return (
      <input className={className} {...props}/>
    )
  }
}
