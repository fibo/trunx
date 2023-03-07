import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  pluralSizeClassName,
} from "../modifiers/index.js"

export type TagsProps = HTMLAttributes<HTMLDivElement> &
  SizeModifierProp<"small" | "medium" | "large"> &
  Pick<BooleanModifierProps, "hasAddons">

export const Tags: FC<PropsWithChildren<TagsProps>> = ({
  children,
  className,
  hasAddons,
  size,
  ...props
}) => {
  const _class = classNames("tags", pluralSizeClassName(size), modifier({ hasAddons }), className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
