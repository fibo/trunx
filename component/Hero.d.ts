import * as React from "react";
import { IMainColorsProps } from "./modifiers";
interface IHeroProps extends IMainColorsProps {
    isBold?: boolean;
    isDark?: boolean;
    isFullheightWithNavbar?: boolean;
    isFullheight?: boolean;
    isLarge?: boolean;
    isLight?: boolean;
    isMedium?: boolean;
}
declare class HeroBody extends React.Component {
    render(): JSX.Element;
}
declare class HeroFoot extends React.Component {
    render(): JSX.Element;
}
declare class HeroHead extends React.Component {
    render(): JSX.Element;
}
export default class Hero extends React.Component<IHeroProps> {
    static Body: typeof HeroBody;
    static Foot: typeof HeroFoot;
    static Head: typeof HeroHead;
    render(): JSX.Element;
}
export {};
