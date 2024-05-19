import {
  FC,
  PropsWithChildren,
  HTMLAttributes,
  ProgressHTMLAttributes,
} from "react"
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

export const Progress: FC<
  PropsWithChildren<ProgressHTMLAttributes<HTMLProgressElement> & BulmaProp>
> = ({ bulma, className, children, ...props }) => (
  <progress
    className={classnames<string>(className, "progress", bulma)}
    {...props}
  >
    {children}
  </progress>
)
