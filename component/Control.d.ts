import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps, SizeProps } from './modifiers';
export interface ControlProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps, SizeProps {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
    isLoading?: boolean;
}
export declare class Control extends React.Component<ControlProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
