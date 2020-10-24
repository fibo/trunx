import * as React from 'react'

import { ISizeProps, ITextColorHelpersProps } from './modifiers'
interface ILabelProps extends ISizeProps, ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
}
export default class Label extends React.Component<ILabelProps> {
  render(): JSX.Element;
}
export {}
