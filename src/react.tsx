import {
  FC,
  JSX,
  ReactNode,
  // HTML related
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  ProgressHTMLAttributes,
  SelectHTMLAttributes,
  TableHTMLAttributes,
  TextareaHTMLAttributes
} from "react"
import { ClassnamesArg, classnames as cls } from "./classnames.js"
import { Bulma } from "./Bulma.js"

// Improves readability of component prop types.
//
// - Do not prettify props related to HTML attributes
// - Keep BulmaProp as the last one
//
// For example:
//
//     export type CompomentProps = HTMLAttributes<HTMLDivElement> & Prettify<
//       ColorProp &
//       SizeProp &
//       BulmaProp
//     >
////
type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// Colors
//////////////////////////////////////////////////////////////////////

export type MainColor =
  | "danger"
  | "link"
  | "info"
  | "primary"
  | "success"
  | "warning"

export type ShadeColor =
  | "black"
  | "dark"
  | "light"
  | "white"

export type OtherColor = "text" | "ghost"

export type Color = MainColor | ShadeColor | OtherColor

export type ColorVariant = "light" | "dark"

// Other types
//////////////////////////////////////////////////////////////////////

export type Alignment = "left" | "center" | "right"

export type Size =
  | "small"
  | "medium"
  | "large"
  | "normal"

export type PluralSize = Prettify<
  Extract<Size, "small" | "medium" | "large">
>

export type ImageDimension =
  | "16x16"
  | "24x24"
  | "32x32"
  | "48x48"
  | "64x64"
  | "96x96"
  | "128x128"

// Common props
//////////////////////////////////////////////////////////////////////

// Trunx mother 🤩,
// see https://en.wikipedia.org/wiki/Bulma
export type BulmaProp = { bulma?: ClassnamesArg<Bulma> }

export type AlignProp<A extends Alignment> = Partial<{ align: A }>

export type ColorProp<C extends Color = Color> = Partial<{ color: C }>

export type ColorVariantProp<V extends ColorVariant = ColorVariant> = Partial<{ variant: V }>

export type IsActiveProp = Partial<{ isActive: boolean }>

export type IsLoadingProp = Partial<{ isLoading: boolean }>

export type IsSkeletonProp = Partial<{ isSkeleton: boolean }>

export type SizeProp<
  S extends Size = Extract<Size, "small" | "medium" | "large">
> = Partial<{ size: S }>

export type TagProp<T extends keyof JSX.IntrinsicElements> = Partial<{ tag: T }>

export type PluralSizeProp = SizeProp<PluralSize>

// Helpers
//////////////////////////////////////////////////////////////////////

const alignment = (
  arg: Alignment | undefined
): Extract<Bulma, "is-centered" | "is-right" | "is-left"> | undefined =>
  arg ? (arg == "center" ? "is-centered" : `is-${arg}`) : undefined

const are = (
  arg: PluralSize | undefined
): Extract<Bulma, `are-${typeof arg}`> | undefined =>
  arg ? `are-${arg}` : undefined

const is = (
  arg: Color | ColorVariant | ImageDimension | Size | undefined
): Extract<Bulma, `is-${typeof arg}`> | undefined =>
  arg ? `is-${arg}` : undefined

const load = (
  arg: boolean | undefined
): Extract<Bulma, "is-loading"> | undefined =>
  arg ? "is-loading" : undefined

const skel = (
  arg: boolean | undefined
): Extract<Bulma, "is-skeleton"> | undefined =>
  arg ? "is-skeleton" : undefined

// HTML tag components
//////////////////////////////////////////////////////////////////////

/**
 * Renders anchor tag, has `bulma` prop.
 *
 * @example
 * <A href="https://example.com" bulma="is-underlined">Website</A>
 */
export const A: FC<AProps> = ({ bulma, className, children, ...props }) => (
  <a className={cls<string>(className, bulma)} {...props}>
    {children}
  </a>
)
export type AProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<BulmaProp>

/**
 * Renders div tag, has `bulma` prop.
 *
 * @example Block.
 * <Div bulma="block" />
 *
 * @example Skeleton block.
 * <Div bulma={{ "skeleton-block": true }}>Lorem ipsum</Div>
 */
export const Div: FC<DivProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, bulma)} {...props}>
    {children}
  </div>
)
export type DivProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/**
 * Renders p tag, has `bulma` prop.
 *
 * @example
 * <P bulma="has-text-grey">Lorem ipsum...</P>
 */
export const P: FC<PProps> = ({ bulma, className, children, ...props }) => (
  <p className={cls<string>(className, bulma)} {...props}>
    {children}
  </p>
)
export type PProps = HTMLAttributes<HTMLParagraphElement> & Prettify<BulmaProp>

/**
 * Renders span tag, has `bulma` prop.
 *
 * @example
 * <Span bulma={["has-text-grey", "is-capitalized"]}>hello</Span>
 */
export const Span: FC<SpanProps> = ({ bulma, className, children, ...props }) => (
  <span className={cls<string>(className, bulma)} {...props}>
    {children}
  </span>
)
export type SpanProps = HTMLAttributes<HTMLSpanElement> & Prettify<BulmaProp>

/**
 * Renders ul tag, has `bulma` prop.
 *
 * @example
 * <Menu>
 *   <Ul bulma="menu-list">
 *     <li><a>Dashboard</a></li>
 *     <li><a>Customers</a></li>
 *   </Ul>
 * </Menu>
 */
export const Ul: FC<UlProps> = ({ bulma, className, children, ...props }) => (
  <ul className={cls<string>(className, bulma)} {...props}>
    {children}
  </ul>
)
export type UlProps = HTMLAttributes<HTMLUListElement> & Prettify<BulmaProp>

// Bulma related components
//////////////////////////////////////////////////////////////////////

/**
 * A breadcrumb component to improve navigation experience.
 *
 * @example
 * <Breadcrumb align="center" aria-label="breadcrumbs">
 *   <BreadcrumbItem href="https://bulma.io/">Bulma</BreadcrumbItem>
 *   <BreadcrumbItem isActive>Trunx</BreadcrumbItem>
 * </Breadcrumb>
 *
 * @example Alternative separator and size.
 * <Breadcrumb separator="dot" size="small">
 *   <BreadcrumbItem >foo</BreadcrumbItem>
 * </Breadcrumb>
 *
 * @see {@link https://bulma.io/documentation/components/breadcrumb/}
 */
export const Breadcrumb: FC<BreadcrumbProps> = ({
  align,
  separator,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <nav
    className={cls<string>(
      className,
      "breadcrumb",
      alignment(align),
      separator ? `has-${separator}-separator` : undefined,
      is(size),
      bulma
    )}
    {...props}
  >
    {children}
  </nav>
)

export type BreadcrumbProps = HTMLAttributes<HTMLElement> & Prettify<
  AlignProp<"center" | "right"> &
  SizeProp &
  Partial<{ separator: "arrow" | "bullet" | "dot" | "succeeds" }> &
  BulmaProp
>

/** @see {@link Breadcrumb} */
export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  isActive,
  className,
  children,
  ...props
}) => (
  <li className={cls<string>(className, { "is-active": isActive })}>
    <a {...props}>{children}</a>
  </li>
)
export type BreadcrumbItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<IsActiveProp>

/**
 * The classic button, in different colors, sizes, and states.
 *
 * @example A primary button.
 * <Button color="primary" variant="light">Save</Button>
 *
 * @example A loading button.
 * <Button isLoading>Login</Button>
 *
 * @see {@link https://bulma.io/documentation/elements/button/}
 */
export const Button: FC<ButtonProps> = ({
  isLoading,
  isFullwidth,
  isOutlined,
  isSkeleton,
  color,
  isInverted,
  isRounded,
  size,
  variant,
  bulma,
  className,
  children,
  ...props
}) => (
  <button
    className={cls<string>(
      className,
      "button",
      is(color),
      is(variant),
      is(size),
      {
        "is-fullwidth": isFullwidth,
        "is-inverted": isInverted,
        "is-outlined": isOutlined,
        "is-rounded": isRounded
      },
      load(isLoading),
      skel(isSkeleton),
      bulma
    )}
    {...props}
  >
    {children}
  </button>
)
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> & Prettify<
  ColorProp &
  ColorVariantProp &
  IsLoadingProp &
  IsSkeletonProp &
  SizeProp<Size> &
  Partial<{
    isInverted: boolean
    isFullwidth: boolean
    isOutlined: boolean
    isResponsive: boolean
    isRounded: boolean
  }> &
  BulmaProp
>

/**
 * Can create a list of buttons.
 *
 * @example Small buttons.
 * <Buttons size="small">
 *   <Button color="success">Save</Button>
 *   <Button>Cancel</Button>
 * </Buttons>
 */
export const Buttons: FC<ButtonsProps> = ({
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(className, "buttons", are(size), bulma)}
    {...props}
  >
    {children}
  </div>
)
export type ButtonsProps = HTMLAttributes<HTMLDivElement> & Prettify<
  PluralSizeProp &
  BulmaProp
>

/**
 * Grid cell.
 *
 * Nope! 😂 Not that {@link https://en.wikipedia.org/wiki/Cell_(Dragon_Ball) | Cell}
 *
 * @example
 * <FixedGrid bulma="has-4-cols">
 *   <Cell>cell 1</Cell>
 *   <Cell bulma="is-col-start-3">cell 2</Cell>
 *   <Cell>cell 3</Cell>
 *   <Cell>cell 4</Cell>
 *   <Cell>cell 5</Cell>
 *   <Cell>cell 6</Cell>
 * </FixedGrid>
 *
 * @see {@link https://bulma.io/documentation/grid/grid-cells/}
 */
export const Cell: FC<CellProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "cell", bulma)} {...props}>
    {children}
  </div>
)
export type CellProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/**
 * An all-around flexible and composable component.
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardHeaderTitle>Title</CardHeaderTitle>
 *     <CardHeaderIcon>
 *       <Icon>
 *         <i className="fas fa-angle-down" aria-hidden="true" />
 *       </Icon>
 *     </CardHeaderIcon>
 *   </CardHeader>
 *   <CardContent>
 *     Lorem ipsum...
 *   </CardContent>
 *   <CardFooter>
 *     <A bulma="card-footer-item">Save</A>
 *     <A bulma="card-footer-item">Delete</A>
 *   </CardFooter>
 * </Card>
 *
 * @see {@link https://bulma.io/documentation/components/card/}
 */
export const Card: FC<CardProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "card", bulma)} {...props}>
    {children}
  </div>
)
export type CardProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/** @see {@link Card} */
export const CardContent: FC<CardContentProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "card-content", bulma)} {...props}>
    {children}
  </div>
)
export type CardContentProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/** @see {@link Card} */
export const CardFooter: FC<CardFooterProps> = ({ bulma, className, children, ...props }) => (
  <footer className={cls<string>(className, "card-footer", bulma)} {...props}>
    {children}
  </footer>
)
export type CardFooterProps = HTMLAttributes<HTMLElement> & Prettify<BulmaProp>

/** @see {@link Card} */
export const CardHeader: FC<CardHeaderProps> = ({ bulma, className, children, ...props }) => (
  <header className={cls<string>(className, "card-header", bulma)} {...props}>
    {children}
  </header>
)
export type CardHeaderProps = HTMLAttributes<HTMLElement> & Prettify<BulmaProp>

/** @see {@link Card} */
export const CardHeaderIcon: FC<CardHeaderIconProps> = ({ bulma, className, children, ...props }) => (
  <button className={cls<string>(className, "card-header-icon", bulma)} {...props}>
    {children}
  </button>
)
export type CardHeaderIconProps = HTMLAttributes<HTMLButtonElement> & Prettify<BulmaProp>

/** @see {@link Card} */
export const CardHeaderTitle: FC<CardHeaderTitleProps> = ({ bulma, className, children, ...props }) => (
  <p className={cls<string>(className, "card-header-title", bulma)} {...props}>
    {children}
  </p>
)
export type CardHeaderTitleProps = HTMLAttributes<HTMLParagraphElement> & Prettify<BulmaProp>

/**
 * The 2-state checkbox in its native format.
 *
 * @example
 * <Checkbox disabled>
 *   <Span bulma="ml-2">Save my preferences</Span>
 * </Checkbox>
 *
 * @see {@link https://bulma.io/documentation/form/checkbox/}
 */
export const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => (
  <label className="checkbox">
    <input type="checkbox" {...props} />
    {children}
  </label>
)
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

/** @see {@link Columns} */
export const Column: FC<ColumnProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "column", bulma)} {...props}>
    {children}
  </div>
)
export type ColumnProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/**
 * The power of Flexbox in a simple interface.
 *
 * @see {@link https://bulma.io/documentation/columns/}
 */
export const Columns: FC<ColumnsProps> = ({
  isDesktop,
  isGapless,
  isMobile,
  isMultiline,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "columns",
      {
        "is-gapless": isGapless,
        "is-desktop": isDesktop,
        "is-mobile": isMobile,
        "is-multiline": isMultiline
      },
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type ColumnsProps = HTMLAttributes<HTMLDivElement> & Prettify<
  Partial<{
    isGapless: boolean
    isDesktop: boolean
    isMobile: boolean
    isMultiline: boolean
  }> &
  BulmaProp
>

/**
 * A simple container to center your content horizontally.
 *
 * @example
 * <Container isFluid>
 *   <Notification color="primary">
 *     This container is <strong>fluid</strong>
 *   </Notification>
 * </Container>
 *
 * @see {@link https://bulma.io/documentation/layout/container/}
 */
export const Container: FC<ContainerProps> = ({
  isFluid,
  isFullhd,
  isMax,
  isWidescreen,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "container",
      {
        "is-fluid": isFluid,
        "is-fullhd": isFullhd,
        "is-max-desktop": isMax == "desktop",
        "is-max-widescreen": isMax == "widescreen",
        "is-widescreen": isWidescreen
      },
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type ContainerProps = HTMLAttributes<HTMLDivElement> & Prettify<
  Partial<{
    isMax: "desktop" | "widescreen"
    isWidescreen: boolean
    isFluid: boolean
    isFullhd: boolean
  }> &
  BulmaProp
>

/**
 * A container for text.
 *
 * @example
 * <Content size="small">
 *   <h1>Hello World</h1>
 *   <p>Lorem ipsum...</p>
 * </Content>
 *
 * @see {@link https://bulma.io/documentation/elements/content/}
 */
export const Content: FC<ContentProps> = ({
  size,
  isSkeleton,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "content",
      is(size),
      skel(isSkeleton),
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type ContentProps = HTMLAttributes<HTMLDivElement> & Prettify<
  IsSkeletonProp &
  SizeProp &
  BulmaProp
>

/**
 * A block container meant to enhance single form controls.
 *
 * @see {@link https://bulma.io/documentation/form/general/#form-control}
 */
export const Control: FC<ControlProps> = ({
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "control",
      {
        "is-expanded": isExpanded,
        "has-icons-left": hasIconsLeft,
        "has-icons-right": hasIconsRight
      },
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type ControlProps = HTMLAttributes<HTMLDivElement> & Prettify<
  Partial<{
    isExpanded: boolean
    hasIconsLeft: boolean
    hasIconsRight: boolean
  }> &
  BulmaProp
>

/**
 * A versatile delete cross.
 *
 * @see {@link https://bulma.io/documentation/elements/delete/}
 */
export const Delete: FC<DeleteProps> = ({ size, className, children, ...props }) => (
  <button className={cls<string>(className, "delete", is(size))} {...props} />
)
export type DeleteProps = ButtonHTMLAttributes<HTMLButtonElement> & Prettify<SizeProp>

/**
 * An interactive dropdown menu for discoverable content.
 *
 * @see {@link https://bulma.io/documentation/components/dropdown/}
 *
 * @example
 * <Dropdown isActive>
 *   <DropdownTrigger aria-haspopup="true" aria-controls="my-dropdown-menu">
 *     <span>Dropdown button</span>
 *     <Icon size="small">
 *       <i className="fas fa-angle-down" aria-hidden="true" />
 *     </Icon>
 *   </DropdownTrigger>
 *   <DropdownMenu id="my-dropdown-menu" role="menu">
 *      <DropdownItem href="#">Dropdown item</DropdownItem>
 *      <DropdownItem href="#">Other Dropdown item</DropdownItem>
 *      <DropdownItem isActive href="#">Active Dropdown item</DropdownItem>
 *      <DropdownDivider />
 *      <DropdownItem href="#">With a divider</DropdownItem>
 *   </DropdownMenu>
 * </Dropdown>
 */
export const Dropdown: FC<DropdownProps> = ({
  isActive,
  isHoverable,
  isRight,
  isUp,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "dropdown",
      {
        "is-active": isActive,
        "is-hoverable": isHoverable,
        "is-right": isRight,
        "is-up": isUp
      },
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type DropdownProps = HTMLAttributes<HTMLDivElement> & Prettify<
  Partial<{
    isActive: boolean
    isHoverable: boolean
    isRight: boolean
    isUp: boolean
  }> &
  BulmaProp
>

/** Renders hr tag with dropdown-divider class. */
export const DropdownDivider: FC<DropdownDividerProps> = ({ className, ...props }) => (
  <hr className={cls<string>(className, "dropdown-divider")} {...props} />
)
export type DropdownDividerProps = HTMLAttributes<HTMLHRElement>

/**
 * It is used inside a dropdown menu as an anchor link.
 *
 * @example A common dropdown item is an anchor link.
 * <DropdownItem isActive href="#">Dropdown item</DropdownItem>
 *
 * @example Use a div to insert almost any type of content.
 * <Div bulma="dropdown-item">
 *   <p>You can insert content here.</p>
 * </Div>
 */
export const DropdownItem: FC<DropdownItemProps> = ({
  isActive,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={cls<string>(
      className,
      "dropdown-item",
      { "is-active": isActive },
      bulma
    )}
    {...props}
  >
    {children}
  </a>
)
export type DropdownItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<
  Partial<{ isActive: boolean }> &
  BulmaProp
>

/** @see {@link Dropdown} */
export const DropdownMenu: FC<DropdownMenuProps> = ({ className, children, ...props }) => (
  <div className={cls<string>(className, "dropdown-menu")} {...props}>
    {children}
  </div>
)
export type DropdownMenuProps = HTMLAttributes<HTMLDivElement>

/** @see {@link Dropdown} */
export const DropdownTrigger: FC<DropdownTriggerProps> = ({ className, children, ...props }) => (
  <div className="dropdown-trigger">
    <button className={cls(className, "button")} {...props}>
      {children}
    </button>
  </div>
)
export type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Form field.
 *
 * @see {@link https://bulma.io/documentation/form/general/#form-field}
 *
 * @example
 * <Field>
 *   <Label>Name</Label>
 *   <Control>
 *     <Input placeholder="e.g Alex Smith" />
 *   </Control>
 * </Field>
 */
export const Field: FC<FieldProps> = ({
  hasAddons,
  isGrouped,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "field",
      {
        "has-addons": hasAddons,
        "has-addons-centered": hasAddons == "centered",
        "has-addons-right": hasAddons == "right",
        "is-grouped": isGrouped,
        "is-grouped-centered": isGrouped == "centered",
        "is-grouped-multiline": isGrouped == "multiline",
        "is-grouped-right": isGrouped == "right"
      },
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type FieldProps = HTMLAttributes<HTMLDivElement> & Prettify<
  Partial<{
    hasAddons: boolean | "centered" | "right"
    hasAddonsCentered: boolean
    hasAddonsRight: boolean
    isGrouped: boolean | "centered" | "multiline" | "right"
    isHorizontal: boolean
  }> &
  BulmaProp
>

/** @see {@link FieldHorizontal} */
export const FieldBody: FC<FieldBodyProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "field-body", bulma)} {...props}>
    {children}
  </div>
)
export type FieldBodyProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/**
 * A horizontal form control.
 *
 * @see {@link https://bulma.io/documentation/form/general/#horizontal-form}
 *
 * @example
 * <FieldHorizontal>
 *   <FieldLabel size="normal">
 *     <Label>From</Label>
 *   </FieldLabel>
 *   <FieldBody>
 *     <Field>
 *       <Control>
 *         <Input type="text" placeholder="Name" />
 *       </Control>
 *     </Field>
 *     <Field>
 *       <Control>
 *         <Input type="email" placeholder="Email" />
 *       </Control>
 *     </Field>
 *   </FieldBody>
 * </FieldHorizontal>
 */
export const FieldHorizontal: FC<FieldHorizontalProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "field", "is-horizontal", bulma)} {...props}>
    {children}
  </div>
)
export type FieldHorizontalProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/** @see {@link FieldHorizontal} */
export const FieldLabel: FC<FieldLabelProps> = ({
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div className={cls<string>(className, "field-label", is(size), bulma)} {...props}>
    {children}
  </div>
)
export type FieldLabelProps = HTMLAttributes<HTMLDivElement> & Prettify<
  SizeProp<Size> &
  BulmaProp
>

/**
 * A custom file upload input.
 *
 * @example
 * <FileUpload
 *   cta={<>
 *     <FileIcon><i className="fas fa-upload" /></FileIcon>
 *     <FileLabel>Choose a file...</FileLabel>
 *   </>}
 *   // Any prop accepted by input type="file"
 *   accept="image/png, image/jpeg"
 *   name="avatar"
 * />
 *
 * @see {@link https://bulma.io/documentation/form/file/}
 */
export const FileUpload: FC<FileUploadProps> = ({
  align,
  color,
  cta,
  hasName,
  isBoxed,
  isFullwidth,
  size,
  bulma,
  className,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "file",
      is(color),
      is(size),
      alignment(align),
      {
        "has-name": hasName,
        "is-boxed": isBoxed,
        "is-fullwidth": isFullwidth
      },
      bulma
    )}
  >
    <label className="file-label">
      <input type="file" {...props} />
      {cta ? <span className="file-cta">{cta}</span> : null}
      {hasName ? <span className="file-name">{hasName}</span> : null}
    </label>
  </div>
)
export type FileUploadProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & Prettify<
  AlignProp<"center" | "right"> &
  ColorProp &
  SizeProp &
  Partial<{
    cta: ReactNode
    hasName: ReactNode
    isBoxed: boolean
    isFullwidth: boolean
  }> &
  BulmaProp
>

/** @see {@link FileUpload} */
export const FileIcon: FC<FileIconProps> = ({ bulma, className, children, ...props }) => (
  <span className={cls<string>(className, "file-icon", bulma)} {...props}>
    {children}
  </span>
)
export type FileIconProps = HTMLAttributes<HTMLSpanElement> & Prettify<BulmaProp>

/** @see {@link FileUpload} */
export const FileLabel: FC<FileLabelProps> = ({ bulma, className, children, ...props }) => (
  <span className={cls<string>(className, "file-label", bulma)} {...props}>
    {children}
  </span>
)
export type FileLabelProps = HTMLAttributes<HTMLSpanElement> & Prettify<BulmaProp>

/**
 * A customizable 2D fixed grid.
 *
 * @example
 * <FixedGrid hasAutoCount>
 *   <Cell>cell 1</Cell>
 *   <Cell>cell 2</Cell>
 * </FixedGrid>
 *
 * @see {@link https://bulma.io/documentation/grid/fixed-grid/}
 */
export const FixedGrid: FC<FixedGridProps> = ({
  hasAutoCount,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "fixed-grid",
      { "has-auto-count": hasAutoCount },
      bulma
    )}
    {...props}
  >
    <div className="grid">{children}</div>
  </div>
)
export type FixedGridProps = HTMLAttributes<HTMLDivElement> & Prettify<
  Partial<{ hasAutoCount: boolean }> &
  BulmaProp
>

/** A simple responsive footer.
 *
 * @example
 * <Footer>
 *   <Content bulma="has-text-centered">
 *     <p>
 *       <strong>trunx</strong> by <a href="https://fibo.github.io">fibo</a>.
 *       The source code is licensed
 *       <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
 *     </p>
 *   </Content>
 * </Footer>
 *
 * @see {@link https://bulma.io/documentation/layout/footer/}
 */
export const Footer: FC<FooterProps> = ({ bulma, className, children, ...props }) => (
  <footer className={cls<string>(className, "footer", bulma)} {...props}>
    {children}
  </footer>
)
export type FooterProps = HTMLAttributes<HTMLElement> & Prettify<BulmaProp>

/**
 * A smart 2D grid with flexible columns.
 *
 * @example
 * <Grid bulma={["is-col-min-4", "is-gap-2"]}>
 *   <Cell>cell 1</Cell>
 *   <Cell>cell 2</Cell>
 * </Grid>
 *
 * @see {@link https://bulma.io/documentation/grid/smart-grid/}
 */
export const Grid: FC<GridProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "grid", bulma)} {...props}>
    {children}
  </div>
)
export type GridProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

export const Help: FC<HelpProps> = ({
  color,
  bulma,
  className,
  children,
  ...props
}) => (
  <p className={cls<string>(className, "help", is(color), bulma)} {...props}>
    {children}
  </p>
)
export type HelpProps = HTMLAttributes<HTMLParagraphElement> & Prettify<
  ColorProp &
  BulmaProp
>

/**
 * An imposing hero banner to showcase something.
 *
 * @example A small hero.
 * <Hero size="small">
 *   <HeroBody>
 *     <Title>Title</Title>
 *     <Subtitle>Subtitle</Subtitle>
 *   </HeroBody>
 * </Hero>
 *
 * @example Half height hero.
 * <Hero color="success" isHalfheight>
 *   <HeroBody>
 *     <Title>Title</Title>
 *     <Subtitle>Subtitle</Subtitle>
 *   </HeroBody>
 * </Hero>
 *
 * @see {@link https://bulma.io/documentation/layout/hero/}
 */
export const Hero: FC<HeroProps> = ({
  color,
  size,
  isHalfheight,
  isFullheight,
  isFullheightWithNavbar,
  bulma,
  className,
  children,
  ...props
}) => (
  <section
    className={cls<string>(
      className,
      "hero",
      is(color),
      is(size),
      {
        "is-halfheight": isHalfheight,
        "is-fullheight": isFullheight,
        "is-fullheight-with-navbar": isFullheightWithNavbar
      },
      bulma
    )}
    {...props}
  >
    {children}
  </section>
)
export type HeroProps = HTMLAttributes<HTMLElement> & Prettify<
  ColorProp &
  SizeProp &
  Partial<{
    isHalfheight: boolean
    isFullheight: boolean
    isFullheightWithNavbar: boolean
  }> &
  BulmaProp
>

/** @see {@link Hero} */
export const HeroBody: FC<HeroBodyProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "hero-body", bulma)} {...props}>
    {children}
  </div>
)
export type HeroBodyProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/** @see {@link Hero} */
export const HeroFoot: FC<HeroFootProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "hero-foot", bulma)} {...props}>
    {children}
  </div>
)
export type HeroFootProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/** @see {@link Hero} */
export const HeroHead: FC<HeroHeadProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "hero-head", bulma)} {...props}>
    {children}
  </div>
)
export type HeroHeadProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/**
 * A container for any type of icon.
 *
 * @example
 * <Icon>
 *   <i className="fas fa-home" />
 * </Icon>
 *
 * @see {@link https://bulma.io/documentation/elements/icon/}.
 */
export const Icon: FC<IconProps> = ({
  align,
  isSkeleton,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <span
    className={cls<string>(
      className,
      "icon",
      alignment(align),
      is(size),
      skel(isSkeleton),
      bulma
    )}
    {...props}
  >
    {children}
  </span>
)
export type IconProps = HTMLAttributes<HTMLSpanElement> & Prettify<
  AlignProp<"left" | "right"> &
  IsSkeletonProp &
  SizeProp &
  BulmaProp
>

/**
 * Combine an icon with text.
 *
 * @example
 * <IconText>
 *   <Icon bulma="has-text-primary">
 *     <i className="fas fa-home" />
 *   </Icon>
 *   <span>Home</span>
 * </IconText>
 *
 * @see {@link https://bulma.io/documentation/elements/icon/#icon-text}
 */
export const IconText: FC<IconTextProps> = ({ bulma, className, children, ...props }) => (
  <span className={cls<string>(className, "icon-text", bulma)} {...props}>
    {children}
  </span>
)
export type IconTextProps = HTMLAttributes<HTMLSpanElement> & Prettify<
  SizeProp &
  BulmaProp
>

/**
 * A container for responsive images.
 *
 * @example Fixed square images.
 * <Image dimension="128x128">
 *   <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
 * </Image>
 *
 * @example Rounded images.
 * <Image dimension="128x128">
 *   <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/256x256.png" />
 * </Image>
 *
 * @example Arbitrary ratios with any element.
 * <Image ratio="16by9">
 *   <iframe
 *     className="has-ratio"
 *     width="640"
 *     height="360"
 *     src="https://www.youtube.com/embed/YE7VzlLtp-4"
 *     allowFullScreen
 *   />
 * </Image>
 *
 * @see {@link https://bulma.io/documentation/elements/image/}
 */
export const Image: FC<ImageProps> = ({
  dimension,
  isSkeleton,
  isSquare,
  ratio,
  bulma,
  className,
  children,
  ...props
}) => (
  <figure
    className={cls<string>(
      className,
      "image",
      is(dimension),
      ratio ? `is-${ratio}` : undefined,
      { "is-square": isSquare },
      skel(isSkeleton),
      bulma
    )}
    {...props}
  >
    {children}
  </figure>
)
export type ImageProps = HTMLAttributes<HTMLElement> & Prettify<
  IsSkeletonProp &
  Partial<{
    isSquare: boolean
    dimension: ImageDimension
    ratio:
      | "1by1"
      | "5by4"
      | "4by3"
      | "3by2"
      | "5by3"
      | "16by9"
      | "2by1"
      | "3by1"
      | "4by5"
      | "3by4"
      | "2by3"
      | "3by5"
      | "9by16"
      | "1by2"
      | "1by3"
  }> &
  BulmaProp
>

export const Input: FC<InputProps> = ({
  bulma,
  className,
  color,
  isSkeleton,
  size,
  ...props
}) => (
  <input
    className={cls<string>(
      className,
      "input",
      is(color),
      is(size),
      skel(isSkeleton),
      bulma
    )}
    {...props}
  />
)
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & Prettify<
  Partial<{
    // Checkbox handles type checkbox
    // FileUpload handles type file
    // Radio handles type radio
    type: Exclude<InputHTMLAttributes<HTMLInputElement>["type"], "checkbox" | "file" | "radio">
  }> &
  ColorProp &
  IsSkeletonProp &
  SizeProp &
  BulmaProp
>

/** Renders label tag with label class. */
export const Label: FC<LabelProps> = ({ bulma, className, children, ...props }) => (
  <label className={cls<string>(className, "label", bulma)} {...props}>
    {children}
  </label>
)
export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & Prettify<BulmaProp>

/**
 * The famous media object prevalent in social media interfaces.
 *
 * @example
 * <Media>
 *   <MediaLeft dimension="64x64">
 *     <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
 *   </MediaLeft>
 *   <MediaContent>
 *     Content
 *   </MediaContent>
 *   <MediaRight>
 *     <Delete />
 *   </MediaRight>
 * </Media>
 *
 * @see {@link https://bulma.io/documentation/layout/media-object/}
 */
export const Media: FC<MediaProps> = ({ bulma, className, children, ...props }) => (
  <article className={cls<string>(className, "media", bulma)} {...props}>
    {children}
  </article>
)
export type MediaProps = HTMLAttributes<HTMLElement> & Prettify<BulmaProp>

/** @see {@link Media} */
export const MediaContent: FC<MediaContentProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "media-content", bulma)} {...props}>
    {children}
  </div>
)
export type MediaContentProps = HTMLAttributes<HTMLElement> & Prettify<BulmaProp>

/** @see {@link Media} */
export const MediaLeft: FC<MediaLeftProps> = ({ dimension, bulma, className, children, ...props }) => (
  <figure className={cls<string>(className, "media-left", bulma)} {...props}>
    <p className={cls<string>("image", is(dimension))}>{children}</p>
  </figure>
)
export type MediaLeftProps = HTMLAttributes<HTMLElement> & Prettify<
  { dimension: ImageDimension } &
  BulmaProp
>

/** @see {@link Media} */
export const MediaRight: FC<MediaRightProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "media-right", bulma)} {...props}>
    {children}
  </div>
)
export type MediaRightProps = HTMLAttributes<HTMLElement> & Prettify<BulmaProp>

/**
 * A simple menu, for any type of vertical navigation.
 *
 * Renders aside tag with menu class.
 *
 * @see {@link https://bulma.io/documentation/components/menu/}
 */
export const Menu: FC<MenuProps> = ({ bulma, className, children, ...props }) => (
  <aside className={cls<string>(className, "menu", bulma)} {...props}>
    {children}
  </aside>
)
export type MenuProps = HTMLAttributes<HTMLElement> & Prettify<BulmaProp>

/** Renders p tag with menu-label class. */
export const MenuLabel: FC<MenuLabelProps> = ({ bulma, className, children, ...props }) => (
  <p className={cls<string>(className, "menu-label", bulma)} {...props}>
    {children}
  </p>
)
export type MenuLabelProps = HTMLAttributes<HTMLParagraphElement> & Prettify<BulmaProp>

/** Renders ul tag with menu-list class. */
export const MenuList: FC<MenuListProps> = ({ bulma, className, children, ...props }) => (
  <ul className={cls<string>(className, "menu-list", bulma)} {...props}>
    {children}
  </ul>
)
export type MenuListProps = HTMLAttributes<HTMLUListElement> & Prettify<BulmaProp>

/**
 * Colored message blocks, to emphasize part of your page.
 *
 * @example
 * <Message color="danger" size="large">Lorem ipsum...</Message>
 *
 * @example Optional header can hold a title and a Delete component.
 * <Message color="dark"
 *   header={
 *     <>
 *       <p>Header</p>
 *       <Delete />
 *     </>
 *   }
 * >Lorem ipsum...</Message>
 *
 * @see {@link https://bulma.io/documentation/components/message/}
 */
export const Message: FC<MessageProps> = ({
  color,
  size,
  header,
  bulma,
  className,
  children,
  ...props
}) => (
  <article className={cls<string>(className, "message", is(color), is(size), bulma)} {...props}>
    {header ? <div className="message-header">{header}</div> : null}
    <div className="message-body">{children}</div>
  </article>
)
export type MessageProps = Omit<HTMLAttributes<HTMLElement>, "color"> & Prettify<
  ColorProp &
  SizeProp &
  Partial<{ header: ReactNode }> &
  BulmaProp
>

/**
 * A classic modal overlay, in which you can include any content you want.
 *
 * Renders div tag with modal class.
 *
 * @example
 * <Modal>
 *   <ModalBackground />
 *   <ModalContent>
 *     Modal content here
 *   </ModalContent>
 *   <ModalClose />
 * </Modal>
 *
 * @see {@link https://bulma.io/documentation/components/modal/}
 */
export const Modal: FC<ModalProps> = ({
  isActive,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "modal",
      is(size),
      { "is-active": isActive },
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type ModalProps = HTMLAttributes<HTMLDivElement> & Prettify<
  IsActiveProp &
  SizeProp &
  Partial<{ noBackground: boolean }> &
  BulmaProp
>

/** @see {@link Modal} */
export const ModalBackground: FC<ModalBackgroundProps> = ({ children, ...props }) => (
  <div className="modal-background" {...props}>
    {children}
  </div>
)
export type ModalBackgroundProps = HTMLAttributes<HTMLDivElement>

/**
 * A modal with a head, a body and a foot.
 *
 * Renders div tag with modal-card class.
 *
 * @example
 * <ModalCard
 *   head="Modal title"
 *   foot={<Buttons><Button>Ok</Button></Buttons>}
 * >
 *   Content ...
 * </ModalCard>
 *
 * @see {@link https://bulma.io/documentation/components/modal/#modal-card}
 */
export const ModalCard: FC<ModalCardProps> = ({ head, foot, className, children, ...props }) => (
  <div className={cls<string>(className, "modal-card")} {...props}>
    <div className="modal-card-head">{head}</div>
    {children}
    <div className="modal-card-foot"> {foot} </div>
  </div>
)
export type ModalCardProps = HTMLAttributes<HTMLDivElement> & {
  head: ReactNode
  foot: ReactNode
}

/** Renders button tag with modal-close class. */
export const ModalClose: FC<ModalCloseProps> = ({ size, className, ...props }) => (
  <button
    className={cls<string>(className, "modal-close", is(size))}
    {...props}
  />
)
export type ModalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & Prettify<
  SizeProp<"large">
>

/** Renders div tag with modal-content class. */
export const ModalContent: FC<ModalContentProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "modal-content", bulma)} {...props}>
    {children}
  </div>
)
export type ModalContentProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/**
 * A responsive horizontal navbar that can support images, links, buttons, and dropdowns.
 *
 * Renders nav tag with navbar class.
 *
 * @see {@link https://bulma.io/documentation/components/navbar/}
 */
export const Navbar: FC<NavbarProps> = ({ color, bulma, className, children, ...props }) => (
  <nav className={cls<string>(className, "navbar", is(color), bulma)} {...props}>
    {children}
  </nav>
)
export type NavbarProps = Omit<HTMLAttributes<HTMLElement>, "color"> & Prettify<
  ColorProp<MainColor | ShadeColor> &
  BulmaProp
>

/**
 * The NavbarBrand is the left side of the navbar.
 *
 * Renders div tag with navbar-brand class.
 *
 * @see {@link https://bulma.io/documentation/components/navbar/#navbar-brand}
 */
export const NavbarBrand: FC<NavbarBrandProps> = ({ bulma, className, children, ...props }) => (
  <div className={cls<string>(className, "navbar-brand", bulma)} {...props}>
    {children}
  </div>
)
export type NavbarBrandProps = HTMLAttributes<HTMLDivElement> & Prettify<BulmaProp>

/**
 * The NavbarBurger is a hamburger menu that only appears on touch devices.
 *
 * Renders a tag with navbar-burger class.
 *
 * @see {@link https://bulma.io/documentation/components/navbar/#navbar-burger}
 */
export const NavbarBurger: FC<NavbarBurgerProps> = ({ isActive, ...props }) => (
  <a
    className={cls<string>("navbar-burger", { "is-active": isActive })}
    role="button"
    aria-expanded={isActive ? "true" : "false"}
    {...props}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
)
export type NavbarBurgerProps = Omit<HTMLAttributes<HTMLElement>,
  | "aria-label"
  | "className"
  | "role"
> & Prettify<IsActiveProp>

/** Renders hr tag with navbar-divider class. */
export const NavbarDivider: FC<NavbarDividerProps> = ({ className, ...props }) => (
  <hr className={cls<string>(className, "navbar-divider")} {...props} />
)
export type NavbarDividerProps = HTMLAttributes<HTMLHRElement>

export const NavbarDropdown: FC<NavbarDropdownProps> = ({ align, isBoxed, bulma, className, children, ...props }) => (
  <div
    className={cls<string>(
      className,
      "navbar-dropdown",
      alignment(align),
      { "is-boxed": isBoxed },
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type NavbarDropdownProps = HTMLAttributes<HTMLDivElement> & Prettify<
  AlignProp<"right"> &
  Partial<{ isBoxed: boolean; isRight: boolean }> &
  BulmaProp
>

export const NavbarDropdownMenu: FC<NavbarDropdownMenuProps> = ({
  hasDropdownUp,
  isActive,
  isHoverable,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "navbar-item",
      "has-dropdown",
      {
        "has-dropdown-up": hasDropdownUp,
        "is-active": isActive,
        "is-hoverable": isHoverable
      },
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type NavbarDropdownMenuProps = HTMLAttributes<HTMLDivElement> & Prettify<
  IsActiveProp &
  Partial<{ hasDropdownUp: boolean; isHoverable: boolean }> &
  BulmaProp
>

export const NavbarEnd: FC<NavbarEndProps> = ({ children, ...props }) => (
  <div className="navbar-end" {...props}>
    {children}
  </div>
)
export type NavbarEndProps = HTMLAttributes<HTMLDivElement>

export const NavbarItem: FC<NavbarItemProps> = ({
  isSelected,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={cls<string>(
      className,
      "navbar-item",
      { "is-selected": isSelected },
      bulma
    )}
    {...props}
  >
    {children}
  </a>
)
export type NavbarItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<
  Partial<{ isSelected: boolean }> &
  BulmaProp
>

export const NavbarLink: FC<NavbarLinkProps> = ({
  isArrowless,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={cls<string>(
      className,
      "navbar-link",
      { "is-arrowless": isArrowless },
      bulma
    )}
    {...props}
  >
    {children}
  </a>
)
export type NavbarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<
  Partial<{ isArrowless: boolean }> &
  BulmaProp
>

/**
 * The NavbarMenu is the counterpart of the NavbarBrand. As such, it must appear as a direct child of Navbar, as a sibling of NavbarBrand.
 *
 * @example
 * <NavbarMenu>
 *   <NavbarStart>
 *     // Navbar items
 *   </NavbarStart>
 *   <NavbarEnd>
 *     // Navbar items
 *   </NavbarEnd>
 * </NavbarMenu>
 *
 * @see {@link https://bulma.io/documentation/components/navbar/#navbar-menu}
 */
export const NavbarMenu: FC<NavbarMenuProps> = ({ isActive, children, ...props }) => (
  <div className={cls<string>("navbar-menu", { "is-active": isActive })} {...props}>
    {children}
  </div>
)
export type NavbarMenuProps = HTMLAttributes<HTMLDivElement> & Prettify<IsActiveProp>

export const NavbarStart: FC<NavbarStartProps> = ({ children, ...props }) => (
  <div className="navbar-start" {...props}>
    {children}
  </div>
)
export type NavbarStartProps = HTMLAttributes<HTMLDivElement>

/**
 * Bold notification blocks, to alert your users of something.
 *
 * Renders div tag with notification class.
 *
 * @example
 * <Notification color="info" variant="light">
 *   <Delete />
 *   Lorem ipsum...
 * </Notification>
 *
 * @see {@link https://bulma.io/documentation/elements/notification/}
 */
export const Notification: FC<NotificationProps> = ({
  color,
  isSkeleton,
  variant,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "notification",
      is(color),
      is(variant),
      skel(isSkeleton),
      bulma
    )}
    {...props}
  >
    {children}
  </div>
)
export type NotificationProps = HTMLAttributes<HTMLDivElement> & Prettify<
  ColorProp &
  ColorVariantProp<"light"> &
  IsSkeletonProp &
  BulmaProp
>

/**
 * A responsive, usable, and flexible pagination.
 *
 * @example
 * <Pagination>
 *   <PaginationPrevious>Previous</PaginationPrevious>
 *   <PaginationNext>Next Page</PaginationNext>
 *   <PaginationList>
 *     <PaginationLink href="#" aria-label="Goto page 1">1</PaginationLink>
 *     <PaginationEllipsis />
 *     <PaginationLink href="#" aria-label="Goto page 45">45</PaginationLink>
 *     <PaginationLink href="#" isCurrent aria-current="page" aria-label="Goto page 46">46</PaginationLink>
 *     <PaginationLink href="#" aria-label="Goto page 47">47</PaginationLink>
 *   </PaginationList>
 * </Pagination>
 *
 * @see {@link https://bulma.io/documentation/components/pagination/}
 */
export const Pagination: FC<PaginationProps> = ({
  align,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <nav
    className={cls<string>(
      className,
      "pagination",
      is(size),
      alignment(align),
      bulma
    )}
    {...props}
  >
    {children}
  </nav>
)
export type PaginationProps = HTMLAttributes<HTMLElement> & Prettify<
  AlignProp<"center" | "right"> &
  SizeProp &
  BulmaProp
>

/** @see {@link Pagination} */
export const PaginationEllipsis: FC<PaginationEllipsisProps> = ({ className, ...props }) => (
  <li className={className} {...props}>
    <span className="pagination-ellipsis">&hellip;</span>
  </li>
)
export type PaginationEllipsisProps = HTMLAttributes<HTMLLIElement>

/** @see {@link Pagination} */
export const PaginationLink: FC<PaginationLinkProps> = ({
  isCurrent,
  bulma,
  className,
  children,
  ...props
}) => (
  <li>
    <a
      className={cls<string>(
        className,
        "pagination-link",
        { "is-current": isCurrent },
        bulma
      )}
      {...props}
    >
      {children}
    </a>
  </li>
)
export type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<
  Partial<{ isCurrent: boolean }> &
  BulmaProp
>

/** @see {@link Pagination} */
export const PaginationList: FC<PaginationListProps> = ({ bulma, className, children, ...props }) => (
  <ul className={cls<string>(className, "pagination-list", bulma)} {...props}>
    {children}
  </ul>
)
export type PaginationListProps = HTMLAttributes<HTMLUListElement> & Prettify<BulmaProp>

/** @see {@link Pagination} */
export const PaginationNext: FC<PaginationNextProps> = ({
  isDisabled,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={cls<string>(
      className,
      "pagination-next",
      { "is-disabled": isDisabled },
      bulma
    )}
    {...props}
  >
    {children}
  </a>
)
export type PaginationNextProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<
  Partial<{ isDisabled: boolean }> &
  BulmaProp
>

/** @see {@link Pagination} */
export const PaginationPrevious: FC<PaginationPreviousProps> = ({
  isDisabled,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={cls<string>(
      className,
      "pagination-previous",
      { "is-disabled": isDisabled },
      bulma
    )}
    {...props}
  >
    {children}
  </a>
)
export type PaginationPreviousProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<
  Partial<{ isDisabled: boolean }> &
  BulmaProp
>

/**
 * Native HTML progress bars.
 *
 * @example
 * <Progress color="primary" size="small" value="42" max="100">42%</Progress>
 *
 * @see {@link https://bulma.io/documentation/elements/progress/}
 */
export const Progress: FC<ProgressProps> = ({
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <progress
    className={cls<string>(className, "progress", is(size), bulma)}
    {...props}
  >
    {children}
  </progress>
)
export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & Prettify<
  SizeProp &
  BulmaProp
>

export const Radio: FC<RadioProps> = ({ children, ...props }) => (
  <label className="radio">
    <input type="radio" {...props} />
    {children}
  </label>
)
export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & Prettify<BulmaProp>

/**
 * A simple container to divide your page into sections.
 *
 * @example
 * <Section size="medium">
 *   <Title tag="h2">Title</Title>
 * </Section>
 *
 * @see {@link https://bulma.io/documentation/layout/section/}
 */
export const Section: FC<SectionProps> = ({
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <section
    className={cls<string>(className, "section", is(size), bulma)}
    {...props}
  >
    {children}
  </section>
)
export type SectionProps = HTMLAttributes<HTMLElement> & Prettify<
  SizeProp<"medium" | "large"> &
  BulmaProp
>

/**
 * The browser built-in select dropdown, styled accordingly.
 *
 * @example
 * <Select
 *   size="large"
 *   options={[
 *     { value: "A", label: "Apple" },
 *     { value: "B", label: "Banana" },
 *   ]}
 * />
 *
 * @see {@link https://bulma.io/documentation/form/select/}
 */
export const Select: FC<SelectProps> = ({
  color,
  options,
  isFullwidth,
  isLoading,
  isRounded,
  size,
  bulma,
  className,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "select",
      is(size),
      is(color),
      {
        "is-fullwidth": isFullwidth,
        "is-rounded": isRounded
      },
      load(isLoading),
      bulma
    )}
  >
    <select {...props}>
      {options.map((option) => (
        <option key={option.value?.toString()} {...option} />
      ))}
    </select>
  </div>
)
export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & Prettify<
  { options: Array<OptionHTMLAttributes<HTMLOptionElement>> } &
  ColorProp &
  IsLoadingProp &
  SizeProp<Size> &
  Partial<{ isFullwidth: boolean; isRounded: boolean }> &
  BulmaProp
>

/**
 * Is a loading element which resembles a paragraph.
 *
 * @example
 * <SkeletonLines num={5} />
 *
 * @see {@link https://bulma.io/documentation/features/skeletons/#skeleton-lines}
 */
export const SkeletonLines: FC<SkeletonLinesProps> = ({ num }) => (
  <div className={"skeleton-lines" satisfies Bulma}>
    {Array.from({ length: num }, (_, i) => (
      <div key={i} />
    ))}
  </div>
)
export type SkeletonLinesProps = { num: number }

/**
 * The subtitle heading to complement a Title.
 *
 * @see {@link Title}
 */
export const Subtitle: FC<SubtitleProps> = ({
  hasSkeleton,
  is,
  isSkeleton,
  tag: Tag = "p",
  bulma,
  className,
  children,
  ...props
}) => (
  <Tag
    className={cls<string>(
      className,
      "subtitle",
      is ? `is-${is}` : undefined,
      { "has-skeleton": hasSkeleton },
      skel(isSkeleton),
      bulma
    )}
    {...props}
  >
    {children}
  </Tag>
)
export type SubtitleProps = Omit<HTMLAttributes<HTMLElement>, "is"> & Prettify<
  TagProp<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"> &
  IsSkeletonProp &
  Partial<{ hasSkeleton: boolean; is: 1 | 2 | 3 | 4 | 5 | 6 }> &
  BulmaProp
>

/**
 * The inevitable HTML table, with special case cells.
 *
 * @example
 * <Table bulma={["is-striped", "is-hoverable"]}>
 *   <tbody>
 *     <tr><td>Cell 1</td><td>Cell 2</td></tr>
 *   </tbody>
 * </Table>
 *
 * @remarks
 * It <strong>always</strong> renders a <em>scrollable table</em>,
 * by wrapping a <code>table</code> in a <code>table-container</code> element.
 *
 * @see {@link https://bulma.io/documentation/elements/table/}
 */
export const Table: FC<TableProps> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div className="table-container">
    <table className={cls<string>(className, "table", bulma)} {...props}>
      {children}
    </table>
  </div>
)
export type TableProps = TableHTMLAttributes<HTMLTableElement> & Prettify<BulmaProp>

/**
 * Simple responsive horizontal navigation tabs, with different styles.
 *
 * @example
 * <Tabs>
 *   <Tab isActive>Pictures</Tab>
 *   <Tab>Music</Tab>
 *   <Tab>Videos</Tab>
 * </Tabs>
 *
 * @see {@link https://bulma.io/documentation/components/tabs/}
 */
export const Tabs: FC<TabsProps> = ({
  align,
  isBoxed,
  isFullwidth,
  isToggle,
  isToggleRounded,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={cls<string>(
      className,
      "tabs",
      is(size),
      alignment(align),
      {
        "is-boxed": isBoxed,
        "is-fullwidth": isFullwidth,
        "is-toggle": isToggle,
        "is-toggle-rounded": isToggleRounded
      },
      bulma
    )}
    {...props}
  >
    <ul>{children}</ul>
  </div>
)
export type TabsProps = HTMLAttributes<HTMLDivElement> & Prettify<
  AlignProp<"center" | "right"> &
  SizeProp &
  Partial<{
    isBoxed: boolean
    isFullwidth: boolean
    isToggle: boolean
    isToggleRounded: boolean
  }> &
  BulmaProp
>

/** @see {@link Tabs} */
export const Tab: FC<TabProps> = ({ isActive, className, children, ...props }) => (
  <li className={cls<string>(className, { "is-active": isActive })}>
    <a {...props}>{children}</a>
  </li>
)
export type TabProps = AnchorHTMLAttributes<HTMLAnchorElement> & Prettify<IsActiveProp>

/**
 * Small tag labels to insert anywhere.
 *
 * @example
 * <Tag color="primary" variant="light">
 *   v1.0.0
 * </Tag>
 *
 * @example Append a delete button.
 * <Tag color="warning" size="medium">
 *   Hello
 *   <Delete size="small" />
 * </Tag>
 *
 * @see {@link https://bulma.io/documentation/elements/tag/}
 */
export const Tag: FC<TagProps> = ({
  color,
  isHoverable,
  isRounded,
  isSkeleton,
  size,
  variant,
  bulma,
  className,
  children,
  ...props
}) => (
  <span
    className={cls<string>(
      className,
      "tag",
      is(color),
      is(variant),
      is(size),
      {
        "is-hoverable": isHoverable,
        "is-rounded": isRounded
      },
      skel(isSkeleton),
      bulma
    )}
    {...props}
  >
    {children}
  </span>
)
export type TagProps = HTMLAttributes<HTMLSpanElement> & Prettify<
  ColorProp &
  ColorVariantProp<"light"> &
  IsSkeletonProp &
  SizeProp<"medium" | "large"> &
  Partial<{ isHoverable: boolean; isRounded: boolean }> &
  BulmaProp
>

/**
 * List of tags.
 *
 * @example Large size tags.
 * <Tags size="large">
 *   <Tag>All</Tag>
 *   <Tag>Medium</Tag>
 *   <Tag>Size</Tag>
 * </Tags>
 *
 * @example Attach tags together.
 * <Tags hasAddons>
 *   <Tag>package</Tag>
 *   <Tag color="primary">trunx</Tag>
 * </Tags>
 *
 * @example Attach a text tag with a delete tag together.
 * <Tags hasAddons>
 *   <Tag color="danger">Alex Smith</Tag>
 *   <A bulma={["tag", "is-delete"]} />
 * </Tags>
 *
 * @see {@link https://bulma.io/documentation/elements/tag/#list-of-tags}
 */
export const Tags: FC<TagsProps> = ({
  hasAddons,
  size,
  className,
  children,
  ...props
}) => (
  <div className={cls<string>(className, "tags", are(size), { "has-addons": hasAddons })} {...props}>
    {children}
  </div>
)
export type TagsProps = HTMLAttributes<HTMLDivElement> & Prettify<
  PluralSizeProp &
  Partial<{ hasAddons: boolean }>
>

/**
 * The multiline textarea and its variations.
 *
 * @example Small textarea with color.
 * <Textarea size="small" color="info" />
 *
 * @see {@link https://bulma.io/documentation/form/textarea/}
 */
export const Textarea: FC<TextareaProps> = ({
  color,
  isLoading,
  isSkeleton,
  size,
  bulma,
  className,
  ...props
}) => (
  <textarea
    className={cls<string>(
      className,
      "textarea",
      is(color),
      is(size),
      load(isLoading),
      skel(isSkeleton),
      bulma
    )}
    {...props}
  />
)
export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Prettify<
  ColorProp &
  IsLoadingProp &
  IsSkeletonProp &
  SizeProp<Size> &
  BulmaProp
>

/**
 * Simple headings to add depth to your page.
 *
 * @example There are two types of heading: Title and Subtitle.
 * <>
 *   <Title tag="h1">Title</Title>
 *   <Subtitle tag="h2">Subtitle</Subtitle>
 * </>
 *
 * @example All title sizes.
 * <>
 *   <Title is={1}>Title 1</Title>
 *   <Title is={2}>Title 2</Title>
 *   <Title is={3}>Title 3 (default)</Title>
 *   <Title is={4}>Title 4</Title>
 *   <Title is={5}>Title 5</Title>
 *   <Title is={6}>Title 6</Title>
 * </>
 *
 * @example Maintain the normal spacing between titles and subtitles.
 * <>
 *   <Title is={1} isSpaced>Title 1</Title>
 *   <Subtitle is={3}>Subtitle 3</Subtitle>
 * </>
 *
 * @example Title that has skeleton.
 * <Title hasSkeleton>Title</Title>
 *
 * @see {@link https://bulma.io/documentation/elements/title/}
 */
export const Title: FC<TitleProps> = ({
  hasSkeleton,
  is,
  isSpaced,
  isSkeleton,
  tag: Tag = "p",
  bulma,
  className,
  children,
  ...props
}) => (
  <Tag
    className={cls<string>(
      className,
      "title",
      is ? `is-${is}` : undefined,
      {
        "has-skeleton": hasSkeleton,
        "is-spaced": isSpaced
      },
      skel(isSkeleton),
      bulma
    )}
    {...props}
  >
    {children}
  </Tag>
)
export type TitleProps = Omit<HTMLAttributes<HTMLElement>, "is"> & Prettify<
  TagProp<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"> &
  IsSkeletonProp &
  Partial<{
    hasSkeleton: boolean
    is: 1 | 2 | 3 | 4 | 5 | 6
    isSpaced: boolean
  }> &
  BulmaProp
>
