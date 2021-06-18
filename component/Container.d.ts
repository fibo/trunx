import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {
    isFluid?: boolean;
    isFullhd?: boolean;
    isWidescreen?: boolean;
}
export declare class Container extends React.Component<ContainerProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
