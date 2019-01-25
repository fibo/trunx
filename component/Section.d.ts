import * as React from "react";
import { IHelpersProps } from "./modifiers";
interface ISectionProps extends IHelpersProps {
    isLarge?: boolean;
    isMedium?: boolean;
}
export default class Section extends React.Component<ISectionProps> {
    render(): JSX.Element;
}
export {};
