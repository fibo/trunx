import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
    isActive?: boolean;
}
export interface ModalBackgroundProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
export interface ModalCardProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
export interface ModalCardBodyProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export interface ModalCardFootProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export interface ModalCardHeadProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export interface ModalCardTitleProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export interface ModalCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ErrorBoundaryProps {
    isLarge?: boolean;
}
export interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
declare class ModalCardBody extends React.Component<ModalCardBodyProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class ModalCardFoot extends React.Component<ModalCardFootProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class ModalCardHead extends React.Component<ModalCardHeadProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class ModalCardTitle extends React.Component<ModalCardTitleProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class ModalBackground extends React.Component<ModalBackgroundProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class ModalCard extends React.Component<ModalCardProps> {
    static Body: typeof ModalCardBody;
    static Foot: typeof ModalCardFoot;
    static Head: typeof ModalCardHead;
    static Title: typeof ModalCardTitle;
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class ModalClose extends React.Component<ModalCloseProps> {
    static defaultProps: {
        'aria-label': string;
    };
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class ModalContent extends React.Component<ModalContentProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export declare class Modal extends React.Component<ModalProps> {
    static Background: typeof ModalBackground;
    static Card: typeof ModalCard;
    static Close: typeof ModalClose;
    static Content: typeof ModalContent;
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export {};
