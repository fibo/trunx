import * as React from "react";
import { IAnchorProps } from "./Anchor";
import { IHelpersProps, IMainColorsProps, IShadeColorsProps, ISizeProps, ITextColorHelpersProps } from "./modifiers";
interface IButtonProps extends IAnchorProps, IHelpersProps, IMainColorsProps, IShadeColorsProps, ISizeProps, ITextColorHelpersProps {
    disabled?: boolean;
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
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "reset" | "submit";
    value?: string | number | string[] | undefined;
}
export default class Button extends React.Component<IButtonProps> {
    render(): JSX.Element;
}
export {};
