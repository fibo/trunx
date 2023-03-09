import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import { SizeModifierProp, sizeClassName } from "../modifiers/index.js"

export type SectionProps = HTMLAttributes<HTMLElement> & SizeModifierProp<"medium" | "large">

export const Section: FC<PropsWithChildren<SectionProps>> = ({ className, children, size, ...props }) => {
  const _class = classNames("section", sizeClassName(size), className)

  return (
    <section className={_class} {...props}>
      {children}
    </section>
  )
}
