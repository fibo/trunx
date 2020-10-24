import * as React from 'react'

import { ISizeProps } from './modifiers'
interface IControlProps extends ISizeProps, React.HTMLAttributes<HTMLDivElement> {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
    isLoading?: boolean;
}
export default class Control extends React.Component<IControlProps> {
  render(): JSX.Element;
}
export {}
