import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  SizeModifierProp,
  sizeClassName,
  textAlignClassName,
  TextAlignProp,
} from "../modifiers/index.js"

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
