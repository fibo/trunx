import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  SizeModifierProp,
  sizeClassName,
  textAlignClassName,
} from "../modifiers/index.js"
import { TextAlignProp } from "./commonProps.js"

export type ContentProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> &
  SizeModifierProp &
  TextAlignProp

export const Content: FC<PropsWithChildren<ContentProps>> = ({
  children,
  hasText,
  size,
  ...props
}) => {
  return (
    <div
      className={classnames(
        "content",
        textAlignClassName(hasText),
        sizeClassName(size)
      )}
      {...props}
    >
      {children}
    </div>
  )
}
