import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { BackgroundColorHelpersProps } from './modifiers';
export interface TheadProps extends React.HTMLAttributes<HTMLTableSectionElement>, BackgroundColorHelpersProps, ErrorBoundaryProps {
}
export declare class Thead extends React.Component<TheadProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
