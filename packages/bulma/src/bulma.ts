import { ClassnamesArg, classnames } from "@trunx/classnames"

import type BulmaClass from "./BulmaClass.js"

export type { BulmaClass }

export const bulma = (...args: ClassnamesArg<BulmaClass>[]) =>
  classnames<BulmaClass>(...args)
