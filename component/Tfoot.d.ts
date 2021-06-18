import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { BackgroundColorHelpersProps } from './modifiers';
export interface TfootProps extends React.HTMLAttributes<HTMLTableSectionElement>, BackgroundColorHelpersProps, ErrorBoundaryProps {
}
export declare class Tfoot extends React.Component<TfootProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
