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
export declare function mainColorsPropsToClassenames(props: IMainColorsProps): {
    "is-danger": boolean | undefined;
    "is-info": boolean | undefined;
    "is-primary": boolean | undefined;
    "is-success": boolean | undefined;
    "is-warning": boolean | undefined;
};
export declare function sizePropsToClassenames(props: ISizeProps): {
    "is-large": boolean | undefined;
    "is-medium": boolean | undefined;
    "is-small": boolean | undefined;
};
export declare function textColorHelpersPropsToClassenames(props: ITextColorHelpersProps): {
    "has-text-black": boolean | undefined;
    "has-text-black-bis": boolean | undefined;
    "has-text-black-ter": boolean | undefined;
    "has-text-danger": boolean | undefined;
    "has-text-dark": boolean | undefined;
    "has-text-grey": boolean | undefined;
    "has-text-grey-dark": boolean | undefined;
    "has-text-grey-darker": boolean | undefined;
    "has-text-grey-light": boolean | undefined;
    "has-text-grey-lighter": boolean | undefined;
    "has-text-info": boolean | undefined;
    "has-text-light": boolean | undefined;
    "has-text-link": boolean | undefined;
    "has-text-primary": boolean | undefined;
    "has-text-success": boolean | undefined;
    "has-text-warning": boolean | undefined;
    "has-text-white": boolean | undefined;
    "has-text-white-bis": boolean | undefined;
    "has-text-white-ter": boolean | undefined;
};
