import classnames from 'classnames'
import * as React from 'react'

import { TrunxProps, trunxPropsToClassnamesObject } from './classNames.js'
import { extractModifiersProps, modifierPropsToClassnamesObject } from './modifiers.js'

export function renderElement(
  type: string,
  elementProps: { [prop: string]: any },
  bulmaClassName?: string,
  trunxProps?: TrunxProps
): React.ReactNode {
  const [modifiersProps, { children, className, ...props }] = extractModifiersProps(elementProps)

  return React.createElement(
    type,
    {
      className: classnames(
        bulmaClassName,
        className,
        modifierPropsToClassnamesObject(modifiersProps),
        trunxPropsToClassnamesObject(trunxProps)
      ),
      ...props,
    },
    children
  )
}