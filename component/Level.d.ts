import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface LevelProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
    isMobile?: boolean;
}
export interface LevelItemProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
    as?: 'a' | 'div';
}
export interface LevelLeftProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
export interface LevelRightProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
declare class LevelItem extends React.Component<LevelItemProps> {
    static defaultProps: {
        as: string;
    };
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class LevelLeft extends React.Component<LevelLeftProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
declare class LevelRight extends React.Component<LevelRightProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export declare class Level extends React.Component<LevelProps> {
    static Item: typeof LevelItem;
    static Left: typeof LevelLeft;
    static Right: typeof LevelRight;
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export {};
