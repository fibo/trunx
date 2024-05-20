import {
  FC,
  PropsWithChildren,
  ReactNode,
  // HTML related
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  OptionHTMLAttributes,
  ProgressHTMLAttributes,
  SelectHTMLAttributes,
  TableHTMLAttributes,
  TextareaHTMLAttributes,
} from "react"
import { ClassnamesArg, classnames } from "./classnames.js"
import { ClassNames as Bulma } from "./Bulma.js"

type BulmaProp = {
  bulma?: ClassnamesArg<Bulma>
}

// Size
//////////////////////////////////////////////////////////////////////

export type Size = "small" | "medium" | "large" | "normal"

export type SizeProp<
  S extends Size = Extract<Size, "small" | "medium" | "large">,
> = Partial<{ size: S }>

export type PluralSize = Extract<Size, "small" | "medium" | "large">

export type PluralSizeProp = SizeProp<PluralSize>

// Colors
//////////////////////////////////////////////////////////////////////

export type MainColor =
  | "danger"
  | "link"
  | "info"
  | "primary"
  | "success"
  | "warning"

export type ShadeColor = "black" | "dark" | "light" | "white"

export type OtherColor = "text" | "ghost"

export type Color = MainColor | ShadeColor | OtherColor

export type ColorProp<C extends Color = Color> = Partial<{ color: C }>

export type ColorVariant = "light" | "dark"

export type ColorVariantProp<V extends ColorVariant = ColorVariant> = Partial<{
  variant: V
}>

// Helpers
//////////////////////////////////////////////////////////////////////

const are = (
  arg: PluralSize | undefined,
): Extract<Bulma, `are-${typeof arg}`> | undefined =>
  arg ? `are-${arg}` : undefined

export const is = (
  arg: Color | ColorVariant | Size | undefined,
): Extract<Bulma, `is-${typeof arg}`> | undefined =>
  arg ? `is-${arg}` : undefined

// Components
//////////////////////////////////////////////////////////////////////

export const A: FC<PropsWithChildren<AProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <a className={classnames<string>(className, bulma)} {...props}>
    {children}
  </a>
)
export type AProps = AnchorHTMLAttributes<HTMLAnchorElement> & BulmaProp

export const Breadcrumb: FC<PropsWithChildren<BreadcrumbProps> & BulmaProp> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <nav
    className={classnames<Bulma>(className as Bulma, "breadcrumb", bulma)}
    {...props}
  >
    {children}
  </nav>
)
export type BreadcrumbProps = HTMLAttributes<HTMLElement>

/**
 * The classic button, in different colors, sizes, and states.
 *
 * @example
 *
 * ```tsx
 * <Button color="primary" variant="light" isLoading>Login</Button>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/button/)
 */
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  isLoading,
  isFullwidth,
  isOutlined,
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
    className={classnames<Bulma>(
      className as Bulma,
      "button",
      is(color),
      is(variant),
      is(size),
      {
        "is-fullwidth": isFullwidth,
        "is-loading": isLoading,
        "is-inverted": isInverted,
        "is-outlined": isOutlined,
        "is-rounded": isRounded,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </button>
)
export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
> &
  BulmaProp &
  ColorProp &
  ColorVariantProp &
  SizeProp<Size> &
  Partial<{
    isLoading: boolean
    isInverted: boolean
    isFullwidth: boolean
    isOutlined: boolean
    isResponsive: boolean
    isRounded: boolean
  }>

export const Buttons: FC<PropsWithChildren<ButtonsProps>> = ({
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "buttons",
      are(size),
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type ButtonsProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  PluralSizeProp

/**
 * Grid cell.
 *
 * @example
 *
 * ```tsx
 * <FixedGrid bulma="has-4-cols">
 *   <Cell>cell 1</Cell>
 *   <Cell bulma="is-col-start-3">cell 2</Cell>
 *   <Cell>cell 3</Cell>
 *   <Cell>cell 4</Cell>
 *   <Cell>cell 5</Cell>
 *   <Cell>cell 6</Cell>
 * </FixedGrid>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/grid/grid-cells/)
 *
 * Nope! Not that {@link https://en.wikipedia.org/wiki/Cell_(Dragon_Ball) | Cell} 😂.
 */
export const Cell: FC<PropsWithChildren<CellProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "cell", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type CellProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * An all-around flexible and composable component.
 *
 * @example
 *
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardHeaderTitle>Title</CardHeaderTitle>
 *     <CardHeaderIcon>
 *       <Icon><i className="fas fa-angle-down" aria-hidden="true" /></Icon>
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
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/components/card/)
 */
export const Card: FC<PropsWithChildren<CardProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "card", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type CardProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/** @see {@link Card} */
export const CardContent: FC<PropsWithChildren<CardContentProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "card-content", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type CardContentProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/** @see {@link Card} */
export const CardFooter: FC<PropsWithChildren<CardFooterProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <footer
    className={classnames<Bulma>(className as Bulma, "card-footer", bulma)}
    {...props}
  >
    {children}
  </footer>
)
export type CardFooterProps = HTMLAttributes<HTMLElement> & BulmaProp

/** @see {@link Card} */
export const CardHeader: FC<PropsWithChildren<CardHeaderProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <footer
    className={classnames<Bulma>(className as Bulma, "card-header", bulma)}
    {...props}
  >
    {children}
  </footer>
)
export type CardHeaderProps = HTMLAttributes<HTMLElement> & BulmaProp

/** @see {@link Card} */
export const CardHeaderIcon: FC<PropsWithChildren<CardHeaderIconProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <button
    className={classnames<Bulma>(className as Bulma, "card-header-icon", bulma)}
    {...props}
  >
    {children}
  </button>
)
export type CardHeaderIconProps = HTMLAttributes<HTMLButtonElement> & BulmaProp

/** @see {@link Card} */
export const CardHeaderTitle: FC<PropsWithChildren<CardHeaderTitleProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <p
    className={classnames<Bulma>(
      className as Bulma,
      "card-header-title",
      bulma,
    )}
    {...props}
  >
    {children}
  </p>
)
export type CardHeaderTitleProps = HTMLAttributes<HTMLParagraphElement> &
  BulmaProp

/**
 * The 2-state checkbox in its native format
 *
 * @example
 *
 * ```tsx
 * <Checkbox disabled>Save my preferences</Checkbox>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/form/checkbox/)
 */
export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  ...props
}) => (
  <label className="checkbox">
    <input type="checkbox" {...props} />
    {children}
  </label>
)
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

/** @see {@link Columns} */
export const Column: FC<PropsWithChildren<ColumnProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "column", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type ColumnProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * The power of Flexbox in a simple interface.
 *
 * @see [bulma docs](https://bulma.io/documentation/columns/)
 */
export const Columns: FC<PropsWithChildren<ColumnsProps>> = ({
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
    className={classnames<Bulma>(
      className as Bulma,
      "columns",
      {
        "is-gapless": isGapless,
        "is-desktop": isDesktop,
        "is-mobile": isMobile,
        "is-multiline": isMultiline,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type ColumnsProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isGapless: boolean
    isDesktop: boolean
    isMobile: boolean
    isMultiline: boolean
  }>

/**
 * A simple container to center your content horizontally.
 *
 * @example
 *
 * ```tsx
 * <Container isFluid>
 *   <Notification color="primary">
 *     This container is <strong>fluid</strong>
 *   </Notification>
 * </Container>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/layout/container/)
 */
export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  isWidescreen,
  isFluid,
  isMaxDesktop,
  isMaxWidescreen,
  isFullhd,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "container",
      {
        "is-widescreen": isWidescreen,
        "is-fullhd": isFullhd,
        "is-fluid": isFluid,
        // @ts-ignore Bulma generated types do not contain `is-max-desktop`.
        "is-max-desktop": isMaxDesktop,
        "is-max-widescreen": isMaxWidescreen,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isMaxDesktop: boolean
    isMaxWidescreen: boolean
    isWidescreen: boolean
    isFluid: boolean
    isFullhd: boolean
  }>

/**
 * A container for text.
 *
 * @example
 *
 * <Content size="small">
 *   <h1>Hello World</h1>
 *   <p>Lorem ipsum...</p>
 * </Content>
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/content/)
 */
export const Content: FC<PropsWithChildren<ContentProps>> = ({
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "content",
      is(size),
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type ContentProps = HTMLAttributes<HTMLDivElement> & BulmaProp & SizeProp

export const Control: FC<PropsWithChildren<ControlProps>> = ({
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "control",
      {
        "is-expanded": isExpanded,
        "has-icons-left": hasIconsLeft,
        "has-icons-right": hasIconsRight,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type ControlProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isExpanded: boolean
    hasIconsLeft: boolean
    hasIconsRight: boolean
  }>

/**
 * A versatile delete cross.
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/delete/)
 */
export const Delete: FC<DeleteProps> = ({
  size,
  className,
  children,
  ...props
}) => (
  <button
    className={classnames<Bulma>(className as Bulma, "delete", is(size))}
    {...props}
  />
)
export type DeleteProps = ButtonHTMLAttributes<HTMLButtonElement> &
  SizeProp<"large">

export const Div: FC<PropsWithChildren<DivProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </div>
)
export type DivProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * Form field.
 *
 * @example
 *
 * ```tsx
 * <Field>
 *   <Label>Name</Label>
 *   <Control>
 *     <Input placeholder="e.g Alex Smith" />
 *   </Control>
 * </Field>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/form/general/#form-field)
 */
export const Field: FC<PropsWithChildren<FieldProps>> = ({
  hasAddons,
  hasAddonsCentered,
  hasAddonsRight,
  isGrouped,
  isGroupedCentered,
  isGroupedMultiline,
  isGroupedRight,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "field",
      {
        "has-addons": hasAddons,
        "has-addons-centered": hasAddonsCentered,
        "has-addons-right": hasAddonsRight,
        "is-grouped": isGrouped,
        "is-grouped-centered": isGroupedCentered,
        "is-grouped-multiline": isGroupedMultiline,
        "is-grouped-right": isGroupedRight,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type FieldProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    hasAddons: boolean
    hasAddonsCentered: boolean
    hasAddonsRight: boolean
    isGrouped: boolean
    isGroupedCentered: boolean
    isGroupedMultiline: boolean
    isGroupedRight: boolean
    isHorizontal: boolean
  }>

/** @see {@link FieldHorizontal} */
export const FieldBody: FC<PropsWithChildren<FieldBodyProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "field-body", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type FieldBodyProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * A horizontal form control.
 *
 * @example
 *
 * ```tsx
 * <FieldHorizontal>
 *   <FieldLabel isNormal>
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
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/form/general/#horizontal-form)
 */
export const FieldHorizontal: FC<PropsWithChildren<FieldHorizontalProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "field",
      "is-horizontal",
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type FieldHorizontalProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/** @see {@link FieldHorizontal} */
export const FieldLabel: FC<PropsWithChildren<FieldLabelProps>> = ({
  isNormal,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "field-label",
      {
        "is-normal": isNormal,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type FieldLabelProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp & {
    isNormal: boolean
  }

/**
 * A custom file upload input.
 *
 * @see [bulma docs](https://bulma.io/documentation/form/file/)
 */
export const FileUpload: FC<PropsWithChildren<FileUploadProps>> = ({
  cta,
  hasName,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "file", bulma)}
    {...props}
  >
    <label className="file-label">
      <input type="file" {...props} />
      {cta ? <span className="file-cta">{cta}</span> : null}
      {hasName ? <span className="file-name">{hasName}</span> : null}
    </label>
  </div>
)
export type FileUploadProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> &
  BulmaProp &
  Partial<{
    cta: ReactNode
    hasName: ReactNode
  }>

/**
 * A customizable 2D fixed grid.
 *
 * @example
 *
 * ```tsx
 * <FixedGrid hasAutoCount>
 *   <Cell>cell 1</Cell>
 *   <Cell>cell 2</Cell>
 * </FixedGrid>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/grid/fixed-grid/)
 */
export const FixedGrid: FC<PropsWithChildren<FixedGridProps>> = ({
  hasAutoCount,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "fixed-grid",
      {
        "has-auto-count": hasAutoCount,
      },
      bulma,
    )}
    {...props}
  >
    <div className="grid">{children}</div>
  </div>
)
export type FixedGridProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    hasAutoCount: boolean
  }>

/** A simple responsive footer.
 *
 * @example
 *
 * ```tsx
 * <Footer>
 *   <Content bulma="has-text-centered">
 *     <p>
 *       <strong>trunx</strong> by <a href="https://fibo.github.io">fibo</a>.
 *       The source code is licensed
 *       <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
 *     </p>
 *   </Content>
 * </Footer>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/layout/footer/)
 */
export const Footer: FC<PropsWithChildren<FooterProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <footer
    className={classnames<Bulma>(className as Bulma, "footer", bulma)}
    {...props}
  >
    {children}
  </footer>
)
export type FooterProps = HTMLAttributes<HTMLElement> & BulmaProp

/**
 * A smart 2D grid with flexible columns.
 *
 * @example
 *
 * ```tsx
 * <Grid bulma={["is-col-min-4", "is-gap-2"]}>
 *   <Cell>cell 1</Cell>
 *   <Cell>cell 2</Cell>
 * </Grid>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/grid/smart-grid/)
 */
export const Grid: FC<PropsWithChildren<GridProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "grid", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type GridProps = HTMLAttributes<HTMLDivElement> & BulmaProp

export const Help: FC<PropsWithChildren<HelpProps>> = ({
  color,
  bulma,
  className,
  children,
  ...props
}) => (
  <p
    className={classnames<Bulma>(className as Bulma, "help", is(color), bulma)}
    {...props}
  >
    {children}
  </p>
)
export type HelpProps = HTMLAttributes<HTMLParagraphElement> &
  BulmaProp &
  ColorProp

/**
 * An imposing hero banner to showcase something.
 *
 * @example
 *
 * ```tsx
 * <Hero size="small">
 *   <HeroBody>
 *     <Title>Title</Title>
 *     <Subtitle>Subtitle</Subtitle>
 *   </HeroBody>
 * </Hero>
 * ```
 *
 * @example Half height hero
 *
 * ```tsx
 * <Hero color="success" isHalfheight>
 *   <HeroBody>
 *     <Title>Title</Title>
 *     <Subtitle>Subtitle</Subtitle>
 *   </HeroBody>
 * </Hero>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/layout/hero/)
 */
export const Hero: FC<PropsWithChildren<HeroProps>> = ({
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
    className={classnames<Bulma>(
      className as Bulma,
      "hero",
      is(color),
      is(size),
      {
        "is-halfheight": isHalfheight,
        "is-fullheight": isFullheight,
        "is-fullheight-with-navbar": isFullheightWithNavbar,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </section>
)
export type HeroProps = HTMLAttributes<HTMLElement> &
  BulmaProp &
  ColorProp &
  SizeProp &
  Partial<{
    isHalfheight: boolean
    isFullheight: boolean
    isFullheightWithNavbar: boolean
  }>

/** @see {@link Hero} */
export const HeroBody: FC<PropsWithChildren<HeroBodyProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "hero-body", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type HeroBodyProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/** @see {@link Hero} */
export const HeroFoot: FC<PropsWithChildren<HeroFootProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "hero-foot", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type HeroFootProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/** @see {@link Hero} */
export const HeroHead: FC<PropsWithChildren<HeroHeadProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "hero-head", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type HeroHeadProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * A container for any type of icon.
 *
 * @example
 *
 * ```tsx
 *   <Icon>
 *     <i className="fas fa-home"></i>
 *   </Icon>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/icon/).
 */
export const Icon: FC<PropsWithChildren<IconProps>> = ({
  isLeft,
  isRight,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <span
    className={classnames<Bulma>(
      className as Bulma,
      "icon",
      is(size),
      {
        "is-left": isLeft,
        "is-right": isRight,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </span>
)
export type IconProps = HTMLAttributes<HTMLSpanElement> &
  BulmaProp &
  SizeProp &
  Partial<{
    isLeft: boolean
    isRight: boolean
  }>

/**
 * Combine an icon with text.
 *
 * @example
 *
 * ```tsx
 * <IconText>
 *   <Icon bulma="has-text-primary">
 *     <i className="fas fa-home"></i>
 *   </Icon>
 *   <span>Home</span>
 * </IconText>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/icon/#icon-text)
 */
export const IconText: FC<PropsWithChildren<IconTextProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <span
    className={classnames<Bulma>(className as Bulma, "icon-text", bulma)}
    {...props}
  >
    {children}
  </span>
)
export type IconTextProps = HTMLAttributes<HTMLSpanElement> &
  BulmaProp &
  SizeProp

/**
 * A container for responsive images.
 *
 * @example Fixed square images
 *
 * ```tsx
 * <Image dimension="128x128">
 *   <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
 * </Image>
 * ```
 *
 * @example Rounded images
 *
 * ```tsx
 * <Image dimension="128x128">
 *   <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/256x256.png" />
 * </Image>
 * ```
 *
 * @example Arbitrary ratios with any element
 *
 * ```tsx
 * <Image ratio="16by9">
 *   <iframe
 *     className="has-ratio"
 *     width="640"
 *     height="360"
 *     src="https://www.youtube.com/embed/YE7VzlLtp-4"
 *     allowFullScreen
 *   />
 * </Image>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/image/)
 */
export const Image: FC<PropsWithChildren<ImageProps>> = ({
  dimension,
  ratio,
  isSquare,
  bulma,
  className,
  children,
  ...props
}) => (
  <figure
    className={classnames<Bulma>(
      className as Bulma,
      "image",
      dimension ? `is-${dimension}` : undefined,
      ratio ? `is-${ratio}` : undefined,
      {
        "is-square": isSquare,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </figure>
)
export type ImageProps = HTMLAttributes<HTMLElement> &
  BulmaProp &
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
  }>
type ImageDimension =
  | "16x16"
  | "24x24"
  | "32x32"
  | "48x48"
  | "64x64"
  | "96x96"
  | "128x128"

export const Input: FC<InputProps> = ({
  bulma,
  className,
  color,
  size,
  ...props
}) => (
  <input
    className={classnames<Bulma>(
      className as Bulma,
      "input",
      is(color),
      is(size),
      bulma,
    )}
    {...props}
  />
)
export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> &
  Partial<{
    type: Exclude<
      InputHTMLAttributes<HTMLInputElement>["type"],
      // Component Checkbox handles `type="checkbox"`
      | "checkbox"
      // Component FileUpload handles `type="file"`
      | "file"
      // Component Radio handles `type="radio"`
      | "radio"
    >
  }> &
  BulmaProp &
  ColorProp &
  SizeProp

/** Renders label tag with label class. */
export const Label: FC<PropsWithChildren<LabelProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <label
    className={classnames<Bulma>(className as Bulma, "label", bulma)}
    {...props}
  >
    {children}
  </label>
)
export type LabelProps = HTMLAttributes<HTMLLabelElement> & BulmaProp

/**
 * The famous media object prevalent in social media interfaces.
 *
 * @example
 *
 * ```tsx
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
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/layout/media-object/)
 */
export const Media: FC<PropsWithChildren<MediaProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <article
    className={classnames<Bulma>(className as Bulma, "media", bulma)}
    {...props}
  >
    {children}
  </article>
)
export type MediaProps = HTMLAttributes<HTMLElement> & BulmaProp

/** @see {@link Media} */
export const MediaContent: FC<PropsWithChildren<MediaContentProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "media-content", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type MediaContentProps = HTMLAttributes<HTMLElement> & BulmaProp

/** @see {@link Media} */
export const MediaLeft: FC<PropsWithChildren<MediaLeftProps>> = ({
  dimension,
  bulma,
  className,
  children,
  ...props
}) => (
  <figure
    className={classnames<Bulma>(className as Bulma, "media-left", bulma)}
    {...props}
  >
    <p
      className={classnames<Bulma>(
        "image",
        dimension ? `is-${dimension}` : undefined,
      )}
    >
      {children}
    </p>
  </figure>
)
export type MediaLeftProps = HTMLAttributes<HTMLElement> &
  BulmaProp & {
    dimension: ImageDimension
  }

/** @see {@link Media} */
export const MediaRight: FC<PropsWithChildren<MediaRightProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "media-right", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type MediaRightProps = HTMLAttributes<HTMLElement> & BulmaProp

/**
 * A simple menu, for any type of vertical navigation.
 *
 * Renders aside tag with menu class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/menu/)
 */
export const Menu: FC<PropsWithChildren<MenuProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <aside
    className={classnames<Bulma>(className as Bulma, "menu", bulma)}
    {...props}
  >
    {children}
  </aside>
)
export type MenuProps = HTMLAttributes<HTMLElement> & BulmaProp

/** Renders p tag with menu-label class. */
export const MenuLabel: FC<PropsWithChildren<MenuLabelProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <p
    className={classnames<Bulma>(className as Bulma, "menu-label", bulma)}
    {...props}
  >
    {children}
  </p>
)
export type MenuLabelProps = HTMLAttributes<HTMLParagraphElement> & BulmaProp

/** Renders ul tag with menu-list class. */
export const MenuList: FC<PropsWithChildren<MenuListProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <ul
    className={classnames<Bulma>(className as Bulma, "menu-list", bulma)}
    {...props}
  >
    {children}
  </ul>
)
export type MenuListProps = HTMLAttributes<HTMLUListElement> & BulmaProp

/**
 * Colored message blocks, to emphasize part of your page.
 *
 * Renders article tag with message class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/message/)
 */
export const Message: FC<PropsWithChildren<MessageProps>> = ({
  header,
  bulma,
  className,
  children,
  ...props
}) => (
  <article
    className={classnames<Bulma>(className as Bulma, "message", bulma)}
    {...props}
  >
    {header ? <div className="message-header">{header}</div> : null}
    <div className="message-body">{children}</div>
  </article>
)
export type MessageProps = HTMLAttributes<HTMLElement> &
  BulmaProp &
  Partial<{
    header: ReactNode
  }>

/**
 * A classic modal overlay, in which you can include any content you want.
 *
 * Renders div tag with modal class.
 *
 * ```tsx
 * <Modal noBackground>
 *   <ModalContent>
 *     Content
 *   </ModalContent>
 *   <ModalClose />
 * </Modal>
 * ```
 * @see [bulma docs](https://bulma.io/documentation/components/modal/)
 */
export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  noBackground,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "modal", is(size), bulma)}
    {...props}
  >
    {noBackground ? null : <div className="modal-background" />}
    {children}
  </div>
)
export type ModalProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  SizeProp &
  Partial<{
    noBackground: boolean
  }>

/**
 * A modal with a head, a body and a foot.
 *
 * Renders div tag with modal-card class.
 *
 * @example
 *
 * ```tsx
 * <ModalCard
 *   head="Modal title"
 *   foot={<Buttons><Button>Ok</Button></Buttons>}
 * >
 *   Content ...
 * </ModalCard>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/components/modal/#modal-card)
 */
export const ModalCard: FC<PropsWithChildren<ModalCardProps>> = ({
  head,
  foot,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "modal-card")}
    {...props}
  >
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
export const ModalClose: FC<ModalCloseProps> = ({
  size,
  className,
  ...props
}) => (
  <button
    className={classnames<Bulma>(className as Bulma, "modal-close", is(size))}
    {...props}
  />
)
export type ModalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> &
  SizeProp<"large">

/** Renders div tag with modal-content class. */
export const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(className as Bulma, "modal-content", bulma)}
    {...props}
  >
    {children}
  </div>
)
export type ModalContentProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * A responsive horizontal navbar that can support images, links, buttons, and dropdowns.
 *
 * Renders nav tag with navbar class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/navbar/)
 */
export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  color,
  role = "navigation",
  bulma,
  className,
  children,
  ...props
}) => (
  <nav
    className={classnames<Bulma>(
      className as Bulma,
      "navbar",
      is(color),
      bulma,
    )}
    role={role}
    {...props}
  >
    {children}
  </nav>
)
export type NavbarProps = Omit<HTMLAttributes<HTMLElement>, "color"> &
  BulmaProp &
  ColorProp<MainColor | ShadeColor>

/**
 * The NavbarBrand is the left side of the navbar.
 *
 * Renders div tag with navbar-brand class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/navbar/#navbar-brand)
 */
export const NavbarBrand: FC<PropsWithChildren> = ({ children }) => (
  <div className="navbar-brand">{children}</div>
)

/**
 * The NavbarBurger is a hamburger menu that only appears on touch devices.
 *
 * Renders a tag with navbar-burger class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/navbar/#navbar-burger)
 */
export const NavbarBurger: FC<NavbarBurgerProps> = ({ isActive, ...props }) => (
  <a
    className={classnames<Bulma>("navbar-burger", { "is-active": isActive })}
    role="button"
    aria-expanded={isActive ? "true" : "false"}
    {...props}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
)
export type NavbarBurgerProps = Omit<
  HTMLAttributes<HTMLElement>,
  "aria-label" | "className" | "role"
> &
  Partial<{
    isActive: boolean
  }>

/** Renders hr tag with navbar-divider class. */
export const NavbarDivider: FC = () => <hr className="navbar-divider" />

export const NavbarDropdown: FC<PropsWithChildren<NavbarDropdownProps>> = ({
  isBoxed,
  isRight,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "navbar-dropdown",
      {
        "is-boxed": isBoxed,
        "is-right": isRight,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type NavbarDropdownProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isBoxed: boolean
    isRight: boolean
  }>

export const NavbarDropdownMenu: FC<
  PropsWithChildren<NavbarDropdownMenuProps>
> = ({
  hasDropdownUp,
  isActive,
  isHoverable,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "navbar-item",
      "has-dropdown",
      {
        "has-dropdown-up": hasDropdownUp,
        "is-active": isActive,
        "is-hoverable": isHoverable,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type NavbarDropdownMenuProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isActive: boolean
    hasDropdownUp: boolean
    isHoverable: boolean
  }>

export const NavbarEnd: FC<PropsWithChildren> = ({ children }) => (
  <div className="navbar-end">{children}</div>
)

export const NavbarItem: FC<PropsWithChildren<NavbarItemProps>> = ({
  isSelected,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<Bulma>(
      className as Bulma,
      "navbar-item",
      {
        "is-selected": isSelected,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type NavbarItemProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isSelected: boolean
  }>

export const NavbarLink: FC<PropsWithChildren<NavbarLinkProps>> = ({
  isArrowless,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<Bulma>(
      className as Bulma,
      "navbar-link",
      {
        // @ts-ignore Bulma generated types do not contain `is-arrowless`.
        "is-arrowless": isArrowless,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type NavbarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isArrowless: boolean
  }>

/**
 * The NavbarMenu is the counterpart of the NavbarBrand. As such, it must appear as a direct child of Navbar, as a sibling of NavbarBrand.
 *
 * @example
 *
 * ```tsx
 * <NavbarMenu>
 *   <NavbarStart>
 *     // Navbar items
 *   </NavbarStart>
 *   <NavbarEnd>
 *     // Navbar items
 *   </NavbarEnd>
 * </NavbarMenu>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/components/navbar/#navbar-menu)
 */
export const NavbarMenu: FC<PropsWithChildren<NavbarMenuProps>> = ({
  isActive,
  children,
}) => (
  <div className={classnames<Bulma>("navbar-menu", { "is-active": isActive })}>
    {children}
  </div>
)
export type NavbarMenuProps = Partial<{
  isActive: boolean
}>

export const NavbarStart: FC<PropsWithChildren> = ({ children }) => (
  <div className="navbar-start">{children}</div>
)

/**
 * Bold notification blocks, to alert your users of something.
 *
 * Renders div tag with notification class.
 *
 * @example
 *
 * ```tsx
 * <Notification color="info" variant="light">
 *   <Delete />
 *   Lorem ipsum...
 * </Notification>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/notification/)
 */
export const Notification: FC<PropsWithChildren<NotificationProps>> = ({
  color,
  variant,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "notification",
      is(color),
      is(variant),
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type NotificationProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  ColorProp &
  ColorVariantProp<"light">

/**
 * Renders p tag.
 *
 * @example
 *
 * ```tsx
 * <P bulma="has-text-grey">Lorem ipsum...</P>
 * ```
 */
export const P: FC<PropsWithChildren<PProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <p className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </p>
)
export type PProps = HTMLAttributes<HTMLParagraphElement> & BulmaProp

/**
 * A responsive, usable, and flexible pagination.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/pagination/)
 */
export const Pagination: FC<PropsWithChildren<PaginationProps>> = ({
  isCentered,
  isRight,
  size,
  role = "navigation",
  bulma,
  className,
  children,
  ...props
}) => (
  <nav
    className={classnames<Bulma>(
      className as Bulma,
      "pagination",
      is(size),
      {
        "is-centered": isCentered,
        "is-right": isRight,
      },
      bulma,
    )}
    role={role}
    {...props}
  >
    {children}
  </nav>
)
export type PaginationProps = HTMLAttributes<HTMLElement> &
  BulmaProp &
  SizeProp &
  Partial<{
    isCentered: boolean
    isRight: boolean
  }>

export const PaginationEllipsis: FC = () => (
  <span className="pagination-ellipsis">&hellip;</span>
)

export const PaginationLink: FC<PropsWithChildren<PaginationLinkProps>> = ({
  isCurrent,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<Bulma>(
      className as Bulma,
      "pagination-link",
      { "is-current": isCurrent },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isCurrent: boolean
  }>

export const PaginationList: FC<PropsWithChildren<PaginationListProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <ul
    className={classnames<Bulma>(className as Bulma, "pagination-list", bulma)}
    {...props}
  >
    {children}
  </ul>
)
export type PaginationListProps = HTMLAttributes<HTMLUListElement> & BulmaProp

export const PaginationNext: FC<PropsWithChildren<PaginationNextProps>> = ({
  isDisabled,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<Bulma>(
      className as Bulma,
      "pagination-next",
      {
        "is-disabled": isDisabled,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type PaginationNextProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isDisabled: boolean
  }>

export const PaginationPrevious: FC<
  PropsWithChildren<PaginationPreviousProps>
> = ({ isDisabled, bulma, className, children, ...props }) => (
  <a
    className={classnames<Bulma>(
      className as Bulma,
      "pagination-previous",
      {
        "is-disabled": isDisabled,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type PaginationPreviousProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isDisabled: boolean
  }>

/**
 * Native HTML progress bars.
 *
 * @example
 *
 * ```tsx
 * <Progress color="primary" size="small" value="42" max="100">42%</Progress>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/progress/)
 */
export const Progress: FC<PropsWithChildren<ProgressProps>> = ({
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <progress
    className={classnames<Bulma>(
      className as Bulma,
      "progress",
      is(size),
      bulma,
    )}
    {...props}
  >
    {children}
  </progress>
)
export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> &
  BulmaProp &
  SizeProp

export const Radio: FC<PropsWithChildren<RadioProps>> = ({
  children,
  ...props
}) => (
  <label className="radio">
    <input type="radio" {...props} />
    {children}
  </label>
)
export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> &
  BulmaProp

export const Span: FC<PropsWithChildren<SpanProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <span className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </span>
)
export type SpanProps = HTMLAttributes<HTMLSpanElement> & BulmaProp

/**
 * A simple container to divide your page into sections.
 *
 * @example
 *
 * ```tsx
 * <Section size="medium">
 *   <Title tag="h2">Title</Title>
 * </Section>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/layout/section/)
 */
export const Section: FC<PropsWithChildren<SectionProps>> = ({
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <section
    className={classnames<Bulma>(
      className as Bulma,
      "section",
      is(size),
      bulma,
    )}
    {...props}
  >
    {children}
  </section>
)
export type SectionProps = HTMLAttributes<HTMLElement> &
  BulmaProp &
  SizeProp<"medium" | "large">

/**
 * The browser built-in select dropdown, styled accordingly.
 *
 * @example
 *
 * ```tsx
 * <Select
 *   size="large"
 *   options={[
 *     { value: "A", label: "Apple" },
 *     { value: "B", label: "Banana" },
 *   ]}
 * />
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/form/select/)
 */
export const Select: FC<SelectProps> = ({
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
    className={classnames<Bulma>(
      className as Bulma,
      "select",
      is(size),
      {
        "is-loading": isLoading,
        "is-fullwidth": isFullwidth,
        "is-rounded": isRounded,
      },
      bulma,
    )}
  >
    <select {...props}>
      {options.map((option) => (
        <option key={option.value?.toString()} {...option} />
      ))}
    </select>
  </div>
)
export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> & {
  options: Array<OptionHTMLAttributes<HTMLOptionElement>>
} & BulmaProp &
  SizeProp<Size> &
  Partial<{
    isFullwidth: boolean
    isLoading: boolean
    isRounded: boolean
  }>

/**
 * @see {@link Title}
 */
export const Subtitle: FC<PropsWithChildren<SubtitleProps>> = ({
  is,
  tag: Tag = "p",
  bulma,
  className,
  children,
  ...props
}) => (
  <Tag
    className={classnames<Bulma>(
      className as Bulma,
      "title",
      is ? `is-${is}` : undefined,
      bulma,
    )}
    {...props}
  >
    {children}
  </Tag>
)
export type SubtitleProps = Omit<HTMLAttributes<HTMLElement>, "is"> &
  BulmaProp &
  Titlemodifiers

/**
 * The inevitable HTML table, with special case cells.
 *
 * It <strong>always</strong> renders a <em>scrollable table</em>, that is a table inside a table container like this markup.
 *
 * ```html
 * <div class="table-container">
 *  <table class="table">
 *    <!-- Your table content -->
 *  </table>
 * </div>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/table/)
 */
export const Table: FC<PropsWithChildren<TableProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <div className="table-container">
    <table
      className={classnames<Bulma>(className as Bulma, "table", bulma)}
      {...props}
    >
      {children}
    </table>
  </div>
)
export type TableProps = TableHTMLAttributes<HTMLTableElement> & BulmaProp

/**
 * Simple responsive horizontal navigation tabs, with different styles.
 *
 * @example
 *
 * ```tsx
 * <Tabs>
 *     <Tab isActive>Pictures</Tab>
 *     <Tab>Music</Tab>
 *     <Tab>Videos</Tab>
 * </Tabs>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/components/tabs/)
 */
export const Tabs: FC<PropsWithChildren<TabsProps>> = ({
  isBoxed,
  isCentered,
  isFullwidth,
  isRight,
  isToggle,
  isToggleRounded,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "tabs",
      is(size),
      {
        "is-boxed": isBoxed,
        "is-centered": isCentered,
        "is-fullwidth": isFullwidth,
        "is-right": isRight,
        "is-toggle": isToggle,
        "is-toggle-rounded": isToggleRounded,
      },
      bulma,
    )}
    {...props}
  >
    <ul>{children}</ul>
  </div>
)
export type TabsProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  SizeProp &
  Partial<{
    isBoxed: boolean
    isCentered: boolean
    isFullwidth: boolean
    isRight: boolean
    isToggle: boolean
    isToggleRounded: boolean
  }>

/** @see {@link Tabs} */
export const Tab: FC<PropsWithChildren<TabProps>> = ({
  isActive,
  className,
  children,
  ...props
}) => (
  <li
    className={classnames<Bulma>(className as Bulma, { "is-active": isActive })}
  >
    <a {...props}>{children}</a>
  </li>
)
export type TabProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<{
    isActive: boolean
  }>

/**
 * The multiline textarea and its variations.
 *
 * @example
 *
 * ```tsx
 * <Textarea size="small" color="info" />
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/form/textarea/)
 */
export const Textarea: FC<TextareaProps> = ({
  color,
  size,
  isLoading,
  bulma,
  className,
  ...props
}) => (
  <textarea
    className={classnames<Bulma>(
      className as Bulma,
      "textarea",
      is(color),
      is(size),
      {
        "is-loading": isLoading,
      },
      bulma,
    )}
    {...props}
  />
)
export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  BulmaProp &
  ColorProp &
  SizeProp<Size> &
  Partial<{
    isLoading: boolean
  }>

/**
 * Simple headings to add depth to your page.
 *
 * @example There are two types of heading: Title and Subtitle.
 *
 * ```ts
 * <Title tag="h1">Title</Title>
 * <Subtitle tag="h2">Subtitle</Subtitle>
 * ```
 *
 * @example Sizes
 *
 * ```ts
 * <Title is={1}>Title 1</Title>
 * <Title is={2}>Title 2</Title>
 * <Title is={3}>Title 3 (default)</Title>
 * <Title is={4}>Title 4</Title>
 * <Title is={5}>Title 5</Title>
 * <Title is={6}>Title 6</Title>
 * ```
 * @example Maintain the normal spacing between titles and subtitles.
 *
 * ```ts
 * <Title is={1} isSpaced>Title 1</Title>
 * <Subtitle is={3}>Subtitle 3</Subtitle>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/title/)
 */
export const Title: FC<PropsWithChildren<TitleProps>> = ({
  is,
  isSpaced,
  tag: Tag = "p",
  bulma,
  className,
  children,
  ...props
}) => (
  <Tag
    className={classnames<Bulma>(
      className as Bulma,
      "title",
      is ? `is-${is}` : undefined,
      {
        "is-spaced": isSpaced,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </Tag>
)
export type TitleProps = Omit<HTMLAttributes<HTMLElement>, "is"> &
  BulmaProp &
  Titlemodifiers &
  Partial<{
    isSpaced: boolean
  }>
type Titlemodifiers = Partial<{
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  is: 1 | 2 | 3 | 4 | 5 | 6
}>
