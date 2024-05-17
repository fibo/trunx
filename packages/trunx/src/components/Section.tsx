import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { SizeArg, sizeClass } from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type SectionProps = HTMLAttributes<HTMLElement> &
  SizeArg<"medium" | "large">

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
  size,
  ...props
}) => (
  <section
    className={classnames("section", sizeClass(size), className)}
    {...props}
  >
    {children}
  </section>
)
