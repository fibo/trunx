import { FC, HTMLAttributes, PropsWithChildren, useMemo } from "react"
import { classNames } from "../classNames.js"
import {
  BooleanModifierProps,
  ColorModifierProp,
  MainColor,
  ShadeColor,
  SizeModifierProp,
  colorClassName,
  modifier,
  sizeClassName,
} from "../modifiers/index.js"

export type TagProps = HTMLAttributes<HTMLSpanElement> &
  ColorModifierProp<MainColor | ShadeColor> &
  SizeModifierProp<"normal" | "medium" | "large"> &
  Pick<BooleanModifierProps, "isLight" | "isRounded">

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  children,
  className,
  color,
  isLight,
  isRounded,
  size,
}) => {
  const _className = useMemo(
    () =>
      classNames(
        "tag",
        colorClassName(color),
        sizeClassName(size),
        modifier({ isLight, isRounded }),
        className
      ),
    [className, color, isLight, isRounded, size]
  )
  return <span className={_className}>{children}</span>
}
