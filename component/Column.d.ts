import * as React from "react";
interface IColumnProps {
    is2?: boolean;
    is3?: boolean;
    is4?: boolean;
    is5?: boolean;
    is6?: boolean;
    is7?: boolean;
    is8?: boolean;
    is9?: boolean;
    is10?: boolean;
    is11?: boolean;
    isFourFifths?: boolean;
    isHalf?: boolean;
    isNarrow?: boolean;
    isNarrowDesktop?: boolean;
    isNarrowMobile?: boolean;
    isNarrowTablet?: boolean;
    isNarrowTouch?: boolean;
    isNarrowWidescreen?: boolean;
    isNarrowFullhd?: boolean;
    isOneFifth?: boolean;
    isOneQuarter?: boolean;
    isOneThird?: boolean;
    isThreeFifths?: boolean;
    isThreeQuarters?: boolean;
    isTwoFifths?: boolean;
    isTwoQuarters?: boolean;
    isTwoThirds?: boolean;
}
export default class Column extends React.Component<IColumnProps> {
    render(): JSX.Element;
}
export {};
