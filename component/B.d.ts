import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface BProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export declare class B extends React.Component<BProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
