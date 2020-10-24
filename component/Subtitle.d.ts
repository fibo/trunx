import * as React from 'react'

import { ITextColorHelpersProps } from './modifiers'
interface ISubtitleProps extends ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
    is1?: boolean;
    is2?: boolean;
    is3?: boolean;
    is4?: boolean;
    is5?: boolean;
    is6?: boolean;
}
export default class Subtitle extends React.Component<ISubtitleProps> {
  render(): JSX.Element;
}
export {}
