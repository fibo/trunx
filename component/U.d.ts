import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface UProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {
}
export declare class U extends React.Component<UProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
