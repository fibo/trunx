import * as React from 'react'

import { ITextColorHelpersProps } from './modifiers'
interface IHeadingProps extends ITextColorHelpersProps {
    className?: string;
    children?: React.ReactNode;
}
export default class Heading extends React.Component<IHeadingProps> {
  render(): JSX.Element;
}
export {}
