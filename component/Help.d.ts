import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { BackgroundColorHelpersProps, MainColorsProps } from './modifiers';
interface HelpProps extends React.HTMLAttributes<HTMLParagraphElement>, ErrorBoundaryProps, BackgroundColorHelpersProps, MainColorsProps {
}
export declare class Help extends React.Component<HelpProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export {};
