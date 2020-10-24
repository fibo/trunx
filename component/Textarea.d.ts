import * as React from 'react'

import { IMainColorsProps, ISizeProps, ITextColorHelpersProps } from './modifiers'
interface ITextareaProps extends IMainColorsProps, ISizeProps, ITextColorHelpersProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    isFocused?: boolean;
    isHovered?: boolean;
}
export default class Textarea extends React.Component<ITextareaProps> {
  render(): JSX.Element;
}
export {}
