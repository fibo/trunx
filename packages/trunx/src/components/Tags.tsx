import {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react"
import {
  BoolClassArg,
  ColorArg,
  MainColor,
  ShadeColor,
  SizeArg,
  boolClass,
  colorClass,
  pluralSizeClass,
  sizeClass,
} from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type TagProps = HTMLAttributes<HTMLSpanElement> &
  ColorArg<MainColor | ShadeColor> &
  SizeArg<"normal" | "medium" | "large"> &
  Pick<BoolClassArg, "isLight" | "isRounded">

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  children,
  className,
  color,
  isLight,
  isRounded,
  size,
}) => (
  <span
    className={classnames(
      "tag",
      colorClass(color),
      sizeClass(size),
      boolClass({ isLight, isRounded }),
      className
    )}
  >
    {children}
  </span>
)

export type TagsProps = HTMLAttributes<HTMLDivElement> &
  SizeArg<"small" | "medium" | "large"> &
  Pick<BoolClassArg, "hasAddons">

export const Tags: FC<PropsWithChildren<TagsProps>> = ({
  children,
  className,
  hasAddons,
  size,
  ...props
}) => (
  <div
    className={classnames(
      "tags",
      pluralSizeClass(size),
      boolClass({ hasAddons }),
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export type TagDeleteProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const TagDelete: FC<TagDeleteProps> = (props) => (
  <a className="tag is-delete" {...props} />
)
