import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {SizeProp} from "./commonProps.js"

export type SectionProps = HTMLAttributes<HTMLElement> &
  SizeProp<"medium" | "large">

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
  size,
  ...props
}) => {
  return (
    <section
      className={classnames("section", sizeClass(size), className)}
      {...props}
    >
      {children}
    </section>
  )
}
