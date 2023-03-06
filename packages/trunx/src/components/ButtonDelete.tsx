import { ButtonHTMLAttributes, FC, useMemo } from "react"
import { classNames } from "../classNames.js"
import {
  ColorModifierProp,
  MainColor,
  ShadeColor,
  OtherColor,
  SizeModifierProp,
  sizeClassName,
} from "../modifiers/index.js"

export type ButtonDeleteProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  ColorModifierProp<MainColor | ShadeColor | OtherColor> &
  SizeModifierProp<"small" | "medium" | "large">

export const ButtonDelete: FC<ButtonDeleteProps> = ({ size, ...props }) => {
  const _className = useMemo(() => classNames("delete", sizeClassName(size)), [size])

  return <button className={_className} {...props} />
}
