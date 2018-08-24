import * as React from "react";
interface IImageProps {
    is1by1?: boolean;
    is1by2?: boolean;
    is1by3?: boolean;
    is2by1?: boolean;
    is2by3?: boolean;
    is3by1?: boolean;
    is3by2?: boolean;
    is3by4?: boolean;
    is3by5?: boolean;
    is4by3?: boolean;
    is4by5?: boolean;
    is5by3?: boolean;
    is5by4?: boolean;
    is9by16?: boolean;
    is16x16?: boolean;
    is24x24?: boolean;
    is32x32?: boolean;
    is48x48?: boolean;
    is64x64?: boolean;
    is96x96?: boolean;
    is128x128?: boolean;
    isSquare?: boolean;
}
export default class Image extends React.Component<IImageProps> {
    render(): JSX.Element;
}
export {};
