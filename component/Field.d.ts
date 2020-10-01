import * as React from "react";
import { IHelpersProps, ISizeProps } from "./modifiers";
interface IFieldProps extends IHelpersProps {
    children?: React.ReactNode;
    className?: string;
    hasAddons?: boolean;
    hasAddonsCentered?: boolean;
    isGrouped?: boolean;
    isGroupedMultiline?: boolean;
    isHorizontal?: boolean;
}
interface IFieldBodyProps {
    children?: React.ReactNode;
    className?: string;
}
interface IFieldLabelProps extends ISizeProps {
    children?: React.ReactNode;
    className?: string;
}
declare class FieldBody extends React.Component<IFieldBodyProps> {
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
