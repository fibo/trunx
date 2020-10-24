import * as React from 'react'

import { ITextColorHelpersProps } from './modifiers'
interface ITitleProps extends ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
    is1?: boolean;
    is2?: boolean;
    is3?: boolean;
    is4?: boolean;
    is5?: boolean;
    is6?: boolean;
    isSpaced?: boolean;
}
export default class Title extends React.Component<ITitleProps> {
  render(): JSX.Element;
}
export {}
