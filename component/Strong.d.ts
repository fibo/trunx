import * as React from 'react'

import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from './modifiers'
interface IStrongProps extends React.HTMLAttributes<HTMLElement>, IBackgroundColorHelpersProps, ITextColorHelpersProps {
}
export default class Strong extends React.Component<IStrongProps> {
  render(): JSX.Element;
}
export {}
