import * as classnames from "classnames"
import * as React from "react"

import { trunxPropsToClassnames } from './utils'

interface IColumnsProps {
  className?: string,
  isDesktop?: boolean
  isGapless?: boolean
  isMobile?: boolean
  isMultiline?: boolean
}

export default class Columns extends React.Component<IColumnsProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "columns",
          className,
          trunxPropsToClassnames(props),
        )}
      >
       {children}
      </div>
    )
  }
}
