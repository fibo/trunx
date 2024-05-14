import {FC, InputHTMLAttributes, PropsWithChildren} from "react"

export type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type"
>

export const Radio: FC<PropsWithChildren<RadioProps>> = ({
  children,
  ...props
}) => (
  <label className="radio">
    <input type="radio" {...props} />

    {children}
  </label>
)
