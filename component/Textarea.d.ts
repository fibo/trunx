import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, ErrorBoundaryProps, HelpersProps, MainColorsProps, SizeProps {
    isFocused?: boolean;
    isHovered?: boolean;
}
export declare class Textarea extends React.Component<TextareaProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
