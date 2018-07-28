import * as classname from 'classname'
import * as React from 'react'

interface IconProps {
  hasTextDanger?: boolean
  hasTextInfo?: boolean
  hasTextSuccess?: boolean
  hasTextWarning?: boolean
  isLarge?: boolean
  isMedium?: boolean
  isSmall?: boolean
}

interface IconSvgProps {
  icon: {
    d: string
    viewBox: string
  }
  size: string
}

class IconSvg extends React.Component<IconSvgProps> {
  static defaultProps = {
    size: '1em'
  }

  render() {
    const {
      icon,
      size,
    } = this.props

    return (
      <svg
        aria-hidden="true"
        height={size}
        role="img"
        viewBox={icon.viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d={icon.d}
        />
      </svg>
    )
  }
}

export default class Icon extends React.Component<IconProps> {
  static Svg = IconSvg

  render() {
    const {
      hasTextDanger,
      hasTextInfo,
      hasTextSuccess,
      hasTextWarning,
      isLarge,
      isMedium,
      isSmall,
    } = this.props

    const className = classname(['icon'], {
      'has-text-danger': hasTextDanger,
      'has-text-info': hasTextInfo,
      'has-text-success': hasTextSuccess,
      'has-text-warning': hasTextWarning,
      'is-large': isLarge,
      'is-medium': isMedium,
      'is-small': isSmall,
    })

    return (
      <span className={className}>{this.props.children}</span>
   )
  }
}
