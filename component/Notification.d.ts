import * as React from 'react'

import { IMainColorsProps } from './modifiers'
interface INotificationProps extends IMainColorsProps {
    children?: React.ReactNode;
    className?: string;
}
export default class Notification extends React.Component<INotificationProps> {
  render(): JSX.Element;
}
export {}
