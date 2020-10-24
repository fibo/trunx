import * as React from 'react'

import { ISizeProps } from './modifiers'
interface IDeleteProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ISizeProps {
    children?: React.ReactNode;
    className?: string;
}
export default class Delete extends React.Component<IDeleteProps> {
  render(): JSX.Element;
}
export {}
