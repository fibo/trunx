import {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
} from "react"
import {MainColor, ShadeColor, colorClass, pluralSizeClass, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {ColorProp, SizeProp} from "./commonProps.js"
import {
  BooleanModifierProps,
  modifier,
} from "../modifiers/index.js"

export type TagProps = HTMLAttributes<HTMLSpanElement> &
  ColorProp<MainColor | ShadeColor> &
  SizeProp<"normal" | "medium" | "large"> &
  Pick<BooleanModifierProps, "isLight" | "isRounded">

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  children,
  className,
  color,
  isLight,
  isRounded,
  size,
}) => {
  return (
    <span
      className={classnames(
        "tag",
        colorClass(color),
        sizeClass(size),
        modifier({isLight, isRounded}),
        className
      )}
    >
      {children}
    </span>
  )
}

export type TagsProps = HTMLAttributes<HTMLDivElement> &
  SizeProp<"small" | "medium" | "large"> &
  Pick<BooleanModifierProps, "hasAddons">

export const Tags: FC<PropsWithChildren<TagsProps>> = ({
  children,
  className,
  hasAddons,
  size,
  ...props
}) => {
  return (
    <div
      className={classnames(
        "tags",
        pluralSizeClass(size),
        modifier({hasAddons}),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export type TagDeleteProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const TagDelete: FC<TagDeleteProps> = (props) => (
  <a className="tag is-delete" {...props} />
)
