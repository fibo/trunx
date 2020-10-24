import * as React from 'react'

import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from './modifiers'
interface IEmProps extends React.HTMLAttributes<HTMLElement>, IBackgroundColorHelpersProps, ITextColorHelpersProps {
}
export default class Em extends React.Component<IEmProps> {
  render(): JSX.Element;
}
export {}
