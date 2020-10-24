import * as React from 'react'

import { ISizeProps } from './modifiers'
interface IContentProps extends ISizeProps, React.HTMLAttributes<HTMLDivElement> {
    hasTextCentered?: boolean;
    hasTextJustified?: boolean;
    hasTextLeft?: boolean;
    hasTextRight?: boolean;
}
export default class Content extends React.Component<IContentProps> {
  render(): JSX.Element;
}
export {}
