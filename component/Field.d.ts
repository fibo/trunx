import * as React from "react";
interface IFieldProps {
    hasAddons?: boolean;
    hasAddonsCentered?: boolean;
    isGrouped?: boolean;
    isGroupedMultiline?: boolean;
    label?: string;
}
export default class Field extends React.Component<IFieldProps> {
    render(): JSX.Element;
}
export {};
