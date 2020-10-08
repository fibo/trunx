import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName } from "./classNames"
import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  extractModifiersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

export interface BoxProps
extends React.HTMLAttributes<HTMLDivElement>,
        IBackgroundColorHelpersProps,
        ITextColorHelpersProps
{}

export default class Box extends React.Component<BoxProps> {
  render() {
    const [{
      backgroundColorHelpersProps,
      textColorHelpersProps,
    },
    {
      children,
      className,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <div
        className={classnames(
          bulmaClassName.box,
          className,
          backgroundColorHelpersPropsToClassnames(backgroundColorHelpersProps),
          textColorHelpersPropsToClassnames(textColorHelpersProps),
        )}
        {...props}
      >
       {children}
      </div>
    )
  }
}
