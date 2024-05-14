import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {SizeArg, TextAlignArg, sizeClass, textAlignClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {ContainerClassArg} from "./Container.js"

export type ContentClassArg = SizeArg & TextAlignArg

export type ContentProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & ContainerClassArg

export const Content: FC<PropsWithChildren<ContentProps>> = ({
  children,
  hasText,
  size,
  ...props
}) => (
  <div
    className={classnames(
      "content",
      textAlignClass(hasText),
      sizeClass(size)
    )}
    {...props}
  >
    {children}
  </div>
)
