import * as React from 'react'
interface IContainerProps {
    children?: React.ReactNode;
    className?: string;
    isFluid?: boolean;
    isFullhd?: boolean;
    isWidescreen?: boolean;
}
export default class Container extends React.Component<IContainerProps> {
  render(): JSX.Element;
}
export {}
