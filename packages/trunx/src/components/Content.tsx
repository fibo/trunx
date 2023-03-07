import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import { SizeModifierProp, sizeClassName, textAlignClassName, TextAlignProp } from "../modifiers/index.js"

export type ContentProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> &
  SizeModifierProp &
  TextAlignProp

export const Content: FC<PropsWithChildren<ContentProps>> = ({ children, hasText, size, ...props }) => {
  const _class = classNames("content", textAlignClassName(hasText), sizeClassName(size))

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}
