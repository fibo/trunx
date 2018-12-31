export interface IMainColorsProps {
    isDanger?: boolean;
    isInfo?: boolean;
    isPrimary?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
}
export interface ISizeProps {
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
}
export interface ITextColorHelpersProps {
    hasTextBlack?: boolean;
    hasTextBlackBis?: boolean;
    hasTextBlackTer?: boolean;
    hasTextDanger?: boolean;
    hasTextDark?: boolean;
    hasTextGrey?: boolean;
    hasTextGreyDark?: boolean;
    hasTextGreyDarker?: boolean;
    hasTextGreyLight?: boolean;
    hasTextGreyLighter?: boolean;
    hasTextLight?: boolean;
    hasTextLink?: boolean;
    hasTextInfo?: boolean;
    hasTextPrimary?: boolean;
    hasTextSuccess?: boolean;
    hasTextWarning?: boolean;
    hasTextWhite?: boolean;
    hasTextWhiteBis?: boolean;
    hasTextWhiteTer?: boolean;
}
export declare function mainColorsPropsToClassenames(props: any): {
    "is-danger": any;
    "is-info": any;
    "is-primary": any;
    "is-success": any;
    "is-warning": any;
};
export declare function sizePropsToClassenames(props: any): {
    "is-large": any;
    "is-medium": any;
    "is-small": any;
};
export declare function textColorHelpersPropsToClassenames(props: any): {
    "has-text-black": any;
    "has-text-black-bis": any;
    "has-text-black-ter": any;
    "has-text-danger": any;
    "has-text-dark": any;
    "has-text-grey": any;
    "has-text-grey-dark": any;
    "has-text-grey-darker": any;
    "has-text-grey-light": any;
    "has-text-grey-lighter": any;
    "has-text-info": any;
    "has-text-light": any;
    "has-text-link": any;
    "has-text-primary": any;
    "has-text-success": any;
    "has-text-warning": any;
    "has-text-white": any;
    "has-text-white-bis": any;
    "has-text-white-ter": any;
};
