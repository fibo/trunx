import * as classnames from "classnames"
import * as React from "react"

import { trunxPropsToClassnamesObject } from './classNames'
import {
  FloatHelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject
} from "./modifiers"

interface AProps
extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
        FloatHelpersProps
{
  isActive?: boolean
}

export default class A extends React.Component<AProps> {
  render() {
    const [
      modifiersProps,
    {
      children,
      className,
      isActive,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <a
        className={classnames(
          className,
trunxPropsToClassnamesObject({ isActive }),
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
}
