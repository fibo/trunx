import * as React from "react";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface IFileUploadProps extends IMainColorsProps, ISizeProps {
    hasName?: boolean;
    isBoxed?: boolean;
    isFullwidth?: boolean;
    isRight?: boolean;
}
interface IFileUploadInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare class FileUploadCta extends React.Component {
    render(): JSX.Element;
}
declare class FileUploadIcon extends React.Component {
    render(): JSX.Element;
}
declare class FileUploadInput extends React.Component<IFileUploadInputProps> {
    render(): JSX.Element;
}
declare class FileUploadLabel extends React.Component {
    render(): JSX.Element;
}
declare class FileUploadName extends React.Component {
    render(): JSX.Element;
}
export default class FileUpload extends React.Component<IFileUploadProps> {
    static Cta: typeof FileUploadCta;
    static Icon: typeof FileUploadIcon;
    static Input: typeof FileUploadInput;
    static Label: typeof FileUploadLabel;
    static Name: typeof FileUploadName;
    render(): JSX.Element;
}
export {};
