import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { ImageProps } from './Image';
import { HelpersProps } from './modifiers';
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
export interface CardFooterItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, ErrorBoundaryProps, HelpersProps {
}
export interface CardFooterProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export interface CardHeaderIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, ErrorBoundaryProps, HelpersProps {
}
export interface CardHeaderTitleProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
    isCentered?: boolean;
}
export declare type CardImageProps = ImageProps;
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
declare class CardContent extends React.Component<CardContentProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class CardFooterItem extends React.Component<CardFooterItemProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class CardFooter extends React.Component<CardFooterProps> {
    static Item: typeof CardFooterItem;
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class CardHeaderIcon extends React.Component<CardHeaderIconProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class CardHeaderTitle extends React.Component<CardHeaderTitleProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class CardHeader extends React.Component<CardHeaderProps> {
    static Icon: typeof CardHeaderIcon;
    static Title: typeof CardHeaderTitle;
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class CardImage extends React.Component<CardImageProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export declare class Card extends React.Component<CardProps> {
    static Content: typeof CardContent;
    static Footer: typeof CardFooter;
    static Header: typeof CardHeader;
    static Image: typeof CardImage;
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export {};
