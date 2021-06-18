import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface MenuProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export interface MenuLabelProps extends React.HTMLAttributes<HTMLParagraphElement>, ErrorBoundaryProps, HelpersProps {
}
export interface MenuListProps extends React.HTMLAttributes<HTMLUListElement>, ErrorBoundaryProps, HelpersProps {
}
declare class MenuLabel extends React.Component<MenuLabelProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class MenuList extends React.Component<MenuListProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export declare class Menu extends React.Component<MenuProps> {
    static Label: typeof MenuLabel;
    static List: typeof MenuList;
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export {};
