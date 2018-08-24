import * as React from "react";
interface IHelpProps {
    isDanger?: boolean;
    isInfo?: boolean;
    isPrimary?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
}
export default class Help extends React.Component<IHelpProps> {
    render(): JSX.Element;
}
export {};
