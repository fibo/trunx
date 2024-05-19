import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { ClassnamesArg, classnames } from "./classnames.js"
import { ClassNames as Bulma } from "./bulma.js"

type BulmaProp = {
  bulma?: ClassnamesArg<Bulma>
}

export const Div: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement> & BulmaProp>
> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<string>(className, bulma)} {...props}>
    {children}
  </div>
)
