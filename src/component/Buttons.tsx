import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import {
  HelpersProps,
  TextColorHelpersProps,
  extractModifiersProps,
modifierPropsToClassnamesObject
} from "./modifiers"

export interface ButtonsProps
extends React.HTMLAttributes<HTMLDivElement>,
        HelpersProps,
        TextColorHelpersProps
{
  areLarge?: boolean
  areMedium?: boolean
  areSmall?: boolean
}

export class Buttons extends React.Component<ButtonsProps> {
  render() {
    const [modifiersProps
    , {
      areLarge,
      areMedium,
      areSmall,
      children,
      className,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <div
        className={classnames(
          bulmaClassName.buttons,
          className,
modifierPropsToClassnamesObject(modifiersProps),
          trunxPropsToClassnamesObject({ areLarge, areMedium, areSmall }),
        )}
        {...props}
      >
       {children}
      </div>
    )
  }
}
