import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import { MainColorsProps, SizeProps, extractModifiersProps, modifierPropsToClassnamesObject } from './modifiers'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, MainColorsProps, SizeProps {
  isFocused?: boolean;
  isHovered?: boolean;
  isLoading?: boolean;
  isMultiple?: boolean;
}

export class Select extends React.Component<SelectProps> {
  render () :React.ReactNode{
    const [modifiersProps, {
      children,
      className,
      isFocused,
      isHovered,
      isLoading,
      isMultiple,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <div className={classnames(bulmaClassName.select, className, modifierPropsToClassnamesObject(modifiersProps), trunxPropsToClassnamesObject({
        isFocused,
        isHovered,
        isLoading,
        isMultiple
      }))}
      >
        <select {...props} multiple={isMultiple}>{children}</select>
      </div>
    )
  }
}
