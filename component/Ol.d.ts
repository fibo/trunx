import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface OlProps extends React.OlHTMLAttributes<HTMLOListElement>, ErrorBoundaryProps, HelpersProps {
    isActive?: boolean;
}
export declare class Ol extends React.Component<OlProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
