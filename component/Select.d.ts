import * as React from "react";
interface ISelectProps {
    isDanger?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isLoading?: boolean;
    isMedium?: boolean;
    isMultiple?: boolean;
    isPrimary?: boolean;
    isSmall?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    size?: number;
}
export default class Select extends React.Component<ISelectProps> {
    render(): JSX.Element;
}
export {};
