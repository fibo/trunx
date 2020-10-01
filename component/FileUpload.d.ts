import * as React from "react";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface IFileUploadProps extends IMainColorsProps, ISizeProps {
    className?: string;
    children?: React.ReactNode;
    hasName?: boolean;
    isBoxed?: boolean;
    isFullwidth?: boolean;
    isRight?: boolean;
}
interface IFileUploadCta {
    className?: string;
    children?: React.ReactNode;
}
interface IFileUploadIcon {
    className?: string;
    children?: React.ReactNode;
}
interface IFileUploadInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
interface IFileUploadLabel {
    className?: string;
    children?: React.ReactNode;
}
interface IFileUploadName {
    className?: string;
    children?: React.ReactNode;
}
declare class FileUploadCta extends React.Component<IFileUploadCta> {
    render(): JSX.Element;
}
declare class FileUploadIcon extends React.Component<IFileUploadIcon> {
    render(): JSX.Element;
}
declare class FileUploadInput extends React.Component<IFileUploadInputProps> {
    render(): JSX.Element;
}
declare class FileUploadLabel extends React.Component<IFileUploadLabel> {
    render(): JSX.Element;
}
declare class FileUploadName extends React.Component<IFileUploadName> {
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
