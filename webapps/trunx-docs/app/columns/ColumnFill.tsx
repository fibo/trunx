import { FC } from "react"
import { ColorModifierProp, bulma } from "trunx"

type Props = ColorModifierProp<"primary"> &
  Partial<{
    text: string
  }>

export const ColumnFill: FC<Props> = ({ color, text }) => {
  const isAuto = text === undefined
  const isPrimary = !isAuto && (color === undefined || color === "primary")

  return (
    <div
      className={bulma(["has-text-centered", "has-text-weight-bold", "p-2"], {
        "has-text-white": isPrimary,
        "has-background-primary": isPrimary,
        "has-background-grey-lighter": isAuto,
        "has-text-grey-dark": isAuto,
      })}
    >
      {isAuto ? "auto" : text}
    </div>
  )
}
