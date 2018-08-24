import * as React from "react";
interface IButtonProps {
    disabled?: boolean;
    href?: string;
    isActive?: boolean;
    isBlack?: boolean;
    isDanger?: boolean;
    isDark?: boolean;
    isFocused?: boolean;
    isFullwidth?: boolean;
    isInfo?: boolean;
    isInverted?: boolean;
    isLarge?: boolean;
    isLight?: boolean;
    isLink?: boolean;
    isLoading?: boolean;
    isMedium?: boolean;
    isNormal?: boolean;
    isOutlined?: boolean;
    isPrimary?: boolean;
    isRounded?: boolean;
    isSmall?: boolean;
    isStatic?: boolean;
    isSuccess?: boolean;
    isText?: boolean;
    isWarning?: boolean;
    isWhite?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "reset" | "submit";
}
export default class Button extends React.Component<IButtonProps> {
    render(): JSX.Element;
}
export {};
