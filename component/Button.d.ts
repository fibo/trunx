import * as React from "react";
import { IMainColorsProps, ISizeProps, ITextColorHelpersProps } from "./modifiers";
interface IButtonProps extends IMainColorsProps, ISizeProps, ITextColorHelpersProps {
    disabled?: boolean;
    href?: string;
    isActive?: boolean;
    isBlack?: boolean;
    isDark?: boolean;
    isFocused?: boolean;
    isFullwidth?: boolean;
    isInverted?: boolean;
    isLight?: boolean;
    isLink?: boolean;
    isLoading?: boolean;
    isNormal?: boolean;
    isOutlined?: boolean;
    isRounded?: boolean;
    isStatic?: boolean;
    isText?: boolean;
    isWhite?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "reset" | "submit";
}
export default class Button extends React.Component<IButtonProps> {
    render(): JSX.Element;
}
export {};
