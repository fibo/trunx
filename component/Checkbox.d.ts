import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>, ErrorBoundaryProps, HelpersProps {
}
export declare class Checkbox extends React.Component<CheckboxProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): any;
}
