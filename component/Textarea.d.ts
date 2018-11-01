import * as React from "react";
interface ITextareaProps {
    isDanger?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isPrimary?: boolean;
    isSmall?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    placeholder?: string;
    rows?: number;
}
export default class Textarea extends React.Component<ITextareaProps> {
    render(): JSX.Element;
}
export {};
