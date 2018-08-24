import * as React from "react";
interface IColumnsProps {
    isDesktop?: boolean;
    isGapless?: boolean;
    isMobile?: boolean;
    isMultiline?: boolean;
}
export default class Columns extends React.Component<IColumnsProps> {
    render(): JSX.Element;
}
export {};
