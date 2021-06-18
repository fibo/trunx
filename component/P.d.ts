import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface PProps extends React.HTMLAttributes<HTMLParagraphElement>, ErrorBoundaryProps, HelpersProps {
}
export declare class P extends React.Component<PProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
