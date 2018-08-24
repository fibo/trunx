import * as React from "react";
interface IModalProps {
    isActive?: boolean;
}
interface IModalBackgroundProps {
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
interface IModalCloseProps {
    isLarge?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare class ModalCardBody extends React.Component {
    render(): JSX.Element;
}
declare class ModalCardFoot extends React.Component {
    render(): JSX.Element;
}
declare class ModalCardHead extends React.Component {
    render(): JSX.Element;
}
declare class ModalCardTitle extends React.Component {
    render(): JSX.Element;
}
declare class ModalBackground extends React.Component<IModalBackgroundProps> {
    render(): JSX.Element;
}
declare class ModalCard extends React.Component {
    static Body: typeof ModalCardBody;
    static Foot: typeof ModalCardFoot;
    static Head: typeof ModalCardHead;
    static Title: typeof ModalCardTitle;
    render(): JSX.Element;
}
declare class ModalClose extends React.Component<IModalCloseProps> {
    render(): JSX.Element;
}
declare class ModalContent extends React.Component {
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
