import { ClassNamesArg, classNames } from "./classNames.js"
import _BulmaClassName from "./bulmaClassNames.js"

export type BulmaClassName = _BulmaClassName

export const bulma = (...args: ClassNamesArg<BulmaClassName>[]) =>
  classNames<BulmaClassName>(...args)
