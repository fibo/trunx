import * as React from 'react'

import { ITextColorHelpersProps } from './modifiers'
interface IFooterProps extends React.HTMLAttributes<HTMLElement>, ITextColorHelpersProps {
}
export default class Footer extends React.Component<IFooterProps> {
  render(): JSX.Element;
}
export {}
