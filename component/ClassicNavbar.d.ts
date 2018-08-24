import * as React from "react";
interface IClassicNavbarProps {
    brand?: () => React.Component;
    isFixedTop?: boolean;
}
declare const initialState: {
    isActive: boolean;
};
declare type IClassicNavbarState = Readonly<typeof initialState>;
export default class ClassicNavbar extends React.Component<IClassicNavbarProps, IClassicNavbarState> {
    readonly state: IClassicNavbarState;
    render(): JSX.Element;
    private toggle;
}
export {};
