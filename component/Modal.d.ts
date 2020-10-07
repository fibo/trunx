import * as React from "react";
interface IModalProps {
    children?: React.ReactNode;
    className?: string;
    isActive?: boolean;
}
interface IModalBackgroundProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
interface IModalCardProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface IModalCardBodyProps extends React.HTMLAttributes<HTMLElement> {
}
interface IModalCardFootProps extends React.HTMLAttributes<HTMLElement> {
}
interface IModalCardHeadProps extends React.HTMLAttributes<HTMLElement> {
}
interface IModalCardTitleProps {
    children?: React.ReactNode;
    className?: string;
}
interface IModalCloseProps {
    className?: string;
    isLarge?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
interface IModalContentProps {
    children?: React.ReactNode;
    className?: string;
}
declare class ModalCardBody extends React.Component<IModalCardBodyProps> {
    render(): JSX.Element;
}
declare class ModalCardFoot extends React.Component<IModalCardFootProps> {
    render(): JSX.Element;
}
declare class ModalCardHead extends React.Component<IModalCardHeadProps> {
    render(): any;
}
declare class ModalCardTitle extends React.Component<IModalCardTitleProps> {
    render(): JSX.Element;
}
declare class ModalBackground extends React.Component<IModalBackgroundProps> {
    render(): JSX.Element;
}
declare class ModalCard extends React.Component<IModalCardProps> {
    static Body: typeof ModalCardBody;
    static Foot: typeof ModalCardFoot;
    static Head: typeof ModalCardHead;
    static Title: typeof ModalCardTitle;
    render(): any;
}
declare class ModalClose extends React.Component<IModalCloseProps> {
    render(): JSX.Element;
}
declare class ModalContent extends React.Component<IModalContentProps> {
    render(): JSX.Element;
}
export default class Modal extends React.Component<IModalProps> {
    static Background: typeof ModalBackground;
    static Card: typeof ModalCard;
    static Close: typeof ModalClose;
    static Content: typeof ModalContent;
    render(): JSX.Element;
}
export {};
