import * as React from 'react'

import { IMainColorsProps } from './modifiers'
interface IHeroProps extends IMainColorsProps {
    children?: React.ReactNode;
    className?: string;
    isBold?: boolean;
    isDark?: boolean;
    isFullheightWithNavbar?: boolean;
    isFullheight?: boolean;
    isLarge?: boolean;
    isLight?: boolean;
    isMedium?: boolean;
}
interface IHeroBodyProps {
    children?: React.ReactNode;
    className?: string;
}
interface IHeroFootProps {
    children?: React.ReactNode;
    className?: string;
}
interface IHeroHeadProps {
    children?: React.ReactNode;
    className?: string;
}
declare class HeroBody extends React.Component<IHeroBodyProps> {
  render(): JSX.Element;
}
declare class HeroFoot extends React.Component<IHeroFootProps> {
  render(): JSX.Element;
}
declare class HeroHead extends React.Component<IHeroHeadProps> {
  render(): JSX.Element;
}
export default class Hero extends React.Component<IHeroProps> {
    static Body: typeof HeroBody;
    static Foot: typeof HeroFoot;
    static Head: typeof HeroHead;
    render(): JSX.Element;
}
export {}
