import * as React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
import { HelpersProps } from './modifiers';
export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, ErrorBoundaryProps, HelpersProps {
    is1?: boolean;
    is2?: boolean;
    is3?: boolean;
    is4?: boolean;
    is5?: boolean;
    is6?: boolean;
    isSpaced?: boolean;
}
export declare class Title extends React.Component<TitleProps> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
