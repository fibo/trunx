import * as React from "react";
import { IAnchorProps } from "./Anchor";
import { IHelpersProps, IMainColorsProps, IShadeColorsProps, ISizeProps, ITextColorHelpersProps } from "./modifiers";
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, IHelpersProps, IMainColorsProps, IShadeColorsProps, ISizeProps, ITextColorHelpersProps {
    download?: IAnchorProps["download"];
    href?: IAnchorProps["href"];
    isActive?: boolean;
    isFocused?: boolean;
    isFullwidth?: boolean;
    isInverted?: boolean;
    isLoading?: boolean;
    isNormal?: boolean;
    isOutlined?: boolean;
    isRounded?: boolean;
    isStatic?: boolean;
    isText?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    target?: IAnchorProps["target"];
    type?: "reset" | "submit";
    value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
}
export default class Button extends React.Component<IButtonProps> {
    render(): JSX.Element;
}
export {};
