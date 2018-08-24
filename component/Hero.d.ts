import * as React from "react";
interface IHeroProps {
    isBold?: boolean;
    isDanger?: boolean;
    isDark?: boolean;
    isFullheight?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isLight?: boolean;
    isMedium?: boolean;
    isPrimary?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
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
