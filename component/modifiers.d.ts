export interface IAlignementHelpersProps {
    hasTextCentered?: boolean;
    hasTextJustified?: boolean;
    hasTextLeft?: boolean;
    hasTextRight?: boolean;
}
export interface IBackgroundColorHelpersProps {
    hasBackgroundBlack?: boolean;
    hasBackgroundBlackBis?: boolean;
    hasBackgroundBlackTer?: boolean;
    hasBackgroundDanger?: boolean;
    hasBackgroundDark?: boolean;
    hasBackgroundGrey?: boolean;
    hasBackgroundGreyDark?: boolean;
    hasBackgroundGreyDarker?: boolean;
    hasBackgroundGreyLight?: boolean;
    hasBackgroundGreyLighter?: boolean;
    hasBackgroundLight?: boolean;
    hasBackgroundLink?: boolean;
    hasBackgroundInfo?: boolean;
    hasBackgroundPrimary?: boolean;
    hasBackgroundSuccess?: boolean;
    hasBackgroundWarning?: boolean;
    hasBackgroundWhite?: boolean;
    hasBackgroundWhiteBis?: boolean;
    hasBackgroundWhiteTer?: boolean;
}
export interface IHelpersProps {
    isInvisible?: boolean;
    isMarginLess?: boolean;
    isPaddingLess?: boolean;
    isSrOnly?: boolean;
}
export interface IMainColorsProps {
    isDanger?: boolean;
    isInfo?: boolean;
    isLink?: boolean;
    isPrimary?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
}
export interface IShadeColorsProps {
    isBlack?: boolean;
    isDark?: boolean;
    isLight?: boolean;
    isWhite?: boolean;
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
export declare function alignementPropsToClassenames(props: IAlignementHelpersProps): {
    "has-text-centered": boolean | undefined;
    "has-text-justified": boolean | undefined;
    "has-text-left": boolean | undefined;
    "has-text-right": boolean | undefined;
};
export declare function backgroundColorHelpersPropsToClassenames(props: IBackgroundColorHelpersProps): {
    "has-background-black": boolean | undefined;
    "has-background-black-bis": boolean | undefined;
    "has-background-black-ter": boolean | undefined;
    "has-background-danger": boolean | undefined;
    "has-background-dark": boolean | undefined;
    "has-background-grey": boolean | undefined;
    "has-background-grey-dark": boolean | undefined;
    "has-background-grey-darker": boolean | undefined;
    "has-background-grey-light": boolean | undefined;
    "has-background-grey-lighter": boolean | undefined;
    "has-background-info": boolean | undefined;
    "has-background-light": boolean | undefined;
    "has-background-link": boolean | undefined;
    "has-background-primary": boolean | undefined;
    "has-background-success": boolean | undefined;
    "has-background-warning": boolean | undefined;
    "has-background-white": boolean | undefined;
    "has-background-white-bis": boolean | undefined;
    "has-background-white-ter": boolean | undefined;
};
export declare function helpersPropsToClassenames(props: IHelpersProps): {
    "is-marginless": boolean | undefined;
    "is-invisible": boolean | undefined;
    "is-paddingless": boolean | undefined;
    "is-sr-only": boolean | undefined;
};
export declare function mainColorsPropsToClassenames(props: IMainColorsProps): {
    "is-danger": boolean | undefined;
    "is-info": boolean | undefined;
    "is-link": boolean | undefined;
    "is-primary": boolean | undefined;
    "is-success": boolean | undefined;
    "is-warning": boolean | undefined;
};
export declare function shadeColorsPropsToClassenames(props: IShadeColorsProps): {
    "is-black": boolean | undefined;
    "is-dark": boolean | undefined;
    "is-light": boolean | undefined;
    "is-white": boolean | undefined;
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
