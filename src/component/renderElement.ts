import * as classnames from 'classnames'
import * as React from 'react'

import { BulmaClassName, trunxPropsToClassnamesObject } from './classnames'
import { extractModifiersProps, modifierPropsToClassnamesObject } from './modifiers'

export function renderElement(type: string, elementProps: any, bulmaClassName?: BulmaClassName, trunxProps?: object) {
    const [modifiersProps, {
      children,
      className,
      ...props
    }] = extractModifiersProps(elementProps)

return React.createElement(type, {
  className: classnames(
    bulmaClassName,
    className,
modifierPropsToClassnamesObject(modifiersProps),
trunxPropsToClassnamesObject(trunxProps),
  ),
...props
  },
  children
)
}
