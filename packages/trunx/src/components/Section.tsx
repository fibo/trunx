import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import { SizeModifierProp, sizeClassName } from "../modifiers/index.js"

export type SectionProps = HTMLAttributes<HTMLElement> &
  SizeModifierProp<"medium" | "large">

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
  size,
  ...props
}) => {
  return (
    <section
      className={classnames("section", sizeClassName(size), className)}
      {...props}
    >
      {children}
    </section>
  )
}
