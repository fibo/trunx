import * as React from 'react'

import { IMainColorsProps, ISizeProps } from './modifiers'
interface ISelectProps extends IMainColorsProps, ISizeProps, React.SelectHTMLAttributes<HTMLSelectElement> {
    isFocused?: boolean;
    isHovered?: boolean;
    isLoading?: boolean;
    isMultiple?: boolean;
}
export default class Select extends React.Component<ISelectProps> {
  render(): JSX.Element;
}
export {}
