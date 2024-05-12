import { ClassnamesArg, classnames } from "@trunx/classnames"
import _BulmaClassname from "./bulmaClassNames.js"

export type BulmaClassname = _BulmaClassname

export const bulma = (...args: ClassnamesArg<BulmaClassname>[]) =>
  classnames<BulmaClassname>(...args)
