import * as React from "react";
interface ITagProps {
    href?: string;
    isBlack?: boolean;
    isDanger?: boolean;
    isDark?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isLight?: boolean;
    isLink?: boolean;
    isMedium?: boolean;
    isPrimary?: boolean;
    isRounded?: boolean;
    isSmall?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isWhite?: boolean;
}
export default class Tag extends React.Component<ITagProps> {
    render(): JSX.Element;
}
export {};
