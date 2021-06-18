import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
export declare class Box extends React.Component<BoxProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
