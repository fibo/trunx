import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface DivProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
}
export declare class Div extends React.Component<DivProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
