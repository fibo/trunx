import * as React from "react";
declare class MenuLabel extends React.Component {
    render(): JSX.Element;
}
declare class MenuList extends React.Component {
    render(): JSX.Element;
}
export default class Menu extends React.Component {
    static Label: typeof MenuLabel;
    static List: typeof MenuList;
    render(): JSX.Element;
}
export {};
