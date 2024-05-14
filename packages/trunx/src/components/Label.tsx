import {FC, LabelHTMLAttributes, PropsWithChildren} from "react"
import {SizeArg, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type LabelProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, "size"> & SizeArg

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  className,
  size,
  ...props
}) => (
  <label
    className={classnames("label", sizeClass(size), className)}
    {...props}
  >
    {children}
  </label>
)
