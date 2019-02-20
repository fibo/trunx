import * as React from "react";
import { IHelpersProps, ISizeProps } from "./modifiers";
interface IFieldProps extends IHelpersProps {
    hasAddons?: boolean;
    hasAddonsCentered?: boolean;
    isGrouped?: boolean;
    isGroupedMultiline?: boolean;
    isHorizontal?: boolean;
}
interface IFieldLabelProps extends ISizeProps {
}
declare class FieldBody extends React.Component {
    render(): JSX.Element;
}
declare class FieldLabel extends React.Component<IFieldLabelProps> {
    render(): JSX.Element;
}
export default class Field extends React.Component<IFieldProps> {
    static Body: typeof FieldBody;
    static Label: typeof FieldLabel;
    render(): JSX.Element;
}
export {};
